import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export const C = {
    bg: "#FCFCFA",
    bgOff: "#F5F5F3",
    bgSubtle: "#F0F0ED",
    bgDark: "#0C0F0E",
    accent: "#1A6B4F",
    accentLight: "#22C77E",
    accentHover: "#14523C",
    accentBg: "rgba(34, 199, 126, 0.08)",
    orange: "#E8673C",
    orangeBg: "rgba(232, 103, 60, 0.08)",
    blue: "#2563EB",
    blueBg: "rgba(37, 99, 235, 0.08)",
    purple: "#7C3AED",
    purpleBg: "rgba(124, 58, 237, 0.08)",
    text: "#0A0A0A",
    textSoft: "#555555",
    textMuted: "#9CA3AF",
    border: "rgba(0,0,0,0.06)",
    borderDark: "rgba(255, 255, 255, 0.08)",
};

export function useInView(threshold = 0.15) {
    const [vis, setVis] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.unobserve(e.target); }
        }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [vis, ref];
}

export function useCounter(end, duration = 2000) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setStarted(true); obs.unobserve(e.target); }
        }, { threshold: 0.3 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    useEffect(() => {
        if (!started) return;
        let frame;
        const start = performance.now();
        const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 4)) * end));
            if (p < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [started, end, duration]);
    return [count, ref];
}

export function FadeIn({ children, delay = 0, y = 16, style = {} }) {
    const [vis, ref] = useInView(0); // threshold 0 — fires the instant any pixel enters viewport
    return (
        <div ref={ref} style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : `translateY(${y}px)`,
            transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
            willChange: "opacity, transform",
            ...style
        }}>
            {children}
        </div>
    );
}

const NAV_LINKS = [
    { label: "Platform", to: "/platform", dot: "#22C77E" },
    { label: "Solutions", to: "/solutions", dot: "#E8673C" },
    { label: "Use Cases", to: "/use-cases", dot: "#D97706" },
    { label: "Pricing", to: "/pricing", dot: "#2563EB" },
    { label: "About", to: "/about", dot: "#7C3AED" },
];

// ─── NAV — Groundbase: clean typographic wordmark + active pill ───
export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const loc = useLocation();
    const lastScrollY = useRef(0);

    useEffect(() => {
        const h = () => {
            const currentY = window.scrollY;
            if (currentY < 10) {
                // Always expand at very top
                setScrolled(false);
            } else if (currentY > lastScrollY.current + 4) {
                // Scrolling down — compact
                setScrolled(true);
            } else if (currentY < lastScrollY.current - 4) {
                // Scrolling up — expand
                setScrolled(false);
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener("scroll", h, { passive: true });
        return () => window.removeEventListener("scroll", h);
    }, []);
    useEffect(() => { setMobileOpen(false); }, [loc.pathname]);

    return (
        <>
            <div style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                display: "flex", justifyContent: "center",
                padding: scrolled ? "10px 32px" : "18px 32px",
                transition: "padding 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                pointerEvents: "none",
            }}>
                <nav style={{
                    width: scrolled ? "auto" : "100%",
                    maxWidth: scrolled ? 800 : 1040,
                    display: "flex", alignItems: "center",
                    justifyContent: scrolled ? "center" : "space-between",
                    gap: scrolled ? 12 : 0,
                    background: scrolled ? "rgba(252,252,250,0.98)" : "rgba(252,252,250,0.88)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `1px solid ${scrolled ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.05)"}`,
                    borderRadius: 100,
                    padding: scrolled ? "5px 12px 5px 20px" : "10px 10px 10px 24px",
                    boxShadow: scrolled
                        ? "0 10px 30px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.02)"
                        : "0 2px 16px rgba(0,0,0,0.04)",
                    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    pointerEvents: "auto",
                    transform: scrolled ? "scale(0.96)" : "scale(1)",
                }}>
                    {/* Logo — G / Groundbase shrink on scroll */}
                    <Link to="/" style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        color: C.text,
                        letterSpacing: scrolled ? "0.02em" : "-0.04em",
                        userSelect: "none",
                        transition: "letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}>
                        <span style={{
                            fontSize: scrolled ? 26 : 18,
                            lineHeight: 1,
                            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                            display: "inline-block",
                            transform: scrolled ? "translateY(-0.5px)" : "translateY(0)",
                        }}>G</span>
                        <span style={{
                            fontSize: 18,
                            display: "inline-block",
                            maxWidth: scrolled ? 0 : 130,
                            opacity: scrolled ? 0 : 1,
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            transition: "max-width 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                            transform: scrolled ? "translateX(-8px)" : "translateX(0)",
                        }}>roundbase</span>
                    </Link>

                    {/* Center links — clean active pill, no colored dots */}
                    <div className="nav-links" style={{
                        display: "flex", alignItems: "center", gap: scrolled ? 1 : 2,
                        position: scrolled ? "relative" : "absolute",
                        left: scrolled ? "auto" : "50%",
                        transform: scrolled ? "none" : "translateX(-50%)",
                        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}>
                        {NAV_LINKS.map(({ label, to }) => {
                            const isActive = loc.pathname === to;
                            return (
                                <Link key={to} to={to} style={{
                                    padding: scrolled ? "5px 12px" : "10px 18px",
                                    fontSize: scrolled ? 13 : 14.5,
                                    fontWeight: isActive ? 600 : 450,
                                    color: isActive ? C.text : C.textSoft,
                                    textDecoration: "none",
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    letterSpacing: "-0.01em",
                                    borderRadius: 100,
                                    background: isActive ? "rgba(0,0,0,0.05)" : "transparent",
                                    transition: "all 0.3s ease",
                                }}
                                    onMouseEnter={e => {
                                        if (!isActive) { e.currentTarget.style.color = C.text; e.currentTarget.style.background = "rgba(0,0,0,0.03)"; }
                                    }}
                                    onMouseLeave={e => {
                                        if (!isActive) { e.currentTarget.style.color = C.textSoft; e.currentTarget.style.background = "transparent"; }
                                    }}>
                                    {label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right: log in + CTA */}
                    <div style={{ display: "flex", alignItems: "center", gap: scrolled ? 2 : 4 }}>
                        <a href="#" className="nav-login" style={{
                            fontSize: scrolled ? 13 : 14.5, fontWeight: 500, color: C.textSoft,
                            textDecoration: "none", padding: scrolled ? "6px 10px" : "10px 16px",
                            fontFamily: "'Space Grotesk', sans-serif",
                            letterSpacing: "-0.01em",
                            borderRadius: 100,
                            transition: "all 0.2s",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.background = "rgba(0,0,0,0.04)"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = C.textSoft; e.currentTarget.style.background = "transparent"; }}>
                            Log in
                        </a>
                        <Link to="/pricing" style={{
                            padding: scrolled ? "6px 14px" : "10px 22px", borderRadius: 100,
                            background: C.accent,
                            color: "#fff", fontWeight: 600, fontSize: scrolled ? 12 : 13.5,
                            fontFamily: "'Space Grotesk', sans-serif", textDecoration: "none",
                            transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                            letterSpacing: "-0.01em",
                            boxShadow: `0 2px 10px ${C.accent}40`,
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = C.accentHover; e.currentTarget.style.transform = "translateY(-1px) scale(1.02)"; e.currentTarget.style.boxShadow = `0 6px 20px ${C.accent}50`; }}
                            onMouseLeave={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = `0 2px 10px ${C.accent}40`; }}>
                            Get started
                        </Link>
                        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} style={{
                            background: "none", border: "none", cursor: "pointer", padding: "6px 8px", display: "none",
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2.5">
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile overlay — minimal, typographic */}
            {mobileOpen && (
                <div style={{
                    position: "fixed", inset: 0, zIndex: 99,
                    background: "rgba(252,252,250,0.98)", backdropFilter: "blur(24px)",
                    display: "flex", flexDirection: "column",
                    padding: "120px 40px 60px",
                }}>
                    <button onClick={() => setMobileOpen(false)} style={{
                        position: "absolute", top: 22, right: 24,
                        background: "rgba(0,0,0,0.05)", border: "none", borderRadius: "50%",
                        width: 40, height: 40, cursor: "pointer", fontSize: 18, color: C.text,
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>✕</button>
                    {/* Brand in mobile overlay */}
                    <div style={{
                        fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 28,
                        color: C.text, letterSpacing: "-0.03em", marginBottom: 48,
                    }}>Groundbase</div>
                    {NAV_LINKS.map(({ label, to, dot }) => (
                        <Link key={to} to={to} style={{
                            display: "block",
                            fontSize: 42, fontWeight: 700, color: loc.pathname === to ? C.text : C.textSoft,
                            textDecoration: "none",
                            fontFamily: "'Space Grotesk', sans-serif",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.15,
                            marginBottom: 8,
                            transition: "color 0.2s",
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = C.text}
                            onMouseLeave={e => e.currentTarget.style.color = loc.pathname === to ? C.text : C.textSoft}>
                            {label}
                        </Link>
                    ))}
                    <div style={{ marginTop: "auto" }}>
                        <Link to="/pricing" className="btn-cta" style={{
                            display: "inline-block", padding: "16px 36px",
                            borderRadius: 100, fontSize: 16, textDecoration: "none",
                            background: C.accent,
                        }}>Get started</Link>
                    </div>
                </div>
            )}
        </>
    );
}





export function Footer() {
    return (
        <footer style={{ padding: "80px 40px 48px", borderTop: `1px solid ${C.border}`, background: C.bg }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
                    <div>
                        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 18, color: C.text, textDecoration: "none", letterSpacing: "-0.02em", marginBottom: 16 }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="14" width="8" height="7" rx="2" fill={C.accent} />
                                <rect x="13" y="14" width="8" height="7" rx="2" fill={C.text} />
                                <rect x="3" y="3" width="18" height="7" rx="2" fill={C.accent} fillOpacity="0.15" />
                                <circle cx="7" cy="6.5" r="2" fill={C.accent} />
                            </svg>
                            Groundbase
                        </Link>
                        <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.75, maxWidth: 240 }}>
                            The AI-native field operations platform for teams that keep the world running.
                        </p>
                        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                            {["𝕏", "in", "▶"].map((icon, i) => (
                                <a key={i} href="#" style={{
                                    width: 34, height: 34, borderRadius: 8, border: `1px solid ${C.border}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 12, color: C.textSoft, textDecoration: "none", fontWeight: 700,
                                    transition: "all 0.2s"
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.background = C.text; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = C.text; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.textSoft; e.currentTarget.style.borderColor = C.border; }}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    {[
                        { t: "Product", l: [["Platform", "/platform"], ["Solutions", "/solutions"], ["Pricing", "/pricing"]] },
                        { t: "Company", l: [["About", "/about"], ["Blog", "#"], ["Careers", "#"], ["Contact", "#"]] },
                        { t: "Legal", l: [["Privacy", "#"], ["Terms", "#"], ["Security", "#"]] },
                    ].map(col => (
                        <div key={col.t}>
                            <div style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.07em" }}>{col.t}</div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                                {col.l.map(([label, to]) => (
                                    <Link key={label} to={to} style={{ fontSize: 14, color: C.textSoft, textDecoration: "none", transition: "color 0.2s" }}
                                        onMouseEnter={e => e.target.style.color = C.text}
                                        onMouseLeave={e => e.target.style.color = C.textSoft}>
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ paddingTop: 28, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <span style={{ fontSize: 13, color: C.textMuted }}>© 2026 Groundbase Technologies Inc.</span>
                    <span style={{ fontSize: 13, color: C.textMuted }}>Dover, Delaware</span>
                </div>
            </div>
        </footer>
    );
}

export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    background: #FCFCFA;
  }
  
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.25;
    mix-blend-mode: multiply;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  ::selection { background: rgba(26,107,79,0.12); color: #0A0A0A; }
  a { cursor: pointer; }

  .btn-cta {
    background: #0A0A0A;
    border: none; color: white; cursor: pointer;
    font-family: 'Space Grotesk', sans-serif; font-weight: 600;
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    letter-spacing: -0.01em;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .btn-cta:hover { 
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.05) inset;
    opacity: 0.95; 
  }

  .btn-ghost {
    background: transparent;
    border: 1px solid rgba(0,0,0,0.1);
    color: #0A0A0A;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    box-shadow: 0 0 0 rgba(0,0,0,0);
  }
  .btn-ghost:hover { 
    background: #fff; 
    border-color: rgba(0,0,0,0.05);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.04);
  }

  .btn-accent {
    background: #1A6B4F;
    border: none; color: white; cursor: pointer;
    font-family: 'Space Grotesk', sans-serif; font-weight: 600;
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .btn-accent:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(26,107,79,0.25); }

  .card-hover { 
    transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
    border: 1px solid rgba(0,0,0,0.04);
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  }
  .card-hover:hover { 
    transform: translateY(-4px) scale(1.005); 
    box-shadow: 0 32px 64px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.02); 
    border-color: rgba(0,0,0,0.08); 
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0,0,0,0.02);
  }

  .glow-blob {
    position: absolute;
    filter: blur(100px);
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
    opacity: 0.6;
    animation: driftBlob 20s infinite alternate ease-in-out;
  }
  @keyframes driftBlob { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(40px, -40px) scale(1.1); } }


  @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
  @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
  @keyframes slideUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }

  /* Inflection-style contour line animation */
  @keyframes drift1 { 0%,100% { d: path("M-100,200 Q200,100 500,250 T1100,200 T1700,220"); } 50% { d: path("M-100,240 Q200,80 500,280 T1100,170 T1700,250"); } }
  @keyframes waveShift { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

  @media (max-width: 820px) {
    .nav-links, .nav-login { display: none !important; }
    .hamburger { display: flex !important; }
    .two-col { grid-template-columns: 1fr !important; }
  }
`;
