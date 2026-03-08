import { Link } from "react-router-dom";
import { C, FadeIn } from "../shared";
import { ClipboardList, Smartphone, BrainCircuit, BarChart3, MessageSquare, Camera, AlertTriangle, Link2 } from "lucide-react";

const features = [
    {
        icon: <ClipboardList size={26} />, color: C.accent, bg: C.accentBg,
        title: "AI Form Builder",
        tagline: "Build in seconds, not days.",
        desc: "Describe your data-collection process in plain English and watch AI generate a complete form — with GPS fields, photo capture, electronic signatures, calculations, and conditional logic — instantly.",
        bullets: ["Drag-and-drop field builder", "AI auto-generates from descriptions", "Conditional logic & branching", "20+ field types including GPS & photos", "Duplicate & template library"],
    },
    {
        icon: <Smartphone size={26} />, color: C.blue, bg: C.blueBg,
        title: "Mobile-First Apps",
        tagline: "Works where your teams work — even offline.",
        desc: "Native iOS and Android apps that work completely offline. Data syncs automatically when connectivity returns. GPS coordinates, timestamps, and photos auto-attached to every submission.",
        bullets: ["Full offline capability", "Auto-sync when online", "GPS & photo auto-capture", "Digital signatures", "Works in low-connectivity areas"],
    },
    {
        icon: <BrainCircuit size={26} />, color: C.purple, bg: C.purpleBg,
        title: "AI Insights Engine",
        tagline: "Your data, analyzed continuously.",
        desc: "Our AI engine processes your field data streams in real-time, surfacing trends, anomalies, and opportunities that would take a team of analysts weeks to find — automatically, continuously.",
        bullets: ["Real-time data processing", "Anomaly & trend detection", "Cross-site pattern recognition", "Exportable insights", "No BI tools required"],
    },
    {
        icon: <BarChart3 size={26} />, color: C.orange, bg: C.orangeBg,
        title: "Dashboards & Reports",
        tagline: "From raw data to boardroom-ready reports.",
        desc: "Visual dashboards that update in real-time as your teams submit data. One-click AI-generated reports for compliance, performance, and management — formatted and ready to share.",
        bullets: ["Real-time live dashboards", "AI-written management reports", "Compliance report generation", "Custom chart builder", "PDF & CSV export"],
    },
    {
        icon: <MessageSquare size={26} />, color: "#0EA5E9", bg: "rgba(14,165,233,0.08)",
        title: "AI Field Assistant",
        tagline: "Ask your data anything.",
        desc: "Query your entire operational database using natural language. No SQL, no pivot tables. Ask 'Which construction sites had the most safety incidents last quarter?' and get immediate structured answers.",
        bullets: ["Natural language queries", "Instant structured answers", "Cross-form data analysis", "Historical trend queries", "Export query results"],
    },
    {
        icon: <Camera size={26} />, color: "#7C3AED", bg: C.purpleBg,
        title: "Smart Photo Analysis",
        tagline: "AI that reads your field photos.",
        desc: "Field teams capture photos during inspections. Our Vision AI reads them — detecting damage, verifying PPE compliance, counting inventory, and classifying structural conditions automatically.",
        bullets: ["Damage detection", "PPE compliance verification", "Inventory counting", "Structural classification", "Searchable photo library"],
    },
    {
        icon: <AlertTriangle size={26} />, color: "#DC2626", bg: "#FEF2F2",
        title: "Predictive Alerts",
        tagline: "Proactive, not reactive.",
        desc: "AI monitors your operational patterns 24/7 and sends alerts before problems become crises. Safety risks, equipment anomalies, team bottlenecks — caught early, before they cost you.",
        bullets: ["24/7 AI monitoring", "Safety risk detection", "Equipment anomaly alerts", "Custom alert thresholds", "Multi-channel notifications"],
    },
    {
        icon: <Link2 size={26} />, color: C.accent, bg: C.accentBg,
        title: "Integrations & API",
        tagline: "Connect everything.",
        desc: "A robust REST API and growing library of integrations make Groundbase the central nervous system of your tech stack. Connect to your ERP, CRM, accounting software, and more.",
        bullets: ["REST API access", "Webhook support", "Zapier integration", "Direct database connectors", "Custom integration support"],
    },
];

function PlatformHero() {
    return (
        <section style={{ padding: "160px 24px 100px", background: `linear-gradient(170deg, #EEF3FF 0%, ${C.bg} 60%)`, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `radial-gradient(${C.blue} 1.5px, transparent 1.5px)`, backgroundSize: "28px 28px" }} />
            <div style={{ position: "absolute", top: -160, right: -80, width: 560, height: 560, borderRadius: "50%", background: `radial-gradient(circle, ${C.blue}12, transparent 65%)`, filter: "blur(80px)" }} />
            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
                <FadeIn>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)", marginBottom: 28 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: C.blue, letterSpacing: "0.04em" }}>Platform Overview</span>
                    </div>
                    <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 400, lineHeight: 1.06, color: C.text, margin: "0 0 28px" }}>
                        One platform.<br />
                        <span style={{ fontStyle: "italic", color: C.blue }}>Infinite intelligence.</span>
                    </h1>
                    <p style={{ fontSize: 19, color: C.textSoft, lineHeight: 1.65, maxWidth: 560, margin: "0 auto 44px" }}>
                        Every tool your field operations team needs — from AI form generation to predictive analytics — in a single, beautifully unified platform.
                    </p>
                    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link to="/pricing" className="btn-cta" style={{ padding: "17px 38px", borderRadius: 100, fontSize: 16, textDecoration: "none" }}>Start Free Trial</Link>
                        <Link to="/solutions" className="btn-ghost" style={{ padding: "16px 32px", borderRadius: 100, fontSize: 15, textDecoration: "none" }}>View Solutions →</Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function FeatureDetail({ f, i }) {
    const isEven = i % 2 === 0;
    return (
        <FadeIn delay={0.05}>
            <div className="two-col" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center",
                padding: "80px 0",
                borderTop: `1px solid ${C.border}`,
                direction: isEven ? "ltr" : "rtl",
            }}>
                <div style={{ direction: "ltr" }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", color: f.color, marginBottom: 24 }}>{f.icon}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: f.color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>{f.tagline}</div>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: C.text, margin: "0 0 20px", lineHeight: 1.12 }}>{f.title}</h2>
                    <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.7, margin: "0 0 36px" }}>{f.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {f.bullets.map((b, j) => (
                            <div key={j} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 15, color: C.text, fontWeight: 500 }}>
                                <div style={{ width: 22, height: 22, borderRadius: 6, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                {b}
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ direction: "ltr" }}>
                    <div style={{
                        background: f.bg, borderRadius: 28,
                        border: `1px solid ${f.color}18`,
                        padding: "48px",
                        display: "flex", flexDirection: "column", gap: 16,
                        minHeight: 340,
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: "white", display: "flex", alignItems: "center", justifyContent: "center", color: f.color, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>{f.icon}</div>
                            <div>
                                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, fontFamily: "'Space Grotesk'" }}>{f.title}</div>
                                <div style={{ fontSize: 12, color: f.color, fontWeight: 600 }}>{f.tagline}</div>
                            </div>
                        </div>
                        {f.bullets.slice(0, 4).map((b, j) => (
                            <div key={j} style={{ background: "rgba(255,255,255,0.7)", borderRadius: 12, padding: "14px 18px", fontSize: 14, color: C.text, fontWeight: 500, display: "flex", alignItems: "center", gap: 12 }}>
                                <span style={{ color: f.color, fontWeight: 800 }}>✓</span> {b}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

export default function Platform() {
    return (
        <>
            <PlatformHero />
            <section style={{ padding: "80px 24px 120px", background: "white" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    {features.map((f, i) => <FeatureDetail key={i} f={f} i={i} />)}
                </div>
            </section>
            <section style={{ padding: "140px 24px", background: C.bgSubtle, textAlign: "center" }}>
                <FadeIn>
                    <div style={{ maxWidth: 600, margin: "0 auto" }}>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: C.text, margin: "0 0 24px" }}>
                            Ready to experience the<br /><span style={{ fontStyle: "italic", color: C.accent }}>full platform?</span>
                        </h2>
                        <Link to="/pricing" className="btn-cta" style={{ display: "inline-block", padding: "18px 44px", borderRadius: 100, fontSize: 17, textDecoration: "none" }}>Start Free — No Card Required</Link>
                    </div>
                </FadeIn>
            </section>
        </>
    );
}
