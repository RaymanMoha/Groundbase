import { useState } from "react";
import { Link } from "react-router-dom";
import { C, FadeIn } from "../shared";
import { allUseCases } from "../data/useCasesData";

export default function UseCases() {
    const [activeIndustry, setActiveIndustry] = useState("All");

    const industries = ["All", "Construction", "Agriculture", "Logistics", "Property Management", "Healthcare", "Manufacturing"];

    const displayedCases = activeIndustry === "All"
        ? allUseCases
        : allUseCases.filter(c => c.ind === activeIndustry);

    return (
        <section style={{ padding: "160px 40px 140px", background: C.bgOff, minHeight: "100vh" }}>
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
                        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 700, color: C.text, margin: "0 0 48px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                            Use Cases
                        </h2>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "56px 40px" }}>
                            {displayedCases.map((c, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                                    <h4 style={{ fontSize: 22, fontWeight: 700, color: C.text, margin: "0 0 16px", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                                        {c.title}
                                    </h4>
                                    <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.6, margin: "0 0 24px", fontFamily: "'DM Sans', sans-serif", flexGrow: 1 }}>
                                        {c.desc}
                                    </p>
                                    <Link to={`/use-cases/${c.slug}`} style={{
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
            {/* CTA specific to use cases */}
            <FadeIn delay={0.2}>
                <div style={{ maxWidth: 800, margin: "140px auto 0", textAlign: "center", padding: "64px", background: "white", borderRadius: 24, border: `1px solid ${C.border}` }}>
                    <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "42px", fontWeight: 400, color: C.text, margin: "0 0 24px", lineHeight: 1.05 }}>
                        Ready to empower your field team?
                    </h3>
                    <p style={{ fontSize: 16, color: C.textSoft, marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
                        Start digitizing your workflows today. Setup takes 5 minutes.
                    </p>
                    <Link to="/pricing" className="btn-cta" style={{ display: "inline-flex", padding: "14px 32px", borderRadius: 100, fontSize: 15, textDecoration: "none" }}>
                        Get started free
                    </Link>
                </div>
            </FadeIn>
            <style>{`
                @media (max-width: 820px) {
                    .use-cases-container { flex-direction: column !important; gap: 40px !important; }
                    .use-cases-sidebar { width: 100% !important; border-bottom: 2px solid ${C.border}; padding-bottom: 24px; position: static !important; }
                }
            `}</style>
        </section>
    );
}
