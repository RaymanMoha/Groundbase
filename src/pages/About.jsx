import { Link } from "react-router-dom";
import { C, FadeIn, useCounter } from "../shared";
import { Globe, Handshake, Zap, Lock, Users, Map, Coins, Sparkles } from "lucide-react";

const team = [
    { name: "Amara Osei", title: "Founder & CEO", avatar: "https://i.pravatar.cc/150?img=68", bio: "Former operations director at a pan-African logistics group. Built Groundbase after managing 200+ field workers with spreadsheets." },
    { name: "Zanele Mthembu", title: "Head of AI & Product", avatar: "https://i.pravatar.cc/150?img=47", bio: "Machine learning researcher turned product builder. Obsessed with making AI useful for non-technical teams." },
    { name: "Kofi Asante", title: "Head of Engineering", avatar: "https://i.pravatar.cc/150?img=11", bio: "Built data infrastructure at scale. Makes sure Groundbase works flawlessly in the most resource-constrained environments." },
    { name: "Fatima Al-Rashid", title: "Head of Customer Success", avatar: "https://i.pravatar.cc/150?img=40", bio: "Spent 8 years in field operations consulting. Ensures every Groundbase customer gets measurable ROI within 30 days." },
    { name: "David Kimani", title: "Head of Growth", avatar: "https://i.pravatar.cc/150?img=33", bio: "Growth lead at three VC-backed SaaS companies. Focused on putting Groundbase in the hands of every operations team in the world." },
    { name: "Priya Ranjani", title: "Lead Designer", avatar: "https://i.pravatar.cc/150?img=49", bio: "Crafts every pixel of the Groundbase experience. Previously designed products used by millions at leading tech companies." },
];

const values = [
    { icon: <Globe size={36} color={C.accent} />, title: "Built for the Real World", desc: "Groundbase was built for teams operating in challenging environments — remote fields, construction sites, farms. We solve problems spreadsheets and WhatsApp can't." },
    { icon: <Handshake size={36} color={C.blue} />, title: "Customer Success First", desc: "We measure our success by your outcomes. Every customer gets a dedicated onboarding experience and we don't celebrate sign-ups — we celebrate results." },
    { icon: <Zap size={36} color={C.orange} />, title: "Speed Over Perfection", desc: "We ship fast and iterate with your feedback. Good software in your hands today beats perfect software next year. We move fast with purpose." },
    { icon: <Lock size={36} color={C.purple} />, title: "Data You Can Trust", desc: "We treat your operational data with the highest standards of security and privacy. It's your data, always — we're just the engine that makes it useful." },
];

const timeline = [
    { year: "2018", title: "The Problem", desc: "Our founder, running logistics operations across 3 African countries, realizes that field operations runs on WhatsApp, paper, and prayer." },
    { year: "2019", title: "First Version", desc: "A rough internal form tool built for a construction client. Saves 12 hours of weekly reporting time in the first month." },
    { year: "2021", title: "Groundbase Launched", desc: "Official launch of Groundbase as a SaaS product. First 100 paying customers within 60 days." },
    { year: "2022", title: "Series A", desc: "Raised $4.2M in Series A funding. Expanded the team to 18 people across East Africa and Europe." },
    { year: "2023", title: "AI Integration", desc: "Launched the first AI-powered features: smart form generation and automated data analysis. Usage doubles overnight." },
    { year: "2024", title: "AI Field Intelligence", desc: "Launched the full AI Field Intelligence suite. 50,000+ active users across 42 countries." },
    { year: "2026", title: "Today", desc: "Serving enterprise and SME customers in construction, agriculture, logistics, and beyond. The mission continues." },
];

function AboutHero() {
    return (
        <section style={{ padding: "160px 24px 100px", background: `linear-gradient(170deg, #F0F3FF 0%, ${C.bg} 60%)`, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -120, left: "25%", width: 500, height: 500, background: `radial-gradient(circle, ${C.blue}0D, transparent 65%)`, filter: "blur(80px)", zIndex: 0 }} />
            <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
                <FadeIn>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.14)", marginBottom: 28 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: C.blue, letterSpacing: "0.04em" }}>Our Story</span>
                    </div>
                    <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 400, lineHeight: 1.06, color: C.text, margin: "0 0 28px" }}>
                        We believe field teams<br />
                        <span style={{ fontStyle: "italic", color: C.blue }}>deserve great software.</span>
                    </h1>
                    <p style={{ fontSize: 19, color: C.textSoft, lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
                        Groundbase was born from firsthand frustration. We built the platform we wished existed when we were managing field operations with spreadsheets and WhatsApp.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}

function MissionStatement() {
    return (
        <section style={{ padding: "120px 24px", background: "white" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <FadeIn>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "clamp(22px, 3vw, 34px)", color: C.text, lineHeight: 1.55, fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontStyle: "italic" }}>
                            "The world runs on field teams — the construction workers, farmers, delivery drivers, inspectors, and technicians who keep everything moving. They deserve tools as powerful as those used in headquarters."
                        </p>
                        <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                            <img src={team[0].avatar} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} alt="Amara Osei" />
                            <div style={{ textAlign: "left" }}>
                                <div style={{ fontSize: 15, fontWeight: 700, color: C.text, fontFamily: "'Space Grotesk'" }}>Amara Osei</div>
                                <div style={{ fontSize: 13, color: C.textSoft }}>Founder & CEO, Groundbase</div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function Stats() {
    const [c1, r1] = useCounter(50000);
    const [c2, r2] = useCounter(42);
    const [c3, r3] = useCounter(4);

    const statsData = [
        { ref: r1, val: c1.toLocaleString() + "+", label: "Active users across the globe", icon: <Users size={24} color={C.accent} /> },
        { ref: r2, val: c2 + "+", label: "Countries with active customers", icon: <Map size={24} color={C.blue} /> },
        { ref: r3, val: "$" + c3 + ".2M", label: "Raised to build the future", icon: <Coins size={24} color={C.orange} /> },
        { ref: null, val: "2018", label: "Founded with a clear mission", icon: <Sparkles size={24} color={C.purple} /> },
    ];

    return (
        <section style={{ padding: "140px 24px", background: C.bgSubtle, position: "relative", overflow: "hidden" }}>
            {/* Subtle light mode effects */}
            <div style={{ position: "absolute", top: "10%", left: "15%", width: 500, height: 500, background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)", filter: "blur(60px)", zIndex: 0 }} />
            <div style={{ position: "absolute", bottom: "10%", right: "15%", width: 600, height: 600, background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 65%)", filter: "blur(80px)", zIndex: 0 }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 72 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.14)", marginBottom: 28 }}>
                            <span style={{ fontSize: 12, fontWeight: 700, color: C.blue, letterSpacing: "0.04em", textTransform: "uppercase" }}>Impact at Scale</span>
                        </div>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 400, color: C.text, lineHeight: 1.05, margin: 0 }}>
                            Groundbase by the <span style={{ fontStyle: "italic", color: C.blue }}>numbers.</span>
                        </h2>
                    </div>
                </FadeIn>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                    {statsData.map((s, i) => (
                        <FadeIn key={i} delay={i * 0.1} style={{ height: "100%" }}>
                            <div className="card-hover" ref={s.ref} style={{
                                padding: "48px 32px",
                                borderRadius: 24,
                                height: "100%",
                                background: "white",
                                border: `1px solid ${C.border}`,
                                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                            }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 18, background: C.bgSubtle, marginBottom: 28 }}>
                                    {s.icon}
                                </div>
                                <div style={{ fontSize: 52, fontWeight: 400, color: C.text, fontFamily: "'Instrument Serif'", lineHeight: 1, marginBottom: 16 }}>
                                    {s.val}
                                </div>
                                <div style={{ fontSize: 16, color: C.textSoft, fontWeight: 500, lineHeight: 1.6 }}>
                                    {s.label}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Values() {
    return (
        <section style={{ padding: "140px 24px", background: "white" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <FadeIn><div style={{ textAlign: "center", marginBottom: 80 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.textMuted, letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Values</span>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: C.text, margin: "16px 0 0" }}>
                        The principles that guide us.
                    </h2>
                </div></FadeIn>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                    {values.map((v, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="card-hover" style={{ background: C.bgSubtle, borderRadius: 24, padding: "44px 36px", border: `1px solid ${C.border}` }}>
                                <div style={{ marginBottom: 24, display: "flex" }}>{v.icon}</div>
                                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, margin: "0 0 14px", fontFamily: "'Space Grotesk'" }}>{v.title}</h3>
                                <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Timeline() {
    return (
        <section style={{ padding: "120px 24px", background: C.bgSubtle }}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
                <FadeIn><div style={{ textAlign: "center", marginBottom: 80 }}>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: C.text }}>How we got here.</h2>
                </div></FadeIn>
                <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: 80, top: 0, bottom: 0, width: 1, background: C.border }} />
                    {timeline.map((t, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div style={{ display: "flex", gap: 40, marginBottom: 48, alignItems: "flex-start" }}>
                                <div style={{ minWidth: 60, textAlign: "right", fontSize: 13, fontWeight: 800, color: i === timeline.length - 1 ? C.accent : C.textMuted, fontFamily: "'Space Grotesk'", paddingTop: 4 }}>
                                    {t.year}
                                </div>
                                <div style={{ width: 1, position: "relative" }}>
                                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: i === timeline.length - 1 ? C.accent : C.border, border: `2px solid white`, position: "absolute", left: -5.5, top: 4, boxShadow: i === timeline.length - 1 ? `0 0 0 4px ${C.accentBg}` : "none" }} />
                                </div>
                                <div style={{ paddingBottom: 8, flex: 1 }}>
                                    <div style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 6, fontFamily: "'Space Grotesk'" }}>{t.title}</div>
                                    <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Team() {
    return (
        <section style={{ padding: "140px 24px", background: "white" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <FadeIn><div style={{ textAlign: "center", marginBottom: 80 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.textMuted, letterSpacing: "0.1em", textTransform: "uppercase" }}>The Team</span>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: C.text, margin: "16px 0 0" }}>
                        The humans behind<br /><span style={{ fontStyle: "italic", color: C.accent }}>the intelligence.</span>
                    </h2>
                </div></FadeIn>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
                    {team.map((m, i) => (
                        <FadeIn key={i} delay={i * 0.08}>
                            <div className="card-hover" style={{ display: "flex", gap: 20, padding: "32px", background: C.bgSubtle, borderRadius: 24, border: `1px solid ${C.border}` }}>
                                <img src={m.avatar} style={{ width: 68, height: 68, borderRadius: 20, objectFit: "cover", flexShrink: 0, boxShadow: "0 8px 16px rgba(0,0,0,0.06)" }} alt={m.name} />
                                <div>
                                    <div style={{ fontSize: 17, fontWeight: 700, color: C.text, fontFamily: "'Space Grotesk'", marginBottom: 4 }}>{m.name}</div>
                                    <div style={{ fontSize: 13, color: C.accent, fontWeight: 600, marginBottom: 12 }}>{m.title}</div>
                                    <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.6, margin: 0 }}>{m.bio}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutCTA() {
    return (
        <section style={{ padding: "140px 24px", textAlign: "center", background: C.bgSubtle }}>
            <FadeIn>
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400, color: C.text, margin: "0 0 24px", lineHeight: 1.08 }}>
                        Join the mission to upgrade field operations.
                    </h2>
                    <p style={{ fontSize: 18, color: C.textSoft, lineHeight: 1.65, marginBottom: 44 }}>
                        We're hiring ambitious people who want to build software that matters for teams doing the world's hardest work.
                    </p>
                    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="mailto:careers@getgroundbase.com" className="btn-cta" style={{ padding: "18px 40px", borderRadius: 100, fontSize: 16, textDecoration: "none" }}>View Open Roles</a>
                        <Link to="/pricing" className="btn-ghost" style={{ padding: "17px 36px", borderRadius: 100, fontSize: 15, textDecoration: "none" }}>Start Using Groundbase</Link>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

export default function About() {
    return (
        <>
            <AboutHero />
            <MissionStatement />
            <Stats />
            <Values />
            <Timeline />
            <Team />
            <AboutCTA />
        </>
    );
}
