import { useParams, Link } from "react-router-dom";
import { C, FadeIn } from "../shared";
import { articlesData } from "../data/articlesData";
import { Clock, ArrowLeft, ArrowRight, Share2, BookmarkPlus } from "lucide-react";
import { useState } from "react";

function ArticleNotFound() {
    return (
        <section style={{
            padding: "200px 40px 160px",
            textAlign: "center",
        }}>
            <FadeIn>
                <h1 style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: 56,
                    fontWeight: 400,
                    color: C.text,
                    marginBottom: 16,
                }}>Article not found</h1>
                <p style={{
                    fontSize: 17, color: C.textSoft,
                    marginBottom: 40,
                    fontFamily: "'DM Sans', sans-serif",
                }}>The article you're looking for doesn't exist or has been moved.</p>
                <Link to="/articles" className="btn-cta" style={{
                    padding: "14px 32px", borderRadius: 100,
                    fontSize: 15, textDecoration: "none",
                }}>
                    ← Back to all articles
                </Link>
            </FadeIn>
        </section>
    );
}

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        }, { passive: true });
    }

    return (
        <div style={{
            position: "fixed", top: 0, left: 0, right: 0,
            height: 3, zIndex: 200,
            background: "transparent",
        }}>
            <div style={{
                height: "100%",
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${C.accent}, ${C.accentLight})`,
                transition: "width 0.1s linear",
            }} />
        </div>
    );
}

function ContentBlock({ block }) {
    switch (block.type) {
        case "paragraph":
            return (
                <p style={{
                    fontSize: 17.5,
                    color: "#333",
                    lineHeight: 1.85,
                    margin: "0 0 28px",
                    fontFamily: "'DM Sans', sans-serif",
                }}>{block.text}</p>
            );
        case "heading":
            return (
                <h2 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: C.text,
                    letterSpacing: "-0.02em",
                    margin: "48px 0 20px",
                    lineHeight: 1.25,
                }}>{block.text}</h2>
            );
        case "quote":
            return (
                <blockquote style={{
                    margin: "40px 0",
                    padding: "36px 40px",
                    borderLeft: `4px solid ${C.accent}`,
                    borderRadius: "0 20px 20px 0",
                    background: "rgba(26, 107, 79, 0.03)",
                    position: "relative",
                }}>
                    <div style={{
                        position: "absolute",
                        top: 20, left: 36,
                        fontSize: 64,
                        fontFamily: "'Instrument Serif', serif",
                        color: C.accent,
                        opacity: 0.12,
                        lineHeight: 1,
                        pointerEvents: "none",
                    }}>"</div>
                    <p style={{
                        fontSize: 18,
                        fontStyle: "italic",
                        color: C.text,
                        lineHeight: 1.75,
                        margin: "0 0 16px",
                        fontFamily: "'DM Sans', sans-serif",
                        position: "relative",
                        zIndex: 1,
                    }}>"{block.text}"</p>
                    {block.author && (
                        <cite style={{
                            fontSize: 14,
                            fontStyle: "normal",
                            fontWeight: 600,
                            color: C.accent,
                            fontFamily: "'Space Grotesk', sans-serif",
                        }}>— {block.author}</cite>
                    )}
                </blockquote>
            );
        case "list":
            return (
                <ul style={{
                    margin: "24px 0 32px",
                    padding: 0,
                    listStyle: "none",
                    display: "flex", flexDirection: "column",
                    gap: 14,
                }}>
                    {block.items.map((item, i) => (
                        <li key={i} style={{
                            display: "flex", alignItems: "flex-start", gap: 16,
                            fontSize: 16.5,
                            color: "#333",
                            lineHeight: 1.7,
                            fontFamily: "'DM Sans', sans-serif",
                        }}>
                            <span style={{
                                flexShrink: 0,
                                width: 24, height: 24,
                                borderRadius: "50%",
                                background: "rgba(26, 107, 79, 0.08)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 12, fontWeight: 700,
                                color: C.accent,
                                marginTop: 2,
                                fontFamily: "'Space Grotesk'",
                            }}>{i + 1}</span>
                            {item}
                        </li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
}

export default function ArticleDetail() {
    const { slug } = useParams();
    const article = articlesData.find(a => a.slug === slug);

    if (!article) return <ArticleNotFound />;

    const currentIndex = articlesData.findIndex(a => a.slug === slug);
    const prevArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : null;
    const nextArticle = currentIndex < articlesData.length - 1 ? articlesData[currentIndex + 1] : null;

    return (
        <>
            <ProgressBar />

            {/* Hero */}
            <section style={{
                position: "relative",
                overflow: "hidden",
            }}>
                {/* Hero Image */}
                <div style={{
                    height: "clamp(360px, 50vh, 560px)",
                    position: "relative",
                }}>
                    <img
                        src={article.image}
                        alt={article.title}
                        style={{
                            width: "100%", height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)",
                    }} />

                    {/* Back button */}
                    <Link to="/articles" style={{
                        position: "absolute", top: 100, left: 40,
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "10px 20px",
                        borderRadius: 100,
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white",
                        fontSize: 13, fontWeight: 600,
                        fontFamily: "'Space Grotesk', sans-serif",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        zIndex: 3,
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                        }}
                    >
                        <ArrowLeft size={15} strokeWidth={2.5} /> All articles
                    </Link>

                    {/* Category badge at bottom */}
                    <div style={{
                        position: "absolute", bottom: 40, left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex", gap: 10,
                        zIndex: 3,
                    }}>
                        <span style={{
                            padding: "6px 18px", borderRadius: 100,
                            fontSize: 11, fontWeight: 700,
                            background: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(12px)",
                            color: C.accent,
                            letterSpacing: "0.04em",
                        }}>{article.category}</span>
                        <span style={{
                            display: "flex", alignItems: "center", gap: 5,
                            padding: "6px 18px", borderRadius: 100,
                            fontSize: 11, fontWeight: 600,
                            background: "rgba(255,255,255,0.85)",
                            backdropFilter: "blur(12px)",
                            color: "#555",
                        }}>
                            <Clock size={12} strokeWidth={2} />
                            {article.readTime}
                        </span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section style={{
                padding: "64px 40px 100px",
                background: "#fff",
            }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    {/* Meta */}
                    <FadeIn>
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            marginBottom: 32,
                            flexWrap: "wrap", gap: 16,
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: "50%",
                                    background: `linear-gradient(135deg, ${C.accent}, ${C.accentLight})`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "white", fontWeight: 700, fontSize: 15,
                                    fontFamily: "'Space Grotesk'",
                                }}>
                                    {article.author.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: 15, fontWeight: 600,
                                        color: C.text,
                                        fontFamily: "'Space Grotesk'",
                                    }}>{article.author}</div>
                                    <div style={{
                                        fontSize: 13, color: C.textMuted,
                                    }}>{article.authorRole} · {article.date}</div>
                                </div>
                            </div>

                            {/* Share actions */}
                            <div style={{ display: "flex", gap: 8 }}>
                                {[
                                    { icon: <Share2 size={15} strokeWidth={2} />, label: "Share" },
                                    { icon: <BookmarkPlus size={15} strokeWidth={2} />, label: "Save" },
                                ].map((action, i) => (
                                    <button key={i} style={{
                                        display: "flex", alignItems: "center", gap: 6,
                                        padding: "8px 16px",
                                        borderRadius: 100,
                                        border: `1px solid ${C.border}`,
                                        background: "white",
                                        color: C.textSoft,
                                        fontSize: 12.5,
                                        fontWeight: 500,
                                        fontFamily: "'Space Grotesk'",
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                    }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
                                            e.currentTarget.style.color = C.text;
                                            e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = C.border;
                                            e.currentTarget.style.color = C.textSoft;
                                            e.currentTarget.style.background = "white";
                                        }}
                                    >
                                        {action.icon}
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Title */}
                    <FadeIn delay={0.05}>
                        <h1 style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(32px, 5vw, 44px)",
                            fontWeight: 700,
                            color: C.text,
                            lineHeight: 1.2,
                            letterSpacing: "-0.03em",
                            margin: "0 0 24px",
                        }}>{article.title}</h1>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p style={{
                            fontSize: 19,
                            color: C.textSoft,
                            lineHeight: 1.7,
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 400,
                            margin: "0 0 48px",
                            paddingBottom: 40,
                            borderBottom: `1px solid ${C.border}`,
                        }}>{article.excerpt}</p>
                    </FadeIn>

                    {/* Content blocks */}
                    <FadeIn delay={0.15}>
                        <div>
                            {article.content.map((block, i) => (
                                <ContentBlock key={i} block={block} />
                            ))}
                        </div>
                    </FadeIn>

                    {/* Tags / Bottom CTA */}
                    <FadeIn delay={0.1}>
                        <div style={{
                            marginTop: 64,
                            paddingTop: 40,
                            borderTop: `1px solid ${C.border}`,
                        }}>
                            <div style={{
                                display: "flex", alignItems: "center", gap: 10,
                                flexWrap: "wrap",
                                marginBottom: 48,
                            }}>
                                <span style={{
                                    fontSize: 12, fontWeight: 600,
                                    color: C.textMuted,
                                    fontFamily: "'Space Grotesk'",
                                    marginRight: 4,
                                }}>Topics:</span>
                                {[article.category, "Field Operations", "AI", "Groundbase"].map(tag => (
                                    <span key={tag} style={{
                                        padding: "5px 14px",
                                        borderRadius: 100,
                                        fontSize: 12,
                                        fontWeight: 500,
                                        background: C.bgOff,
                                        color: C.textSoft,
                                        fontFamily: "'Space Grotesk'",
                                        border: `1px solid ${C.border}`,
                                    }}>{tag}</span>
                                ))}
                            </div>

                            {/* CTA Box */}
                            <div style={{
                                padding: "48px",
                                borderRadius: 24,
                                background: C.bgSubtle,
                                border: `1px solid ${C.border}`,
                                textAlign: "center",
                                position: "relative",
                                overflow: "hidden",
                            }}>
                                <div className="glow-blob" style={{
                                    background: "rgba(34, 199, 126, 0.06)",
                                    width: 300, height: 300,
                                    top: "-50%", right: "-10%",
                                }} />
                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <h3 style={{
                                        fontFamily: "'Instrument Serif', serif",
                                        fontStyle: "italic",
                                        fontSize: 32,
                                        fontWeight: 400,
                                        color: C.text,
                                        marginBottom: 12,
                                    }}>Ready to go field intelligent?</h3>
                                    <p style={{
                                        fontSize: 15, color: C.textSoft,
                                        marginBottom: 28, lineHeight: 1.7,
                                        fontFamily: "'DM Sans', sans-serif",
                                    }}>
                                        See how Groundbase turns field chaos into operational clarity.
                                    </p>
                                    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                                        <Link to="/pricing" className="btn-cta" style={{
                                            padding: "14px 32px", borderRadius: 100,
                                            fontSize: 14.5, textDecoration: "none",
                                        }}>Start for free</Link>
                                        <Link to="/platform" className="btn-ghost" style={{
                                            padding: "13px 28px", borderRadius: 100,
                                            fontSize: 14, textDecoration: "none",
                                        }}>See the platform</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Prev / Next Navigation */}
            {(prevArticle || nextArticle) && (
                <section style={{
                    padding: "0 40px 100px",
                    background: "#fff",
                }}>
                    <div style={{ maxWidth: 720, margin: "0 auto" }}>
                        <FadeIn>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: prevArticle && nextArticle ? "1fr 1fr" : "1fr",
                                gap: 20,
                            }}>
                                {prevArticle && (
                                    <Link to={`/articles/${prevArticle.slug}`} style={{
                                        padding: "28px 32px",
                                        borderRadius: 20,
                                        border: `1px solid ${C.border}`,
                                        background: "white",
                                        textDecoration: "none",
                                        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                                        display: "flex", alignItems: "center", gap: 16,
                                    }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.06)";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.borderColor = C.border;
                                        }}
                                    >
                                        <ArrowLeft size={18} color={C.textMuted} strokeWidth={2} />
                                        <div>
                                            <div style={{ fontSize: 11, fontWeight: 600, color: C.textMuted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Space Grotesk'" }}>Previous</div>
                                            <div style={{ fontSize: 15, fontWeight: 600, color: C.text, lineHeight: 1.3, fontFamily: "'Space Grotesk'", letterSpacing: "-0.01em" }}>{prevArticle.title}</div>
                                        </div>
                                    </Link>
                                )}
                                {nextArticle && (
                                    <Link to={`/articles/${nextArticle.slug}`} style={{
                                        padding: "28px 32px",
                                        borderRadius: 20,
                                        border: `1px solid ${C.border}`,
                                        background: "white",
                                        textDecoration: "none",
                                        textAlign: "right",
                                        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                                        display: "flex", alignItems: "center", gap: 16,
                                        justifyContent: "flex-end",
                                    }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.06)";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.borderColor = C.border;
                                        }}
                                    >
                                        <div>
                                            <div style={{ fontSize: 11, fontWeight: 600, color: C.textMuted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Space Grotesk'" }}>Next</div>
                                            <div style={{ fontSize: 15, fontWeight: 600, color: C.text, lineHeight: 1.3, fontFamily: "'Space Grotesk'", letterSpacing: "-0.01em" }}>{nextArticle.title}</div>
                                        </div>
                                        <ArrowRight size={18} color={C.textMuted} strokeWidth={2} />
                                    </Link>
                                )}
                            </div>
                        </FadeIn>
                    </div>
                </section>
            )}
        </>
    );
}
