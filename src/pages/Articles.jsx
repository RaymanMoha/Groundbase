import { useState } from "react";
import { Link } from "react-router-dom";
import { C, FadeIn } from "../shared";
import { articlesData } from "../data/articlesData";
import { Clock, ArrowRight, Search } from "lucide-react";

function ArticlesHero() {
    return (
        <section style={{
            position: "relative", overflow: "hidden",
            padding: "180px 40px 100px",
            background: "#fff",
        }}>
            {/* Animated SVG Contour Lines — matching home hero */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice"
                    style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                    <defs>
                        <style>{`
                            .acl {fill:none;stroke:#1A6B4F;stroke-width:0.8;stroke-dasharray:8 6;animation:adrft 22s linear infinite;}
                            .acl2{fill:none;stroke:#22C77E;stroke-width:0.6;stroke-dasharray:5 9;animation:adrft 28s linear infinite reverse;}
                            @keyframes adrft{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-900}}
                            @keyframes awv1{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
                        `}</style>
                    </defs>
                    <g style={{ animation: "awv1 10s ease-in-out infinite", transformOrigin: "720px 300px" }}>
                        <path className="acl" d="M-200,120 Q200,60 450,160 T890,105 T1290,150 T1700,110" opacity="0.22" />
                        <path className="acl2" d="M-200,180 Q250,100 490,210 T940,140 T1340,190 T1700,155" opacity="0.16" />
                        <path className="acl" d="M-200,240 Q300,160 530,270 T990,200 T1390,250 T1700,215" opacity="0.12" />
                        <path className="acl2" d="M-200,360 Q175,290 415,380 T855,310 T1258,360 T1700,320" opacity="0.18" />
                        <path className="acl" d="M-200,420 Q218,340 462,440 T905,360 T1308,405 T1700,375" opacity="0.12" />
                        <path className="acl2" d="M-200,480 Q258,390 505,500 T952,410 T1355,460 T1700,430" opacity="0.08" />
                    </g>
                </svg>
            </div>

            <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
                <FadeIn>
                    <span style={{
                        display: "inline-block",
                        fontSize: 11, fontWeight: 700,
                        color: C.accent,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "'Space Grotesk'",
                        marginBottom: 20,
                    }}>Insights & Resources</span>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <h1 style={{
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "clamp(48px, 8vw, 88px)",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                        color: "#0A0A0A",
                        margin: "0 0 24px",
                    }}>
                        The Groundbase<br />Journal
                    </h1>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 17,
                        color: "#555",
                        lineHeight: 1.7,
                        maxWidth: 520,
                        margin: "0 auto",
                    }}>
                        Expert insights on AI, field operations, and the future of work —
                        for operations leaders who refuse to settle for the status quo.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}

function CategoryFilter({ active, onChange, categories }) {
    return (
        <FadeIn delay={0.15}>
            <div style={{
                display: "flex", alignItems: "center", gap: 8,
                flexWrap: "wrap", justifyContent: "center",
                marginBottom: 64,
            }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => onChange(cat)}
                        style={{
                            padding: "8px 20px",
                            borderRadius: 100,
                            border: active === cat ? "1.5px solid #0A0A0A" : `1px solid ${C.border}`,
                            background: active === cat ? "#0A0A0A" : "white",
                            color: active === cat ? "#fff" : C.textSoft,
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: active === cat ? 600 : 500,
                            fontSize: 13,
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                            letterSpacing: "-0.01em",
                        }}
                        onMouseEnter={e => {
                            if (active !== cat) {
                                e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)";
                                e.currentTarget.style.color = C.text;
                                e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                            }
                        }}
                        onMouseLeave={e => {
                            if (active !== cat) {
                                e.currentTarget.style.borderColor = C.border;
                                e.currentTarget.style.color = C.textSoft;
                                e.currentTarget.style.background = "white";
                            }
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </FadeIn>
    );
}

function FeaturedArticle({ article }) {
    const [hovered, setHovered] = useState(false);
    return (
        <FadeIn delay={0.1}>
            <Link
                to={`/articles/${article.slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="two-col" style={{
                    display: "grid",
                    gridTemplateColumns: "1.15fr 1fr",
                    gap: 0,
                    borderRadius: 28,
                    overflow: "hidden",
                    background: "white",
                    border: `1px solid ${C.border}`,
                    boxShadow: hovered
                        ? "0 32px 64px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.03)"
                        : "0 4px 24px rgba(0,0,0,0.03)",
                    transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                }}>
                    {/* Image */}
                    <div style={{
                        position: "relative", overflow: "hidden",
                        minHeight: 420,
                    }}>
                        <img
                            src={article.image}
                            alt={article.title}
                            style={{
                                width: "100%", height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                                transform: hovered ? "scale(1.04)" : "scale(1)",
                            }}
                        />
                        <div style={{
                            position: "absolute", top: 24, left: 24,
                            display: "flex", gap: 8,
                        }}>
                            <span style={{
                                display: "inline-block",
                                padding: "6px 16px", borderRadius: 100,
                                fontSize: 11, fontWeight: 700,
                                background: "rgba(255,255,255,0.92)",
                                backdropFilter: "blur(12px)",
                                color: C.accent,
                                border: "1px solid rgba(255,255,255,0.5)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                letterSpacing: "0.02em",
                            }}>Featured</span>
                            <span style={{
                                display: "inline-block",
                                padding: "6px 16px", borderRadius: 100,
                                fontSize: 11, fontWeight: 600,
                                background: "rgba(255,255,255,0.85)",
                                backdropFilter: "blur(12px)",
                                color: C.textSoft,
                                border: "1px solid rgba(255,255,255,0.4)",
                            }}>{article.category}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{
                        padding: "56px 48px",
                        display: "flex", flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <div style={{
                            display: "flex", alignItems: "center", gap: 16,
                            marginBottom: 24,
                        }}>
                            <span style={{
                                fontSize: 13, color: C.textMuted,
                                fontFamily: "'DM Sans', sans-serif",
                            }}>{article.date}</span>
                            <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.textMuted }} />
                            <span style={{
                                display: "flex", alignItems: "center", gap: 5,
                                fontSize: 13, color: C.textMuted,
                                fontFamily: "'DM Sans', sans-serif",
                            }}>
                                <Clock size={13} strokeWidth={2} />
                                {article.readTime}
                            </span>
                        </div>

                        <h2 style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 30,
                            fontWeight: 700,
                            color: C.text,
                            lineHeight: 1.25,
                            letterSpacing: "-0.02em",
                            margin: "0 0 20px",
                        }}>{article.title}</h2>

                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 16,
                            color: C.textSoft,
                            lineHeight: 1.7,
                            margin: "0 0 32px",
                        }}>{article.excerpt}</p>

                        {/* Author */}
                        <div style={{
                            display: "flex", alignItems: "center", gap: 14,
                            marginTop: "auto",
                            paddingTop: 24,
                            borderTop: `1px solid ${C.border}`,
                        }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: "50%",
                                background: `linear-gradient(135deg, ${C.accent}, ${C.accentLight})`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: "white", fontWeight: 700, fontSize: 15,
                                fontFamily: "'Space Grotesk'",
                            }}>
                                {article.author.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div>
                                <div style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: "'Space Grotesk'" }}>{article.author}</div>
                                <div style={{ fontSize: 12, color: C.textMuted }}>{article.authorRole}</div>
                            </div>
                            <div style={{
                                marginLeft: "auto",
                                display: "flex", alignItems: "center", gap: 6,
                                fontSize: 14, fontWeight: 600,
                                color: C.accent,
                                fontFamily: "'Space Grotesk'",
                                transition: "gap 0.3s ease",
                            }}>
                                Read article
                                <ArrowRight size={16} strokeWidth={2.5}
                                    style={{
                                        transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                                        transform: hovered ? "translateX(4px)" : "translateX(0)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </FadeIn>
    );
}

function ArticleCard({ article, index }) {
    const [hovered, setHovered] = useState(false);
    return (
        <FadeIn delay={index * 0.06}>
            <Link
                to={`/articles/${article.slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div style={{
                    display: "flex", flexDirection: "column",
                    borderRadius: 24,
                    overflow: "hidden",
                    background: "white",
                    border: `1px solid ${C.border}`,
                    height: "100%",
                    boxShadow: hovered
                        ? "0 32px 64px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.02)"
                        : "0 4px 12px rgba(0,0,0,0.02)",
                    transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                    transform: hovered ? "translateY(-4px) scale(1.005)" : "translateY(0) scale(1)",
                }}>
                    {/* Image */}
                    <div style={{
                        position: "relative", overflow: "hidden",
                        height: 240,
                    }}>
                        <img
                            src={article.image}
                            alt={article.title}
                            style={{
                                width: "100%", height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                                transform: hovered ? "scale(1.06)" : "scale(1)",
                            }}
                        />
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)",
                            pointerEvents: "none",
                        }} />
                        <div style={{ position: "absolute", top: 16, left: 16 }}>
                            <span style={{
                                display: "inline-block",
                                padding: "5px 14px", borderRadius: 100,
                                fontSize: 11, fontWeight: 700,
                                background: "rgba(255,255,255,0.92)",
                                backdropFilter: "blur(12px)",
                                color: C.text,
                                border: "1px solid rgba(255,255,255,0.5)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            }}>{article.category}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{
                        padding: "28px 28px 32px",
                        display: "flex", flexDirection: "column",
                        flexGrow: 1,
                    }}>
                        <div style={{
                            display: "flex", alignItems: "center", gap: 12,
                            marginBottom: 16,
                        }}>
                            <span style={{
                                fontSize: 12.5, color: C.textMuted,
                                fontFamily: "'DM Sans', sans-serif",
                            }}>{article.date}</span>
                            <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.textMuted }} />
                            <span style={{
                                display: "flex", alignItems: "center", gap: 4,
                                fontSize: 12.5, color: C.textMuted,
                                fontFamily: "'DM Sans', sans-serif",
                            }}>
                                <Clock size={12} strokeWidth={2} />
                                {article.readTime}
                            </span>
                        </div>

                        <h3 style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 20,
                            fontWeight: 700,
                            color: C.text,
                            lineHeight: 1.3,
                            letterSpacing: "-0.02em",
                            margin: "0 0 14px",
                        }}>{article.title}</h3>

                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 14.5,
                            color: C.textSoft,
                            lineHeight: 1.65,
                            margin: "0 0 24px",
                            flexGrow: 1,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}>{article.excerpt}</p>

                        {/* Author + Read more */}
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            paddingTop: 20,
                            borderTop: `1px solid ${C.border}`,
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <div style={{
                                    width: 32, height: 32, borderRadius: "50%",
                                    background: `linear-gradient(135deg, ${C.accent}, ${C.accentLight})`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "white", fontWeight: 700, fontSize: 11,
                                    fontFamily: "'Space Grotesk'",
                                }}>
                                    {article.author.split(" ").map(n => n[0]).join("")}
                                </div>
                                <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: "'Space Grotesk'" }}>
                                    {article.author}
                                </span>
                            </div>
                            <ArrowRight
                                size={18} strokeWidth={2}
                                color={C.accent}
                                style={{
                                    transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                                    transform: hovered ? "translateX(4px)" : "translateX(0)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </FadeIn>
    );
}

function NewsletterCTA() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    return (
        <section style={{
            padding: "120px 40px",
            background: C.bgSubtle,
            borderTop: `1px solid ${C.border}`,
            position: "relative", overflow: "hidden",
        }}>
            <div className="glow-blob" style={{
                background: "rgba(34, 199, 126, 0.06)",
                width: 500, height: 500,
                top: "20%", right: "10%",
            }} />
            <div className="glow-blob" style={{
                background: "rgba(37, 99, 235, 0.05)",
                width: 400, height: 400,
                bottom: "10%", left: "5%",
                animationDelay: "-7s",
            }} />

            <FadeIn>
                <div style={{
                    maxWidth: 560, margin: "0 auto",
                    textAlign: "center",
                    position: "relative", zIndex: 2,
                }}>
                    <span style={{
                        fontSize: 11, fontWeight: 700,
                        color: C.accent,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "'Space Grotesk'",
                    }}>Stay Informed</span>
                    <h2 style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontStyle: "italic",
                        fontSize: "clamp(36px, 5vw, 52px)",
                        fontWeight: 400,
                        color: C.text,
                        margin: "16px 0 16px",
                        lineHeight: 1.08,
                    }}>
                        Field intelligence,<br />delivered weekly.
                    </h2>
                    <p style={{
                        fontSize: 16, color: C.textSoft,
                        lineHeight: 1.7, marginBottom: 36,
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        Join 5,000+ operations leaders who get our weekly digest of
                        AI insights, industry trends, and practical field ops strategies.
                    </p>

                    {!submitted ? (
                        <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
                            style={{
                                display: "flex", gap: 10,
                                maxWidth: 440, margin: "0 auto",
                            }}>
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                style={{
                                    flex: 1, padding: "14px 20px",
                                    borderRadius: 100,
                                    border: `1px solid ${C.border}`,
                                    background: "white",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 14.5,
                                    color: C.text,
                                    outline: "none",
                                    transition: "border-color 0.2s",
                                }}
                                onFocus={e => e.target.style.borderColor = C.accent}
                                onBlur={e => e.target.style.borderColor = C.border}
                            />
                            <button
                                type="submit"
                                className="btn-accent"
                                style={{
                                    padding: "14px 28px",
                                    borderRadius: 100,
                                    fontSize: 14,
                                    whiteSpace: "nowrap",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Subscribe
                            </button>
                        </form>
                    ) : (
                        <div style={{
                            padding: "16px 24px",
                            borderRadius: 16,
                            background: "rgba(34, 199, 126, 0.08)",
                            border: "1px solid rgba(34, 199, 126, 0.15)",
                            fontSize: 15,
                            color: C.accent,
                            fontWeight: 500,
                            fontFamily: "'DM Sans', sans-serif",
                        }}>
                            ✓ You're on the list! Check your email for confirmation.
                        </div>
                    )}

                    <p style={{
                        fontSize: 12, color: C.textMuted,
                        marginTop: 16,
                    }}>
                        No spam, ever. Unsubscribe anytime.
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}

export default function Articles() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(articlesData.map(a => a.category))];

    const featured = articlesData.filter(a => a.featured);
    const filteredArticles = activeCategory === "All"
        ? articlesData.filter(a => !a.featured)
        : articlesData.filter(a => a.category === activeCategory);

    return (
        <>
            <ArticlesHero />

            <section style={{
                padding: "0 40px 140px",
                background: "#fff",
            }}>
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    {/* Category Filter */}
                    <CategoryFilter
                        active={activeCategory}
                        onChange={setActiveCategory}
                        categories={categories}
                    />

                    {/* Featured Articles — only show when "All" is selected */}
                    {activeCategory === "All" && featured.length > 0 && (
                        <div style={{ marginBottom: 72 }}>
                            <FadeIn>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: 12,
                                    marginBottom: 36,
                                }}>
                                    <div style={{
                                        width: 8, height: 8, borderRadius: "50%",
                                        background: C.accent,
                                        animation: "pulse-dot 2s infinite",
                                    }} />
                                    <span style={{
                                        fontSize: 12, fontWeight: 700,
                                        color: C.accent,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        fontFamily: "'Space Grotesk'",
                                    }}>Featured</span>
                                </div>
                            </FadeIn>
                            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                                {featured.map((article, i) => (
                                    <FeaturedArticle key={article.slug} article={article} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Article Grid */}
                    <div>
                        {activeCategory === "All" && (
                            <FadeIn>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: 12,
                                    marginBottom: 36,
                                }}>
                                    <span style={{
                                        fontSize: 12, fontWeight: 700,
                                        color: C.textSoft,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        fontFamily: "'Space Grotesk'",
                                    }}>Latest Articles</span>
                                    <div style={{
                                        flex: 1, height: 1,
                                        background: C.border,
                                    }} />
                                </div>
                            </FadeIn>
                        )}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                            gap: 28,
                        }}>
                            {filteredArticles.map((article, i) => (
                                <ArticleCard key={article.slug} article={article} index={i} />
                            ))}
                        </div>

                        {filteredArticles.length === 0 && (
                            <FadeIn>
                                <div style={{
                                    textAlign: "center", padding: "80px 20px",
                                    color: C.textMuted,
                                    fontFamily: "'DM Sans', sans-serif",
                                }}>
                                    <Search size={40} strokeWidth={1.5} style={{ marginBottom: 16, opacity: 0.4 }} />
                                    <p style={{ fontSize: 18, marginBottom: 8 }}>No articles in this category yet.</p>
                                    <p style={{ fontSize: 14 }}>Check back soon — we're always adding new content.</p>
                                </div>
                            </FadeIn>
                        )}
                    </div>
                </div>
            </section>

            <NewsletterCTA />

            <style>{`
                @media (max-width: 820px) {
                    .two-col { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </>
    );
}
