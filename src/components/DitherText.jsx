import { useEffect, useCallback } from "react";
import {
  useDitherCanvas,
  samplePixels,
  createDotSystem,
} from "./dither/useDitherCanvas";

function sampleTextDots(text, font, color, width, height, scale, dpr) {
  const offscreen = document.createElement("canvas");
  offscreen.width = width * dpr;
  offscreen.height = height * dpr;
  const ctx = offscreen.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = "top";

  const metrics = ctx.measureText(text);
  const textHeight =
    metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  const x = (width - metrics.width) / 2;
  const y = (height - textHeight) / 2;
  ctx.fillText(text, x, y);

  const imageData = ctx.getImageData(0, 0, offscreen.width, offscreen.height);
  const step = Math.max(1, Math.round(scale * dpr));
  return samplePixels(imageData, offscreen.width, offscreen.height, step, dpr);
}

const DitherText = ({
  text,
  className = "",
  color = "#915eff",
  dotScale = 2,
}) => {
  const { canvasRef, setDots, handlePointerMove, handlePointerLeave } =
    useDitherCanvas(color, dotScale);

  const rebuild = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    const computed = getComputedStyle(canvas);
    const fontSize = parseFloat(computed.fontSize) || 40;
    const fontWeight = computed.fontWeight || "900";
    const fontFamily = computed.fontFamily || "Poppins, sans-serif";
    const font = `${fontWeight} ${fontSize}px ${fontFamily}`;

    const positions = sampleTextDots(text, font, color, w, h, dotScale, dpr);
    setDots(createDotSystem(positions, dotScale));
  }, [text, color, dotScale, canvasRef, setDots]);

  useEffect(() => {
    rebuild();

    const ro = new ResizeObserver(rebuild);
    if (canvasRef.current) ro.observe(canvasRef.current);

    return () => ro.disconnect();
  }, [rebuild, canvasRef]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="invisible">{text}</span>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{
          fontSize: "inherit",
          fontWeight: "inherit",
          fontFamily: "inherit",
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      />
    </span>
  );
};

export default DitherText;
