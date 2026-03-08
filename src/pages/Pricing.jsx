import { useState } from "react";
import { Link } from "react-router-dom";
import { C, FadeIn } from "../shared";

const plans = [
    {
        name: "Free",
        price: { monthly: "$0", annual: "$0" },
        period: "forever",
        desc: "Perfect for small teams starting to digitize.",
        features: ["Up to 10 users", "5 active forms", "500 submissions/month", "Mobile app (iOS & Android)", "Offline data capture", "GPS & photo fields", "Basic reporting", "Community support"],
        cta: "Start Free",
        ctaLink: "#",
        popular: false,
        color: C.textSoft,
    },
    {
        name: "Starter + AI",
        price: { monthly: "$12", annual: "$10" },
        period: "/user/mo",
        desc: "Add AI superpowers to your operations.",
        features: ["Everything in Free", "Unlimited users", "Unlimited forms", "AI Form Builder", "AI Insights (basic)", "GPS tracking & heatmaps", "Data export (CSV, PDF)", "Email support"],
        cta: "Start 14-Day Trial",
        ctaLink: "#",
        popular: false,
        color: C.accent,
    },
    {
        name: "Pro AI",
        price: { monthly: "$29", annual: "$24" },
        period: "/user/mo",
        desc: "The full AI intelligence suite for growing teams.",
        features: ["Everything in Starter", "AI Report Generator", "AI Field Assistant (chat)", "Smart Photo Analysis", "Predictive Alerts", "Custom dashboards", "Advanced analytics", "Priority support", "REST API access", "Webhooks & integrations"],
        cta: "Start 14-Day Trial",
        ctaLink: "#",
        popular: true,
        color: C.accent,
    },
    {
        name: "Enterprise",
        price: { monthly: "$69", annual: "$58" },
        period: "/user/mo",
        desc: "Custom AI and enterprise-grade controls.",
        features: ["Everything in Pro", "Custom AI model training", "SSO & SAML", "Advanced permissions", "Dedicated success manager", "SLA guarantees (99.9%)", "On-premise deployment option", "White-label available", "Custom integrations", "Security audit support"],
        cta: "Contact Sales",
        ctaLink: "#",
        popular: false,
        color: C.text,
    },
];

const faqs = [
    { q: "Is there really a free plan forever?", a: "Yes. Our Free plan has no time limit. You can use Groundbase with up to 10 users and 5 forms completely free, forever. We believe in letting you experience the value before paying." },
    { q: "Can I change plans at any time?", a: "Absolutely. Upgrade, downgrade, or cancel at any time. When you upgrade, you're billed pro-rata for the rest of the billing cycle. No cancellation fees, ever." },
    { q: "What counts as a 'user'?", a: "A user is any person who has a login to your Groundbase workspace. Field workers, managers, and admins all count as users. You can add, remove, and reassign users any time." },
    { q: "How does the 14-day trial work?", a: "Start any paid plan with full access to all features for 14 days. No credit card required. At the end of your trial, you can subscribe to continue, or downgrade to the Free plan." },
    { q: "Is my data secure?", a: "Security is foundational to Groundbase. We use end-to-end encryption, SOC 2 Type II-compliant infrastructure, and role-based access controls. Enterprise customers get dedicated security reviews and on-premise options." },
    { q: "Do you offer discounts for NGOs or education?", a: "Yes. We offer 50% discounts for verified non-profit organizations, educational institutions, and social enterprises. Contact us at support@getgroundbase.com with your organization details." },
];

function PricingHero() {
    return (
        <section style={{ padding: "160px 24px 80px", textAlign: "center", background: `linear-gradient(170deg, #ECFDF5 0%, ${C.bg} 55%)`, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)", width: 640, height: 640, background: `radial-gradient(circle, ${C.accentLight}0D, transparent 65%)`, filter: "blur(80px)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
                <FadeIn>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: C.accentBg, border: `1px solid rgba(34,199,126,0.2)`, marginBottom: 28 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: C.accent, letterSpacing: "0.04em" }}>Simple, Transparent Pricing</span>
                    </div>
                    <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(48px, 6vw, 74px)", fontWeight: 400, lineHeight: 1.06, color: C.text, margin: "0 0 24px" }}>
                        Start free.<br />
                        <span style={{ fontStyle: "italic", color: C.accent }}>Scale with AI.</span>
                    </h1>
                    <p style={{ fontSize: 19, color: C.textSoft, lineHeight: 1.65, maxWidth: 500, margin: "0 auto" }}>
                        Enterprise-grade AI at a fraction of the cost. No long-term contracts. Cancel anytime.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}

export default function Pricing() {
    const [annual, setAnnual] = useState(false);

    return (
        <>
            <PricingHero />

            {/* Toggle */}
            <section style={{ padding: "40px 24px 0", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 14, background: C.bgSubtle, border: `1px solid ${C.border}`, borderRadius: 100, padding: "6px 6px 6px 20px" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: C.textSoft }}>Monthly</span>
                    <button onClick={() => setAnnual(!annual)} style={{
                        width: 52, height: 28, borderRadius: 100, border: "none", cursor: "pointer", position: "relative",
                        background: annual ? C.accent : "#D1D5DB", transition: "background 0.3s",
                    }}>
                        <div style={{ position: "absolute", top: 3, left: annual ? 26 : 3, width: 22, height: 22, borderRadius: "50%", background: "white", transition: "left 0.3s", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
                    </button>
                    <span style={{ fontSize: 14, fontWeight: 600, color: annual ? C.accent : C.textSoft }}>Annual</span>
                    <span style={{ padding: "5px 14px", borderRadius: 100, background: C.accentBg, border: `1px solid rgba(34,199,126,0.2)`, fontSize: 12, fontWeight: 700, color: C.accent }}>Save 20%</span>
                </div>
            </section>

            {/* Plans Grid */}
            <section style={{ padding: "60px 24px 140px", background: "white" }}>
                <div style={{ maxWidth: 1240, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "stretch" }}>
                        {plans.map((p, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div style={{
                                    background: p.popular ? C.bgDark : (i === 0 ? C.bgSubtle : "white"),
                                    border: p.popular ? "none" : `1px solid ${C.border}`,
                                    borderRadius: 28, padding: "40px 32px",
                                    position: "relative",
                                    boxShadow: p.popular ? "0 32px 64px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.03)",
                                    display: "flex", flexDirection: "column", height: "100%",
                                    transform: p.popular ? "scale(1.03)" : "scale(1)",
                                }}>
                                    {p.popular && (
                                        <div style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)", padding: "7px 22px", borderRadius: 100, background: `linear-gradient(135deg, ${C.accentLight}, ${C.accent})`, color: "white", fontSize: 11, fontWeight: 800, letterSpacing: "0.06em", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(34,199,126,0.35)" }}>
                                            MOST POPULAR
                                        </div>
                                    )}

                                    <div style={{ fontSize: 12, fontWeight: 800, color: p.popular ? C.accentLight : C.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16 }}>{p.name}</div>

                                    <div style={{ marginBottom: 8 }}>
                                        <span style={{ fontSize: 56, fontWeight: 400, color: p.popular ? "white" : C.text, fontFamily: "'Instrument Serif'", lineHeight: 1 }}>
                                            {annual ? p.price.annual : p.price.monthly}
                                        </span>
                                        <span style={{ fontSize: 14, color: p.popular ? "rgba(255,255,255,0.5)" : C.textMuted, marginLeft: 4, fontFamily: "'Space Grotesk'" }}>{p.period}</span>
                                    </div>

                                    <p style={{ fontSize: 14, color: p.popular ? "rgba(255,255,255,0.6)" : C.textSoft, margin: "0 0 32px", lineHeight: 1.55 }}>{p.desc}</p>

                                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
                                        {p.features.map((f, j) => (
                                            <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: p.popular ? "rgba(255,255,255,0.85)" : C.text, fontWeight: 500, lineHeight: 1.4 }}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={p.popular ? C.accentLight : C.accentLight} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6L9 17l-5-5" /></svg>
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    <a href={p.ctaLink} style={{
                                        display: "block", textAlign: "center", padding: "17px 20px", borderRadius: 100, textDecoration: "none",
                                        background: p.popular ? `linear-gradient(180deg, ${C.accentLight} 0%, ${C.accent} 100%)` : "white",
                                        color: p.popular ? "white" : C.text,
                                        border: p.popular ? "none" : `1px solid ${C.border}`,
                                        fontWeight: 700, fontSize: 15, fontFamily: "'Space Grotesk'",
                                        boxShadow: p.popular ? "0 4px 16px rgba(34,199,126,0.3)" : "none",
                                        transition: "transform 0.2s",
                                    }} onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
                                        {p.cta}
                                    </a>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Enterprise strip */}
                    <FadeIn delay={0.4} style={{ marginTop: 40 }}>
                        <div style={{ background: C.bgSubtle, border: `1px solid ${C.border}`, borderRadius: 24, padding: "36px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
                            <div>
                                <div style={{ fontSize: 18, fontWeight: 700, color: C.text, fontFamily: "'Space Grotesk'", marginBottom: 6 }}>Need a custom plan for your organization?</div>
                                <p style={{ fontSize: 15, color: C.textSoft, margin: 0 }}>Talk to our team about volume pricing, custom AI training, and enterprise SLAs.</p>
                            </div>
                            <a href="mailto:sales@getgroundbase.com" className="btn-ghost" style={{ padding: "15px 32px", borderRadius: 100, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>
                                Talk to Sales →
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Compare table */}
            <section style={{ padding: "0 24px 140px" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <FadeIn><div style={{ textAlign: "center", marginBottom: 56 }}>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, color: C.text }}>Compare plans in detail.</h2>
                    </div></FadeIn>
                    <div style={{ border: `1px solid ${C.border}`, borderRadius: 24, overflow: "hidden", background: "white" }}>
                        {/* Header row */}
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", background: C.bgSubtle, borderBottom: `1px solid ${C.border}` }}>
                            <div style={{ padding: "20px 28px", fontSize: 13, fontWeight: 700, color: C.textMuted }}>Feature</div>
                            {plans.map(p => (
                                <div key={p.name} style={{ padding: "20px 16px", textAlign: "center", fontSize: 13, fontWeight: 700, color: p.popular ? C.accent : C.text, background: p.popular ? C.accentBg : "transparent" }}>
                                    {p.name}
                                </div>
                            ))}
                        </div>
                        {[
                            ["Mobile app (offline)", true, true, true, true],
                            ["Form builder", "5 forms", "Unlimited", "Unlimited", "Unlimited"],
                            ["Monthly submissions", "500", "Unlimited", "Unlimited", "Unlimited"],
                            ["AI Form Builder", false, true, true, true],
                            ["AI Insights Engine", false, "Basic", true, true],
                            ["AI Report Generator", false, false, true, true],
                            ["AI Field Assistant", false, false, true, true],
                            ["Smart Photo Analysis", false, false, true, true],
                            ["Predictive Alerts", false, false, true, true],
                            ["API & Webhooks", false, false, true, true],
                            ["SSO & SAML", false, false, false, true],
                            ["Custom AI Models", false, false, false, true],
                            ["Dedicated Support", false, "Email", "Priority", "Dedicated CSM"],
                        ].map(([feature, ...vals], ri) => (
                            <div key={ri} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", borderBottom: ri < 12 ? `1px solid ${C.border}` : "none", background: ri % 2 === 0 ? "white" : C.bgSubtle }}>
                                <div style={{ padding: "16px 28px", fontSize: 14, color: C.text, fontWeight: 500 }}>{feature}</div>
                                {vals.map((v, vi) => (
                                    <div key={vi} style={{ padding: "16px 16px", textAlign: "center", fontSize: 14, color: C.text, fontWeight: 500, background: vi === 2 ? `${C.accentBg}` : "transparent" }}>
                                        {v === true ? <span style={{ color: C.accentLight, fontWeight: 700, fontSize: 17 }}>✓</span>
                                            : v === false ? <span style={{ color: C.border, fontSize: 20 }}>—</span>
                                                : <span style={{ color: C.accent, fontWeight: 600, fontSize: 13 }}>{v}</span>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "0 24px 140px" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <FadeIn><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, color: C.text, textAlign: "center", marginBottom: 56 }}>
                        Frequently asked questions.
                    </h2></FadeIn>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {faqs.map((faq, i) => <FaqItem key={i} faq={faq} />)}
                    </div>
                </div>
            </section>
        </>
    );
}

function FaqItem({ faq }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", background: "white" }}>
            <button onClick={() => setOpen(!open)} style={{ width: "100%", padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: C.text, fontFamily: "'Space Grotesk'" }}>{faq.q}</span>
                <span style={{ fontSize: 22, color: C.textMuted, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s", flexShrink: 0, marginLeft: 16 }}>+</span>
            </button>
            {open && (
                <div style={{ padding: "0 28px 22px", fontSize: 15, color: C.textSoft, lineHeight: 1.7, animation: "slideUp 0.3s ease" }}>
                    {faq.a}
                </div>
            )}
        </div>
    );
}
