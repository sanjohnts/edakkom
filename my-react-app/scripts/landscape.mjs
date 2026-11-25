// Generates public/images/edakkom-landscape.svg — an original illustration
// (hills, coconut palms, paddy fields, a river) used as the hero artwork
// until real, location-confirmed Edakkom photographs are available.
// Run with: npm run art
import { writeFileSync } from "node:fs";

const W = 1600;
const H = 1000;
const r = (n) => Math.round(n * 10) / 10;

const C = {
  skyTop: "#BFD3C0",
  skyMid: "#EEE2BF",
  skyLow: "#F0CE8E",
  farthest: "#C6D4BE",
  farRidge: "#A7BFA5",
  midHill: "#7A9F82",
  farPalm: "#62896D",
  nearHill: "#4A7A5C",
  midPalm: "#2F5E45",
  paddy: "#5E8F5F",
  paddyLine: "#76A56F",
  bank: "#2A5A40",
  ground: "#1F4A36",
  palm: "#14332A",
  mist: "#F7EFD9",
};

// One drooping coconut frond, drawn along +x and then rotated.
function frond(len, angle, mirror, color) {
  const L = len;
  const d =
    `M0 0 C${r(L * 0.3)} ${r(-L * 0.2)} ${r(L * 0.66)} ${r(-L * 0.22)} ${r(L)} ${r(L * 0.14)} ` +
    `C${r(L * 0.62)} ${r(-L * 0.04)} ${r(L * 0.3)} ${r(-L * 0.03)} 0 0Z`;
  const flip = mirror ? "scale(-1 1) " : "";
  return `<path transform="${flip}rotate(${angle})" d="${d}" fill="${color}"/>`;
}

function palm(x, baseY, height, lean, s, color) {
  const tx = x + lean;
  const ty = baseY - height;
  const cx = x + lean * 0.25;
  const cy = baseY - height * 0.55;
  const wb = 16 * s;
  const wm = 11 * s;
  const wt = 7 * s;
  const trunk =
    `<path d="M${r(x - wb / 2)} ${r(baseY)} Q${r(cx - wm / 2)} ${r(cy)} ${r(tx - wt / 2)} ${r(ty)} ` +
    `L${r(tx + wt / 2)} ${r(ty)} Q${r(cx + wm / 2)} ${r(cy)} ${r(x + wb / 2)} ${r(baseY)}Z" fill="${color}"/>`;
  const L = 130 * s;
  const right = [
    [-58, 0.78],
    [-28, 0.95],
    [4, 1.05],
    [34, 0.92],
    [62, 0.7],
  ];
  const left = [
    [-62, 0.74],
    [-30, 0.98],
    [0, 1.0],
    [30, 0.9],
    [58, 0.72],
  ];
  const fronds = [
    ...right.map(([a, k]) => frond(L * k, a, false, color)),
    ...left.map(([a, k]) => frond(L * k, a, true, color)),
    frond(L * 0.6, -84, false, color),
    frond(L * 0.6, -84, true, color),
  ].join("");
  const nuts = [
    [-5, 9],
    [4, 11],
    [0, 4],
  ]
    .map(([dx, dy]) => `<circle cx="${r(dx * s)}" cy="${r(dy * s)}" r="${r(5.5 * s)}" fill="${color}"/>`)
    .join("");
  return `${trunk}<g transform="translate(${r(tx)} ${r(ty)})">${fronds}${nuts}</g>`;
}

const bird = (x, y, k) =>
  `<path d="M${x} ${y} q${6 * k} ${-6 * k} ${12 * k} 0 q${6 * k} ${-6 * k} ${12 * k} 0" fill="none" stroke="#3F5F4C" stroke-width="${r(1.8 * k)}" stroke-linecap="round"/>`;

const paddyLines = [812, 826, 842, 860, 881, 905, 932, 962, 996]
  .map((y, i) => {
    const w = 1 + i * 0.35;
    return `<path d="M0 ${y} C 400 ${y - 10}, 1000 ${y - 6}, 1600 ${y - 18}" fill="none" stroke="${C.paddyLine}" stroke-width="${r(w)}" opacity="0.55"/>`;
  })
  .join("");

const farPalms = [
  [356, 600, 82, 3, 0.19],
  [392, 604, 70, -2, 0.16],
  [770, 616, 76, 2, 0.17],
  [1338, 584, 84, -3, 0.19],
  [1376, 590, 66, 2, 0.15],
]
  .map(([x, y, h, l, s]) => palm(x, y, h, l, s, C.farPalm))
  .join("");

const midPalms = [
  [612, 716, 176, 8, 0.38],
  [652, 722, 150, -6, 0.33],
  [984, 750, 166, 5, 0.36],
  [1176, 716, 182, -8, 0.39],
  [1226, 712, 140, 6, 0.3],
]
  .map(([x, y, h, l, s]) => palm(x, y, h, l, s, C.midPalm))
  .join("");

const frontPalms = [
  [70, 1012, 470, 26, 0.86],
  [176, 1012, 650, 42, 1.16],
  [302, 1012, 520, -32, 0.96],
  [1418, 1012, 610, -46, 1.1],
  [1532, 1012, 480, 22, 0.9],
]
  .map(([x, y, h, l, s]) => palm(x, y, h, l, s, C.palm))
  .join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
<title>Illustration: hills, coconut palms, paddy fields and a river in North Malabar</title>
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="${C.skyTop}"/>
<stop offset="0.5" stop-color="${C.skyMid}"/>
<stop offset="0.78" stop-color="${C.skyLow}"/>
</linearGradient>
<radialGradient id="glow" cx="1130" cy="380" r="360" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#FFF5DA"/>
<stop offset="0.28" stop-color="#F9E4AB" stop-opacity="0.9"/>
<stop offset="1" stop-color="${C.skyLow}" stop-opacity="0"/>
</radialGradient>
<linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="${C.mist}" stop-opacity="0"/>
<stop offset="0.5" stop-color="${C.mist}" stop-opacity="0.62"/>
<stop offset="1" stop-color="${C.mist}" stop-opacity="0"/>
</linearGradient>
<linearGradient id="river" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#DCE8DF"/>
<stop offset="1" stop-color="#A9C4B9"/>
</linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#sky)"/>
<circle cx="1130" cy="380" r="360" fill="url(#glow)"/>
<circle cx="1130" cy="378" r="54" fill="#FCEBB9"/>
${bird(470, 250, 1.3)}${bird(520, 228, 1)}${bird(560, 262, 0.8)}${bird(880, 300, 0.7)}
<path d="M0 500 C150 470 260 440 420 452 S700 410 820 430 S1060 380 1180 400 S1420 430 1600 410 V1000 H0Z" fill="${C.farthest}"/>
<path d="M0 545 C110 500 210 505 320 478 S520 420 650 462 S880 500 1000 456 S1220 400 1340 440 S1520 482 1600 455 V1000 H0Z" fill="${C.farRidge}"/>
<rect y="490" width="${W}" height="160" fill="url(#mist)"/>
<path d="M0 615 C140 585 280 570 420 590 S680 635 840 605 S1100 545 1260 575 S1480 625 1600 600 V1000 H0Z" fill="${C.midHill}"/>
${farPalms}
<rect y="630" width="${W}" height="130" fill="url(#mist)" opacity="0.7"/>
<path d="M0 700 C200 660 380 650 560 690 S900 760 1100 720 S1400 650 1600 690 V1000 H0Z" fill="${C.nearHill}"/>
${midPalms}
<path d="M0 800 C300 780 600 790 900 800 S1400 790 1600 780 V1000 H0Z" fill="${C.paddy}"/>
${paddyLines}
<path d="M1600 776 C1450 784 1300 792 1180 806 C1020 826 900 850 820 880 C720 920 640 960 590 1000 L760 1000 C800 960 880 920 980 894 C1100 862 1260 830 1600 800Z" fill="url(#river)"/>
<path d="M1500 790 C1320 800 1150 818 1020 846 M940 872 C880 892 830 916 790 944" fill="none" stroke="#FFF6DC" stroke-width="2" opacity="0.7" stroke-linecap="round"/>
<path d="M0 860 C120 850 260 880 380 940 C430 965 470 985 500 1000 H0Z" fill="${C.bank}"/>
<path d="M1600 850 C1500 860 1380 900 1300 950 C1270 970 1250 985 1240 1000 H1600Z" fill="${C.bank}"/>
<path d="M0 930 C140 920 260 950 330 1000 H0Z" fill="${C.ground}"/>
<path d="M1600 920 C1500 930 1420 960 1380 1000 H1600Z" fill="${C.ground}"/>
${frontPalms}
</svg>
`;

const out = new URL("../public/images/edakkom-landscape.svg", import.meta.url);
writeFileSync(out, svg);
console.log(`wrote ${out.pathname} (${svg.length} bytes)`);
