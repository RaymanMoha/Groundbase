import { C } from "./shared";

/*  GroundBase Logo System
    ──────────────────────
    Concept: A rounded square "shield" mark with a stylised "G"
    formed by a ground-horizon line + sprouting leaf. Represents:
    • Ground / Earth (horizontal terrain line)
    • Growth / Agriculture (leaf sprouting upward)
    • Base / Foundation (solid rounded-square foundation)

    Variants:
    • mark   — icon only (square)
    • full   — icon + wordmark (horizontal lockup)
    • word   — wordmark only (no icon)

    Themes:
    • "light" — dark mark on light backgrounds (default)
    • "dark"  — light/green mark on dark backgrounds
    • "color" — full-color mark (green gradient)
*/

const fd = "'Space Grotesk', 'DM Sans', sans-serif";
const fi = "'Instrument Serif', Georgia, serif";

// ── The icon mark SVG ────────────────────────────────
function LogoMark({ size = 32, theme = "light" }) {
    const isDark = theme === "dark";
    const bgFrom = isDark ? C.accent : C.accent;
    const bgTo = isDark ? "#22C77E" : "#22C77E";

    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rounded square base */}
            <defs>
                <linearGradient id={`gb-grad-${theme}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={bgFrom} />
                    <stop offset="100%" stopColor={bgTo} />
                </linearGradient>
                <clipPath id={`gb-clip-${theme}`}>
                    <rect width="40" height="40" rx="11" />
                </clipPath>
            </defs>
            <rect width="40" height="40" rx="11" fill={`url(#gb-grad-${theme})`} />

            {/* Subtle inner highlight */}
            <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

            {/* Ground horizon line */}
            <path
                d="M8 26 C12 23, 18 23, 20 25 C22 27, 28 27, 32 24"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
            />

            {/* Leaf/sprout — growing upward from ground */}
            <path
                d="M20 25 C20 20, 20 17, 20 14"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
            />
            {/* Leaf shape — right side */}
            <path
                d="M20 17 C23 14, 27 13, 28 11 C26 14, 23 16, 20 17Z"
                fill="rgba(255,255,255,0.9)"
            />
            {/* Leaf shape — left side (smaller) */}
            <path
                d="M20 21 C17 19, 14 19, 13 17.5 C15 19, 17 20, 20 21Z"
                fill="rgba(255,255,255,0.7)"
            />

            {/* Small dots representing "data points" or seeds */}
            <circle cx="12" cy="29" r="1.3" fill="rgba(255,255,255,0.4)" />
            <circle cx="28" cy="29" r="1.3" fill="rgba(255,255,255,0.4)" />
            <circle cx="20" cy="31" r="1.3" fill="rgba(255,255,255,0.4)" />
        </svg>
    );
}

// ── Wordmark ─────────────────────────────────────────
function Wordmark({ size = 18, color, theme = "light" }) {
    const isDark = theme === "dark";
    const textColor = color || (isDark ? "#fff" : C.text);
    return (
        <span style={{ display: "inline-flex", alignItems: "baseline", fontFamily: fd, fontWeight: 700, fontSize: size, color: textColor, letterSpacing: "-0.03em", lineHeight: 1 }}>
            Ground<span style={{ color: isDark ? "#22C77E" : C.accent }}>base</span>
        </span>
    );
}

// ── Main Logo Component ──────────────────────────────
export default function Logo({
    variant = "full",   // "mark" | "full" | "word"
    theme = "light",    // "light" | "dark" | "color"
    size = 32,          // icon size (wordmark scales proportionally)
    wordSize,           // override wordmark font size
    gap = 10,           // gap between mark and wordmark
    color,              // override text color
    subtitle,           // optional subtitle below wordmark
    style = {},         // outer container style overrides
    onClick,
}) {
    const wSize = wordSize || Math.max(14, Math.round(size * 0.52));

    if (variant === "mark") {
        return (
            <div style={{ display: "inline-flex", cursor: onClick ? "pointer" : "default", ...style }} onClick={onClick}>
                <LogoMark size={size} theme={theme} />
            </div>
        );
    }

    if (variant === "word") {
        return (
            <div style={{ display: "inline-flex", flexDirection: "column", cursor: onClick ? "pointer" : "default", ...style }} onClick={onClick}>
                <Wordmark size={wSize} color={color} theme={theme} />
                {subtitle && (
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: Math.max(9, wSize * 0.55), color: theme === "dark" ? "rgba(255,255,255,0.35)" : C.textMuted, fontWeight: 500, marginTop: 1 }}>
                        {subtitle}
                    </span>
                )}
            </div>
        );
    }

    // full = mark + wordmark
    return (
        <div style={{ display: "inline-flex", alignItems: "center", gap, cursor: onClick ? "pointer" : "default", ...style }} onClick={onClick}>
            <LogoMark size={size} theme={theme} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Wordmark size={wSize} color={color} theme={theme} />
                {subtitle && (
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: Math.max(9, wSize * 0.55), color: theme === "dark" ? "rgba(255,255,255,0.35)" : C.textMuted, fontWeight: 500, marginTop: 1, letterSpacing: "0.01em" }}>
                        {subtitle}
                    </span>
                )}
            </div>
        </div>
    );
}

// Named exports for granular use
export { LogoMark, Wordmark };
