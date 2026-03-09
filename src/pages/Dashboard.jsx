import { useState, useRef, useEffect } from "react";
import { C } from "../shared";
import Logo, { LogoMark } from "../Logo";

/* ═══════════════════════════════════════════════════════
   GroundBase — Web App Dashboard
   AI-native field operations management
   ═══════════════════════════════════════════════════════ */

const f = "'DM Sans', -apple-system, sans-serif";
const fd = "'Space Grotesk', 'DM Sans', sans-serif";
const fi = "'Instrument Serif', Georgia, serif";

// ── Extended palette ─────────────────────────────────
const P = {
    ...C,
    card: "#FFFFFF",
    sidebar: "#0F1411",
    sidebarHover: "rgba(255,255,255,0.06)",
    sidebarActive: "rgba(34,199,126,0.12)",
    red: "#E04545",
    redSoft: "rgba(224,69,69,0.08)",
    yellow: "#D4A017",
    yellowSoft: "rgba(212,160,23,0.08)",
    green: "#22C77E",
    greenSoft: "rgba(34,199,126,0.08)",
    radius: 14,
    rSm: 10,
    rXs: 8,
    shadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 14px rgba(0,0,0,0.03)",
    shadowMd: "0 2px 8px rgba(0,0,0,0.05), 0 8px 28px rgba(0,0,0,0.04)",
};

// ── Curated Unsplash images ──────────────────────────
const IMG = {
    // Team member profile photos (diverse African professionals)
    avatars: {
        JK: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&fit=crop&crop=face",
        SK: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face",
        JM: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        PK: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
        AO: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
        GW: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
        DK: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        FN: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
    // Farm/field photos for photo evidence gallery
    photos: [
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",  // fence field
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop",  // maize crop
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",  // irrigation
        "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&h=400&fit=crop",  // cattle
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&h=400&fit=crop",  // avocado trees
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",  // warehouse safety
        "https://images.unsplash.com/photo-1585500100370-c27dbdc23488?w=600&h=400&fit=crop",  // greenhouse
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",  // soil/field
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",  // wheat harvest
    ],
    // Location/aerial views
    locations: [
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop",  // aerial farm
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop",  // green field sunrise
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=400&fit=crop",  // ranch land
        "https://images.unsplash.com/photo-1559884743-74a57598c6c7?w=800&h=400&fit=crop",  // mixed farming
    ],
    // Integration logos (simplified SVG inline)
    weather: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400&h=300&fit=crop",  // sunny sky
};

// ── Avatar image component ───────────────────────────
const Avatar = ({ initials, size = 44, radius = 14, src, color, fontSize = 14 }) => {
    const [loaded, setLoaded] = useState(false);
    const imgSrc = src || (IMG.avatars[initials] || null);
    return (
        <div style={{
            width: size, height: size, borderRadius: radius, overflow: "hidden",
            background: loaded ? "transparent" : (color ? `${color}12` : P.bgSubtle),
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative",
        }}>
            {imgSrc && (
                <img
                    src={imgSrc} alt={initials}
                    onLoad={() => setLoaded(true)}
                    onError={(e) => { e.target.style.display = "none"; }}
                    style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        position: "absolute", inset: 0,
                        opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease",
                    }}
                />
            )}
            {!loaded && (
                <span style={{ fontFamily: fd, fontSize, fontWeight: 700, color: color || P.textSoft, position: "relative", zIndex: 1 }}>{initials}</span>
            )}
        </div>
    );
};

// ── SVG Icons ────────────────────────────────────────
const I = ({ n, sz = 20, col = P.textSoft, sw = 1.7 }) => {
    const s = { width: sz, height: sz, display: "block", flexShrink: 0 };
    const p = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: col, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round", style: s };
    const m = {
        home: <svg {...p}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
        tasks: <svg {...p}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>,
        users: <svg {...p}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
        chart: <svg {...p}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
        map: <svg {...p}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>,
        camera: <svg {...p}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>,
        bot: <svg {...p}><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg>,
        settings: <svg {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>,
        bell: <svg {...p}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>,
        search: <svg {...p}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
        clock: <svg {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
        check: <svg {...p}><polyline points="20 6 9 17 4 12" /></svg>,
        chevR: <svg {...p}><polyline points="9 18 15 12 9 6" /></svg>,
        chevD: <svg {...p}><polyline points="6 9 12 15 18 9" /></svg>,
        mapPin: <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
        sun: <svg {...p}><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>,
        droplet: <svg {...p}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>,
        wind: <svg {...p}><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" /></svg>,
        plus: <svg {...p}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
        filter: <svg {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>,
        leaf: <svg {...p}><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.5 6.5A6.97 6.97 0 0011 20z" /><path d="M5 19l6-6" /></svg>,
        globe: <svg {...p}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
        send: <svg {...p}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>,
        zap: <svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={col} stroke="none" /></svg>,
        arrowUp: <svg {...p}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>,
        arrowDown: <svg {...p}><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>,
        photo: <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
        shield: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        mic: <svg {...p}><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>,
        logout: <svg {...p}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
        calendar: <svg {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
        trendUp: <svg {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
        layers: <svg {...p}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
    };
    return m[n] || null;
};

// ── Mini sparkline SVG ───────────────────────────────
function Spark({ data, color, w = 80, h = 28 }) {
    const max = Math.max(...data), min = Math.min(...data);
    const pad = 2;
    const pts = data.map((v, i) => ({
        x: pad + (i / (data.length - 1)) * (w - pad * 2),
        y: pad + (1 - (v - min) / (max - min || 1)) * (h - pad * 2),
    }));
    // smooth cubic bezier path
    const path = pts.reduce((acc, p, i) => {
        if (i === 0) return `M${p.x},${p.y}`;
        const prev = pts[i - 1];
        const cpx = (prev.x + p.x) / 2;
        return acc + ` C${cpx},${prev.y} ${cpx},${p.y} ${p.x},${p.y}`;
    }, "");
    const uid = `sp-${color.replace("#", "")}-${w}`;
    return (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
            <defs>
                <linearGradient id={uid} x1="0" y1="0" x2="0" y2={h} gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={`${path} L${pts[pts.length-1].x},${h} L${pts[0].x},${h} Z`} fill={`url(#${uid})`} />
            <path d={path} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={pts[pts.length-1].x} cy={pts[pts.length-1].y} r="2.5" fill={color} stroke="#fff" strokeWidth="1.5" />
        </svg>
    );
}

// ── Bar chart — modern rounded gradient bars ─────────
function BarChart({ data, labels, color = P.accent, height = 140 }) {
    const max = Math.max(...data);
    const [hovIdx, setHovIdx] = useState(null);
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height, padding: "0 2px" }}>
            {data.map((v, i) => {
                const pct = v / max;
                const isHigh = pct > 0.85;
                const isHov = hovIdx === i;
                return (
                    <div key={i}
                        onMouseEnter={() => setHovIdx(i)}
                        onMouseLeave={() => setHovIdx(null)}
                        style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}
                    >
                        <span style={{
                            fontFamily: fd, fontSize: 10, fontWeight: 600,
                            color: isHov ? color : P.textMuted,
                            opacity: isHov ? 1 : 0, transform: isHov ? "translateY(0)" : "translateY(4px)",
                            transition: "all 0.2s ease",
                        }}>{v}</span>
                        <div style={{
                            width: "100%", maxWidth: 40,
                            height: `${pct * (height - 40)}px`,
                            background: isHov
                                ? `linear-gradient(180deg, ${color} 0%, ${color}99 100%)`
                                : isHigh
                                    ? `linear-gradient(180deg, ${color} 0%, ${color}BB 100%)`
                                    : `linear-gradient(180deg, ${color}30 0%, ${color}15 100%)`,
                            borderRadius: 8,
                            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                            transform: isHov ? "scaleY(1.04)" : "scaleY(1)",
                            transformOrigin: "bottom",
                            boxShadow: isHov ? `0 4px 12px ${color}30` : "none",
                        }} />
                        <span style={{
                            fontFamily: f, fontSize: 10.5, fontWeight: isHov ? 600 : 450,
                            color: isHov ? color : P.textMuted,
                            transition: "all 0.2s ease",
                        }}>{labels[i]}</span>
                    </div>
                );
            })}
        </div>
    );
}

// ── Donut chart — cleaner with gap ───────────────────
function Donut({ segments, size = 120 }) {
    const total = segments.reduce((a, s) => a + s.value, 0);
    const r = 42, circ = 2 * Math.PI * r;
    const gapAngle = 0.02; // small gap between segments
    let offset = 0;
    return (
        <svg width={size} height={size} viewBox="0 0 100 100">
            {/* Track ring */}
            <circle cx="50" cy="50" r={r} fill="none" stroke={P.bgSubtle} strokeWidth="8" />
            {segments.map((seg, i) => {
                const pct = seg.value / total;
                const dashLen = Math.max(0, (pct - gapAngle) * circ);
                const dashOff = -(offset + gapAngle / 2) * circ;
                offset += pct;
                return <circle key={i} cx="50" cy="50" r={r} fill="none" stroke={seg.color} strokeWidth="8"
                    strokeDasharray={`${dashLen} ${circ - dashLen}`} strokeDashoffset={dashOff}
                    strokeLinecap="round" transform="rotate(-90 50 50)"
                    style={{ transition: "stroke-dasharray 0.8s cubic-bezier(0.16,1,0.3,1)", filter: `drop-shadow(0 1px 2px ${seg.color}30)` }} />;
            })}
            <text x="50" y="46" textAnchor="middle" style={{ fontFamily: fd, fontSize: 20, fontWeight: 700, fill: P.text }}>{total}</text>
            <text x="50" y="59" textAnchor="middle" style={{ fontFamily: f, fontSize: 7.5, fill: P.textMuted, letterSpacing: "0.03em" }}>total tasks</text>
        </svg>
    );
}

// ── Area chart — smooth bezier, no distortion ────────
function AreaChart({ data, labels, color = P.accent, height = 160 }) {
    const [hovIdx, setHovIdx] = useState(null);
    const padX = 28, padT = 16, padB = 28;
    const chartH = height - padT - padB;

    // Use a ref-free approach: compute pixel coords at fixed width ratio
    const w = 500; // use a wider viewBox for crisp rendering
    const h = height;
    const max = Math.max(...data) * 1.08, min = 0;
    const pts = data.map((v, i) => ({
        x: padX + (i / (data.length - 1)) * (w - padX * 2),
        y: padT + (1 - (v - min) / (max - min)) * chartH,
        v,
    }));

    // Smooth cubic bezier path
    const linePath = pts.reduce((acc, p, i) => {
        if (i === 0) return `M${p.x},${p.y}`;
        const prev = pts[i - 1];
        const tension = 0.35;
        const cpx1 = prev.x + (p.x - prev.x) * tension;
        const cpx2 = p.x - (p.x - prev.x) * tension;
        return acc + ` C${cpx1},${prev.y} ${cpx2},${p.y} ${p.x},${p.y}`;
    }, "");

    const areaPath = `${linePath} L${pts[pts.length - 1].x},${h - padB} L${pts[0].x},${h - padB} Z`;

    const uid = `ac-${color.replace("#", "")}`;

    // Horizontal grid lines
    const gridCount = 4;
    const gridLines = Array.from({ length: gridCount }, (_, i) => {
        const y = padT + (i / (gridCount - 1)) * chartH;
        return y;
    });

    return (
        <div style={{ position: "relative" }}>
            <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height, display: "block" }} preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id={uid} x1="0" y1="0" x2="0" y2={h} gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor={color} stopOpacity="0.12" />
                        <stop offset="70%" stopColor={color} stopOpacity="0.03" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                    <filter id={`${uid}-glow`}>
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>

                {/* Grid lines */}
                {gridLines.map((y, i) => (
                    <line key={i} x1={padX} y1={y} x2={w - padX} y2={y}
                        stroke={P.border} strokeWidth="0.8" strokeDasharray="none" opacity="0.5" />
                ))}

                {/* Area fill */}
                <path d={areaPath} fill={`url(#${uid})`} />

                {/* Line — slightly glowing */}
                <path d={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Data points */}
                {pts.map((p, i) => {
                    const isHov = hovIdx === i;
                    const isLast = i === pts.length - 1;
                    return (
                        <g key={i}>
                            {/* Hover column (invisible, for mouse) */}
                            <rect
                                x={i === 0 ? 0 : (pts[i - 1].x + p.x) / 2}
                                y={0} width={i === 0 || i === pts.length - 1 ? padX + (w - padX * 2) / (data.length - 1) / 2 : (pts[Math.min(i + 1, pts.length - 1)].x - pts[Math.max(i - 1, 0)].x) / 2}
                                height={h} fill="transparent"
                                onMouseEnter={() => setHovIdx(i)}
                                onMouseLeave={() => setHovIdx(null)}
                                style={{ cursor: "pointer" }}
                            />
                            {/* Vertical guide on hover */}
                            {isHov && (
                                <line x1={p.x} y1={padT} x2={p.x} y2={h - padB}
                                    stroke={color} strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
                            )}
                            {/* Outer glow ring on hover */}
                            {(isHov || isLast) && (
                                <circle cx={p.x} cy={p.y} r={isHov ? 10 : 6} fill={`${color}10`} stroke="none" />
                            )}
                            {/* Dot */}
                            <circle cx={p.x} cy={p.y} r={isHov ? 5 : isLast ? 4 : 3}
                                fill="#fff" stroke={color} strokeWidth={isHov ? 2.5 : 2}
                                style={{ transition: "r 0.2s ease" }} />
                            {/* Tooltip on hover */}
                            {isHov && (
                                <g>
                                    <rect x={p.x - 22} y={p.y - 30} width="44" height="22" rx="6"
                                        fill={P.text} />
                                    <text x={p.x} y={p.y - 15} textAnchor="middle"
                                        style={{ fontFamily: fd, fontSize: 11, fontWeight: 700, fill: "#fff" }}>
                                        {p.v}
                                    </text>
                                </g>
                            )}
                        </g>
                    );
                })}

                {/* X-axis labels */}
                {pts.map((p, i) => (
                    <text key={i} x={p.x} y={h - 6} textAnchor="middle"
                        style={{
                            fontFamily: f, fontSize: 10.5,
                            fill: hovIdx === i ? color : P.textMuted,
                            fontWeight: hovIdx === i ? 600 : 400,
                            transition: "fill 0.2s",
                        }}>
                        {labels[i]}
                    </text>
                ))}
            </svg>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// SIDEBAR — Redesigned
// ═══════════════════════════════════════════════════════
function Sidebar({ active, setActive }) {
    const [hovered, setHovered] = useState(null);

    const mainNav = [
        { key: "dashboard", icon: "home", label: "Dashboard" },
        { key: "tasks", icon: "tasks", label: "Tasks", badge: 12 },
        { key: "team", icon: "users", label: "Team" },
        { key: "analytics", icon: "chart", label: "Analytics" },
    ];
    const fieldNav = [
        { key: "locations", icon: "map", label: "Locations" },
        { key: "photos", icon: "photo", label: "Photos" },
    ];
    const toolsNav = [
        { key: "ai", icon: "bot", label: "AI Assistant", glow: true },
        { key: "settings", icon: "settings", label: "Settings" },
    ];

    const NavItem = ({ item }) => {
        const isAct = active === item.key;
        const isHov = hovered === item.key;
        return (
            <button
                onClick={() => setActive(item.key)}
                onMouseEnter={() => setHovered(item.key)}
                onMouseLeave={() => setHovered(null)}
                style={{
                    display: "flex", alignItems: "center", gap: 11, padding: "9px 12px", width: "100%",
                    borderRadius: 10, border: "none", cursor: "pointer", position: "relative",
                    background: isAct ? "rgba(34,199,126,0.12)" : isHov ? "rgba(255,255,255,0.05)" : "transparent",
                    transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
                }}
            >
                {/* Active indicator bar */}
                {isAct && (
                    <div style={{
                        position: "absolute", left: -14, top: "50%", transform: "translateY(-50%)",
                        width: 3, height: 20, borderRadius: "0 3px 3px 0",
                        background: P.green, boxShadow: `0 0 12px ${P.green}60`,
                    }} />
                )}
                {/* Icon container */}
                <div style={{
                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: isAct ? "rgba(34,199,126,0.15)" : "transparent",
                    transition: "all 0.2s ease",
                }}>
                    <I n={item.icon} sz={17} col={isAct ? P.green : isHov ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)"} sw={isAct ? 2 : 1.6} />
                </div>
                <span style={{
                    fontFamily: f, fontSize: 13.5, letterSpacing: "-0.01em",
                    fontWeight: isAct ? 600 : 450,
                    color: isAct ? "#fff" : isHov ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.5)",
                    transition: "color 0.2s ease",
                }}>
                    {item.label}
                </span>
                {item.badge && (
                    <span style={{
                        marginLeft: "auto", fontFamily: fd, fontSize: 10, fontWeight: 700,
                        color: "#fff", background: P.green,
                        padding: "2px 8px", borderRadius: 10, minWidth: 20, textAlign: "center",
                        boxShadow: `0 2px 8px ${P.green}40`,
                    }}>{item.badge}</span>
                )}
                {item.glow && !isAct && (
                    <span style={{
                        marginLeft: "auto", width: 6, height: 6, borderRadius: 3,
                        background: P.green, boxShadow: `0 0 8px ${P.green}80`,
                        animation: "pulse 2s infinite",
                    }} />
                )}
            </button>
        );
    };

    const SectionLabel = ({ children }) => (
        <div style={{
            fontFamily: f, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.25)",
            textTransform: "uppercase", letterSpacing: "0.08em",
            padding: "16px 12px 6px",
        }}>
            {children}
        </div>
    );

    return (
        <aside style={{
            width: 260, background: P.sidebar, display: "flex", flexDirection: "column",
            flexShrink: 0, position: "relative", overflow: "hidden",
            borderRight: "1px solid rgba(255,255,255,0.04)",
        }}>
            {/* Background texture */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(ellipse at 20% 0%, rgba(34,199,126,0.06) 0%, transparent 60%)",
            }} />
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 200, pointerEvents: "none",
                background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.15) 100%)",
            }} />

            {/* Logo area */}
            <div style={{ padding: "22px 20px 0", position: "relative" }}>
                <div style={{ marginBottom: 22 }}>
                    <Logo variant="full" theme="dark" size={34} wordSize={16} gap={11} subtitle="Farm Operations" />
                </div>

                {/* Sidebar search */}
                <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "8px 12px", borderRadius: 9,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)",
                    marginBottom: 6, cursor: "pointer", transition: "all 0.2s",
                }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
                    onClick={() => setActive("dashboard")}
                >
                    <I n="search" sz={14} col="rgba(255,255,255,0.3)" sw={1.8} />
                    <span style={{ fontFamily: f, fontSize: 12.5, color: "rgba(255,255,255,0.3)", flex: 1 }}>Search...</span>
                    <span style={{
                        fontFamily: fd, fontSize: 9, color: "rgba(255,255,255,0.2)",
                        background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 4,
                        border: "1px solid rgba(255,255,255,0.06)",
                    }}>⌘K</span>
                </div>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 14px", overflow: "auto", position: "relative" }}>
                <SectionLabel>Overview</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {mainNav.map(item => <NavItem key={item.key} item={item} />)}
                </div>

                <SectionLabel>Field Ops</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {fieldNav.map(item => <NavItem key={item.key} item={item} />)}
                </div>

                <SectionLabel>Tools</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {toolsNav.map(item => <NavItem key={item.key} item={item} />)}
                </div>

                {/* Upgrade card */}
                <div style={{
                    margin: "auto 2px 0", padding: "16px",
                    borderRadius: 14, position: "relative", overflow: "hidden",
                    background: "linear-gradient(145deg, rgba(34,199,126,0.12) 0%, rgba(26,107,79,0.08) 100%)",
                    border: "1px solid rgba(34,199,126,0.12)",
                }}>
                    <div style={{ position: "absolute", top: -10, right: -10, width: 50, height: 50, borderRadius: "50%", background: "rgba(34,199,126,0.08)" }} />
                    <div style={{ position: "relative" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                            <I n="zap" sz={14} col={P.green} />
                            <span style={{ fontFamily: fd, fontSize: 12, fontWeight: 700, color: P.green }}>Pro AI Plan</span>
                        </div>
                        <p style={{ fontFamily: f, fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.4, margin: "0 0 12px" }}>
                            Unlock voice commands, advanced analytics, and unlimited AI queries.
                        </p>
                        <button style={{
                            width: "100%", padding: "8px 0", borderRadius: 8, border: "none",
                            background: `linear-gradient(135deg, ${P.accent}, ${P.green})`,
                            fontFamily: f, fontSize: 12, fontWeight: 600, color: "#fff",
                            cursor: "pointer", boxShadow: `0 4px 12px rgba(26,107,79,0.3)`,
                            transition: "all 0.2s ease",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(26,107,79,0.4)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(26,107,79,0.3)"; }}
                        >Upgrade Now</button>
                    </div>
                </div>
            </nav>

            {/* User profile */}
            <div style={{
                margin: "12px 14px 16px", padding: "12px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", gap: 10,
                cursor: "pointer", transition: "all 0.2s ease",
            }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                onClick={() => setActive("settings")}
            >
                <div style={{ position: "relative" }}>
                    <Avatar initials="JK" size={36} radius={11} color={P.green} fontSize={13} />
                    <div style={{
                        position: "absolute", bottom: -1, right: -1,
                        width: 10, height: 10, borderRadius: 5,
                        background: P.green, border: `2px solid ${P.sidebar}`,
                        boxShadow: `0 0 6px ${P.green}60`,
                    }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: f, fontSize: 13, fontWeight: 600, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>James Kariuki</div>
                    <div style={{ fontFamily: f, fontSize: 11, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: 4 }}>
                        Farm Manager
                    </div>
                </div>
                <button onClick={e => { e.stopPropagation(); }} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 6, transition: "all 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                    onMouseLeave={e => e.currentTarget.style.background = "none"}
                >
                    <I n="logout" sz={15} col="rgba(255,255,255,0.3)" />
                </button>
            </div>

            {/* Pulse animation keyframe */}
            <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
        </aside>
    );
}

// ═══════════════════════════════════════════════════════
// TOP HEADER
// ═══════════════════════════════════════════════════════
function TopBar({ title, subtitle }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px 12px", borderBottom: `1px solid ${P.border}`, background: P.card }}>
            <div>
                <h1 style={{ fontFamily: fd, fontSize: 20, fontWeight: 700, color: P.text, margin: 0, letterSpacing: "-0.02em" }}>{title}</h1>
                {subtitle && <p style={{ fontFamily: f, fontSize: 13, color: P.textMuted, margin: "2px 0 0" }}>{subtitle}</p>}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {/* Search */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: P.bgOff, border: `1px solid ${P.border}`, borderRadius: 10, width: 220 }}>
                    <I n="search" sz={16} col={P.textMuted} />
                    <span style={{ fontFamily: f, fontSize: 13, color: P.textMuted }}>Search...</span>
                    <span style={{ marginLeft: "auto", fontFamily: f, fontSize: 10, color: P.textMuted, background: P.card, border: `1px solid ${P.border}`, padding: "1px 6px", borderRadius: 4 }}>⌘K</span>
                </div>
                {/* Notifications */}
                <button style={{ ...ss.iconBtn, position: "relative" }}>
                    <I n="bell" sz={18} />
                    <div style={{ position: "absolute", top: 7, right: 7, width: 7, height: 7, borderRadius: 4, background: P.red, border: `2px solid ${P.card}` }} />
                </button>
                {/* Date */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", background: P.bgOff, borderRadius: 10, border: `1px solid ${P.border}` }}>
                    <I n="calendar" sz={15} col={P.textMuted} />
                    <span style={{ fontFamily: f, fontSize: 13, fontWeight: 500, color: P.textSoft }}>Mar 8, 2026</span>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// DASHBOARD VIEW
// ═══════════════════════════════════════════════════════
function DashboardView() {
    const stats = [
        { label: "Active Tasks", value: "127", change: "+12%", up: true, icon: "tasks", color: P.accent, bg: "rgba(26,107,79,0.06)", spark: [20, 35, 28, 45, 32, 50, 42, 55, 48, 60, 52, 58] },
        { label: "Team Members", value: "34", change: "+3", up: true, icon: "users", color: P.blue, bg: "rgba(37,99,235,0.06)", spark: [24, 26, 25, 28, 27, 30, 29, 31, 30, 32, 33, 34] },
        { label: "Completion Rate", value: "94.2%", change: "+2.1%", up: true, icon: "trendUp", color: P.green, bg: "rgba(34,199,126,0.06)", spark: [82, 85, 88, 86, 90, 89, 91, 92, 91, 93, 94, 94] },
        { label: "Photos Captured", value: "1,847", change: "+156", up: true, icon: "camera", color: P.orange, bg: "rgba(232,103,60,0.06)", spark: [100, 120, 140, 135, 165, 150, 180, 170, 195, 185, 200, 210] },
    ];

    const activity = [
        { user: "SK", name: "Sarah Kamau", action: "completed inspection at", target: "Meru Site A", time: "3m ago", color: P.green },
        { user: "JM", name: "John Mwangi", action: "uploaded 5 photos for", target: "Nyeri Fence Repair", time: "12m ago", color: P.blue },
        { user: "AO", name: "Amina Osei", action: "flagged issue at", target: "Plot C2 — low moisture", time: "28m ago", color: P.orange },
        { user: "PK", name: "Peter Kimani", action: "started task", target: "Cattle vaccination — Lot 3", time: "45m ago", color: P.accent },
        { user: "GW", name: "Grace Wanjiru", action: "submitted report for", target: "Weekly safety audit", time: "1h ago", color: "#7C3AED" },
        { user: "DK", name: "David Kipchoge", action: "synced offline data from", target: "Kajiado Field Office", time: "2h ago", color: P.accent },
    ];

    const taskDonut = [
        { label: "Completed", value: 94, color: P.green },
        { label: "In Progress", value: 23, color: P.accent },
        { label: "Overdue", value: 7, color: P.red },
        { label: "Pending", value: 13, color: P.textMuted },
    ];

    return (
        <div style={{ padding: "24px 32px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Stat Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {stats.map((s, i) => (
                    <div key={i} style={{ ...ss.card, padding: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <I n={s.icon} sz={20} col={s.color} sw={2} />
                            </div>
                            <Spark data={s.spark} color={s.color} />
                        </div>
                        <div style={{ fontFamily: fd, fontSize: 28, fontWeight: 700, color: P.text, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
                            <span style={{ fontFamily: f, fontSize: 12.5, color: P.textMuted }}>{s.label}</span>
                            <span style={{ fontFamily: fd, fontSize: 11.5, fontWeight: 600, color: s.up ? P.green : P.red, display: "flex", alignItems: "center", gap: 2 }}>
                                <I n={s.up ? "arrowUp" : "arrowDown"} sz={12} col={s.up ? P.green : P.red} sw={2.5} /> {s.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Middle row — Chart + Weather + Tasks donut */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 300px 260px", gap: 16 }}>
                {/* Tasks over time */}
                <div style={{ ...ss.card, padding: "22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                        <div>
                            <h3 style={ss.cardTitle}>Task Completions</h3>
                            <p style={{ fontFamily: f, fontSize: 12, color: P.textMuted, margin: "2px 0 0" }}>Last 8 weeks</p>
                        </div>
                        <div style={{ display: "flex", gap: 4 }}>
                            {["8W", "3M", "6M"].map((t, i) => (
                                <button key={t} style={{ fontFamily: f, fontSize: 11, fontWeight: i === 0 ? 600 : 500, color: i === 0 ? P.accent : P.textMuted, background: i === 0 ? "rgba(26,107,79,0.08)" : "transparent", border: "none", padding: "4px 10px", borderRadius: 6, cursor: "pointer" }}>{t}</button>
                            ))}
                        </div>
                    </div>
                    <AreaChart
                        data={[42, 56, 48, 72, 65, 84, 78, 94]}
                        labels={["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"]}
                        color={P.accent}
                    />
                </div>

                {/* Weather */}
                <div style={{ ...ss.card, padding: 0, overflow: "hidden" }}>
                    <div style={{ position: "relative", padding: "22px 20px 18px", color: "#fff", overflow: "hidden" }}>
                        <img
                            src={IMG.weather}
                            alt="Weather"
                            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5) saturate(1.3)" }}
                            onError={e => { e.target.style.display = "none"; e.target.parentElement.style.background = "linear-gradient(145deg, #1A6B4F 0%, #2D8B6A 50%, #22C77E 100%)"; }}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, rgba(26,107,79,0.7) 0%, rgba(34,199,126,0.5) 100%)" }} />
                        <div style={{ position: "relative" }}>
                            <p style={{ fontFamily: f, fontSize: 12, opacity: 0.9, margin: "0 0 3px", display: "flex", alignItems: "center", gap: 4 }}>
                                <I n="mapPin" sz={12} col="rgba(255,255,255,0.9)" sw={2} /> Nyeri County
                            </p>
                            <div style={{ fontFamily: fd, fontSize: 42, fontWeight: 700, lineHeight: 1 }}>24°C</div>
                            <p style={{ fontFamily: f, fontSize: 13, opacity: 0.85, margin: "4px 0 0" }}>Partly Cloudy</p>
                        </div>
                    </div>
                    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                        {[
                            { icon: "droplet", label: "Humidity", val: "67%" },
                            { icon: "wind", label: "Wind", val: "12 km/h" },
                            { icon: "sun", label: "UV Index", val: "Moderate" },
                        ].map((w, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <I n={w.icon} sz={16} col={P.textMuted} />
                                    <span style={{ fontFamily: f, fontSize: 13, color: P.textSoft }}>{w.label}</span>
                                </div>
                                <span style={{ fontFamily: fd, fontSize: 13, fontWeight: 600, color: P.text }}>{w.val}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Task breakdown donut */}
                <div style={{ ...ss.card, padding: "22px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3 style={{ ...ss.cardTitle, alignSelf: "flex-start" }}>Task Status</h3>
                    <div style={{ margin: "12px 0 16px" }}>
                        <Donut segments={taskDonut} size={130} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                        {taskDonut.map((s, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <div style={{ width: 8, height: 8, borderRadius: 2, background: s.color, flexShrink: 0 }} />
                                <span style={{ fontFamily: f, fontSize: 12, color: P.textSoft, flex: 1 }}>{s.label}</span>
                                <span style={{ fontFamily: fd, fontSize: 12, fontWeight: 600, color: P.text }}>{s.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom row — Activity feed + Weekly bar chart */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 16 }}>
                {/* Activity */}
                <div style={{ ...ss.card, padding: "22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                        <h3 style={ss.cardTitle}>Live Activity</h3>
                        <span style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: f, fontSize: 11, color: P.green, fontWeight: 500 }}>
                            <div style={{ width: 6, height: 6, borderRadius: 3, background: P.green }} /> Real-time
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {activity.map((a, i) => (
                            <div key={i} style={{
                                display: "flex", alignItems: "center", gap: 12, padding: "11px 0",
                                borderBottom: i < activity.length - 1 ? `1px solid ${P.border}` : "none",
                            }}>
                                <Avatar initials={a.user} size={34} radius={9} color={a.color} fontSize={11} />
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontFamily: f, fontSize: 13, color: P.text, lineHeight: 1.4 }}>
                                        <span style={{ fontWeight: 600 }}>{a.name}</span>{" "}
                                        <span style={{ color: P.textSoft }}>{a.action}</span>{" "}
                                        <span style={{ fontWeight: 600, color: P.accent }}>{a.target}</span>
                                    </div>
                                </div>
                                <span style={{ fontFamily: f, fontSize: 11, color: P.textMuted, flexShrink: 0, whiteSpace: "nowrap" }}>{a.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weekly chart */}
                <div style={{ ...ss.card, padding: "22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                        <h3 style={ss.cardTitle}>Weekly Summary</h3>
                        <span style={{ fontFamily: fd, fontSize: 18, fontWeight: 700, color: P.accent }}>486</span>
                    </div>
                    <BarChart data={[52, 68, 45, 82, 73, 94, 72]} labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} />
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// TASKS VIEW
// ═══════════════════════════════════════════════════════
function TasksView() {
    const [tab, setTab] = useState("all");
    const tasks = [
        { title: "Inspect fence perimeter — Section A", assignee: "James K.", avatar: "JK", priority: "high", due: "Today, 9 AM", location: "North Field", progress: 0, status: "pending", photo: true },
        { title: "Apply fertilizer to maize plot B4", assignee: "Sarah K.", avatar: "SK", priority: "medium", due: "Today, 11 AM", location: "Plot B4", progress: 60, status: "progress", photo: false },
        { title: "Check irrigation valves — Main pump", assignee: "John M.", avatar: "JM", priority: "low", due: "Today, 2 PM", location: "Pump House", progress: 0, status: "pending", photo: true },
        { title: "Record cattle health — Lot 7", assignee: "Peter K.", avatar: "PK", priority: "high", due: "Today, 4 PM", location: "Livestock Area", progress: 25, status: "progress", photo: true },
        { title: "Update crop growth measurement log", assignee: "Amina O.", avatar: "AO", priority: "medium", due: "Today, 5:30 PM", location: "Office", progress: 0, status: "pending", photo: false },
        { title: "Safety equipment audit — Main store", assignee: "Grace W.", avatar: "GW", priority: "high", due: "Tomorrow, 8 AM", location: "Warehouse", progress: 0, status: "pending", photo: true },
        { title: "Soil sample collection — Zones 1-4", assignee: "David K.", avatar: "DK", priority: "medium", due: "Tomorrow, 10 AM", location: "Test Fields", progress: 100, status: "done", photo: false },
        { title: "Repair greenhouse ventilation fans", assignee: "John M.", avatar: "JM", priority: "low", due: "Mar 10", location: "Greenhouse B", progress: 100, status: "done", photo: false },
    ];

    const pc = { high: P.red, medium: P.orange, low: P.accent };
    const pb = { high: P.redSoft, medium: P.yellowSoft, low: P.greenSoft };
    const sc = { pending: P.textMuted, progress: P.accent, done: P.green };
    const sl = { pending: "Pending", progress: "In Progress", done: "Completed" };

    const filtered = tab === "all" ? tasks : tasks.filter(t => t.status === tab);

    return (
        <div style={{ padding: "24px 32px 40px" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 4, background: P.bgOff, borderRadius: 10, padding: 3 }}>
                    {[["all", "All"], ["pending", "Pending"], ["progress", "In Progress"], ["done", "Completed"]].map(([k, l]) => (
                        <button key={k} onClick={() => setTab(k)} style={{
                            fontFamily: f, fontSize: 13, fontWeight: tab === k ? 600 : 500,
                            color: tab === k ? P.text : P.textMuted, background: tab === k ? P.card : "transparent",
                            border: "none", padding: "8px 16px", borderRadius: 8, cursor: "pointer",
                            boxShadow: tab === k ? "0 1px 4px rgba(0,0,0,0.06)" : "none", transition: "all 0.2s",
                        }}>{l}</button>
                    ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                    <button style={{ ...ss.btn, background: P.bgOff, color: P.textSoft }}><I n="filter" sz={15} col={P.textSoft} /> Filter</button>
                    <button style={{ ...ss.btn, background: P.accent, color: "#fff" }}><I n="plus" sz={15} col="#fff" sw={2.5} /> New Task</button>
                </div>
            </div>

            {/* Table */}
            <div style={{ ...ss.card, padding: 0, overflow: "hidden" }}>
                {/* Header row */}
                <div style={{ display: "grid", gridTemplateColumns: "2fr 140px 100px 100px 120px 80px", padding: "12px 20px", borderBottom: `1px solid ${P.border}`, background: P.bgOff }}>
                    {["Task", "Assignee", "Priority", "Status", "Due Date", "Progress"].map(h => (
                        <span key={h} style={{ fontFamily: f, fontSize: 11, fontWeight: 600, color: P.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</span>
                    ))}
                </div>
                {/* Rows */}
                {filtered.map((t, i) => (
                    <div key={i} style={{
                        display: "grid", gridTemplateColumns: "2fr 140px 100px 100px 120px 80px",
                        padding: "14px 20px", alignItems: "center",
                        borderBottom: i < filtered.length - 1 ? `1px solid ${P.border}` : "none",
                        transition: "background 0.15s",
                        cursor: "pointer",
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = P.bgOff}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                        {/* Task name */}
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${t.status === "done" ? P.green : P.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: t.status === "done" ? P.green : "transparent" }}>
                                {t.status === "done" && <I n="check" sz={12} col="#fff" sw={3} />}
                            </div>
                            <div>
                                <div style={{ fontFamily: f, fontSize: 13.5, fontWeight: 600, color: t.status === "done" ? P.textMuted : P.text, textDecoration: t.status === "done" ? "line-through" : "none" }}>{t.title}</div>
                                <div style={{ fontFamily: f, fontSize: 11.5, color: P.textMuted, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                                    <I n="mapPin" sz={11} col={P.textMuted} /> {t.location}
                                    {t.photo && <><span style={{ margin: "0 3px" }}>·</span><I n="camera" sz={11} col={P.accent} /> <span style={{ color: P.accent, fontWeight: 500 }}>Photo</span></>}
                                </div>
                            </div>
                        </div>
                        {/* Assignee */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Avatar initials={t.avatar} size={26} radius={8} fontSize={10} />
                            <span style={{ fontFamily: f, fontSize: 13, color: P.textSoft }}>{t.assignee}</span>
                        </div>
                        {/* Priority */}
                        <span style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: pc[t.priority], background: pb[t.priority], padding: "3px 10px", borderRadius: 6, textTransform: "capitalize", display: "inline-block", width: "fit-content" }}>{t.priority}</span>
                        {/* Status */}
                        <span style={{ fontFamily: f, fontSize: 12, fontWeight: 500, color: sc[t.status], display: "flex", alignItems: "center", gap: 5 }}>
                            <div style={{ width: 6, height: 6, borderRadius: 3, background: sc[t.status] }} /> {sl[t.status]}
                        </span>
                        {/* Due */}
                        <span style={{ fontFamily: f, fontSize: 13, color: P.textSoft }}>{t.due}</span>
                        {/* Progress */}
                        <div>
                            <div style={{ height: 4, background: P.bgSubtle, borderRadius: 2, overflow: "hidden" }}>
                                <div style={{ height: 4, width: `${t.progress}%`, background: t.progress === 100 ? P.green : P.accent, borderRadius: 2, transition: "width 0.5s" }} />
                            </div>
                            <span style={{ fontFamily: fd, fontSize: 10, color: P.textMuted, marginTop: 2, display: "block" }}>{t.progress}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// TEAM VIEW
// ═══════════════════════════════════════════════════════
function TeamView() {
    const members = [
        { name: "James Kariuki", role: "Farm Manager", avatar: "JK", status: "online", tasks: 8, completed: 142, rating: 4.9, color: P.accent },
        { name: "Sarah Kamau", role: "Field Supervisor", avatar: "SK", status: "online", tasks: 5, completed: 98, rating: 4.8, color: P.blue },
        { name: "John Mwangi", role: "Technician", avatar: "JM", status: "online", tasks: 3, completed: 75, rating: 4.7, color: P.orange },
        { name: "Peter Kimani", role: "Livestock Handler", avatar: "PK", status: "away", tasks: 6, completed: 89, rating: 4.6, color: "#7C3AED" },
        { name: "Amina Osei", role: "Agronomist", avatar: "AO", status: "online", tasks: 4, completed: 110, rating: 4.9, color: P.green },
        { name: "Grace Wanjiru", role: "Safety Officer", avatar: "GW", status: "offline", tasks: 2, completed: 67, rating: 4.5, color: P.red },
        { name: "David Kipchoge", role: "Equipment Manager", avatar: "DK", status: "online", tasks: 7, completed: 83, rating: 4.7, color: P.accent },
        { name: "Faith Njeri", role: "Data Analyst", avatar: "FN", status: "online", tasks: 1, completed: 52, rating: 4.8, color: P.blue },
    ];
    const statusCol = { online: P.green, away: P.yellow, offline: P.textMuted };

    return (
        <div style={{ padding: "24px 32px 40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: fd, fontSize: 14, fontWeight: 600, color: P.text }}>{members.length} members</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: f, fontSize: 12, color: P.green }}>
                        <div style={{ width: 6, height: 6, borderRadius: 3, background: P.green }} /> {members.filter(m => m.status === "online").length} online
                    </span>
                </div>
                <button style={{ ...ss.btn, background: P.accent, color: "#fff" }}><I n="plus" sz={15} col="#fff" sw={2.5} /> Invite Member</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                {members.map((m, i) => (
                    <div key={i} style={{ ...ss.card, padding: "20px", cursor: "pointer", transition: "all 0.3s ease" }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = P.shadowMd; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                            <div style={{ position: "relative" }}>
                                <Avatar initials={m.avatar} size={44} radius={14} color={m.color} />
                                <div style={{ position: "absolute", bottom: -1, right: -1, width: 12, height: 12, borderRadius: 6, background: statusCol[m.status], border: `2.5px solid ${P.card}` }} />
                            </div>
                            <div>
                                <div style={{ fontFamily: f, fontSize: 14, fontWeight: 600, color: P.text }}>{m.name}</div>
                                <div style={{ fontFamily: f, fontSize: 12, color: P.textMuted }}>{m.role}</div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                            {[
                                { label: "Active", val: m.tasks },
                                { label: "Done", val: m.completed },
                                { label: "Rating", val: m.rating },
                            ].map((s, j) => (
                                <div key={j} style={{ textAlign: "center", padding: "8px 0", background: P.bgOff, borderRadius: 8 }}>
                                    <div style={{ fontFamily: fd, fontSize: 16, fontWeight: 700, color: P.text }}>{s.val}</div>
                                    <div style={{ fontFamily: f, fontSize: 10, color: P.textMuted, marginTop: 1 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// ANALYTICS VIEW
// ═══════════════════════════════════════════════════════
function AnalyticsView() {
    return (
        <div style={{ padding: "24px 32px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Top metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                    { label: "Avg. Completion Time", value: "2.4 hrs", sub: "↓ 18% from last month", color: P.green },
                    { label: "Tasks Per Day", value: "32.6", sub: "↑ 24% from last month", color: P.accent },
                    { label: "Photo Compliance", value: "91.3%", sub: "↑ 5% from last month", color: P.blue },
                ].map((m, i) => (
                    <div key={i} style={{ ...ss.card, padding: "22px" }}>
                        <div style={{ fontFamily: f, fontSize: 13, color: P.textMuted, marginBottom: 8 }}>{m.label}</div>
                        <div style={{ fontFamily: fd, fontSize: 32, fontWeight: 700, color: P.text, letterSpacing: "-0.02em" }}>{m.value}</div>
                        <div style={{ fontFamily: f, fontSize: 12, color: m.color, marginTop: 4, fontWeight: 500 }}>{m.sub}</div>
                    </div>
                ))}
            </div>

            {/* Charts row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ ...ss.card, padding: "22px" }}>
                    <h3 style={ss.cardTitle}>Monthly Task Volume</h3>
                    <div style={{ marginTop: 16 }}>
                        <AreaChart
                            data={[180, 220, 195, 280, 310, 340, 290, 380, 420, 460, 440, 486]}
                            labels={["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]}
                            color={P.accent}
                            height={180}
                        />
                    </div>
                </div>

                <div style={{ ...ss.card, padding: "22px" }}>
                    <h3 style={ss.cardTitle}>Tasks by Category</h3>
                    <div style={{ marginTop: 16 }}>
                        <BarChart
                            data={[84, 62, 47, 38, 29, 18]}
                            labels={["Inspect", "Maintain", "Report", "Photo", "Repair", "Other"]}
                            color={P.blue}
                            height={180}
                        />
                    </div>
                </div>
            </div>

            {/* Top performers */}
            <div style={{ ...ss.card, padding: "22px" }}>
                <h3 style={ss.cardTitle}>Top Performers — This Month</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginTop: 16 }}>
                    {[
                        { name: "Amina Osei", val: "110", avatar: "AO", color: P.green },
                        { name: "Sarah Kamau", val: "98", avatar: "SK", color: P.blue },
                        { name: "Peter Kimani", val: "89", avatar: "PK", color: "#7C3AED" },
                        { name: "David Kipchoge", val: "83", avatar: "DK", color: P.accent },
                        { name: "John Mwangi", val: "75", avatar: "JM", color: P.orange },
                    ].map((p, i) => (
                        <div key={i} style={{ textAlign: "center", padding: "16px 12px", background: P.bgOff, borderRadius: 12 }}>
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                                {i === 0 && <span style={{ fontFamily: f, fontSize: 16, position: "absolute", marginTop: -8 }}>🏆</span>}
                                <div style={{ marginTop: i === 0 ? 10 : 0 }}>
                                    <Avatar initials={p.avatar} size={44} radius={14} color={p.color} />
                                </div>
                            </div>
                            <div style={{ fontFamily: f, fontSize: 13, fontWeight: 600, color: P.text }}>{p.name}</div>
                            <div style={{ fontFamily: fd, fontSize: 20, fontWeight: 700, color: P.accent, marginTop: 2 }}>{p.val}</div>
                            <div style={{ fontFamily: f, fontSize: 10, color: P.textMuted }}>tasks completed</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// AI ASSISTANT VIEW
// ═══════════════════════════════════════════════════════
function AIView() {
    const [input, setInput] = useState("");
    const msgs = [
        { role: "ai", text: "Good morning, James! Here's your daily briefing:\n\n• 12 active tasks today, 3 are high priority\n• Weather: 24°C, partly cloudy — great for outdoor work\n• Sarah completed 5 inspections yesterday\n• Alert: Low soil moisture detected in Plot C2\n\nWhat would you like to focus on?" },
        { role: "user", text: "Show me the overdue tasks and who's responsible" },
        { role: "ai", text: "You have 7 overdue tasks across 3 team members:\n\n1. **Fence repair — Section D** → Peter Kimani (2 days late)\n2. **Greenhouse ventilation** → John Mwangi (1 day late)\n3. **Water quality test** → James Kariuki (today)\n\n4 others are only a few hours behind schedule. Would you like me to send reminders to the team?" },
        { role: "user", text: "Yes, send reminders and reassign the fence repair to David" },
        { role: "ai", text: "Done! I've:\n\n✓ Sent push notifications to Peter, John, and yourself\n✓ Reassigned \"Fence repair — Section D\" to David Kipchoge\n✓ Updated the task timeline\n\nDavid has been notified and confirmed via voice. Anything else?" },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Chat */}
            <div style={{ flex: 1, overflow: "auto", padding: "24px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
                {msgs.map((m, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "100%" }}>
                        <div style={{ display: "flex", gap: 10, maxWidth: 640, alignItems: "flex-start" }}>
                            {m.role === "ai" && (
                                <div style={{ flexShrink: 0, marginTop: 2 }}>
                                    <LogoMark size={32} />
                                </div>
                            )}
                            <div style={{
                                padding: "14px 18px", borderRadius: 16,
                                background: m.role === "user" ? P.accent : P.card,
                                color: m.role === "user" ? "#fff" : P.text,
                                border: m.role === "ai" ? `1px solid ${P.border}` : "none",
                                borderBottomRightRadius: m.role === "user" ? 4 : 16,
                                borderBottomLeftRadius: m.role === "ai" ? 4 : 16,
                                fontFamily: f, fontSize: 14, lineHeight: 1.6,
                                whiteSpace: "pre-line",
                                boxShadow: m.role === "ai" ? "0 1px 4px rgba(0,0,0,0.02)" : "none",
                            }}>
                                {m.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div style={{ padding: "16px 32px 24px", borderTop: `1px solid ${P.border}`, background: P.card }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: P.bgOff, border: `1px solid ${P.border}`, borderRadius: 14 }}>
                        <input
                            value={input} onChange={e => setInput(e.target.value)}
                            placeholder="Ask GroundBase AI anything..."
                            style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: f, fontSize: 14, color: P.text }}
                        />
                        <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4, opacity: 0.5 }}>
                            <I n="mic" sz={18} col={P.accent} />
                        </button>
                    </div>
                    <button style={{ width: 44, height: 44, borderRadius: 14, background: P.accent, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(26,107,79,0.25)" }}>
                        <I n="send" sz={18} col="#fff" sw={2} />
                    </button>
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                    {["Daily briefing", "Task summary", "Weather forecast", "Team performance"].map((q, i) => (
                        <button key={i} style={{ fontFamily: f, fontSize: 12, color: P.accent, background: "rgba(26,107,79,0.06)", border: `1px solid rgba(26,107,79,0.1)`, borderRadius: 20, padding: "5px 14px", cursor: "pointer", fontWeight: 500, transition: "all 0.2s" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(26,107,79,0.12)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(26,107,79,0.06)"; }}
                        >{q}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// LOCATIONS VIEW
// ═══════════════════════════════════════════════════════
function LocationsView() {
    const [selected, setSelected] = useState(0);
    const sites = [
        { name: "Nyeri Main Farm", type: "Crop Farm", area: "240 ha", workers: 14, tasks: 18, status: "active", lat: "-0.4167", lng: "36.9500", color: P.accent,
          zones: [{ name: "North Field", crop: "Maize", health: 92 }, { name: "Plot B4", crop: "Wheat", health: 78 }, { name: "South Orchard", crop: "Avocado", health: 96 }, { name: "Greenhouse A", crop: "Tomatoes", health: 88 }] },
        { name: "Meru Livestock Ranch", type: "Livestock", area: "180 ha", workers: 8, tasks: 9, status: "active", lat: "0.0500", lng: "37.6500", color: P.blue,
          zones: [{ name: "Lot 1-3", crop: "Dairy Cattle", health: 94 }, { name: "Lot 4-6", crop: "Beef Cattle", health: 90 }, { name: "Lot 7", crop: "Goats", health: 85 }] },
        { name: "Kajiado Field Office", type: "Operations Hub", area: "5 ha", workers: 4, tasks: 3, status: "active", lat: "-1.8500", lng: "36.7833", color: P.orange,
          zones: [{ name: "Warehouse", crop: "Storage", health: 100 }, { name: "Equipment Yard", crop: "Machinery", health: 76 }] },
        { name: "Nakuru Extension", type: "Mixed Farm", area: "120 ha", workers: 6, tasks: 7, status: "away", lat: "-0.3031", lng: "36.0800", color: "#7C3AED",
          zones: [{ name: "Section A", crop: "Maize", health: 82 }, { name: "Section B", crop: "Beans", health: 70 }, { name: "Poultry Unit", crop: "Layers", health: 91 }] },
    ];
    const site = sites[selected];
    const healthCol = (v) => v >= 90 ? P.green : v >= 75 ? P.yellow : P.red;

    return (
        <div style={{ padding: "24px 32px 40px", display: "flex", gap: 20, height: "calc(100vh - 72px)" }}>
            {/* Left — site list */}
            <div style={{ width: 320, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontFamily: fd, fontSize: 14, fontWeight: 600, color: P.text }}>{sites.length} sites</span>
                    <button style={{ ...ss.btn, background: P.accent, color: "#fff", padding: "7px 14px" }}><I n="plus" sz={14} col="#fff" sw={2.5} /> Add Site</button>
                </div>
                {sites.map((s, i) => (
                    <div key={i} onClick={() => setSelected(i)} style={{
                        ...ss.card, padding: "16px", cursor: "pointer",
                        borderColor: selected === i ? P.accent : P.border,
                        boxShadow: selected === i ? `0 0 0 2px rgba(26,107,79,0.1)` : "none",
                        transition: "all 0.2s",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${s.color}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <I n="mapPin" sz={18} col={s.color} sw={2} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontFamily: f, fontSize: 14, fontWeight: 600, color: P.text }}>{s.name}</div>
                                <div style={{ fontFamily: f, fontSize: 12, color: P.textMuted }}>{s.type} · {s.area}</div>
                            </div>
                            <div style={{ width: 8, height: 8, borderRadius: 4, background: s.status === "active" ? P.green : P.yellow }} />
                        </div>
                        <div style={{ display: "flex", gap: 16 }}>
                            {[{ label: "Workers", val: s.workers }, { label: "Tasks", val: s.tasks }].map((m, j) => (
                                <div key={j}>
                                    <div style={{ fontFamily: fd, fontSize: 16, fontWeight: 700, color: P.text }}>{m.val}</div>
                                    <div style={{ fontFamily: f, fontSize: 10, color: P.textMuted }}>{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right — detail */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, overflow: "auto" }}>
                {/* Map with aerial imagery */}
                <div style={{
                    ...ss.card, height: 260, overflow: "hidden", position: "relative",
                }}>
                    <img
                        src={IMG.locations[selected % IMG.locations.length]}
                        alt={site.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85) saturate(1.2)" }}
                        onError={e => { e.target.style.display = "none"; }}
                    />
                    {/* Overlay gradient */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)" }} />
                    {/* Pin & info overlay */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                        <div>
                            <div style={{ fontFamily: fd, fontSize: 18, fontWeight: 700, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>{site.name}</div>
                            <div style={{ fontFamily: f, fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 3, display: "flex", alignItems: "center", gap: 4 }}>
                                <I n="mapPin" sz={12} col="rgba(255,255,255,0.8)" sw={2} /> {site.lat}, {site.lng}
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", padding: "6px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)" }}>
                            <div style={{ width: 8, height: 8, borderRadius: 4, background: site.status === "active" ? P.green : P.yellow }} />
                            <span style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: "#fff" }}>{site.type}</span>
                        </div>
                    </div>
                    {/* Floating pin */}
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -100%)" }}>
                        <div style={{ width: 40, height: 40, borderRadius: 12, background: site.color, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 24px ${site.color}50`, border: "3px solid rgba(255,255,255,0.9)" }}>
                            <I n="mapPin" sz={20} col="#fff" sw={2} />
                        </div>
                        <div style={{ width: 12, height: 12, background: site.color, borderRadius: 2, transform: "rotate(45deg)", margin: "-6px auto 0", boxShadow: `0 4px 8px ${site.color}30` }} />
                    </div>
                </div>

                {/* Stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                    {[
                        { label: "Total Area", val: site.area, icon: "layers", color: site.color },
                        { label: "Workers", val: site.workers, icon: "users", color: P.blue },
                        { label: "Active Tasks", val: site.tasks, icon: "tasks", color: P.accent },
                        { label: "Zones", val: site.zones.length, icon: "map", color: P.orange },
                    ].map((s, i) => (
                        <div key={i} style={{ ...ss.card, padding: "16px", display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${s.color}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <I n={s.icon} sz={16} col={s.color} sw={2} />
                            </div>
                            <div>
                                <div style={{ fontFamily: fd, fontSize: 18, fontWeight: 700, color: P.text }}>{s.val}</div>
                                <div style={{ fontFamily: f, fontSize: 11, color: P.textMuted }}>{s.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Zones table */}
                <div style={{ ...ss.card, padding: 0, overflow: "hidden" }}>
                    <div style={{ padding: "14px 18px", borderBottom: `1px solid ${P.border}`, background: P.bgOff }}>
                        <h3 style={ss.cardTitle}>Zones & Health</h3>
                    </div>
                    {site.zones.map((z, i) => (
                        <div key={i} style={{
                            display: "grid", gridTemplateColumns: "1fr 140px 80px 120px", alignItems: "center",
                            padding: "13px 18px", borderBottom: i < site.zones.length - 1 ? `1px solid ${P.border}` : "none",
                        }}>
                            <div style={{ fontFamily: f, fontSize: 14, fontWeight: 600, color: P.text }}>{z.name}</div>
                            <div style={{ fontFamily: f, fontSize: 13, color: P.textSoft }}>{z.crop}</div>
                            <span style={{ fontFamily: fd, fontSize: 13, fontWeight: 600, color: healthCol(z.health) }}>{z.health}%</span>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <div style={{ flex: 1, height: 5, background: P.bgSubtle, borderRadius: 3, overflow: "hidden" }}>
                                    <div style={{ height: 5, width: `${z.health}%`, background: healthCol(z.health), borderRadius: 3 }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// PHOTOS VIEW
// ═══════════════════════════════════════════════════════
function PhotosView() {
    const [filter, setFilter] = useState("all");
    const photos = [
        { id: 1, title: "Fence perimeter — Section A", location: "North Field", date: "Today, 8:42 AM", worker: "James K.", avatar: "JK", type: "inspection", status: "verified", gps: "-0.4167, 36.9500", tags: ["fence", "damage"] },
        { id: 2, title: "Maize growth — Week 8", location: "Plot B4", date: "Today, 7:15 AM", worker: "Sarah K.", avatar: "SK", type: "crop", status: "verified", gps: "-0.4180, 36.9520", tags: ["maize", "growth"] },
        { id: 3, title: "Irrigation valve damage", location: "Pump House", date: "Yesterday, 3:20 PM", worker: "John M.", avatar: "JM", type: "maintenance", status: "flagged", gps: "-0.4155, 36.9480", tags: ["irrigation", "repair"] },
        { id: 4, title: "Cattle health check — Lot 7", location: "Livestock Area", date: "Yesterday, 11:00 AM", worker: "Peter K.", avatar: "PK", type: "livestock", status: "verified", gps: "-0.4200, 36.9540", tags: ["cattle", "health"] },
        { id: 5, title: "Pest damage — Avocado trees", location: "South Orchard", date: "Mar 6, 2:30 PM", worker: "Amina O.", avatar: "AO", type: "crop", status: "ai-analyzed", gps: "-0.4210, 36.9560", tags: ["pest", "avocado"] },
        { id: 6, title: "Safety equipment audit", location: "Warehouse", date: "Mar 6, 9:00 AM", worker: "Grace W.", avatar: "GW", type: "compliance", status: "verified", gps: "-0.4145, 36.9470", tags: ["safety", "audit"] },
        { id: 7, title: "Greenhouse ventilation fans", location: "Greenhouse B", date: "Mar 5, 4:15 PM", worker: "John M.", avatar: "JM", type: "maintenance", status: "flagged", gps: "-0.4170, 36.9510", tags: ["greenhouse", "repair"] },
        { id: 8, title: "Soil moisture reading", location: "Plot C2", date: "Mar 5, 10:30 AM", worker: "David K.", avatar: "DK", type: "inspection", status: "ai-analyzed", gps: "-0.4190, 36.9530", tags: ["soil", "moisture"] },
        { id: 9, title: "Wheat harvest progress", location: "Plot B4", date: "Mar 4, 3:00 PM", worker: "Sarah K.", avatar: "SK", type: "crop", status: "verified", gps: "-0.4182, 36.9522", tags: ["wheat", "harvest"] },
    ];

    const typeColors = { inspection: P.accent, crop: P.green, maintenance: P.orange, livestock: P.blue, compliance: "#7C3AED" };
    const statusBadge = { verified: { label: "Verified", col: P.green }, flagged: { label: "Flagged", col: P.red }, "ai-analyzed": { label: "AI Analyzed", col: P.blue } };
    const filtered = filter === "all" ? photos : photos.filter(p => p.type === filter);

    // gradient fallbacks for photo loading
    const gradients = [
        "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
        "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
        "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
        "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
        "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)",
        "linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)",
        "linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)",
        "linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)",
    ];

    return (
        <div style={{ padding: "24px 32px 40px" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 4, background: P.bgOff, borderRadius: 10, padding: 3 }}>
                    {[["all", "All"], ["inspection", "Inspections"], ["crop", "Crops"], ["maintenance", "Maintenance"], ["livestock", "Livestock"]].map(([k, l]) => (
                        <button key={k} onClick={() => setFilter(k)} style={{
                            fontFamily: f, fontSize: 12.5, fontWeight: filter === k ? 600 : 500,
                            color: filter === k ? P.text : P.textMuted, background: filter === k ? P.card : "transparent",
                            border: "none", padding: "7px 14px", borderRadius: 8, cursor: "pointer",
                            boxShadow: filter === k ? "0 1px 4px rgba(0,0,0,0.06)" : "none", transition: "all 0.2s",
                        }}>{l}</button>
                    ))}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontFamily: f, fontSize: 13, color: P.textMuted }}>{filtered.length} photos</span>
                    <button style={{ ...ss.btn, background: P.accent, color: "#fff" }}><I n="camera" sz={15} col="#fff" sw={2} /> Upload</button>
                </div>
            </div>

            {/* Photo Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                {filtered.map((photo, i) => {
                    const sb = statusBadge[photo.status];
                    return (
                        <div key={photo.id} style={{ ...ss.card, overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease" }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = P.shadowMd; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                        >
                            {/* Photo with real image */}
                            <div style={{ height: 180, background: gradients[i % gradients.length], position: "relative", overflow: "hidden" }}>
                                <img
                                    src={IMG.photos[i % IMG.photos.length]}
                                    alt={photo.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                                    onError={e => { e.target.style.display = "none"; }}
                                />
                                {/* Status badge */}
                                <div style={{ position: "absolute", top: 10, right: 10, display: "flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: 6 }}>
                                    <div style={{ width: 6, height: 6, borderRadius: 3, background: sb.col }} />
                                    <span style={{ fontFamily: f, fontSize: 11, fontWeight: 600, color: sb.col }}>{sb.label}</span>
                                </div>
                                {/* Type */}
                                <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: 6 }}>
                                    <span style={{ fontFamily: f, fontSize: 11, fontWeight: 600, color: typeColors[photo.type], textTransform: "capitalize" }}>{photo.type}</span>
                                </div>
                            </div>
                            {/* Info */}
                            <div style={{ padding: "14px 16px" }}>
                                <div style={{ fontFamily: f, fontSize: 14, fontWeight: 600, color: P.text, marginBottom: 6, lineHeight: 1.3 }}>{photo.title}</div>
                                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                                    <Avatar initials={photo.avatar} size={22} radius={7} fontSize={9} />
                                    <span style={{ fontFamily: f, fontSize: 12, color: P.textSoft }}>{photo.worker}</span>
                                    <span style={{ color: P.textMuted }}>·</span>
                                    <span style={{ fontFamily: f, fontSize: 12, color: P.textMuted }}>{photo.date}</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
                                    <I n="mapPin" sz={12} col={P.textMuted} />
                                    <span style={{ fontFamily: f, fontSize: 11.5, color: P.textMuted }}>{photo.location} · {photo.gps}</span>
                                </div>
                                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                                    {photo.tags.map((tag, j) => (
                                        <span key={j} style={{ fontFamily: f, fontSize: 10.5, color: P.accent, background: "rgba(26,107,79,0.06)", padding: "2px 8px", borderRadius: 4, fontWeight: 500 }}>#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// SETTINGS VIEW
// ═══════════════════════════════════════════════════════
function SettingsView() {
    const [activeSection, setActiveSection] = useState("profile");
    const sections = [
        { key: "profile", icon: "users", label: "Profile" },
        { key: "notifications", icon: "bell", label: "Notifications" },
        { key: "security", icon: "shield", label: "Security" },
        { key: "integrations", icon: "globe", label: "Integrations" },
        { key: "billing", icon: "layers", label: "Billing" },
    ];

    const toggleStyle = (on) => ({
        width: 42, height: 24, borderRadius: 12, padding: 2,
        background: on ? P.accent : P.bgSubtle, cursor: "pointer",
        display: "flex", alignItems: on ? "center" : "center",
        justifyContent: on ? "flex-end" : "flex-start",
        transition: "all 0.2s", border: "none", flexShrink: 0,
    });

    return (
        <div style={{ padding: "24px 32px 40px", display: "flex", gap: 24 }}>
            {/* Settings nav */}
            <div style={{ width: 220, flexShrink: 0 }}>
                <div style={{ ...ss.card, padding: "8px", overflow: "hidden" }}>
                    {sections.map((s) => {
                        const act = activeSection === s.key;
                        return (
                            <button key={s.key} onClick={() => setActiveSection(s.key)} style={{
                                display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", width: "100%",
                                borderRadius: 8, border: "none", cursor: "pointer",
                                background: act ? "rgba(26,107,79,0.06)" : "transparent",
                                transition: "all 0.2s",
                            }}>
                                <I n={s.icon} sz={17} col={act ? P.accent : P.textMuted} sw={act ? 2 : 1.6} />
                                <span style={{ fontFamily: f, fontSize: 13.5, fontWeight: act ? 600 : 500, color: act ? P.accent : P.textSoft }}>{s.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                {activeSection === "profile" && (
                    <>
                        <div style={{ ...ss.card, padding: "24px" }}>
                            <h3 style={{ ...ss.cardTitle, marginBottom: 20 }}>Personal Information</h3>
                            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                                <Avatar initials="JK" size={64} radius={20} color={P.accent} fontSize={22} />
                                <div>
                                    <div style={{ fontFamily: f, fontSize: 16, fontWeight: 600, color: P.text }}>James Kariuki</div>
                                    <div style={{ fontFamily: f, fontSize: 13, color: P.textMuted }}>james.kariuki@groundbase.io</div>
                                </div>
                                <button style={{ ...ss.btn, marginLeft: "auto", background: P.bgOff, color: P.textSoft, padding: "7px 14px" }}>Change Photo</button>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                {[
                                    { label: "Full Name", val: "James Kariuki" },
                                    { label: "Email", val: "james.kariuki@groundbase.io" },
                                    { label: "Phone", val: "+254 712 345 678" },
                                    { label: "Role", val: "Farm Manager" },
                                    { label: "Location", val: "Nyeri County, Kenya" },
                                    { label: "Language", val: "English / Kiswahili" },
                                ].map((field, i) => (
                                    <div key={i}>
                                        <label style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: P.textMuted, display: "block", marginBottom: 6 }}>{field.label}</label>
                                        <div style={{ padding: "10px 14px", background: P.bgOff, border: `1px solid ${P.border}`, borderRadius: 10, fontFamily: f, fontSize: 14, color: P.text }}>{field.val}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, gap: 10 }}>
                                <button style={{ ...ss.btn, background: P.bgOff, color: P.textSoft }}>Cancel</button>
                                <button style={{ ...ss.btn, background: P.accent, color: "#fff", border: "none" }}>Save Changes</button>
                            </div>
                        </div>
                    </>
                )}

                {activeSection === "notifications" && (
                    <div style={{ ...ss.card, padding: "24px" }}>
                        <h3 style={{ ...ss.cardTitle, marginBottom: 20 }}>Notification Preferences</h3>
                        {[
                            { title: "Task assignments", desc: "Get notified when a new task is assigned to you", on: true },
                            { title: "Task completions", desc: "Get notified when team members complete tasks", on: true },
                            { title: "Weather alerts", desc: "Receive severe weather warnings for your locations", on: true },
                            { title: "AI insights", desc: "Get AI-generated recommendations and alerts", on: false },
                            { title: "Weekly digest", desc: "Receive a weekly summary of operations every Monday", on: true },
                            { title: "Photo verifications", desc: "Get notified when photos pass or fail AI analysis", on: false },
                            { title: "Sync notifications", desc: "Alert when offline data syncs successfully", on: true },
                            { title: "Team availability", desc: "Get notified when team members go online or offline", on: false },
                        ].map((n, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < 7 ? `1px solid ${P.border}` : "none" }}>
                                <div>
                                    <div style={{ fontFamily: f, fontSize: 14, fontWeight: 600, color: P.text }}>{n.title}</div>
                                    <div style={{ fontFamily: f, fontSize: 12.5, color: P.textMuted, marginTop: 2 }}>{n.desc}</div>
                                </div>
                                <button style={toggleStyle(n.on)}>
                                    <div style={{ width: 18, height: 18, borderRadius: 9, background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {activeSection === "security" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <div style={{ ...ss.card, padding: "24px" }}>
                            <h3 style={{ ...ss.cardTitle, marginBottom: 20 }}>Authentication</h3>
                            {[
                                { title: "Voice Authentication", desc: "Use your voiceprint for hands-free login", icon: "mic", on: true, badge: "Active" },
                                { title: "Two-Factor Authentication", desc: "Add an extra layer of security with 2FA", icon: "shield", on: true, badge: "Enabled" },
                                { title: "Biometric Login", desc: "Use fingerprint or Face ID on mobile devices", icon: "users", on: false, badge: null },
                            ].map((s, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < 2 ? `1px solid ${P.border}` : "none" }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 12, background: s.on ? "rgba(26,107,79,0.06)" : P.bgOff, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <I n={s.icon} sz={18} col={s.on ? P.accent : P.textMuted} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontFamily: f, fontSize: 14, fontWeight: 600, color: P.text }}>{s.title}</div>
                                        <div style={{ fontFamily: f, fontSize: 12.5, color: P.textMuted, marginTop: 2 }}>{s.desc}</div>
                                    </div>
                                    {s.badge && <span style={{ fontFamily: f, fontSize: 11, fontWeight: 600, color: P.green, background: P.greenSoft, padding: "3px 10px", borderRadius: 6 }}>{s.badge}</span>}
                                    <button style={toggleStyle(s.on)}>
                                        <div style={{ width: 18, height: 18, borderRadius: 9, background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div style={{ ...ss.card, padding: "24px" }}>
                            <h3 style={{ ...ss.cardTitle, marginBottom: 16 }}>Sessions</h3>
                            {[
                                { device: "MacBook Pro — Chrome", loc: "Nairobi, Kenya", time: "Active now", current: true },
                                { device: "iPhone 15 — GroundBase App", loc: "Nyeri, Kenya", time: "2 hours ago", current: false },
                                { device: "iPad Air — Safari", loc: "Nairobi, Kenya", time: "Yesterday", current: false },
                            ].map((s, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < 2 ? `1px solid ${P.border}` : "none" }}>
                                    <div style={{ width: 36, height: 36, borderRadius: 10, background: P.bgOff, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <I n="globe" sz={16} col={P.textMuted} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontFamily: f, fontSize: 13.5, fontWeight: 600, color: P.text }}>{s.device}</div>
                                        <div style={{ fontFamily: f, fontSize: 12, color: P.textMuted }}>{s.loc} · {s.time}</div>
                                    </div>
                                    {s.current ? (
                                        <span style={{ fontFamily: f, fontSize: 11, fontWeight: 600, color: P.green, background: P.greenSoft, padding: "3px 10px", borderRadius: 6 }}>Current</span>
                                    ) : (
                                        <button style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: P.red, background: "none", border: "none", cursor: "pointer" }}>Revoke</button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeSection === "integrations" && (
                    <div style={{ ...ss.card, padding: "24px" }}>
                        <h3 style={{ ...ss.cardTitle, marginBottom: 20 }}>Connected Services</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                            {[
                                { name: "Claude AI", desc: "On-device & cloud AI assistant", connected: true, color: P.accent, icon: "bot" },
                                { name: "WhatsApp", desc: "Team notifications & alerts", connected: true, color: P.green, icon: "send" },
                                { name: "Google Drive", desc: "Photo backup & report storage", connected: true, color: P.blue, icon: "layers" },
                                { name: "M-Pesa", desc: "Worker payments & expenses", connected: false, color: P.orange, icon: "zap" },
                                { name: "Weather API", desc: "Real-time weather data", connected: true, color: "#7C3AED", icon: "sun" },
                                { name: "KRA iTax", desc: "Tax compliance reporting", connected: false, color: P.red, icon: "shield" },
                            ].map((int, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: P.bgOff, borderRadius: 12, border: `1px solid ${P.border}` }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 12, background: `${int.color}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <I n={int.icon} sz={18} col={int.color} sw={2} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontFamily: f, fontSize: 14, fontWeight: 600, color: P.text }}>{int.name}</div>
                                        <div style={{ fontFamily: f, fontSize: 12, color: P.textMuted }}>{int.desc}</div>
                                    </div>
                                    {int.connected ? (
                                        <span style={{ fontFamily: f, fontSize: 11, fontWeight: 600, color: P.green, flexShrink: 0 }}>Connected</span>
                                    ) : (
                                        <button style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: P.accent, background: "rgba(26,107,79,0.06)", border: `1px solid rgba(26,107,79,0.12)`, borderRadius: 8, padding: "5px 12px", cursor: "pointer", flexShrink: 0 }}>Connect</button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeSection === "billing" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <div style={{ ...ss.card, padding: "24px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div>
                                    <h3 style={ss.cardTitle}>Current Plan</h3>
                                    <div style={{ fontFamily: fd, fontSize: 28, fontWeight: 700, color: P.text, marginTop: 8 }}>Pro AI</div>
                                    <div style={{ fontFamily: f, fontSize: 14, color: P.textMuted, marginTop: 4 }}>$29/user/month · 34 users · Billed monthly</div>
                                </div>
                                <span style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: P.green, background: P.greenSoft, padding: "4px 12px", borderRadius: 8 }}>Active</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 20 }}>
                                {[
                                    { label: "Monthly Cost", val: "$986" },
                                    { label: "Next Billing", val: "Apr 1, 2026" },
                                    { label: "Storage Used", val: "42.8 GB / 100 GB" },
                                ].map((b, i) => (
                                    <div key={i} style={{ padding: "12px 14px", background: P.bgOff, borderRadius: 10 }}>
                                        <div style={{ fontFamily: f, fontSize: 12, color: P.textMuted }}>{b.label}</div>
                                        <div style={{ fontFamily: fd, fontSize: 16, fontWeight: 700, color: P.text, marginTop: 4 }}>{b.val}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                                <button style={{ ...ss.btn, background: P.accent, color: "#fff", border: "none" }}>Upgrade to Enterprise</button>
                                <button style={{ ...ss.btn, background: P.bgOff, color: P.textSoft }}>Manage Billing</button>
                            </div>
                        </div>
                        <div style={{ ...ss.card, padding: "24px" }}>
                            <h3 style={{ ...ss.cardTitle, marginBottom: 16 }}>Recent Invoices</h3>
                            {[
                                { date: "Mar 1, 2026", amount: "$986.00", status: "Paid" },
                                { date: "Feb 1, 2026", amount: "$958.00", status: "Paid" },
                                { date: "Jan 1, 2026", amount: "$928.00", status: "Paid" },
                                { date: "Dec 1, 2025", amount: "$899.00", status: "Paid" },
                            ].map((inv, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", padding: "11px 0", borderBottom: i < 3 ? `1px solid ${P.border}` : "none" }}>
                                    <I n="layers" sz={16} col={P.textMuted} />
                                    <span style={{ fontFamily: f, fontSize: 13.5, color: P.text, marginLeft: 10, flex: 1 }}>{inv.date}</span>
                                    <span style={{ fontFamily: fd, fontSize: 14, fontWeight: 600, color: P.text, marginRight: 16 }}>{inv.amount}</span>
                                    <span style={{ fontFamily: f, fontSize: 11, fontWeight: 600, color: P.green, background: P.greenSoft, padding: "3px 10px", borderRadius: 6 }}>{inv.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// MAIN DASHBOARD PAGE
// ═══════════════════════════════════════════════════════
export default function Dashboard() {
    const [active, setActive] = useState("dashboard");

    const titles = {
        dashboard: ["Dashboard", "Welcome back, James. Here's today's overview."],
        tasks: ["Task Management", "Track, assign, and manage field operations."],
        team: ["Team", "Manage your workforce and track performance."],
        analytics: ["Analytics", "Insights and performance metrics."],
        locations: ["Locations", "Farm sites and field mapping."],
        photos: ["Photo Evidence", "GPS-stamped field photography."],
        ai: ["AI Assistant", "Powered by Claude · Ask anything about your operations."],
        settings: ["Settings", "Manage your account and preferences."],
    };

    const renderView = () => {
        switch (active) {
            case "dashboard": return <DashboardView />;
            case "tasks": return <TasksView />;
            case "team": return <TeamView />;
            case "analytics": return <AnalyticsView />;
            case "ai": return <AIView />;
            case "locations": return <LocationsView />;
            case "photos": return <PhotosView />;
            case "settings": return <SettingsView />;
            default: return <DashboardView />;
        }
    };

    return (
        <div style={{
            display: "flex", height: "100vh", width: "100vw",
            position: "fixed", inset: 0, zIndex: 200,
            fontFamily: f, background: P.bg,
        }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital,wght@0,400;1,400&display=swap');
                * { box-sizing: border-box; }
                ::-webkit-scrollbar { width: 6px; }
                ::-webkit-scrollbar-track { background: transparent; }
                ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.08); border-radius: 3px; }
                ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.15); }
                input::placeholder { color: ${P.textMuted}; }
            `}</style>
            <Sidebar active={active} setActive={setActive} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <TopBar title={titles[active]?.[0] || "Dashboard"} subtitle={titles[active]?.[1]} />
                <div style={{ flex: 1, overflow: "auto", background: P.bg }}>
                    {renderView()}
                </div>
            </div>
        </div>
    );
}

// ── Shared styles ────────────────────────────────────
const ss = {
    card: {
        background: P.card, borderRadius: P.radius,
        border: `1px solid ${P.border}`,
    },
    cardTitle: {
        fontFamily: fd, fontSize: 14, fontWeight: 700,
        color: P.text, margin: 0, letterSpacing: "-0.01em",
    },
    iconBtn: {
        width: 38, height: 38, borderRadius: 10, background: P.bgOff,
        border: `1px solid ${P.border}`, display: "flex", alignItems: "center",
        justifyContent: "center", cursor: "pointer",
    },
    btn: {
        display: "inline-flex", alignItems: "center", gap: 6,
        fontFamily: f, fontSize: 13, fontWeight: 600,
        padding: "8px 16px", borderRadius: 10,
        border: `1px solid ${P.border}`, cursor: "pointer",
        transition: "all 0.2s",
    },
};
