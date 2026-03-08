import { useState } from "react";
import { Link } from "react-router-dom";
import { C, FadeIn } from "../shared";
import { HardHat, Wheat, Package, Building2, Droplets, Stethoscope, ShieldCheck, Hotel, Pickaxe, Factory, Leaf, GraduationCap, Landmark, Zap } from "lucide-react";

const solutions = [
    {
        id: "construction",
        icon: <HardHat size={26} />,
        industry: "Construction",
        color: C.orange,
        bg: C.orangeBg,
        headline: "Build safer, faster, smarter.",
        desc: "From foundation to final inspection, digitize every step of your construction operations. Groundbase gives your site managers, safety officers, and executives one platform to capture, analyze, and act on critical field data.",
        painPoints: ["Paper-based safety checklists getting lost", "No real-time progress visibility for executives", "Manual quality inspection reports take hours", "Safety incidents fall through the cracks"],
        features: ["Digital site inspection forms", "AI safety compliance analysis", "Real-time progress dashboards", "Equipment tracking & maintenance logs", "Automated compliance reporting", "Photo-verification for every task"],
        metrics: [{ val: "73%", label: "Faster site inspections" }, { val: "40%", label: "Fewer safety incidents" }, { val: "12h/wk", label: "Saved in reporting time" }],
    },
    {
        id: "agriculture",
        icon: <Wheat size={26} />,
        industry: "Agriculture",
        color: "#16A34A",
        bg: "rgba(22,163,74,0.07)",
        headline: "Grow smarter with AI-powered farm intelligence.",
        desc: "Track every field, crop, and worker across your entire agricultural operation — even in the most remote areas. AI predicts yield issues and recommends interventions before they impact your harvest.",
        painPoints: ["No visibility across multiple farm sites", "Crop conditions captured inconsistently", "Worker activity untracked", "Weather & soil data siloed"],
        features: ["Offline-first mobile data capture", "GPS farm mapping & tracking", "Crop health monitoring forms", "Worker activity logging", "AI yield prediction alerts", "Soil & weather data integration"],
        metrics: [{ val: "100%", label: "Offline data capture" }, { val: "3x", label: "Faster field reporting" }, { val: "22%", label: "Avg yield improvement" }],
    },
    {
        id: "logistics",
        icon: <Package size={26} />,
        industry: "Logistics",
        color: C.blue,
        bg: C.blueBg,
        headline: "Every delivery, verified and visible.",
        desc: "Give your logistics operation complete real-time visibility — from warehouse to last-mile delivery. AI-powered route analysis and predictive delay detection keep your business running on time.",
        painPoints: ["Delivery disputes with no photo evidence", "Driver performance untracked", "Inventory discrepancies undetected", "No real-time fleet visibility"],
        features: ["GPS-verified delivery confirmation", "Photo evidence at every checkpoint", "Driver performance dashboards", "Inventory count & verification forms", "AI route anomaly detection", "Automated delivery reports"],
        metrics: [{ val: "28%", label: "Fewer missed deliveries" }, { val: "2x", label: "Faster dispute resolution" }, { val: "15%", label: "Fuel cost savings" }],
    },
    {
        id: "property",
        icon: <Building2 size={26} />,
        industry: "Property Management",
        color: C.purple,
        bg: C.purpleBg,
        headline: "Exceptional properties, effortlessly managed.",
        desc: "Modernize property inspections, maintenance workflows, and tenant communications. AI prioritizes maintenance requests by severity and predicts equipment failures before they become expensive emergencies.",
        painPoints: ["Maintenance requests lost in email chains", "Inspection reports inconsistent", "Tenant communication fragmented", "Reactive vs predictive maintenance"],
        features: ["Digital property inspection checklists", "Photo-verified maintenance completion", "Tenant issue submission portal", "Predictive maintenance AI", "Automated work order generation", "Regulatory compliance reporting"],
        metrics: [{ val: "60%", label: "Faster issue resolution" }, { val: "45%", label: "Reduction in emergency calls" }, { val: "4.8★", label: "Average tenant satisfaction" }],
    },
    {
        id: "oil-gas",
        icon: <Droplets size={26} />,
        industry: "Oil & Gas",
        color: "#B45309",
        bg: "rgba(180,83,9,0.07)",
        headline: "Safety and compliance, always.",
        desc: "Maintain the highest standards of safety, environmental compliance, and operational efficiency across remote field sites. AI ensures nothing slips through the cracks in high-stakes environments.",
        painPoints: ["Remote site inspection delays", "Complex compliance requirements", "Safety near-miss events unreported", "Equipment maintenance backlogs"],
        features: ["HSE inspection checklists", "Permit-to-work digital workflows", "Incident & near-miss reporting", "Equipment maintenance tracking", "Environmental monitoring logs", "Regulator-ready audit reports"],
        metrics: [{ val: "94%", label: "Compliance audit pass rate" }, { val: "67%", label: "Fewer safety near-misses" }, { val: "100%", label: "Paperless operations" }],
    },
    {
        id: "healthcare",
        icon: <Stethoscope size={26} />,
        industry: "Healthcare",
        color: "#0891B2",
        bg: "rgba(8,145,178,0.07)",
        headline: "Patient care, perfectly coordinated.",
        desc: "Digitize clinical checklists, patient monitoring, and facility inspections. AI surfaces care quality insights and compliance risks so your team can focus on what matters most — your patients.",
        painPoints: ["Paper clinical checklists error-prone", "Facility inspection backlogs", "Compliance documentation fragmented", "Staff activity unverified"],
        features: ["Digital clinical checklists", "Facility hygiene & safety inspections", "Staff activity & compliance tracking", "Equipment sterilization logs", "Incident & near-miss reporting", "HIPAA-compliant data handling"],
        metrics: [{ val: "98%", label: "Compliance documentation rate" }, { val: "50%", label: "Reduced admin time" }, { val: "0", label: "Paper forms needed" }],
    },
];

function SolutionsHero() {
    return (
        <section style={{ padding: "160px 24px 100px", background: `linear-gradient(170deg, #FFF8F3 0%, ${C.bg} 60%)`, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -140, right: -80, width: 540, height: 540, borderRadius: "50%", background: `radial-gradient(circle, ${C.orange}12, transparent 65%)`, filter: "blur(80px)" }} />
            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
                <FadeIn>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: C.orangeBg, border: `1px solid ${C.orange}22`, marginBottom: 28 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: C.orange, letterSpacing: "0.04em" }}>Industry Solutions</span>
                    </div>
                    <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 400, lineHeight: 1.06, color: C.text, margin: "0 0 28px" }}>
                        Built for every industry.<br />
                        <span style={{ fontStyle: "italic", color: C.orange }}>Customized for yours.</span>
                    </h1>
                    <p style={{ fontSize: 19, color: C.textSoft, lineHeight: 1.65, maxWidth: 560, margin: "0 auto 44px" }}>
                        Groundbase is a flexible platform that conforms to the specific needs of your industry — not the other way around.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}

function SolutionCard({ s, active, onClick }) {
    return (
        <button onClick={onClick} style={{
            padding: "18px 28px", borderRadius: 100, border: "none",
            background: active ? C.text : "white",
            color: active ? "white" : C.textSoft,
            fontWeight: 600, fontSize: 15, cursor: "pointer", fontFamily: "'Space Grotesk'",
            boxShadow: active ? "0 8px 24px rgba(0,0,0,0.14)" : `0 1px 3px rgba(0,0,0,0.05)`,
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            display: "flex", alignItems: "center", gap: 10,
        }}>
            <span style={{ display: "flex", alignItems: "center", color: active ? "white" : s.color }}>{s.icon}</span> {s.industry}
        </button>
    );
}

export default function Solutions() {
    const [activeId, setActiveId] = useState("construction");
    const sol = solutions.find(s => s.id === activeId);

    return (
        <>
            <SolutionsHero />

            {/* Jumbo Solution Navigator */}
            <section style={{ padding: "80px 24px 140px", background: "white" }}>
                <div style={{ maxWidth: 1080, margin: "0 auto" }}>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 64 }}>
                        {solutions.map(s => (
                            <SolutionCard key={s.id} s={s} active={activeId === s.id} onClick={() => setActiveId(s.id)} />
                        ))}
                    </div>

                    <div key={activeId} style={{ animation: "slideUp 0.45s cubic-bezier(0.16,1,0.3,1)" }}>
                        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 60 }}>
                            <div>
                                <div style={{ width: 56, height: 56, borderRadius: 18, background: sol.bg, display: "flex", alignItems: "center", justifyContent: "center", color: sol.color, marginBottom: 24 }}>{sol.icon}</div>
                                <div style={{ fontSize: 13, fontWeight: 700, color: sol.color, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>{sol.industry}</div>
                                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.8vw, 48px)", fontWeight: 400, color: C.text, margin: "0 0 20px", lineHeight: 1.12 }}>{sol.headline}</h2>
                                <p style={{ fontSize: 17, color: C.textSoft, lineHeight: 1.7, margin: "0 0 40px" }}>{sol.desc}</p>
                                <div style={{ display: "flex", gap: 40 }}>
                                    {sol.metrics.map((m, i) => (
                                        <div key={i}>
                                            <div style={{ fontSize: 36, fontWeight: 400, color: sol.color, fontFamily: "'Instrument Serif'", lineHeight: 1 }}>{m.val}</div>
                                            <div style={{ fontSize: 13, color: C.textSoft, marginTop: 6, fontWeight: 500 }}>{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div style={{ background: C.bgSubtle, borderRadius: 28, padding: "48px", border: `1px solid ${C.border}` }}>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 28, fontFamily: "'Space Grotesk'" }}>Common pain points solved:</div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                                        {sol.painPoints.map((p, i) => (
                                            <div key={i} style={{ display: "flex", gap: 14, fontSize: 15, color: C.textSoft, lineHeight: 1.5 }}>
                                                <span style={{ color: sol.color, opacity: 0.7, flexShrink: 0 }}>—</span> {p}
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 32 }}>
                                        <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 20, fontFamily: "'Space Grotesk'" }}>Key features included:</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                            {sol.features.map((f, i) => (
                                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: C.text, fontWeight: 500, lineHeight: 1.4 }}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sol.color} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6L9 17l-5-5" /></svg>
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                            <Link to="/pricing" className="btn-cta" style={{ padding: "17px 38px", borderRadius: 100, fontSize: 16, textDecoration: "none" }}>Start Free for {sol.industry}</Link>
                            <Link to="/platform" className="btn-ghost" style={{ padding: "16px 32px", borderRadius: 100, fontSize: 15, textDecoration: "none" }}>See All Features →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Industries Grid */}
            <section style={{ padding: "120px 24px", background: C.bgSubtle }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <FadeIn><div style={{ textAlign: "center", marginBottom: 64 }}>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: C.text }}>
                            More industries we serve.
                        </h2>
                    </div></FadeIn>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                        {[
                            { name: "Security Services", icon: <ShieldCheck size={20} /> },
                            { name: "Hospitality", icon: <Hotel size={20} /> },
                            { name: "Mining", icon: <Pickaxe size={20} /> },
                            { name: "Manufacturing", icon: <Factory size={20} /> },
                            { name: "Environmental", icon: <Leaf size={20} /> },
                            { name: "Education", icon: <GraduationCap size={20} /> },
                            { name: "Government", icon: <Landmark size={20} /> },
                            { name: "Utilities", icon: <Zap size={20} /> }
                        ].map((ind, i) => (
                            <FadeIn key={i} delay={i * 0.06}>
                                <div className="card-hover" style={{ background: "white", borderRadius: 20, padding: "28px 24px", border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 16, color: C.textSoft, fontWeight: 500 }}>
                                    <span style={{ color: C.text }}>{ind.icon}</span> {ind.name}
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
