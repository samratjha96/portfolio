const Re=[[1,"switch"],[1,"blank"],[1,"s1"],[2,"s2",0],[1,"s1"],[1,"s1"],[1,"s1",1],[2,"s2"],[1,"s1"],[1,"s1",2],[1,"s1"],[2,"s2"],[1,"blank"],[2,"s2",3],[1,"s1"],[1,"s1"],[1,"s1",4],[2,"s2"],[1,"s1"],[2,"s2",5],[1,"s1"],[1,"blank"],[1,"s1",6],[1,"s1"],[1,"s1"],[2,"s2"],[1,"s1",7],[1,"s1"],[1,"s1"],[2,"s2",8],[1,"s1"],[1,"blank"],[2,"power"]],q=9,H=.04445,te=.063,ee=.3,X=.2415,C=.2405,ge=.217,j=.5,D=.47,Ie=.5,u={panel:0,stileL:1,stileR:2,frame:3,top:4,inner:5,body:6,s1:10,s2:11,blank:12,switch:13,power:14},W=-Ie,ae=-.34,ie=.07,Ue=46,Fe=.16,Ce=7.5,be=5.2,se=.16,ce=.07,$=(t,o)=>{const a=new Array(16).fill(0);for(let l=0;l<4;l++)for(let r=0;r<4;r++)for(let p=0;p<4;p++)a[r*4+l]+=t[p*4+l]*o[r*4+p];return a},Ee=t=>{const o=Math.cos(t),a=Math.sin(t);return[1,0,0,0,0,o,a,0,0,-a,o,0,0,0,0,1]},Be=t=>{const o=Math.cos(t),a=Math.sin(t);return[o,0,-a,0,0,1,0,0,a,0,o,0,0,0,0,1]},ke=$([be,0,0,0,0,be,0,0,0,0,-1.02,-1,0,0,-.2,0],$([1,0,0,0,0,1,0,0,0,0,1,0,0,0,-Ce,1],Ee(Fe))),le=(t,o)=>[0,1,2,3].map(a=>t[a]*o[0]+t[4+a]*o[1]+t[8+a]*o[2]+t[12+a]),Te=(t,o)=>$(Ee(o),Be(t)),re=[],Me=[],fe=[];function Y(t,o,a,l,r,p,g,M){const v=[o[1]*a[2]-o[2]*a[1],o[2]*a[0]-o[0]*a[2],o[0]*a[1]-o[1]*a[0]],k=(A,I)=>[t[0]+o[0]*A+a[0]*I,t[1]+o[1]*A+a[1]*I,t[2]+o[2]*A+a[2]*I],P=[k(0,0),k(l,0),k(l,r),k(0,r)],s=[[0,0],[l,0],[l,r],[0,r]];for(const A of[0,1,2,0,2,3])re.push(...P[A],...v,...s[A],l,r,p,g,M);Me.push({pts:P,n:v,kind:p,mark:M})}function V(t,o,a,l,r,p,g,M=-1,v=-1){const k=P=>g[P]??g.all;Y([t,a,p],[1,0,0],[0,1,0],o-t,l-a,k("front"),M,v),Y([o,a,p],[0,0,-1],[0,1,0],p-r,l-a,k("right"),M,v),Y([t,a,r],[0,0,1],[0,1,0],p-r,l-a,k("left"),M,v),Y([t,l,p],[1,0,0],[0,0,-1],o-t,p-r,k("top"),M,v),Y([t,a,r],[1,0,0],[0,0,1],o-t,p-r,k("bottom"),M,v)}V(-ee,-X,-1,1,W,j,{all:u.panel,front:u.stileL,right:u.inner,top:u.top});V(X,ee,-1,1,W,j,{all:u.panel,front:u.stileR,left:u.inner,top:u.top});V(-X,X,1-(2-te-42*H),1,W,j,{all:u.inner,left:u.body,right:u.body,front:u.frame,top:u.top});V(-X,X,-1,-1+te,W,j,{all:u.inner,left:u.body,right:u.body,front:u.frame});{let t=42;Re.forEach(([o,a,l=-1],r)=>{const p=-1+te+t*H,g=p-o*H;t-=o,V(-C,C,g+4e-4,p-4e-4,D-.004,D,{all:u.body,front:u[a]},r,l),V(-ge,ge,g+.001,p-.001,D-.72,D-.004,{all:u.body},r,l),l>=0&&(fe[l]={y0:g,y1:p})})}const we=(()=>{const t=[-.45,.55,.7],o=Math.hypot(...t);return t.map(a=>a/o)})(),Ne=(()=>{const t=[.9,.2,.2],o=Math.hypot(...t);return t.map(a=>a/o)})(),Oe={[u.panel]:[19,19,36],[u.stileL]:[18,18,34],[u.stileR]:[18,18,34],[u.frame]:[18,18,34],[u.top]:[19,19,36],[u.inner]:[6,7,13],[u.s1]:[20,21,37],[u.s2]:[22,23,40],[u.blank]:[18,19,33],[u.switch]:[21,22,38],[u.power]:[21,22,38]},De=`#version 300 es
in vec3 aPos;
in vec3 aNrm;
in vec2 aUV;
in vec2 aSize;
in vec3 aMeta;
uniform mat4 uMVP;
uniform mat4 uM;
uniform float uSlide[${q}];
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
}`,$e=["111101101101111","010110010010111","111001111100111","111001111001111","101101111001001","111100111001111","111100111101111","111001001001001","111101111101111","111101111001111"].map(t=>parseInt(t,2)),Xe=`#version 300 es
precision highp float;
in vec3 vN;
in vec2 vUV;
in float vY;
flat in vec2 vSize;
flat in vec3 vMeta;
uniform float uGlow[${q}];
uniform sampler2D uBrand;
uniform vec3 uL;
out vec4 o;
const vec3 VIOLET = vec3(0.57, 0.37, 1.0);
const float U = ${H}, BOT = ${te};
const int FONT[10] = int[10](${$e.join(", ")});
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
}`;function Ve(){const t=document.createElement("canvas");t.width=512,t.height=1024;const o=t.getContext("2d");o.fillStyle="rgba(145, 94, 255, 0.85)",o.fillRect(34,56,7,912),o.fillStyle="rgba(205, 200, 240, 0.2)",o.font="600 132px Poppins, Arial, sans-serif",o.fillText("R42",66,190),o.font="600 26px Poppins, Arial, sans-serif",o.letterSpacing="9px",o.fillStyle="rgba(205, 200, 240, 0.26)",o.fillText("COMPUTE RACK",70,240),o.fillStyle="rgba(210, 205, 235, 0.3)",o.fillRect(66,836,190,72),o.fillStyle="rgba(8, 9, 20, 0.75)";for(let a=78,l=0;a<244;l++){const r=[2,4,2,6,3,2,5][l%7];l%2===0&&o.fillRect(a,848,r,40),a+=r+2}return t}function Ge(t,o){const a=new AbortController,l={signal:a.signal,passive:!0},r=matchMedia("(prefers-reduced-motion: reduce)").matches,p=Math.min(o.length,q);let g=!1;const M=[],v={t:0,tx:0,ty:0,gx:0,gy:0},k=new Float32Array(q),P=new Float32Array(q),s={hot:null,pulled:null,near:!1,hold:!1,dirty:!1,ready:!1,kick:()=>{},resize:()=>{}},A=document.createElementNS("http://www.w3.org/2000/svg","svg");A.setAttribute("aria-hidden","true"),A.setAttribute("focusable","false");const I=document.createElement("ul");I.className="rack-sleds",I.setAttribute("aria-label","Projects in the rack"),t.append(A,I);let B=0,N=0,ue=null;function de(){const n=t.getBoundingClientRect();B=n.width,N=n.height;let i=1/0,c=-1/0,m=1/0,f=-1/0;for(const E of[ae-ie-se,ae+ie+se])for(const d of[-ce,ce]){const b=$(ke,Te(E,d));for(const _ of[-ee,ee])for(const J of[-1,1])for(const Q of[W,j+.08]){const z=le(b,[_,J,Q]);i=Math.min(i,z[0]/z[3]),c=Math.max(c,z[0]/z[3]),m=Math.min(m,z[1]/z[3]),f=Math.max(f,z[1]/z[3])}}const y=Math.min(B*.94/(c-i),N*.96/(f-m)),w=2*y/B,S=2*y/N,U=(i+c)/2,F=(m+f)/2;ue=[w,0,0,0,0,S,0,0,0,0,1,0,-w*U,-S*F,0,1]}function K(){const n=ae+(r?0:ie*Math.sin(v.t/Ue*2*Math.PI))+v.tx,i=Te(n,v.ty);return{m:i,mvp:$(ue,$(ke,i))}}const oe=(n,i)=>{const c=le(n,i);return[(c[0]/c[3]+1)*.5*B,(1-c[1]/c[3])*.5*N,c[3]]},ze=o.slice(0,p).map((n,i)=>{const c=document.createElement("li"),m=document.createElement("a");m.className="rack-sled",m.href=`#project-${i+1}`,m.dataset.rackIndex=i,m.setAttribute("aria-label",n);const f=document.createElement("span");return f.className="rack-tip",f.setAttribute("aria-hidden","true"),f.textContent=n,m.append(f),c.append(m),I.append(c),m.addEventListener("click",y=>{y.preventDefault(),Le(i)},{signal:a.signal}),m});function ne(n){for(let i=0;i<p;i++){const c=fe[i],m=D+k[i],f=[[-C,c.y0,m],[C,c.y0,m],[C,c.y1,m],[-C,c.y1,m]].map(b=>oe(n,b)),y=f.map(b=>b[0]),w=f.map(b=>b[1]),S=Math.min(...y),U=Math.max(...y)-S,F=(Math.min(...w)+Math.max(...w))/2,E=Math.max(18,Math.max(...w)-Math.min(...w)),d=ze[i].style;d.width=`${U.toFixed(1)}px`,d.height=`${E.toFixed(1)}px`,d.transform=`translate(${S.toFixed(1)}px, ${(F-E/2).toFixed(1)}px)`}}function pe(){const{m:n,mvp:i}=K();A.setAttribute("viewBox",`0 0 ${B.toFixed(1)} ${N.toFixed(1)}`);const c=[];for(const f of Me){if(f.kind===u.body)continue;const y=f.pts.map(d=>oe(i,d));let w=0;for(let d=0;d<4;d++){const b=y[d],_=y[(d+1)%4];w+=b[0]*_[1]-_[0]*b[1]}if(w>=0)continue;const S=le(n,[...f.n,0]),U=d=>Math.max(0,S[0]*d[0]+S[1]*d[1]+S[2]*d[2]),F=.55+.75*U(we)+.35*U(Ne),E=f.mark>=0&&f.mark<p&&f.kind>=u.s1?[54,42,100]:Oe[f.kind].map(d=>d*F);c.push({d:y.reduce((d,b)=>d+b[2],0),path:y.map(d=>`${d[0].toFixed(1)},${d[1].toFixed(1)}`).join(" "),fill:`rgb(${E.map(Math.round).join(",")})`})}c.sort((f,y)=>y.d-f.d);const m=fe.slice(0,p).map(f=>{const[y,w]=oe(i,[C-.036,f.y1-H/2,D]);return`<circle cx="${y.toFixed(1)}" cy="${w.toFixed(1)}" r="1.4"/>`}).join("");A.innerHTML=c.map(f=>`<polygon points="${f.path}" fill="${f.fill}" stroke="rgba(5,6,14,.75)" stroke-width=".7"/>`).join("")+`<g fill="#915eff">${m}</g>`}function Le(n){const i=document.getElementById(`project-${n+1}`);if(!i)return;const c=()=>{i.scrollIntoView({behavior:r?"instant":"smooth",block:"center"}),i.querySelector("a")?.focus({preventScroll:!0});const m=performance.now(),f=()=>{if(!g){if(getComputedStyle(i).opacity<.99&&performance.now()-m<8e3)return requestAnimationFrame(f);i.classList.add("lit"),clearTimeout(i._lit),i._lit=setTimeout(()=>i.classList.remove("lit"),1800)}};f()};if(r||!s.ready)return c();s.pulled=n,s.kick(),setTimeout(()=>!g&&c(),380),clearTimeout(s._pull),s._pull=setTimeout(()=>{s.pulled=null,s.kick()},1600)}const Z=n=>{const i=n?Number(n.dataset.rackIndex):null,c=!!n&&t.contains(n);i===s.hot&&c===s.hold||(s.hot=i,s.hold=c,s.kick())};document.addEventListener("pointerover",n=>Z(n.target.closest?.("[data-rack-index]")),l),document.addEventListener("focusin",n=>Z(n.target.closest?.("[data-rack-index]")),l),document.addEventListener("focusout",()=>Z(null),l),document.addEventListener("pointerout",n=>!n.relatedTarget&&Z(null),l);const Ae=n=>{const i=n===s.hot||n===s.pulled;return[n===s.pulled?.07:s.near?.012:0,i?1:s.near?.35:0]};de(),pe(),ne(K().mvp);const ve=new ResizeObserver(()=>{de(),pe(),ne(K().mvp),s.resize()});ve.observe(t),M.push(ve);const Se=n=>"requestIdleCallback"in window?requestIdleCallback(n,{timeout:1500}):setTimeout(n,300),me=()=>{const n=new IntersectionObserver(([i])=>{i.isIntersecting&&(n.disconnect(),Se(()=>!g&&_e()))});n.observe(t),M.push(n)};document.readyState==="complete"?me():addEventListener("load",me,l);let e=null;function _e(){const n=document.createElement("canvas");if(n.setAttribute("aria-hidden","true"),e=n.getContext("webgl2",{antialias:!0,premultipliedAlpha:!0,alpha:!0,powerPreference:"low-power"}),!e)return;t.prepend(n),n.addEventListener("webglcontextlost",()=>{s.ready=!1,n.classList.remove("live")},l);const i=(x,h)=>{const L=e.createShader(x);return e.shaderSource(L,h),e.compileShader(L),L},c=e.createProgram(),m=i(e.VERTEX_SHADER,De),f=i(e.FRAGMENT_SHADER,Xe);e.attachShader(c,m),e.attachShader(c,f),e.linkProgram(c);const y=e.getExtension("KHR_parallel_shader_compile"),w=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,w),e.bufferData(e.ARRAY_BUFFER,new Float32Array(re),e.STATIC_DRAW);const S=re.length/13,U=e.createTexture(),F=()=>{e.bindTexture(e.TEXTURE_2D,U),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,Ve()),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)};F(),document.fonts.load("600 132px Poppins").then(()=>{g||(F(),s.kick())},()=>{});let E,d=!0,b=0,_=0,J=0;function Q(){const x=Math.min(devicePixelRatio||1,1.5);n.width=Math.max(1,Math.round(B*x)),n.height=Math.max(1,Math.round(N*x))}function z(){const{m:x,mvp:h}=K();e.viewport(0,0,n.width,n.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.uniformMatrix4fv(E.uMVP,!1,h),e.uniformMatrix4fv(E.uM,!1,x),e.uniform1fv(E.uSlide,k),e.uniform1fv(E.uGlow,P),e.drawArrays(e.TRIANGLES,0,S),ne(h)}function xe(x){let h=!1;const L=r?1:1-Math.exp(-x*10);for(let T=0;T<p;T++){const[R,G]=Ae(T);k[T]+=((r?0:R)-k[T])*L,P[T]+=(G-P[T])*L,Math.abs(R-k[T])+Math.abs(G-P[T])>.001&&!r&&(h=!0)}return h}function Pe(x){if(b=0,g)return;const h=_?Math.min(.1,(x-_)/1e3):0;_=x,s.hold||(v.t+=h),v.tx+=(v.gx-v.tx)*.08,v.ty+=(v.gy-v.ty)*.08;const L=Math.abs(v.gx-v.tx)+Math.abs(v.gy-v.ty)>1e-4,T=xe(h);(L||T||s.dirty||x-J>48)&&(z(),J=x,s.dirty=!1),(L||T||!s.hold&&!r)&&O()}function O(){g||!s.ready||b||!d||document.hidden||(b=requestAnimationFrame(Pe))}s.kick=()=>{s.dirty=!0,r&&s.ready?(xe(0),z()):O()},s.resize=()=>{s.ready&&(Q(),z())},s.stop=()=>cancelAnimationFrame(b),addEventListener("pointermove",x=>{if(x.pointerType!=="mouse"||r||!d||s.hold)return;const h=t.getBoundingClientRect(),L=Math.max(-1,Math.min(1,(x.clientX-h.left)/h.width*2-1)),T=Math.max(-1,Math.min(1,(x.clientY-h.top)/h.height*2-1)),R=x.clientX>h.left-24&&x.clientX<h.right+24&&x.clientY>h.top-24&&x.clientY<h.bottom+24;R!==s.near&&(s.near=R,s.dirty=!0);const G=R?1:.3;v.gx=L*se*G,v.gy=T*ce*G,O()},l);const he=new IntersectionObserver(([x])=>{d=x.isIntersecting,_=0,O()});he.observe(t),M.push(he),document.addEventListener("visibilitychange",()=>{_=0,O()},l);function ye(){if(g)return;if(y&&!e.getProgramParameter(c,y.COMPLETION_STATUS_KHR))return requestAnimationFrame(ye);if(!e.getProgramParameter(c,e.LINK_STATUS)){console.warn("rack shader:",e.getShaderInfoLog(m),e.getShaderInfoLog(f),e.getProgramInfoLog(c)),n.remove();return}E={};for(const h of["uMVP","uM","uSlide","uGlow","uL"])E[h]=e.getUniformLocation(c,h);e.useProgram(c);const x=13*4;[["aPos",3,0],["aNrm",3,3],["aUV",2,6],["aSize",2,8],["aMeta",3,10]].forEach(([h,L,T])=>{const R=e.getAttribLocation(c,h);e.enableVertexAttribArray(R),e.vertexAttribPointer(R,L,e.FLOAT,!1,x,T*4)}),e.uniform3fv(E.uL,we),e.enable(e.DEPTH_TEST),e.enable(e.CULL_FACE),Q(),s.ready=!0,z(),n.classList.add("live"),O()}requestAnimationFrame(ye)}return()=>{g=!0,a.abort(),M.forEach(n=>n.disconnect()),s.stop?.(),clearTimeout(s._pull),e?.getExtension("WEBGL_lose_context")?.loseContext(),t.replaceChildren()}}export{Ge as mountRack};
