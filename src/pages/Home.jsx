import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { C, FadeIn, useCounter } from "../shared";
import {
    HardHat, Wheat, Package, Building2,
    Droplets, Truck, Coffee, Stethoscope,
    ShieldCheck, Pickaxe, Factory, Sparkle
} from "lucide-react";

// ─── HERO — inflection.ai exact style ───
function Hero() {
    const [vis, setVis] = useState(false);
    useEffect(() => { setTimeout(() => setVis(true), 60); }, []);

    return (
        <section style={{
            position: "relative", overflow: "hidden",
            minHeight: "100vh",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "#FFFFFF", paddingTop: 80,
        }}>
            {/* ── Animated SVG Contour Lines ── */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"
                    style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                    <defs>
                        <style>{`
                            @keyframes wv1{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
                            @keyframes wv2{0%,100%{transform:translateY(0)}50%{transform:translateY(16px)}}
                            @keyframes wv3{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
                            @keyframes drft{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-900}}
                            .cl {fill:none;stroke:#1A6B4F;stroke-width:1.1;stroke-dasharray:8 6;animation:drft 20s linear infinite;}
                            .cl2{fill:none;stroke:#22C77E;stroke-width:0.75;stroke-dasharray:5 9;animation:drft 26s linear infinite reverse;}
                        `}</style>
                    </defs>
                    <g style={{ animation: "wv1 9s ease-in-out infinite", transformOrigin: "720px 180px" }}>
                        <path className="cl" d="M-200,70  Q200,10  450,110 T890,55  T1290,100 T1700,60" opacity="0.32" />
                        <path className="cl" d="M-200,115 Q250,45  490,155 T940,85  T1340,140 T1700,105" opacity="0.25" />
                        <path className="cl" d="M-200,160 Q300,85  530,200 T990,125 T1390,175 T1700,148" opacity="0.20" />
                        <path className="cl" d="M-200,205 Q330,128 565,240 T1025,162 T1425,208 T1700,188" opacity="0.15" />
                        <path className="cl2" d="M-200,250 Q360,168 605,280 T1065,198 T1462,244 T1700,225" opacity="0.12" />
                    </g>
                    <g style={{ animation: "wv2 12s ease-in-out infinite 1.5s", transformOrigin: "720px 460px" }}>
                        <path className="cl2" d="M-200,345 Q175,280 415,375 T855,308 T1258,355 T1700,318" opacity="0.26" />
                        <path className="cl" d="M-200,395 Q218,318 462,418 T905,342 T1308,385 T1700,355" opacity="0.20" />
                        <path className="cl" d="M-200,445 Q258,368 505,460 T952,378 T1355,422 T1700,398" opacity="0.16" />
                        <path className="cl2" d="M-200,495 Q290,412 542,505 T998,415 T1398,460 T1700,440" opacity="0.12" />
                        <path className="cl" d="M-200,545 Q318,452 578,548 T1040,455 T1440,500 T1700,480" opacity="0.09" />
                    </g>
                    <g style={{ animation: "wv3 14s ease-in-out infinite 3s", transformOrigin: "720px 730px" }}>
                        <path className="cl" d="M-200,628 Q148,562 378,648 T828,588 T1238,628 T1700,594" opacity="0.26" />
                        <path className="cl2" d="M-200,672 Q188,604 425,692 T878,625 T1285,665 T1700,634" opacity="0.20" />
                        <path className="cl" d="M-200,718 Q228,648 472,742 T928,661 T1334,708 T1700,675" opacity="0.16" />
                        <path className="cl2" d="M-200,762 Q258,688 508,784 T972,700 T1378,746 T1700,718" opacity="0.12" />
                        <path className="cl" d="M-200,808 Q292,732 548,830 T1014,746 T1418,790 T1700,758" opacity="0.07" />
                    </g>
                </svg>
            </div>

            {/* ── Hero Content ── */}
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 20px", width: "100%" }}>

                {/* MASSIVE italic serif headline — inflection.ai exact */}
                <h1 style={{
                    fontFamily: "'Instrument Serif', Georgia, 'Times New Roman', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(68px, 13vw, 196px)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.03em",
                    color: "#0A0A0A",
                    margin: 0,
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(28px)",
                    transition: "opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    Field Intelligent
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 17,
                    fontWeight: 400,
                    color: "#555",
                    lineHeight: 1.68,
                    maxWidth: 480,
                    margin: "30px auto 38px",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(18px)",
                    transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.18s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.18s",
                }}>
                    We're empowering field teams and operations leaders with human-centered, AI-native field intelligence.
                </p>

                {/* CTA buttons */}
                <div style={{
                    display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(14px)",
                    transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.32s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.32s",
                }}>
                    <Link to="/pricing" style={{
                        padding: "14px 34px", borderRadius: 100,
                        background: "#0A0A0A", color: "#fff",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15,
                        textDecoration: "none", transition: "opacity 0.2s",
                    }}
                        onMouseEnter={e => e.currentTarget.style.opacity = "0.78"}
                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                        Start for free
                    </Link>
                    <Link to="/platform" style={{
                        padding: "14px 28px", borderRadius: 100,
                        background: "transparent", border: "1px solid rgba(0,0,0,0.14)",
                        color: "#555", fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500, fontSize: 15, textDecoration: "none", transition: "all 0.2s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.28)"; e.currentTarget.style.color = "#0A0A0A"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.14)"; e.currentTarget.style.color = "#555"; }}>
                        See the platform
                    </Link>
                </div>
            </div>

            {/* Scroll hint */}
            <div style={{
                position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                opacity: vis ? 0.35 : 0, transition: "opacity 1s 0.8s",
                zIndex: 2,
            }}>
                <div style={{ width: 1, height: 48, background: "#0A0A0A", animation: "scrollline 2s ease-in-out infinite" }} />
                <style>{`@keyframes scrollline{0%,100%{transform:scaleY(1);opacity:0.35}50%{transform:scaleY(0.4);opacity:0.1}}`}</style>
            </div>
        </section>
    );
}

// ─── TICKER ───
function IndustryTicker() {
    const industries = [
        { name: "Construction", icon: <HardHat size={15} strokeWidth={1.8} color="#1A6B4F" /> },
        { name: "Agriculture", icon: <Wheat size={15} strokeWidth={1.8} color="#E8673C" /> },
        { name: "Oil & Gas", icon: <Droplets size={15} strokeWidth={1.8} color="#2563EB" /> },
        { name: "Logistics", icon: <Truck size={15} strokeWidth={1.8} color="#6B7280" /> },
        { name: "Hospitality", icon: <Coffee size={15} strokeWidth={1.8} color="#9333EA" /> },
        { name: "Healthcare", icon: <Stethoscope size={15} strokeWidth={1.8} color="#EF4444" /> },
        { name: "Security", icon: <ShieldCheck size={15} strokeWidth={1.8} color="#059669" /> },
        { name: "Property", icon: <Building2 size={15} strokeWidth={1.8} color="#4F46E5" /> },
        { name: "Mining", icon: <Pickaxe size={15} strokeWidth={1.8} color="#D97706" /> },
        { name: "Manufacturing", icon: <Factory size={15} strokeWidth={1.8} color="#475569" /> },
    ];
    return (
        <div style={{ padding: "32px 0", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)", overflow: "hidden", background: "#fcfcfc" }}>
            <div style={{ display: "flex", gap: 56, animation: "marquee 45s linear infinite", width: "max-content", alignItems: "center" }}>
                {[...industries, ...industries, ...industries].map((ind, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 56 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{
                                display: "flex", alignItems: "center", justifyContent: "center",
                                width: 34, height: 34, borderRadius: "50%",
                                background: "white", border: "1px solid rgba(0,0,0,0.04)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                            }}>
                                {ind.icon}
                            </div>
                            <span style={{ fontSize: 13.5, color: "#6B7280", fontWeight: 500, whiteSpace: "nowrap", fontFamily: "'DM Sans', sans-serif" }}>
                                {ind.name}
                            </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", opacity: 0.6 }}>
                            <Sparkle size={12} strokeWidth={2} color="#D1D5DB" />
                        </div>
                    </div>
                ))}
            </div>
            <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-33.333333%)}}`}</style>
        </div>
    );
}

// ─── HOW IT WORKS ───
function HowItWorks() {
    const steps = [
        { num: "01", title: "Build Your Forms", desc: "Describe your process in plain English. AI creates the perfect form in seconds — GPS, photos, signatures, logic, calculations — no code.", tag: "AI-Assisted" },
        { num: "02", title: "Collect Data Anywhere", desc: "Field teams use the native mobile app even with no internet. GPS, photos, and timestamps auto-attached to every submission. Nothing gets lost.", tag: "Offline Ready" },
        { num: "03", title: "AI Analyzes & Alerts", desc: "Our AI engine processes streaming field data, spotting patterns, flagging anomalies, and generating actionable insights automatically.", tag: "AI-Powered" },
        { num: "04", title: "Decide & Act", desc: "Visual dashboards, AI-written reports, and predictive alerts give management real-time intelligence to make faster, better decisions.", tag: "Actionable" },
    ];
    return (
        <section style={{ padding: "140px 40px", background: "#fff", position: "relative", overflow: "hidden" }}>
            <div className="glow-blob" style={{ background: C.accentBg, width: 400, height: 400, top: "10%", left: "-10%" }} />
            <div style={{ maxWidth: 880, margin: "0 auto", position: "relative", zIndex: 2 }}>
                <FadeIn>
                    <div style={{ marginBottom: 72 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.11em", textTransform: "uppercase", fontFamily: "'Space Grotesk'" }}>How It Works</span>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 400, color: "#0A0A0A", margin: "14px 0 0", lineHeight: 1.08 }}>
                            From field chaos to<br />operational clarity.
                        </h2>
                    </div>
                </FadeIn>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {steps.map((s, i) => (
                        <FadeIn key={i} delay={i * 0.08}>
                            <div style={{
                                display: "grid", gridTemplateColumns: "80px 1fr",
                                gap: 32, padding: "40px 0",
                                borderTop: "1px solid rgba(0,0,0,0.06)",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                <div style={{ fontSize: 13, fontWeight: 700, color: "#D1D5DB", fontFamily: "'Space Grotesk'", paddingTop: 4 }}>{s.num}</div>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                                        <h3 style={{ fontSize: 24, fontWeight: 500, color: "#0A0A0A", margin: 0, fontFamily: "'Space Grotesk'", letterSpacing: "-0.02em" }}>{s.title}</h3>
                                        <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 11, fontWeight: 700, background: "rgba(26,107,79,0.06)", color: C.accent, flexShrink: 0 }}>{s.tag}</span>
                                    </div>
                                    <p style={{ fontSize: 16, color: "#555", margin: 0, lineHeight: 1.75, maxWidth: 560 }}>{s.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── AI FEATURES ───
function AIFeatures() {
    const features = [
        { title: "AI Form Builder", desc: "Describe your process — AI generates the perfect form with all right fields, logic, and validations. No code. No training needed.", tag: "Form Builder", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
        { title: "AI Insights Engine", desc: "Automatically surface trends, anomalies, and opportunities from your collected data. No BI tools. No analysts.", tag: "Insights", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
        { title: "AI Report Generator", desc: "One click to produce professional management reports — weekly summaries, compliance docs, performance reviews — all written by AI.", tag: "Reports", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" },
        { title: "AI Field Assistant", desc: "Ask any question about your data in natural language and get instant, synthesized answers. Like having a data scientist on call.", tag: "Assistant", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
        { title: "Smart Photo Analysis", desc: "AI reads field photos and detects damage, verifies compliance, and classifies conditions. Turn visual data into structured intelligence.", tag: "Vision AI", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" },
        { title: "Predictive Alerts", desc: "AI monitors patterns and alerts you before problems escalate — safety risks, equipment anomalies, team bottlenecks.", tag: "Proactive AI", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" },
    ];
    return (
        <section style={{ padding: "160px 40px", background: C.bgSubtle, position: "relative", overflow: "hidden" }}>
            {/* Light mode abstract aesthetic blobs */}
            <div className="glow-blob" style={{ background: "rgba(37, 99, 235, 0.08)", width: 600, height: 600, top: "20%", left: "10%", animationDelay: "0s" }} />
            <div className="glow-blob" style={{ background: "rgba(34, 199, 126, 0.08)", width: 500, height: 500, bottom: "10%", right: "5%", animationDelay: "-5s" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)`, backgroundSize: "32px 32px", zIndex: 1 }} />

            <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 2 }}>
                <FadeIn>
                    <div style={{ marginBottom: 80, textAlign: "center" }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.11em", textTransform: "uppercase", fontFamily: "'Space Grotesk'" }}>AI Field Intelligence</span>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, color: C.text, margin: "16px 0 0", lineHeight: 1.05 }}>
                            Enterprise AI.<br /><span style={{ color: C.textMuted }}>SME pricing.</span>
                        </h2>
                    </div>
                </FadeIn>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
                    {features.map((f, i) => (
                        <FadeIn key={i} delay={i * 0.05} style={{ height: "100%" }}>
                            <div className="card-hover" style={{ display: "flex", flexDirection: "column", borderRadius: 24, height: "100%", background: "white", border: `1px solid ${C.border}`, boxShadow: "0 4px 12px rgba(0,0,0,0.03)", overflow: "hidden" }}>
                                <div style={{ height: 220, position: "relative", borderBottom: `1px solid ${C.border}` }}>
                                    <img src={f.image} alt={f.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    <div style={{ position: "absolute", top: 16, left: 16 }}>
                                        <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 100, fontSize: 11, fontWeight: 700, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", color: C.text, border: `1px solid ${C.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>{f.tag}</span>
                                    </div>
                                </div>
                                <div style={{ padding: "32px", background: "white" }}>
                                    <h3 style={{ fontSize: 22, fontWeight: 500, color: C.text, margin: "0 0 14px", fontFamily: "'Space Grotesk'", letterSpacing: "-0.01em" }}>{f.title}</h3>
                                    <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                <FadeIn delay={0.3} style={{ marginTop: 64, textAlign: "center" }}>
                    <Link to="/platform" className="btn-ghost" style={{ display: "inline-block", padding: "16px 36px", borderRadius: 100, fontSize: 15, textDecoration: "none", color: C.text, borderColor: C.border }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.text; e.currentTarget.style.color = "white"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.text; }}>
                        Explore the full platform →
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}

// ─── PARADIGM SHIFT ───
function ProblemSolution() {
    return (
        <section style={{ padding: "160px 40px", background: "white", color: C.text, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `radial-gradient(${C.border} 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
            <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 2 }}>
                <FadeIn>
                    <div style={{ marginBottom: 64, textAlign: "center" }}>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: C.text, lineHeight: 1.05 }}>
                            The paradigm shift<br /><span style={{ color: C.textMuted }}>in field operations.</span>
                        </h2>
                    </div>
                </FadeIn>
                <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.border, borderRadius: 28, overflow: "hidden", boxShadow: "0 16px 40px rgba(0,0,0,0.05)", border: `1px solid ${C.border}` }}>
                    <FadeIn delay={0.1} style={{ height: "100%" }}>
                        <div style={{ padding: "64px 48px", height: "100%", background: "white", position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", top: -100, left: -100, width: 300, height: 300, background: "rgba(232, 103, 60, 0.08)", filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none" }} />
                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{ fontSize: 11, fontWeight: 700, color: C.orange, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>Legacy Workflow</div>
                                {["Data scattered across WhatsApp, email & paper", "Zero visibility into what field teams are doing", "Manual reports take hours every single week", "Safety issues fall through the cracks", "Gut-feeling decisions — no real data"].map((t, i) => (
                                    <div key={i} style={{ fontSize: 15, color: C.textSoft, marginBottom: 24, display: "flex", gap: 16, lineHeight: 1.6 }}>
                                        <span style={{ color: C.orange, opacity: 0.7, flexShrink: 0 }}>✗</span>{t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.18} style={{ height: "100%" }}>
                        <div style={{ padding: "64px 48px", height: "100%", background: C.bgSubtle, position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", bottom: -100, right: -100, width: 400, height: 400, background: "rgba(34, 199, 126, 0.08)", filter: "blur(70px)", borderRadius: "50%", pointerEvents: "none" }} />
                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>With Groundbase AI</div>
                                {["All data captured in one unified platform", "Real-time visibility & GPS-verified activities", "AI generates reports and insights on autopilot", "Smart alerts catch problems before they escalate", "Data-driven decisions from day one"].map((t, i) => (
                                    <div key={i} style={{ fontSize: 15, color: C.text, marginBottom: 24, display: "flex", gap: 16, lineHeight: 1.6 }}>
                                        <span style={{ color: C.accent, flexShrink: 0, fontWeight: 700 }}>✓</span>{t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

// ─── STATS ───
function Stats() {
    const [c1, r1] = useCounter(93);
    const [c2, r2] = useCounter(40);
    const [c3, r3] = useCounter(5);
    return (
        <section style={{ padding: "140px 40px", background: "#fff" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <FadeIn>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 400, color: "#0A0A0A", marginBottom: 72, lineHeight: 1.08 }}>
                        The numbers<br />speak for themselves.
                    </h2>
                </FadeIn>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0 }}>
                    {[
                        { ref: r1, val: `${c1}%`, desc: "of service orgs say AI is now critical to their field operations." },
                        { ref: r2, val: `${c2}%`, desc: "reduction in time spent compiling weekly operations reports." },
                        { ref: r3, val: `${c3}min`, desc: "average setup time for your first AI-powered field data form." },
                    ].map((s, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div ref={s.ref} style={{ padding: "40px 40px 40px 0", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                                <div style={{ fontSize: 72, fontWeight: 400, color: "#0A0A0A", fontFamily: "'Instrument Serif'", lineHeight: 1, marginBottom: 16 }}>{s.val}</div>
                                <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, margin: 0, maxWidth: 210 }}>{s.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── USE CASES ───
function UseCasesPreview() {
    const [activeIndustry, setActiveIndustry] = useState("All");

    const industries = ["All", "Construction", "Agriculture", "Logistics", "Property Management", "Healthcare", "Manufacturing"];

    const allCases = [
        { ind: "Construction", title: "Site Inspections & Safety Compliance", desc: "Digitize safety checklists, daily progress reports, and quality inspections. AI flags non-compliance patterns and generates safety reports automatically." },
        { ind: "Construction", title: "Heavy Equipment Tracking & Maintenance", desc: "Keep track of heavy machinery, schedule maintenance, and monitor usage across multiple sites. AI predicts part failures before they happen." },
        { ind: "Construction", title: "Supply Chain & Material Tracking", desc: "Optimize construction supply chain flow, procurement, inventory, and stakeholder collaboration for maximum efficiency on-site." },

        { ind: "Agriculture", title: "Farm Monitoring & Crop Management", desc: "Track crop health, weather conditions, soil data, and farm worker activities across your entire operation. AI predicts issues before they impact yields." },
        { ind: "Agriculture", title: "Automated Harvest Yield Tracking", desc: "Streamline harvest logistics from field to processing. Predict yields, track worker productivity, and automate supply chain compliance reports." },

        { ind: "Logistics", title: "Delivery Tracking & Fleet Management", desc: "Monitor deliveries, track driver performance, and manage multi-hub inventory in real-time. AI optimizes routes and predicts delivery delays." },
        { ind: "Logistics", title: "Warehouse Safety Audits", desc: "Digital audits for warehouse condition, loading dock safety, and inventory accuracy. AI spots bottlenecks in your fulfillment operations." },

        { ind: "Property Management", title: "Maintenance & Tenant Management", desc: "Digitize property inspections, maintenance workflows, and tenant communications. AI prioritizes requests and predicts maintenance needs." },
        { ind: "Property Management", title: "Janitorial & Facilities Service Tracking", desc: "Track cleaning operations, supplies inventory, and staff schedules. Provide photo-verified proof of service for key stakeholder reporting." },

        { ind: "Healthcare", title: "In-Home Care Mobile Workforce Tracking", desc: "Empower home healthcare workers with digital patient forms, secure offline data collection, and GPS-verified visits for seamless compliance." },
        { ind: "Healthcare", title: "Medical Equipment Maintenance Logs", desc: "Digitize the inspection and calibration records for critical medical devices, automatically alerting technicians of upcoming service requirements." },

        { ind: "Manufacturing", title: "Quality Control & Defect Tracking", desc: "Perform mobile quality checks on the assembly line. Vision AI automatically detects and logs defects, generating actionable shift reports." },
        { ind: "Manufacturing", title: "Shift Handovers & Incident Reporting", desc: "Ensure smooth transitions between shifts with structured digital handovers. Log incidents quickly with voice-to-text and AI summarization." },
    ];

    const displayedCases = activeIndustry === "All"
        ? allCases.slice(0, 6)
        : allCases.filter(c => c.ind === activeIndustry);

    return (
        <section style={{ padding: "140px 40px", background: C.bgOff }}>
            <div className="use-cases-container" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap", flexDirection: "row" }}>

                {/* Sidebar Navigation */}
                <div className="use-cases-sidebar" style={{ flex: "0 0 auto", width: "240px" }}>
                    <div style={{ position: "sticky", top: 120 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 24, fontFamily: "'Space Grotesk', sans-serif" }}>
                            Use Cases For
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                            {industries.map(ind => (
                                <button
                                    key={ind}
                                    onClick={() => setActiveIndustry(ind)}
                                    style={{
                                        textAlign: "left", padding: 0,
                                        background: "transparent",
                                        color: activeIndustry === ind ? C.blue : C.textSoft,
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontWeight: activeIndustry === ind ? 700 : 500,
                                        fontSize: 15, border: "none", cursor: "pointer",
                                        transition: "color 0.2s ease"
                                    }}
                                    onMouseEnter={e => { if (activeIndustry !== ind) e.currentTarget.style.color = C.text; }}
                                    onMouseLeave={e => { if (activeIndustry !== ind) e.currentTarget.style.color = C.textSoft; }}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div style={{ flex: "1 1 min(500px, 100%)" }}>
                    <FadeIn key={activeIndustry}>
                        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4vw, 42px)", fontWeight: 700, color: C.text, margin: "0 0 48px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                            Use Cases
                        </h2>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "48px 40px" }}>
                            {displayedCases.map((c, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, color: C.text, margin: "0 0 16px", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                                        {c.title}
                                    </h4>
                                    <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.6, margin: "0 0 24px", fontFamily: "'DM Sans', sans-serif", flexGrow: 1 }}>
                                        {c.desc}
                                    </p>
                                    <Link to="/solutions" style={{
                                        color: C.blue, fontWeight: 700, fontSize: 15, fontFamily: "'Space Grotesk', sans-serif",
                                        textDecoration: "none", display: "inline-flex", alignItems: "center"
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.textDecoration = "underline"; }}
                                        onMouseLeave={e => { e.currentTarget.style.textDecoration = "none"; }}>
                                        Read more
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
            <style>{`
                @media (max-width: 820px) {
                    .use-cases-container { flex-direction: column !important; gap: 40px !important; }
                    .use-cases-sidebar { width: 100% !important; border-bottom: 2px solid \${C.border}; padding-bottom: 24px; position: static !important; }
                }
            `}</style>
        </section>
    );
}

// ─── HOME CTA ───
function HomeCTA() {
    return (
        <section style={{ padding: "160px 40px", background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            <FadeIn>
                <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(44px, 6vw, 76px)", fontWeight: 400, color: "#0A0A0A", margin: "0 0 24px", lineHeight: 1.05 }}>
                        Stop managing<br />with spreadsheets.
                    </h2>
                    <p style={{ fontSize: 18, color: "#666", marginBottom: 40, lineHeight: 1.7 }}>
                        Join thousands of operations teams who use Groundbase to capture, analyze, and act — now supercharged with AI.
                    </p>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link to="/pricing" className="btn-cta" style={{ padding: "16px 40px", borderRadius: 100, fontSize: 16, textDecoration: "none" }}>Get started free</Link>
                        <Link to="/about" className="btn-ghost" style={{ padding: "15px 32px", borderRadius: 100, fontSize: 15, textDecoration: "none" }}>Learn about us</Link>
                    </div>
                    <p style={{ fontSize: 13, color: "#9CA3AF", marginTop: 20 }}>Free forever plan. No credit card. 5-minute setup.</p>
                </div>
            </FadeIn>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Hero />
            <IndustryTicker />
            <HowItWorks />
            <AIFeatures />
            <ProblemSolution />
            <Stats />
            <UseCasesPreview />
            <HomeCTA />
        </>
    );
}
