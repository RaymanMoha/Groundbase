import { useParams, Link, Navigate } from "react-router-dom";
import { C, FadeIn } from "../shared";
import { allUseCases } from "../data/useCasesData";

export default function UseCaseDetail() {
    const { slug } = useParams();
    const useCase = allUseCases.find(uc => uc.slug === slug);

    if (!useCase) {
        return <Navigate to="/use-cases" />;
    }

    return (
        <div style={{ background: C.bgOff, minHeight: "100vh", paddingBottom: "140px" }}>
            {/* Hero Section */}
            <section style={{
                position: "relative",
                padding: "200px 40px 140px",
                background: C.bgDark,
                color: "white",
                overflow: "hidden"
            }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
                    <img src={useCase.heroImage} alt={useCase.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,15,14,0.3) 0%, rgba(12,15,14,1) 100%)" }} />
                </div>

                <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <FadeIn y={20}>
                        <div style={{
                            display: "inline-block",
                            padding: "6px 16px",
                            borderRadius: 100,
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            fontSize: 13,
                            fontWeight: 700,
                            color: "white",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            fontFamily: "'Space Grotesk', sans-serif",
                            marginBottom: 24
                        }}>
                            {useCase.ind} Use Case
                        </div>
                        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(42px, 6vw, 64px)", fontWeight: 700, margin: "0 0 24px", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                            {useCase.title}
                        </h1>
                        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", maxWidth: 700, margin: "0 auto" }}>
                            {useCase.desc}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: "0 40px", marginTop: "-60px", position: "relative", zIndex: 2 }}>
                <div style={{ maxWidth: 860, margin: "0 auto", background: "white", borderRadius: 24, padding: "64px", border: `1px solid ${C.border}`, boxShadow: "0 24px 64px rgba(0,0,0,0.06)" }}>
                    <FadeIn delay={0.1}>
                        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: C.text, marginBottom: 20 }}>
                            The Challenge
                        </h2>
                        <p style={{ fontSize: 17, color: C.textSoft, lineHeight: 1.7, marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
                            {useCase.challenge}
                        </p>

                        <div style={{ height: 1, background: C.border, margin: "48px 0" }} />

                        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: C.text, marginBottom: 20 }}>
                            The Groundbase Solution
                        </h2>
                        <p style={{ fontSize: 17, color: C.textSoft, lineHeight: 1.7, marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
                            {useCase.solution}
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, marginBottom: 64 }}>
                            {useCase.features.map((feat, i) => (
                                <div key={i} style={{ padding: "24px", background: C.bgOff, borderRadius: 16 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: C.accent, color: "white", fontWeight: 700, fontSize: 14 }}>
                                            ✓
                                        </div>
                                        <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                                            {feat.title}
                                        </h3>
                                    </div>
                                    <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.6, margin: 0 }}>
                                        {feat.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div style={{ padding: "40px", background: C.bgDark, color: "white", borderRadius: 20 }}>
                            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>
                                Real-World Impact
                            </h3>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
                                {useCase.metrics.map((m, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, fontWeight: 500 }}>
                                        <span style={{ color: C.accentLight, fontSize: 20 }}>✦</span> {m}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </FadeIn>
                </div>
            </section>

            {/* CTA */}
            <FadeIn delay={0.2}>
                <div style={{ maxWidth: 860, margin: "80px auto 0", textAlign: "center", padding: "0 20px" }}>
                    <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "48px", fontWeight: 400, color: C.text, margin: "0 0 24px", lineHeight: 1.05 }}>
                        See {useCase.ind.toLowerCase()} intelligence in action.
                    </h3>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link to="/pricing" className="btn-cta" style={{ display: "inline-flex", padding: "16px 36px", borderRadius: 100, fontSize: 16, textDecoration: "none" }}>
                            Start your free trial
                        </Link>
                        <Link to="/use-cases" className="btn-ghost" style={{ display: "inline-flex", padding: "15px 32px", borderRadius: 100, fontSize: 15, textDecoration: "none" }}>
                            Back to Use Cases
                        </Link>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
