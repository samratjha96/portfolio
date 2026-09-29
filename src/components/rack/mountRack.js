// A 42U server rack drawn with raw WebGL2. Each project owns one server; hovering a server or its
// project card lights it, and selecting a server scrolls to the card. Decorative only: the project
// cards carry the content.

// Rack contents from U42 down: [height in U, kind, project index]. Project servers are spaced at least
// two units apart so their links stay separate hit targets on a phone.
const CONTENTS = [
  [1, "switch"],
  [1, "blank"],
  [1, "s1"],
  [2, "s2", 0],
  [1, "s1"],
  [1, "s1"],
  [1, "s1", 1],
  [2, "s2"],
  [1, "s1"],
  [1, "s1", 2],
  [1, "s1"],
  [2, "s2"],
  [1, "blank"],
  [2, "s2", 3],
  [1, "s1"],
  [1, "s1"],
  [1, "s1", 4],
  [2, "s2"],
  [1, "s1"],
  [2, "s2", 5],
  [1, "s1"],
  [1, "blank"],
  [1, "s1", 6],
  [1, "s1"],
  [1, "s1"],
  [2, "s2"],
  [1, "s1", 7],
  [1, "s1"],
  [1, "s1"],
  [2, "s2", 8],
  [1, "s1"],
  [1, "blank"],
  [2, "power"],
];
const SLOTS = 9;

// Rack geometry in meters, centered on the origin, front at +z. A 42U rack: 600 wide, 1000 deep, 2000 tall.
const U = 0.04445,
  BOT = 0.063,
  XO = 0.3,
  XI = 0.2415,
  XP = 0.2405,
  XB = 0.217,
  ZF = 0.5,
  ZE = 0.47,
  DEPTH = 0.5;
const K = {
  panel: 0,
  stileL: 1,
  stileR: 2,
  frame: 3,
  top: 4,
  inner: 5,
  body: 6,
  s1: 10,
  s2: 11,
  blank: 12,
  switch: 13,
  power: 14,
};
const Z0 = -DEPTH;

// Camera: a fixed 3/4 view from slightly above. The rack sways over a narrow yaw range, never far
// enough to show its back, and the pointer adds a tilt.
const YAW = -0.34,
  SWAY = 0.07,
  PERIOD = 46,
  CAM_PITCH = 0.16,
  DIST = 7.5,
  FOCAL = 5.2;
const TILT_X = 0.16,
  TILT_Y = 0.07;

const mul = (a, b) => {
  const c = new Array(16).fill(0);
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++)
      for (let k = 0; k < 4; k++) c[j * 4 + i] += a[k * 4 + i] * b[j * 4 + k];
  return c;
};
const rotX = (a) => {
  const c = Math.cos(a),
    s = Math.sin(a);
  return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
};
const rotY = (a) => {
  const c = Math.cos(a),
    s = Math.sin(a);
  return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
};
const PROJ = mul(
  [FOCAL, 0, 0, 0, 0, FOCAL, 0, 0, 0, 0, -1.02, -1, 0, 0, -0.2, 0],
  mul([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -DIST, 1], rotX(CAM_PITCH))
);
const apply = (m, p) =>
  [0, 1, 2, 3].map((i) => m[i] * p[0] + m[4 + i] * p[1] + m[8 + i] * p[2] + m[12 + i]);
const model = (yaw, pitch) => mul(rotX(pitch), rotY(yaw));

// Mesh: every face is a quad with its own metric UV, so the shader can draw vents, ports and U numbers.
const verts = [],
  quads = [],
  sleds = [];
function quad(o, du, dv, w, h, kind, unit, mark) {
  const n = [
    du[1] * dv[2] - du[2] * dv[1],
    du[2] * dv[0] - du[0] * dv[2],
    du[0] * dv[1] - du[1] * dv[0],
  ];
  const at = (a, b) => [
    o[0] + du[0] * a + dv[0] * b,
    o[1] + du[1] * a + dv[1] * b,
    o[2] + du[2] * a + dv[2] * b,
  ];
  const pts = [at(0, 0), at(w, 0), at(w, h), at(0, h)],
    uv = [
      [0, 0],
      [w, 0],
      [w, h],
      [0, h],
    ];
  for (const k of [0, 1, 2, 0, 2, 3]) verts.push(...pts[k], ...n, ...uv[k], w, h, kind, unit, mark);
  quads.push({ pts, n, kind, mark });
}
function box(x0, x1, y0, y1, z0, z1, f, unit = -1, mark = -1) {
  const k = (s) => f[s] ?? f.all;
  quad([x0, y0, z1], [1, 0, 0], [0, 1, 0], x1 - x0, y1 - y0, k("front"), unit, mark);
  quad([x1, y0, z1], [0, 0, -1], [0, 1, 0], z1 - z0, y1 - y0, k("right"), unit, mark);
  quad([x0, y0, z0], [0, 0, 1], [0, 1, 0], z1 - z0, y1 - y0, k("left"), unit, mark);
  quad([x0, y1, z1], [1, 0, 0], [0, 0, -1], x1 - x0, z1 - z0, k("top"), unit, mark);
  quad([x0, y0, z0], [1, 0, 0], [0, 0, 1], x1 - x0, z1 - z0, k("bottom"), unit, mark);
}
box(-XO, -XI, -1, 1, Z0, ZF, { all: K.panel, front: K.stileL, right: K.inner, top: K.top });
box(XI, XO, -1, 1, Z0, ZF, { all: K.panel, front: K.stileR, left: K.inner, top: K.top });
// Header and plinth side faces sit inside the stiles; tagging them as body keeps them out of the SVG poster.
box(-XI, XI, 1 - (2 - BOT - 42 * U), 1, Z0, ZF, {
  all: K.inner,
  left: K.body,
  right: K.body,
  front: K.frame,
  top: K.top,
});
box(-XI, XI, -1, -1 + BOT, Z0, ZF, { all: K.inner, left: K.body, right: K.body, front: K.frame });
{
  let cur = 42;
  CONTENTS.forEach(([n, kind, mark = -1], i) => {
    const y1 = -1 + BOT + cur * U,
      y0 = y1 - n * U;
    cur -= n;
    box(
      -XP,
      XP,
      y0 + 0.0004,
      y1 - 0.0004,
      ZE - 0.004,
      ZE,
      { all: K.body, front: K[kind] },
      i,
      mark
    );
    box(-XB, XB, y0 + 0.001, y1 - 0.001, ZE - 0.72, ZE - 0.004, { all: K.body }, i, mark);
    if (mark >= 0) sleds[mark] = { y0, y1 };
  });
}

// Flat shading shared by the SVG poster; the shader uses the same light.
const LIGHT = (() => {
  const v = [-0.45, 0.55, 0.7],
    l = Math.hypot(...v);
  return v.map((c) => c / l);
})();
const FILL = (() => {
  const v = [0.9, 0.2, 0.2],
    l = Math.hypot(...v);
  return v.map((c) => c / l);
})();
const FLAT = {
  [K.panel]: [19, 19, 36],
  [K.stileL]: [18, 18, 34],
  [K.stileR]: [18, 18, 34],
  [K.frame]: [18, 18, 34],
  [K.top]: [19, 19, 36],
  [K.inner]: [6, 7, 13],
  [K.s1]: [20, 21, 37],
  [K.s2]: [22, 23, 40],
  [K.blank]: [18, 19, 33],
  [K.switch]: [21, 22, 38],
  [K.power]: [21, 22, 38],
};

const VS = `#version 300 es
in vec3 aPos;
in vec3 aNrm;
in vec2 aUV;
in vec2 aSize;
in vec3 aMeta;
uniform mat4 uMVP;
uniform mat4 uM;
uniform float uSlide[${SLOTS}];
out vec3 vN;
out vec2 vUV;
out float vY;
flat out vec2 vSize;
flat out vec3 vMeta;
void main() {
  vec3 p = aPos;
  int mk = int(aMeta.z + 0.5);
  if (aMeta.z > -0.5) p.z += uSlide[mk];
  vN = mat3(uM) * aNrm;
  vUV = aUV; vSize = aSize; vMeta = aMeta; vY = aPos.y;
  gl_Position = uMVP * vec4(p, 1.0);
}`;

// 3x5 digits for the U numbers, one bit per cell, top row in the high bits.
const GLYPHS = [
  "111101101101111",
  "010110010010111",
  "111001111100111",
  "111001111001111",
  "101101111001001",
  "111100111001111",
  "111100111101111",
  "111001001001001",
  "111101111101111",
  "111101111001111",
].map((s) => parseInt(s, 2));

const FS = `#version 300 es
precision highp float;
in vec3 vN;
in vec2 vUV;
in float vY;
flat in vec2 vSize;
flat in vec3 vMeta;
uniform float uGlow[${SLOTS}];
uniform sampler2D uBrand;
uniform vec3 uL;
out vec4 o;
const vec3 VIOLET = vec3(0.57, 0.37, 1.0);
const float U = ${U}, BOT = ${BOT};
const int FONT[10] = int[10](${GLYPHS.join(", ")});
float px;

float sdBox(vec2 p, vec2 c, vec2 hs) { vec2 d = abs(p - c) - hs; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float fill(float d) { return 1.0 - smoothstep(-px * 0.5, px * 0.5, d); }
float rect(vec2 p, vec2 a, vec2 b) { return fill(sdBox(p, (a + b) * 0.5, (b - a) * 0.5)); }
float disc(vec2 p, vec2 c, float r) { return fill(length(p - c) - r); }
// Fades a pattern out once its period drops below a couple of pixels, instead of letting it alias.
float resolve(float period) { return smoothstep(0.45, 0.9, period / px / 2.2); }
float h11(float n) { return fract(sin(n * 91.345) * 47453.21); }

// Perforated steel: a hex grid of round holes, averaged to a flat tone when too fine to resolve.
vec3 perf(vec2 p, float pitch, vec3 steel, vec3 hole) {
  vec2 g = p / vec2(pitch, pitch * 0.866);
  g.x += 0.5 * mod(floor(g.y), 2.0);
  vec2 f = (fract(g) - 0.5) * vec2(pitch, pitch * 0.866);
  vec3 c = mix(steel, hole, disc(f, vec2(0.0), pitch * 0.32));
  return mix(mix(steel, hole, 0.4), c, resolve(pitch));
}
float digit(int d, vec2 p) {
  if (p.x < 0.0 || p.y < 0.0 || p.x >= 3.0 || p.y >= 5.0) return 0.0;
  ivec2 c = ivec2(p);
  return float((FONT[d] >> (c.y * 3 + 2 - c.x)) & 1);
}

void main() {
  vec2 uv = vUV, sz = vSize;
  px = length(fwidth(uv)) * 0.75;
  int kind = int(vMeta.x + 0.5);
  float unit = vMeta.y;
  int mk = int(vMeta.z + 0.5);
  bool marked = vMeta.z > -0.5;
  float e = min(min(uv.x, sz.x - uv.x), min(uv.y, sz.y - uv.y));

  vec3 col = vec3(0.07, 0.066, 0.14);
  float led = 0.0;
  vec3 ledCol = vec3(0.3, 0.32, 0.52);
  vec3 plate = vec3(0.085, 0.09, 0.155);
  vec3 dark = vec3(0.024, 0.026, 0.05);

  if (kind == 0) {
    // Side panel: two stacked panels with an inset seam, and the brand texture.
    col = vec3(0.075, 0.076, 0.14);
    float half_ = sz.y * 0.5;
    float ee = min(min(uv.x, sz.x - uv.x), min(abs(uv.y - half_), min(uv.y, sz.y - uv.y)));
    col *= 1.0 - 0.3 * (1.0 - smoothstep(0.0, px * 1.2, abs(ee - 0.018)));
    col *= 1.0 - 0.45 * (1.0 - smoothstep(0.0, px * 1.2, abs(uv.y - half_)));
    vec4 b = texture(uBrand, vec2(uv.x / sz.x, 1.0 - uv.y / sz.y));
    col = mix(col, b.rgb, b.a);
  } else if (kind == 1 || kind == 2) {
    // Front stile: a punched rail on the inner edge, U ticks, and small U numbers.
    col = vec3(0.07, 0.072, 0.135);
    float q = kind == 1 ? sz.x - uv.x : uv.x;
    float yU = uv.y - BOT;
    if (yU > 0.0 && yU < 42.0 * U) {
      float n = floor(yU / U), f = yU - n * U;
      if (q < 0.016) {
        col = vec3(0.052, 0.054, 0.1);
        float holes = 0.0;
        for (int i = 0; i < 3; i++) holes += rect(vec2(q, f), vec2(0.0035, (float[3](0.00635, 0.02223, 0.0381))[i] - 0.00475), vec2(0.0125, (float[3](0.00635, 0.02223, 0.0381))[i] + 0.00475));
        col = mix(col, dark * 0.7, holes * resolve(0.012));
      }
      float tick = (1.0 - smoothstep(0.0, px, abs(f - px * 0.5))) * step(q, 0.024);
      col = mix(col, vec3(0.2, 0.2, 0.32), tick * 0.5 * resolve(U * 0.5));
      float cs = 0.0052, uStart = kind == 1 ? (sz.x - 0.016 - 7.0 * cs) * 0.5 : 0.016 + (sz.x - 0.016 - 7.0 * cs) * 0.5;
      vec2 tp = (vec2(uv.x - uStart, f - (U - 5.0 * cs) * 0.5)) / cs;
      int num = int(n) + 1;
      float g = num < 10 ? digit(num, tp - vec2(2.0, 0.0)) : digit(num / 10, tp) + digit(num - (num / 10) * 10, tp - vec2(4.0, 0.0));
      col = mix(col, vec3(0.36, 0.36, 0.52), g * 0.32 * resolve(cs * 2.4) * float(kind == 1));
    }
  } else if (kind == 3) {
    col = vec3(0.07, 0.072, 0.135);
  } else if (kind == 4) {
    col = vec3(0.075, 0.076, 0.14);
    col = mix(col, dark, rect(uv, vec2(sz.x * 0.3, sz.y * 0.55), vec2(sz.x * 0.7, sz.y * 0.8)) * 0.6);
  } else if (kind == 5) {
    col = dark;
  } else if (kind == 6) {
    col = vec3(0.06, 0.056, 0.12);
  } else {
    // Front panels. Ears with a screw at each end.
    col = plate;
    float ear = 0.019;
    if (uv.x < ear || uv.x > sz.x - ear) {
      col = plate * 0.86;
      float sx = uv.x < ear ? ear * 0.5 : sz.x - ear * 0.5;
      col = mix(col, plate * 1.5, disc(uv, vec2(sx, sz.y * 0.5), 0.0028) * resolve(0.008));
    }
    if (kind == 10) {
      col = mix(col, plate * 1.45, rect(uv, vec2(0.023, 0.008), vec2(0.03, sz.y - 0.008)));
      if (uv.x > 0.04 && uv.x < sz.x - 0.105 && uv.y > 0.008 && uv.y < sz.y - 0.008) col = perf(uv, 0.0052, plate * 0.9, dark * 0.8);
      col = mix(col, plate * 1.25, rect(uv, vec2(sz.x - 0.094, sz.y * 0.34), vec2(sz.x - 0.058, sz.y * 0.66)));
      led = disc(uv, vec2(sz.x - 0.036, sz.y * 0.5), 0.0034);
    } else if (kind == 11) {
      col = mix(col, plate * 1.45, rect(uv, vec2(0.023, 0.012), vec2(0.03, sz.y - 0.012)));
      float a = 0.04, b = sz.x - 0.08, bw = (b - a) / 12.0;
      if (uv.x > a && uv.x < b && uv.y > 0.006 && uv.y < sz.y - 0.006) {
        float i = floor((uv.x - a) / bw), bx = uv.x - a - i * bw;
        vec2 p = vec2(bx, uv.y);
        float inBay = rect(p, vec2(0.0012, 0.007), vec2(bw - 0.0012, sz.y - 0.007));
        vec3 bay = perf(p, 0.0045, plate * 1.05, dark);
        bay = mix(bay, plate * 1.05, step(uv.y, sz.y * 0.3));
        bay = mix(bay, plate * 1.55, rect(p, vec2(bw * 0.2, 0.011), vec2(bw * 0.8, 0.016)));
        col = mix(dark, bay, mix(1.0, inBay, resolve(0.004)));
      }
      col = mix(col, plate * 1.25, rect(uv, vec2(sz.x - 0.068, 0.012), vec2(sz.x - 0.05, sz.y - 0.03)));
      led = disc(uv, vec2(sz.x - 0.036, sz.y - 0.016), 0.0034);
    } else if (kind == 12) {
      col = plate * 0.84;
      float lines = 0.0;
      for (float k = 1.0; k < 3.0; k += 1.0) lines += 1.0 - smoothstep(0.0, px, abs(uv.y - sz.y * k / 3.0));
      col *= 1.0 - 0.35 * lines * step(0.03, uv.x) * step(uv.x, sz.x - 0.03);
    } else if (kind == 13) {
      // Top-of-rack switch: four groups of twelve ports in two rows, four uplinks, one status light.
      col = plate * 0.95;
      float pitch = 0.0118, gx = uv.x - 0.042;
      float grp = floor(gx / (6.0 * pitch + 0.006));
      float lx = gx - grp * (6.0 * pitch + 0.006);
      if (gx > 0.0 && grp < 4.0 && lx < 6.0 * pitch) {
        float c = lx - floor(lx / pitch) * pitch;
        float port = rect(vec2(c, uv.y), vec2(0.0013, sz.y * 0.5 + 0.0022), vec2(pitch - 0.0013, sz.y * 0.5 + 0.0112))
                   + rect(vec2(c, uv.y), vec2(0.0013, sz.y * 0.5 - 0.0112), vec2(pitch - 0.0013, sz.y * 0.5 - 0.0022));
        col = mix(col, dark * 0.6, port * resolve(0.006));
        col = mix(col, dark, 0.35 * (1.0 - resolve(0.006)));
      }
      for (float k = 0.0; k < 4.0; k += 1.0) {
        float x0 = 0.358 + k * 0.018;
        col = mix(col, dark * 0.6, rect(uv, vec2(x0, sz.y * 0.5 - 0.006), vec2(x0 + 0.014, sz.y * 0.5 + 0.006)));
      }
      led = disc(uv, vec2(sz.x - 0.03, sz.y * 0.5), 0.0034);
    } else if (kind == 14) {
      // Power shelf: six supplies, each with a fan grille, a handle and a status light.
      float a = 0.028, mw = (sz.x - 2.0 * a) / 6.0;
      if (uv.x > a && uv.x < sz.x - a) {
        float i = floor((uv.x - a) / mw);
        vec2 p = vec2(uv.x - a - i * mw, uv.y);
        vec3 m = plate * 0.95;
        float r = length(p - vec2(mw * 0.4, sz.y * 0.52));
        m = mix(m, dark, fill(r - 0.021) * 0.8);
        m = mix(m, plate * 1.2, (1.0 - smoothstep(0.0, px * 1.2, abs(r - 0.013))) * resolve(0.01));
        m = mix(m, plate * 1.2, disc(p, vec2(mw * 0.4, sz.y * 0.52), 0.005));
        m = mix(m, plate * 1.5, rect(p, vec2(mw * 0.78, 0.018), vec2(mw * 0.86, sz.y - 0.018)));
        col = mix(dark, m, rect(p, vec2(0.0015, 0.004), vec2(mw - 0.0015, sz.y - 0.004)));
        led = max(led, disc(p, vec2(mw * 0.82, sz.y - 0.009), 0.0028));
      }
    }
  }

  // Seams between panels read as fine dark lines.
  col *= mix(0.5, 1.0, smoothstep(0.0, px * 1.2, e));

  vec3 n = normalize(vN);
  float dif = max(dot(n, uL), 0.0);
  // A weak fill from the right keeps the side panel from sinking into the page background.
  float fillL = max(dot(n, normalize(vec3(0.9, 0.2, 0.2))), 0.0);
  col *= (0.55 + 0.75 * dif + 0.35 * fillL) * (0.84 + 0.24 * smoothstep(-1.0, 1.0, vY));

  float g = marked ? uGlow[mk] : 0.0;
  if (marked && kind >= 10) {
    col = mix(col, VIOLET * 0.62, 0.42 + 0.3 * g);
    col = mix(col, vec3(0.86, 0.8, 1.0), (1.0 - smoothstep(px * 0.5, px * 1.6, e)) * g * 0.85);
    ledCol = VIOLET * (1.25 + 0.5 * g);
  } else if (kind >= 10) {
    // Unmarked lights sit very low, and only about half of them are on.
    ledCol *= step(0.45, h11(unit + 3.0));
  }
  col = mix(col, ledCol, led);
  o = vec4(col, 1.0);
}`;

// Generic side branding: a violet stripe, a wordmark and an asset tag.
function paintBrand() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 1024;
  const g = c.getContext("2d");
  g.fillStyle = "rgba(145, 94, 255, 0.85)";
  g.fillRect(34, 56, 7, 912);
  g.fillStyle = "rgba(205, 200, 240, 0.2)";
  g.font = "600 132px Poppins, Arial, sans-serif";
  g.fillText("R42", 66, 190);
  g.font = "600 26px Poppins, Arial, sans-serif";
  g.letterSpacing = "9px";
  g.fillStyle = "rgba(205, 200, 240, 0.26)";
  g.fillText("COMPUTE RACK", 70, 240);
  g.fillStyle = "rgba(210, 205, 235, 0.3)";
  g.fillRect(66, 836, 190, 72);
  g.fillStyle = "rgba(8, 9, 20, 0.75)";
  for (let x = 78, i = 0; x < 244; i++) {
    const w = [2, 4, 2, 6, 3, 2, 5][i % 7];
    if (i % 2 === 0) g.fillRect(x, 848, w, 40);
    x += w + 2;
  }
  return c;
}

// Mounts the rack into `host`. `names` are the project names in card order; the card for project i
// must carry data-rack-index={i} and id `project-${i + 1}`. Returns a teardown.
export function mountRack(host, names) {
  const ac = new AbortController(),
    on = { signal: ac.signal, passive: true };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = Math.min(names.length, SLOTS);
  let dead = false;
  const observers = [];

  const view = { t: 0, tx: 0, ty: 0, gx: 0, gy: 0 };
  const slide = new Float32Array(SLOTS),
    glow = new Float32Array(SLOTS);
  const state = {
    hot: null,
    pulled: null,
    near: false,
    hold: false,
    dirty: false,
    ready: false,
    kick: () => {},
    resize: () => {},
  };

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  const list = document.createElement("ul");
  list.className = "rack-sleds";
  list.setAttribute("aria-label", "Projects in the rack");
  host.append(svg, list);

  // Fit: scale and center the rack in the box over every pose it can reach, so it never clips or jumps.
  let W = 0,
    Hh = 0,
    FIT = null;
  function measure() {
    const b = host.getBoundingClientRect();
    W = b.width;
    Hh = b.height;
    let x0 = Infinity,
      x1 = -Infinity,
      y0 = Infinity,
      y1 = -Infinity;
    for (const yaw of [YAW - SWAY - TILT_X, YAW + SWAY + TILT_X])
      for (const pitch of [-TILT_Y, TILT_Y]) {
        const m = mul(PROJ, model(yaw, pitch));
        for (const x of [-XO, XO])
          for (const y of [-1, 1])
            for (const z of [Z0, ZF + 0.08]) {
              const c = apply(m, [x, y, z]);
              x0 = Math.min(x0, c[0] / c[3]);
              x1 = Math.max(x1, c[0] / c[3]);
              y0 = Math.min(y0, c[1] / c[3]);
              y1 = Math.max(y1, c[1] / c[3]);
            }
      }
    const k = Math.min((W * 0.94) / (x1 - x0), (Hh * 0.96) / (y1 - y0));
    const sx = (2 * k) / W,
      sy = (2 * k) / Hh,
      cx = (x0 + x1) / 2,
      cy = (y0 + y1) / 2;
    FIT = [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, 1, 0, -sx * cx, -sy * cy, 0, 1];
  }
  function pose() {
    const yaw = YAW + (reduce ? 0 : SWAY * Math.sin((view.t / PERIOD) * 2 * Math.PI)) + view.tx;
    const m = model(yaw, view.ty);
    return { m, mvp: mul(FIT, mul(PROJ, m)) };
  }
  const toPx = (mvp, p) => {
    const c = apply(mvp, p);
    return [(c[0] / c[3] + 1) * 0.5 * W, (1 - c[1] / c[3]) * 0.5 * Hh, c[3]];
  };

  // Sled links: real anchors laid over each project server's front panel, so they work with the
  // keyboard and without WebGL.
  const anchors = names.slice(0, count).map((name, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "rack-sled";
    a.href = `#project-${i + 1}`;
    a.dataset.rackIndex = i;
    a.setAttribute("aria-label", name);
    const tip = document.createElement("span");
    tip.className = "rack-tip";
    tip.setAttribute("aria-hidden", "true");
    tip.textContent = name;
    a.append(tip);
    li.append(a);
    list.append(li);
    a.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        reveal(i);
      },
      { signal: ac.signal }
    );
    return a;
  });
  function place(mvp) {
    for (let i = 0; i < count; i++) {
      const s = sleds[i],
        z = ZE + slide[i];
      const pts = [
        [-XP, s.y0, z],
        [XP, s.y0, z],
        [XP, s.y1, z],
        [-XP, s.y1, z],
      ].map((p) => toPx(mvp, p));
      const xs = pts.map((p) => p[0]),
        ys = pts.map((p) => p[1]);
      const x = Math.min(...xs),
        w = Math.max(...xs) - x,
        cy = (Math.min(...ys) + Math.max(...ys)) / 2,
        h = Math.max(18, Math.max(...ys) - Math.min(...ys));
      const a = anchors[i].style;
      a.width = `${w.toFixed(1)}px`;
      a.height = `${h.toFixed(1)}px`;
      a.transform = `translate(${x.toFixed(1)}px, ${(cy - h / 2).toFixed(1)}px)`;
    }
  }

  // Static poster: the same rack drawn as SVG. It shows before WebGL is ready, and stays when WebGL is unavailable.
  function poster() {
    const { m, mvp } = pose();
    svg.setAttribute("viewBox", `0 0 ${W.toFixed(1)} ${Hh.toFixed(1)}`);
    const faces = [];
    for (const q of quads) {
      if (q.kind === K.body) continue;
      const p = q.pts.map((v) => toPx(mvp, v));
      let area = 0;
      for (let i = 0; i < 4; i++) {
        const a = p[i],
          b = p[(i + 1) % 4];
        area += a[0] * b[1] - b[0] * a[1];
      }
      if (area >= 0) continue; // counter-clockwise in world space is clockwise on a y-down screen
      const n = apply(m, [...q.n, 0]),
        dot = (l) => Math.max(0, n[0] * l[0] + n[1] * l[1] + n[2] * l[2]);
      const f = 0.55 + 0.75 * dot(LIGHT) + 0.35 * dot(FILL);
      const c =
        q.mark >= 0 && q.mark < count && q.kind >= K.s1
          ? [54, 42, 100]
          : FLAT[q.kind].map((v) => v * f);
      faces.push({
        d: p.reduce((s, v) => s + v[2], 0),
        path: p.map((v) => `${v[0].toFixed(1)},${v[1].toFixed(1)}`).join(" "),
        fill: `rgb(${c.map(Math.round).join(",")})`,
      });
    }
    faces.sort((a, b) => b.d - a.d);
    const leds = sleds
      .slice(0, count)
      .map((s) => {
        const [x, y] = toPx(mvp, [XP - 0.036, s.y1 - U / 2, ZE]);
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.4"/>`;
      })
      .join("");
    svg.innerHTML =
      faces
        .map(
          (f) =>
            `<polygon points="${f.path}" fill="${f.fill}" stroke="rgba(5,6,14,.75)" stroke-width=".7"/>`
        )
        .join("") + `<g fill="#915eff">${leds}</g>`;
  }

  // Selecting a server pulls it out a few centimeters, then scrolls to its card and lights it once
  // the card has finished its entrance animation.
  function reveal(i) {
    const card = document.getElementById(`project-${i + 1}`);
    if (!card) return;
    const go = () => {
      // "auto" would defer to the global smooth scroll-behavior in index.css.
      card.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "center" });
      card.querySelector("a")?.focus({ preventScroll: true });
      const t0 = performance.now();
      const light = () => {
        if (dead) return;
        if (getComputedStyle(card).opacity < 0.99 && performance.now() - t0 < 8000)
          return requestAnimationFrame(light);
        card.classList.add("lit");
        clearTimeout(card._lit);
        card._lit = setTimeout(() => card.classList.remove("lit"), 1800);
      };
      light();
    };
    if (reduce || !state.ready) return go();
    state.pulled = i;
    state.kick();
    setTimeout(() => !dead && go(), 380);
    clearTimeout(state._pull);
    state._pull = setTimeout(() => {
      state.pulled = null;
      state.kick();
    }, 1600);
  }

  // Hovering or focusing a server or its project card lights that server. Hovering a server also holds the sway.
  const aim = (el) => {
    const k = el ? Number(el.dataset.rackIndex) : null,
      hold = !!el && host.contains(el);
    if (k === state.hot && hold === state.hold) return;
    state.hot = k;
    state.hold = hold;
    state.kick();
  };
  document.addEventListener("pointerover", (e) => aim(e.target.closest?.("[data-rack-index]")), on);
  document.addEventListener("focusin", (e) => aim(e.target.closest?.("[data-rack-index]")), on);
  document.addEventListener("focusout", () => aim(null), on);
  // Leaving the window straight from a server fires no pointerover, so release the hold here.
  document.addEventListener("pointerout", (e) => !e.relatedTarget && aim(null), on);

  const targets = (i) => {
    const hot = i === state.hot || i === state.pulled;
    return [i === state.pulled ? 0.07 : state.near ? 0.012 : 0, hot ? 1 : state.near ? 0.35 : 0];
  };

  measure();
  poster();
  place(pose().mvp);
  const ro = new ResizeObserver(() => {
    measure();
    poster();
    place(pose().mvp);
    state.resize();
  });
  ro.observe(host);
  observers.push(ro);

  // WebGL starts after load, at idle, and only once the rack is on screen. On phones it sits below the fold.
  const idle = (fn) =>
    "requestIdleCallback" in window
      ? requestIdleCallback(fn, { timeout: 1500 })
      : setTimeout(fn, 300);
  const start = () => {
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      idle(() => !dead && initGL());
    });
    io.observe(host);
    observers.push(io);
  };
  if (document.readyState === "complete") start();
  else addEventListener("load", start, on);

  let gl = null;
  function initGL() {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    gl = canvas.getContext("webgl2", {
      antialias: true,
      premultipliedAlpha: true,
      alpha: true,
      powerPreference: "low-power",
    });
    if (!gl) return;
    host.prepend(canvas);
    // A GPU reset or a backgrounded mobile tab can drop the context; the SVG poster takes over.
    canvas.addEventListener(
      "webglcontextlost",
      () => {
        state.ready = false;
        canvas.classList.remove("live");
      },
      on
    );

    const sh = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    const vs = sh(gl.VERTEX_SHADER, VS),
      fs = sh(gl.FRAGMENT_SHADER, FS);
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    const par = gl.getExtension("KHR_parallel_shader_compile");
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
    const vertexCount = verts.length / 13;

    const tex = gl.createTexture();
    const uploadBrand = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, paintBrand());
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };
    uploadBrand();
    // The wordmark is repainted once Poppins arrives.
    document.fonts.load("600 132px Poppins").then(
      () => {
        if (!dead) {
          uploadBrand();
          state.kick();
        }
      },
      () => {}
    );

    let Un,
      visible = true,
      raf = 0,
      last = 0,
      drawn = 0;
    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(Hh * dpr));
    }
    function draw() {
      const { m, mvp } = pose();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniformMatrix4fv(Un.uMVP, false, mvp);
      gl.uniformMatrix4fv(Un.uM, false, m);
      gl.uniform1fv(Un.uSlide, slide);
      gl.uniform1fv(Un.uGlow, glow);
      gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
      place(mvp);
    }
    // Returns true while any sled is still easing toward its target.
    function ease(dt) {
      let moving = false;
      const k = reduce ? 1 : 1 - Math.exp(-dt * 10);
      for (let i = 0; i < count; i++) {
        const [ts, tg] = targets(i);
        slide[i] += ((reduce ? 0 : ts) - slide[i]) * k;
        glow[i] += (tg - glow[i]) * k;
        if (Math.abs(ts - slide[i]) + Math.abs(tg - glow[i]) > 1e-3 && !reduce) moving = true;
      }
      return moving;
    }

    // Idle sway draws at about 20 fps; tilt and sled motion ease at full rate. The loop stops when nothing moves.
    function frame(now) {
      raf = 0;
      if (dead) return;
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
      last = now;
      if (!state.hold) view.t += dt;
      view.tx += (view.gx - view.tx) * 0.08;
      view.ty += (view.gy - view.ty) * 0.08;
      const tilting = Math.abs(view.gx - view.tx) + Math.abs(view.gy - view.ty) > 1e-4;
      const easing = ease(dt);
      if (tilting || easing || state.dirty || now - drawn > 48) {
        draw();
        drawn = now;
        state.dirty = false;
      }
      if (tilting || easing || (!state.hold && !reduce)) kick();
    }
    function kick() {
      if (dead || !state.ready || raf || !visible || document.hidden) return;
      raf = requestAnimationFrame(frame);
    }
    state.kick = () => {
      state.dirty = true;
      if (reduce && state.ready) {
        ease(0);
        draw();
      } else kick();
    };
    state.resize = () => {
      if (!state.ready) return;
      resize();
      draw();
    };
    state.stop = () => cancelAnimationFrame(raf);

    addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerType !== "mouse" || reduce || !visible || state.hold) return;
        const b = host.getBoundingClientRect();
        const nx = Math.max(-1, Math.min(1, ((e.clientX - b.left) / b.width) * 2 - 1));
        const ny = Math.max(-1, Math.min(1, ((e.clientY - b.top) / b.height) * 2 - 1));
        const near =
          e.clientX > b.left - 24 &&
          e.clientX < b.right + 24 &&
          e.clientY > b.top - 24 &&
          e.clientY < b.bottom + 24;
        if (near !== state.near) {
          state.near = near;
          state.dirty = true;
        }
        const gain = near ? 1 : 0.3;
        view.gx = nx * TILT_X * gain;
        view.gy = ny * TILT_Y * gain;
        kick();
      },
      on
    );
    const vis = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      last = 0;
      kick();
    });
    vis.observe(host);
    observers.push(vis);
    document.addEventListener(
      "visibilitychange",
      () => {
        last = 0;
        kick();
      },
      on
    );

    function whenLinked() {
      if (dead) return;
      if (par && !gl.getProgramParameter(prog, par.COMPLETION_STATUS_KHR))
        return requestAnimationFrame(whenLinked);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.warn(
          "rack shader:",
          gl.getShaderInfoLog(vs),
          gl.getShaderInfoLog(fs),
          gl.getProgramInfoLog(prog)
        );
        canvas.remove();
        return;
      }
      Un = {};
      for (const k of ["uMVP", "uM", "uSlide", "uGlow", "uL"])
        Un[k] = gl.getUniformLocation(prog, k);
      gl.useProgram(prog);
      const stride = 13 * 4;
      [
        ["aPos", 3, 0],
        ["aNrm", 3, 3],
        ["aUV", 2, 6],
        ["aSize", 2, 8],
        ["aMeta", 3, 10],
      ].forEach(([name, n, off]) => {
        const loc = gl.getAttribLocation(prog, name);
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, n, gl.FLOAT, false, stride, off * 4);
      });
      gl.uniform3fv(Un.uL, LIGHT);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.CULL_FACE);
      resize();
      state.ready = true;
      draw();
      canvas.classList.add("live");
      kick();
    }
    requestAnimationFrame(whenLinked);
  }

  return () => {
    dead = true;
    ac.abort();
    observers.forEach((o) => o.disconnect());
    state.stop?.();
    clearTimeout(state._pull);
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    host.replaceChildren();
  };
}
