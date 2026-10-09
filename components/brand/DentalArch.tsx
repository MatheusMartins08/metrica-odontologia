/*
 * Maxillary arch seen from the occlusal plane, drawn as a measured hairline:
 * the curve, a tick at every tooth limit (widths follow average crown sizes)
 * and the 11 | 21 midline at the apex. Pure geometry, rendered on the server.
 */

type Point = [number, number];

// Right half of the arch, from the apex (midline) to the last molar.
const HALF: [Point, Point, Point, Point] = [
  [300, 40],
  [440, 40],
  [540, 180],
  [540, 390],
];
// Average maxillary crown widths in mm: central, lateral, canine, PM1, PM2, M1, M2, M3.
const WIDTHS = [8.5, 6.5, 7.5, 7, 6.5, 10, 9, 8.5];

const bezier = ([p0, p1, p2, p3]: typeof HALF, t: number): Point => {
  const u = 1 - t;
  return [
    u ** 3 * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t ** 3 * p3[0],
    u ** 3 * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t ** 3 * p3[1],
  ];
};

/** Tooth-limit ticks along the right half, mirrored to the left. */
function ticks(): string {
  const samples: { t: number; len: number; p: Point }[] = [];
  let len = 0;
  let prev = bezier(HALF, 0);
  for (let i = 0; i <= 400; i++) {
    const t = i / 400;
    const p = bezier(HALF, t);
    len += Math.hypot(p[0] - prev[0], p[1] - prev[1]);
    samples.push({ t, len, p });
    prev = p;
  }
  const total = len;
  const sum = WIDTHS.reduce((a, b) => a + b, 0);

  let acc = 0;
  let d = "";
  for (const w of WIDTHS) {
    acc += w;
    const target = (acc / sum) * total;
    const i = samples.findIndex((s) => s.len >= target);
    const s = samples[Math.max(1, i)];
    const before = samples[Math.max(0, i - 1)];
    // Outward normal from the local tangent.
    const tx = s.p[0] - before.p[0];
    const ty = s.p[1] - before.p[1];
    const n = Math.hypot(tx, ty) || 1;
    const nx = ty / n;
    const ny = -tx / n;
    const size = 9;
    for (const sign of [1, -1]) {
      const x = sign === 1 ? s.p[0] : 600 - s.p[0];
      const nxs = sign === 1 ? nx : -nx;
      d += `M${(x - nxs * size).toFixed(1)} ${(s.p[1] - ny * size).toFixed(1)}L${(x + nxs * size).toFixed(1)} ${(s.p[1] + ny * size).toFixed(1)}`;
    }
  }
  return d;
}

const ARCH = "M60 390C60 180 160 40 300 40C440 40 540 180 540 390";
const TICKS = ticks();

export function DentalArch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none" aria-hidden="true" focusable="false">
      <path d={ARCH} stroke="currentColor" strokeWidth="1" pathLength={1} data-draw />
      <path d={TICKS} stroke="currentColor" strokeWidth="1" pathLength={1} data-draw />
      <line x1="300" y1="14" x2="300" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
      <g fill="currentColor" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1">
        <text x="292" y="24" textAnchor="end">
          11
        </text>
        <text x="308" y="24">
          21
        </text>
      </g>
    </svg>
  );
}
