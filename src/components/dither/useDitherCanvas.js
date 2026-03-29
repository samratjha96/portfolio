import { useRef, useEffect, useCallback } from "react";

const MOUSE_RADIUS = 100;
const MOUSE_FORCE_PEAK = 40;
const EASING = 0.12;
const SNAP_THRESHOLD = 0.01;

export function createDotSystem(positions, dotSize) {
  const count = positions.length / 2;
  const baseX = new Float32Array(count);
  const baseY = new Float32Array(count);
  const dx = new Float32Array(count);
  const dy = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    baseX[i] = positions[i * 2];
    baseY[i] = positions[i * 2 + 1];
  }

  return { count, baseX, baseY, dx, dy, dotSize, colors: null };
}

export function createColoredDotSystem(positions, colors, dotSize) {
  const count = positions.length / 2;
  const baseX = new Float32Array(count);
  const baseY = new Float32Array(count);
  const dx = new Float32Array(count);
  const dy = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    baseX[i] = positions[i * 2];
    baseY[i] = positions[i * 2 + 1];
  }

  return { count, baseX, baseY, dx, dy, dotSize, colors };
}

export function updateDots(dots, mouseX, mouseY, mouseActive) {
  let hasMotion = false;
  const { count, baseX, baseY, dx, dy } = dots;

  for (let i = 0; i < count; i++) {
    let targetDx = 0;
    let targetDy = 0;

    if (mouseActive) {
      const px = baseX[i] + dx[i];
      const py = baseY[i] + dy[i];
      const distX = px - mouseX;
      const distY = py - mouseY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < MOUSE_RADIUS && dist > 0) {
        const falloff = 1 - dist / MOUSE_RADIUS;
        const force = falloff * falloff * falloff * MOUSE_FORCE_PEAK;
        targetDx = (distX / dist) * force;
        targetDy = (distY / dist) * force;
      }
    }

    dx[i] += (targetDx - dx[i]) * EASING;
    dy[i] += (targetDy - dy[i]) * EASING;

    if (Math.abs(dx[i]) < SNAP_THRESHOLD && Math.abs(dy[i]) < SNAP_THRESHOLD) {
      dx[i] = 0;
      dy[i] = 0;
    } else {
      hasMotion = true;
    }
  }

  return hasMotion || mouseActive;
}

export function renderDots(ctx, dots, color, dpr) {
  const { count, baseX, baseY, dx, dy, dotSize, colors } = dots;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const size = dotSize * dpr;
  const pad = 0.25 * dpr;

  if (colors) {
    // Per-dot colors — bucket by color string to minimize fillStyle changes
    const buckets = new Map();
    for (let i = 0; i < count; i++) {
      const key = colors[i];
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(i);
    }

    for (const [colorStr, indices] of buckets) {
      ctx.fillStyle = colorStr;
      for (const i of indices) {
        const x = (baseX[i] + dx[i]) * dpr;
        const y = (baseY[i] + dy[i]) * dpr;
        ctx.fillRect(x - pad, y - pad, size + pad, size + pad);
      }
    }
  } else {
    ctx.fillStyle = color;
    for (let i = 0; i < count; i++) {
      const x = (baseX[i] + dx[i]) * dpr;
      const y = (baseY[i] + dy[i]) * dpr;
      ctx.fillRect(x - pad, y - pad, size + pad, size + pad);
    }
  }
}

/**
 * Hook that wires up the animation loop and mouse interaction for a dither canvas.
 */
export function useDitherCanvas(color, dotScale) {
  const canvasRef = useRef(null);
  const dotsRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const rafRef = useRef(null);
  const runningRef = useRef(false);

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dotsRef.current) return;

    const ctx = canvas.getContext("2d");
    const { x, y, active } = mouseRef.current;
    const needsMore = updateDots(dotsRef.current, x, y, active);
    renderDots(ctx, dotsRef.current, color, window.devicePixelRatio || 1);

    if (needsMore) {
      rafRef.current = requestAnimationFrame(loop);
    } else {
      runningRef.current = false;
    }
  }, [color]);

  const startLoop = useCallback(() => {
    if (!runningRef.current) {
      runningRef.current = true;
      rafRef.current = requestAnimationFrame(loop);
    }
  }, [loop]);

  const setDots = useCallback(
    (dotSystem) => {
      dotsRef.current = dotSystem;
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        renderDots(ctx, dotsRef.current, color, window.devicePixelRatio || 1);
      }
    },
    [color],
  );

  const handlePointerMove = useCallback(
    (e) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
      startLoop();
    },
    [startLoop],
  );

  const handlePointerLeave = useCallback(() => {
    mouseRef.current.active = false;
    startLoop();
  }, [startLoop]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { canvasRef, setDots, handlePointerMove, handlePointerLeave };
}

/**
 * Sample pixel positions from image data (single color — alpha threshold).
 */
export function samplePixels(imageData, width, height, step, dpr) {
  const pixels = imageData.data;
  const dots = [];

  for (let py = 0; py < height; py += step) {
    for (let px = 0; px < width; px += step) {
      const i = (py * width + px) * 4;
      if (pixels[i + 3] > 128) {
        dots.push(px / dpr, py / dpr);
      }
    }
  }

  return new Float32Array(dots);
}

/**
 * Sample pixel positions AND colors from image data.
 * Returns { positions: Float32Array, colors: string[] }
 */
export function samplePixelsColored(imageData, width, height, step, dpr) {
  const pixels = imageData.data;
  const positions = [];
  const colors = [];

  for (let py = 0; py < height; py += step) {
    for (let px = 0; px < width; px += step) {
      const i = (py * width + px) * 4;
      const a = pixels[i + 3];
      if (a > 30) {
        positions.push(px / dpr, py / dpr);
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        colors.push(`rgba(${r},${g},${b},${(a / 255).toFixed(2)})`);
      }
    }
  }

  return { positions: new Float32Array(positions), colors };
}
