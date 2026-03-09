import { useState } from "react";
import { C, FadeIn } from "../shared";
import { LogoMark } from "../Logo";

/* ═══════════════════════════════════════════════════════
   GroundBase — Mobile App Preview Page
   Full interactive phone mockup embedded in the site
   ═══════════════════════════════════════════════════════ */

const font = "'DM Sans', -apple-system, sans-serif";
const fontDisplay = "'Space Grotesk', 'DM Sans', sans-serif";
const fontHero = "'Instrument Serif', Georgia, serif";

// ── App-specific colors (extend site palette) ────────
const A = {
    ...C,
    bgCard: "#FFFFFF",
    accentMid: "#2D8B6A",
    red: "#D64545",
    redSoft: "rgba(214,69,69,0.08)",
    shadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
    radius: 14,
    radiusSm: 10,
    radiusXs: 8,
};

// ── Inline SVG icons ─────────────────────────────────
const Icon = ({ name, size = 22, color = C.textSoft, strokeWidth = 1.8 }) => {
    const s = { width: size, height: size, display: "block" };
    const p = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", style: s };
    const icons = {
        home: <svg {...p}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
        tasks: <svg {...p}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>,
        mic: <svg {...p}><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>,
        activity: <svg {...p}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
        user: <svg {...p}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
        cloud: <svg {...p}><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg>,
        droplet: <svg {...p}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>,
        wind: <svg {...p}><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" /></svg>,
        camera: <svg {...p}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>,
        mapPin: <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
        clock: <svg {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
        check: <svg {...p}><polyline points="20 6 9 17 4 12" /></svg>,
        chevRight: <svg {...p}><polyline points="9 18 15 12 9 6" /></svg>,
        bell: <svg {...p}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>,
        search: <svg {...p}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
        leaf: <svg {...p}><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.5 6.5A6.97 6.97 0 0011 20z" /><path d="M5 19l6-6" /></svg>,
        barChart: <svg {...p}><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
        plus: <svg {...p}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
        shield: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        logout: <svg {...p}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
        globe: <svg {...p}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
        zap: <svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={color} stroke="none" /></svg>,
    };
    return icons[name] || null;
};

// ═══════════════════════════════════════════════════════
// PHONE SCREENS
// ═══════════════════════════════════════════════════════

function HomeScreen() {
    const stats = [
        { label: "Active Tasks", value: "12", icon: "tasks", color: C.accent, bg: "rgba(26,107,79,0.08)" },
        { label: "Completed", value: "38", icon: "check", color: "#22C77E", bg: "rgba(34,199,126,0.08)" },
        { label: "Overdue", value: "3", icon: "clock", color: C.orange, bg: "rgba(232,103,60,0.08)" },
        { label: "Photos", value: "156", icon: "camera", color: C.blue, bg: "rgba(37,99,235,0.08)" },
    ];
    const activity = [
        { title: "Site inspection completed", time: "2m ago", icon: "check", color: "#22C77E" },
        { title: "New task: Fence repair", time: "15m ago", icon: "tasks", color: C.accent },
        { title: "Photo: Crop section B4", time: "1h ago", icon: "camera", color: C.blue },
        { title: "Weather alert: Rain expected", time: "2h ago", icon: "cloud", color: C.orange },
    ];
    return (
        <div style={{ paddingBottom: 96 }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px 6px" }}>
                <div>
                    <p style={{ fontFamily: font, fontSize: 12, color: C.textMuted, margin: "0 0 1px" }}>Good morning,</p>
                    <h1 style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: C.text, margin: 0 }}>James Kariuki</h1>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                    <div style={ps.iconBtn}><Icon name="search" size={18} /></div>
                    <div style={{ ...ps.iconBtn, position: "relative" }}>
                        <Icon name="bell" size={18} />
                        <div style={{ position: "absolute", top: 5, right: 5, width: 7, height: 7, borderRadius: 4, background: C.orange, border: `2px solid ${C.bg}` }} />
                    </div>
                </div>
            </div>
            {/* Weather */}
            <div style={{ padding: "10px 18px" }}>
                <div style={{ background: "linear-gradient(135deg, #1A6B4F 0%, #2D8B6A 50%, #22C77E 100%)", borderRadius: 16, padding: "18px 20px", color: "#fff", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
                        <div>
                            <p style={{ fontFamily: font, fontSize: 12, opacity: 0.8, margin: "0 0 3px", display: "flex", alignItems: "center", gap: 3 }}>
                                <Icon name="mapPin" size={12} color="rgba(255,255,255,0.8)" strokeWidth={2} /> Nyeri County
                            </p>
                            <div style={{ fontFamily: fontDisplay, fontSize: 36, fontWeight: 700, lineHeight: 1, margin: "3px 0 4px" }}>24°C</div>
                            <p style={{ fontFamily: font, fontSize: 12, opacity: 0.8, margin: 0 }}>Partly Cloudy</p>
                        </div>
                        <div style={{ display: "flex", gap: 14, marginTop: 6 }}>
                            {[{ icon: "droplet", val: "67%", label: "Humidity" }, { icon: "wind", val: "12km/h", label: "Wind" }].map((w, i) => (
                                <div key={i} style={{ textAlign: "center" }}>
                                    <Icon name={w.icon} size={14} color="rgba(255,255,255,0.7)" />
                                    <div style={{ fontFamily: fontDisplay, fontSize: 13, fontWeight: 600, marginTop: 1 }}>{w.val}</div>
                                    <div style={{ fontFamily: font, fontSize: 9, opacity: 0.6 }}>{w.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Stats */}
            <div style={{ padding: "6px 18px 2px" }}>
                <h3 style={ps.sectionTitle}>Overview</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {stats.map((s, i) => (
                        <div key={i} style={{ background: A.bgCard, borderRadius: A.radiusSm, padding: "14px 12px", border: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 36, height: 36, borderRadius: A.radiusXs, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Icon name={s.icon} size={16} color={s.color} strokeWidth={2} />
                            </div>
                            <div>
                                <div style={{ fontFamily: fontDisplay, fontSize: 18, fontWeight: 700, color: C.text, lineHeight: 1.1 }}>{s.value}</div>
                                <div style={{ fontFamily: font, fontSize: 10, color: C.textMuted, marginTop: 1 }}>{s.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Activity */}
            <div style={{ padding: "14px 18px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <h3 style={{ ...ps.sectionTitle, margin: 0 }}>Recent Activity</h3>
                    <span style={{ fontFamily: font, fontSize: 12, color: C.accent, fontWeight: 500, cursor: "pointer" }}>See all</span>
                </div>
                {activity.map((a, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < activity.length - 1 ? `1px solid ${C.border}` : "none" }}>
                        <div style={{ width: 32, height: 32, borderRadius: 9, background: `${a.color}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Icon name={a.icon} size={14} color={a.color} strokeWidth={2} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontFamily: font, fontSize: 13, color: C.text, fontWeight: 500 }}>{a.title}</div>
                            <div style={{ fontFamily: font, fontSize: 11, color: C.textMuted }}>{a.time}</div>
                        </div>
                        <Icon name="chevRight" size={14} color={C.textMuted} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function TasksScreen() {
    const [activeTab, setActiveTab] = useState("today");
    const tasks = [
        { title: "Inspect fence — Section A", priority: "high", due: "9:00 AM", location: "North Field", progress: 0, photo: true },
        { title: "Apply fertilizer to maize", priority: "medium", due: "11:00 AM", location: "Plot B4", progress: 60, photo: false },
        { title: "Check irrigation valves", priority: "low", due: "2:00 PM", location: "Pump House", progress: 0, photo: true },
        { title: "Record cattle health — Lot 7", priority: "high", due: "4:00 PM", location: "Livestock", progress: 25, photo: true },
    ];
    const pc = { high: A.red, medium: C.orange, low: C.accent };
    const pb = { high: A.redSoft, medium: "rgba(232,103,60,0.08)", low: "rgba(26,107,79,0.08)" };
    return (
        <div style={{ paddingBottom: 96 }}>
            <div style={{ padding: "14px 18px 6px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1 style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: C.text, margin: 0 }}>Tasks</h1>
                    <button style={{ ...ps.iconBtn, background: C.accent, border: "none" }}><Icon name="plus" size={16} color="#fff" strokeWidth={2.5} /></button>
                </div>
                <div style={{ display: "flex", gap: 3, marginTop: 14, background: C.bgOff, borderRadius: 10, padding: 3 }}>
                    {["today", "upcoming", "completed"].map(t => (
                        <button key={t} onClick={() => setActiveTab(t)} style={{
                            flex: 1, padding: "8px 0", fontFamily: font, fontSize: 12, fontWeight: 600,
                            border: "none", borderRadius: 8, cursor: "pointer", textTransform: "capitalize",
                            background: activeTab === t ? A.bgCard : "transparent",
                            color: activeTab === t ? C.text : C.textMuted,
                            boxShadow: activeTab === t ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                            transition: "all 0.2s",
                        }}>{t}</button>
                    ))}
                </div>
            </div>
            <div style={{ padding: "6px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
                {tasks.map((t, i) => (
                    <div key={i} style={{ background: A.bgCard, borderRadius: A.radiusSm, padding: "14px", border: `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: pc[t.priority], borderRadius: "3px 0 0 3px" }} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingLeft: 6 }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: C.text, lineHeight: 1.35 }}>{t.title}</div>
                                <div style={{ display: "flex", gap: 10, marginTop: 5 }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: 3, fontFamily: font, fontSize: 11, color: C.textMuted }}><Icon name="clock" size={11} color={C.textMuted} /> {t.due}</span>
                                    <span style={{ display: "flex", alignItems: "center", gap: 3, fontFamily: font, fontSize: 11, color: C.textMuted }}><Icon name="mapPin" size={11} color={C.textMuted} /> {t.location}</span>
                                </div>
                            </div>
                            <span style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: pc[t.priority], background: pb[t.priority], padding: "2px 7px", borderRadius: 5, textTransform: "capitalize" }}>{t.priority}</span>
                        </div>
                        {t.progress > 0 && (
                            <div style={{ marginTop: 8, paddingLeft: 6 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                                    <span style={{ fontFamily: font, fontSize: 10, color: C.textMuted }}>Progress</span>
                                    <span style={{ fontFamily: font, fontSize: 10, color: C.accent, fontWeight: 600 }}>{t.progress}%</span>
                                </div>
                                <div style={{ height: 3, background: C.bgOff, borderRadius: 2 }}>
                                    <div style={{ height: 3, width: `${t.progress}%`, background: C.accent, borderRadius: 2 }} />
                                </div>
                            </div>
                        )}
                        {t.photo && (
                            <div style={{ display: "flex", gap: 4, marginTop: 8, paddingLeft: 6, fontFamily: font, fontSize: 11, color: C.accent, alignItems: "center" }}>
                                <Icon name="camera" size={12} color={C.accent} /> Photo required
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function VoiceScreen() {
    const [isListening, setIsListening] = useState(false);
    const msgs = [
        { role: "ai", text: "Good morning, James. You have 12 tasks today. 3 are high priority. Shall I read them?" },
        { role: "user", text: "Yes, what's the most urgent?" },
        { role: "ai", text: "Inspect the fence perimeter in Section A, due at 9 AM. It requires a photo. Navigate there?" },
    ];
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", paddingBottom: 96 }}>
            <div style={{ padding: "14px 18px 6px" }}>
                <h1 style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: C.text, margin: 0 }}>AI Assistant</h1>
                <p style={{ fontFamily: font, fontSize: 12, color: C.textMuted, margin: "3px 0 0", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 3, background: C.accentLight, display: "inline-block" }} /> Online · Claude
                </p>
            </div>
            <div style={{ flex: 1, padding: "10px 18px", display: "flex", flexDirection: "column", gap: 10, overflowY: "auto" }}>
                {msgs.map((m, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                        <div style={{
                            maxWidth: "82%", padding: "10px 14px", borderRadius: 14,
                            background: m.role === "user" ? C.accent : A.bgCard,
                            color: m.role === "user" ? "#fff" : C.text,
                            fontFamily: font, fontSize: 13, lineHeight: 1.45,
                            border: m.role === "ai" ? `1px solid ${C.border}` : "none",
                            borderBottomRightRadius: m.role === "user" ? 4 : 14,
                            borderBottomLeftRadius: m.role === "ai" ? 4 : 14,
                        }}>
                            {m.role === "ai" && (
                                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
                                    <LogoMark size={18} />
                                    <span style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: C.accent }}>GroundBase AI</span>
                                </div>
                            )}
                            {m.text}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ padding: "14px 18px 6px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button onClick={() => setIsListening(!isListening)} style={{
                    width: 64, height: 64, borderRadius: "50%", border: "none", cursor: "pointer",
                    background: isListening ? "linear-gradient(135deg, #22C77E, #1A6B4F)" : "linear-gradient(135deg, #1A6B4F, #14523C)",
                    boxShadow: isListening ? "0 0 0 8px rgba(34,199,126,0.15), 0 0 0 16px rgba(34,199,126,0.06)" : "0 4px 16px rgba(26,107,79,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s",
                }}>
                    <Icon name="mic" size={24} color="#fff" strokeWidth={2} />
                </button>
                <p style={{ fontFamily: font, fontSize: 11, color: C.textMuted, marginTop: 8 }}>{isListening ? "Listening..." : "Tap to speak"}</p>
                <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap", justifyContent: "center" }}>
                    {["Read my tasks", "Weather", "Take photo"].map((q, i) => (
                        <button key={i} style={{ fontFamily: font, fontSize: 11, color: C.accent, background: "rgba(26,107,79,0.06)", border: `1px solid rgba(26,107,79,0.1)`, borderRadius: 16, padding: "5px 12px", cursor: "pointer", fontWeight: 500 }}>{q}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ActivityScreen() {
    const data = [35, 52, 48, 65, 42, 70, 58];
    const max = Math.max(...data);
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const items = [
        { type: "check", text: "Maize plot inspection done", time: "Today, 8:30 AM", color: "#22C77E" },
        { type: "camera", text: "Photo uploaded — Task #142", time: "Today, 7:15 AM", color: C.blue },
        { type: "globe", text: "Offline data synced", time: "Yesterday, 6 PM", color: C.accent },
        { type: "zap", text: "Low moisture — Plot C2", time: "Yesterday, 3:45 PM", color: C.orange },
    ];
    return (
        <div style={{ paddingBottom: 96 }}>
            <div style={{ padding: "14px 18px 6px" }}>
                <h1 style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: C.text, margin: 0 }}>Activity</h1>
            </div>
            <div style={{ padding: "6px 18px" }}>
                <div style={{ background: A.bgCard, borderRadius: A.radius, padding: "18px 16px 14px", border: `1px solid ${C.border}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                        <span style={{ fontFamily: font, fontSize: 12, fontWeight: 600, color: C.text }}>Tasks This Week</span>
                        <span style={{ fontFamily: fontDisplay, fontSize: 16, fontWeight: 700, color: C.accent }}>370</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80 }}>
                        {data.map((v, i) => (
                            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                                <div style={{ width: "100%", maxWidth: 28, height: `${(v / max) * 64}px`, background: i === 5 ? C.accent : C.bgSubtle, borderRadius: 5 }} />
                                <span style={{ fontFamily: font, fontSize: 9, color: C.textMuted }}>{days[i]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ padding: "10px 18px 0" }}>
                <h3 style={ps.sectionTitle}>Timeline</h3>
                <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: 15, top: 8, bottom: 8, width: 1.5, background: C.bgSubtle }} />
                    {items.map((a, i) => (
                        <div key={i} style={{ display: "flex", gap: 12, padding: "9px 0", alignItems: "flex-start" }}>
                            <div style={{ width: 32, height: 32, borderRadius: 9, background: `${a.color}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", zIndex: 1, border: `2px solid ${C.bg}` }}>
                                <Icon name={a.type} size={14} color={a.color} strokeWidth={2} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontFamily: font, fontSize: 13, color: C.text, fontWeight: 500 }}>{a.text}</div>
                                <div style={{ fontFamily: font, fontSize: 11, color: C.textMuted, marginTop: 1 }}>{a.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProfileScreen({ onLogout }) {
    const menu = [
        { icon: "user", label: "Edit Profile", desc: "Name, photo, contact" },
        { icon: "bell", label: "Notifications", desc: "Alerts, reminders" },
        { icon: "globe", label: "Language", desc: "Kiswahili (KE)", badge: "SW" },
        { icon: "mapPin", label: "Farm Locations", desc: "Manage locations" },
        { icon: "shield", label: "Privacy & Security", desc: "Voice auth, biometrics" },
        { icon: "barChart", label: "Reports", desc: "Export, analytics" },
        { icon: "leaf", label: "Offline Mode", desc: "Sync settings" },
    ];
    return (
        <div style={{ paddingBottom: 96 }}>
            <div style={{ background: "linear-gradient(135deg, #1A6B4F 0%, #2D8B6A 100%)", padding: "20px 18px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
                    <div style={{ width: 56, height: 56, borderRadius: 18, background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: fontDisplay, fontSize: 22, fontWeight: 700, color: "#fff" }}>JK</span>
                    </div>
                    <div>
                        <h2 style={{ fontFamily: fontDisplay, fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>James Kariuki</h2>
                        <p style={{ fontFamily: font, fontSize: 12, color: "rgba(255,255,255,0.7)", margin: "2px 0 0" }}>Farm Manager · Nyeri</p>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 3, marginTop: 5, background: "rgba(255,255,255,0.15)", borderRadius: 5, padding: "2px 7px" }}>
                            <div style={{ width: 5, height: 5, borderRadius: 3, background: "#22C77E" }} />
                            <span style={{ fontFamily: font, fontSize: 10, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>Voice verified</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ padding: "14px 18px" }}>
                <div style={{ background: A.bgCard, borderRadius: A.radius, border: `1px solid ${C.border}`, overflow: "hidden" }}>
                    {menu.map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderBottom: i < menu.length - 1 ? `1px solid ${C.border}` : "none", cursor: "pointer" }}>
                            <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(26,107,79,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Icon name={item.icon} size={16} color={C.accent} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: C.text }}>{item.label}</div>
                                <div style={{ fontFamily: font, fontSize: 11, color: C.textMuted }}>{item.desc}</div>
                            </div>
                            {item.badge && <span style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: C.accent, background: "rgba(26,107,79,0.06)", padding: "2px 6px", borderRadius: 5 }}>{item.badge}</span>}
                            <Icon name="chevRight" size={14} color={C.textMuted} />
                        </div>
                    ))}
                </div>
                <button onClick={onLogout} style={{ width: "100%", marginTop: 14, padding: "12px", fontFamily: font, fontSize: 13, fontWeight: 600, color: A.red, background: A.redSoft, border: `1px solid rgba(214,69,69,0.1)`, borderRadius: A.radiusSm, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    <Icon name="logout" size={16} color={A.red} /> Sign Out
                </button>
                <p style={{ fontFamily: font, fontSize: 10, color: C.textMuted, textAlign: "center", marginTop: 14 }}>GroundBase v2.1.0 · Made in Kenya</p>
            </div>
        </div>
    );
}

// ── Phone internal styles ────────────────────────────
const ps = {
    screen: { width: "100%", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", background: C.bg, fontFamily: font },
    input: { width: "100%", padding: "12px 14px", fontFamily: font, fontSize: 14, border: `1.5px solid ${C.border}`, borderRadius: 10, background: "#fff", color: C.text, outline: "none", transition: "all 0.2s", boxSizing: "border-box" },
    label: { display: "block", fontFamily: font, fontSize: 12, fontWeight: 600, color: C.textSoft, marginBottom: 5 },
    btnPrimary: { width: "100%", padding: "13px", fontFamily: font, fontSize: 14, fontWeight: 600, color: "#fff", background: C.accent, border: "none", borderRadius: 10, cursor: "pointer", boxShadow: "0 4px 14px rgba(26,107,79,0.25)" },
    btnSocial: { flex: 1, padding: "11px", fontFamily: font, fontSize: 13, fontWeight: 600, color: C.text, background: "#fff", border: `1.5px solid ${C.border}`, borderRadius: 10, cursor: "pointer" },
    iconBtn: { width: 36, height: 36, borderRadius: 10, background: C.bgOff, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" },
    sectionTitle: { fontFamily: fontDisplay, fontSize: 14, fontWeight: 700, color: C.text, margin: "0 0 10px", letterSpacing: -0.2 },
};

// ── Status bar for phone ─────────────────────────────
function StatusBar({ dark }) {
    const col = dark ? "#fff" : C.text;
    const mutedCol = dark ? "rgba(255,255,255,0.6)" : C.textMuted;
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 18px 3px" }}>
            <span style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: col }}>9:41</span>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <svg width="14" height="10" viewBox="0 0 16 12" fill="none">
                    <rect x="0" y="8" width="3" height="4" rx="0.5" fill={mutedCol} />
                    <rect x="4" y="5" width="3" height="7" rx="0.5" fill={col} opacity="0.7" />
                    <rect x="8" y="2" width="3" height="10" rx="0.5" fill={col} />
                    <rect x="12" y="0" width="3" height="12" rx="0.5" fill={col} />
                </svg>
                <svg width="20" height="10" viewBox="0 0 22 12" fill="none">
                    <rect x="0" y="1" width="18" height="10" rx="2" stroke={col} strokeWidth="1" />
                    <rect x="19" y="3.5" width="2" height="5" rx="1" fill={col} />
                    <rect x="1.5" y="2.5" width="13" height="7" rx="1" fill={dark ? "#fff" : C.accent} />
                </svg>
            </div>
        </div>
    );
}

// ── Tab Bar ──────────────────────────────────────────
function TabBar({ activeTab, setActiveTab }) {
    const tabs = [
        { key: "home", label: "Home", icon: "home" },
        { key: "tasks", label: "Tasks", icon: "tasks" },
        { key: "voice", label: "Voice", icon: "mic" },
        { key: "activity", label: "Activity", icon: "activity" },
        { key: "profile", label: "Profile", icon: "user" },
    ];
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "6px 6px 20px", background: "#fff", borderTop: `1px solid ${C.border}`, position: "absolute", bottom: 0, left: 0, right: 0 }}>
            {tabs.map(t => {
                const act = activeTab === t.key;
                const isVoice = t.key === "voice";
                return (
                    <button key={t.key} onClick={() => setActiveTab(t.key)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "3px 10px" }}>
                        {isVoice ? (
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: act ? C.accent : "rgba(26,107,79,0.06)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -14, boxShadow: act ? "0 4px 12px rgba(26,107,79,0.3)" : "none", transition: "all 0.2s" }}>
                                <Icon name="mic" size={18} color={act ? "#fff" : C.accent} strokeWidth={2} />
                            </div>
                        ) : (
                            <Icon name={t.icon} size={20} color={act ? C.accent : C.textMuted} strokeWidth={act ? 2 : 1.6} />
                        )}
                        <span style={{ fontFamily: font, fontSize: 9, fontWeight: act ? 600 : 500, color: act ? C.accent : C.textMuted }}>{t.label}</span>
                    </button>
                );
            })}
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// PHONE FRAME (wraps everything)
// ═══════════════════════════════════════════════════════

function PhoneMockup() {
    const [activeTab, setActiveTab] = useState("home");

    const renderScreen = () => {
        switch (activeTab) {
            case "home": return <HomeScreen />;
            case "tasks": return <TasksScreen />;
            case "voice": return <VoiceScreen />;
            case "activity": return <ActivityScreen />;
            case "profile": return <ProfileScreen onLogout={() => setActiveTab("home")} />;
        }
    };

    return (
        <div style={phoneFrame}>
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", background: C.bg }}>
                <StatusBar dark={activeTab === "profile"} />
                <div style={{ flex: 1, overflow: "auto", background: activeTab === "profile" ? "transparent" : C.bg }}>
                    {activeTab === "profile" && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 120, background: "linear-gradient(135deg, #1A6B4F 0%, #2D8B6A 100%)", zIndex: 0 }} />}
                    <div style={{ position: "relative", zIndex: 1 }}>{renderScreen()}</div>
                </div>
                <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    );
}

const phoneFrame = {
    width: 360, height: 740, borderRadius: 36, overflow: "hidden",
    boxShadow: "0 20px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
    border: "7px solid #1A1F1C", position: "relative", background: C.bg, flexShrink: 0,
};

// ═══════════════════════════════════════════════════════
// PAGE — Hero + Phone + Features section
// ═══════════════════════════════════════════════════════

export default function AppPreview() {
    const features = [
        { icon: "mic", title: "Voice-First Interface", desc: "Hands-free task management powered by Claude AI. Speak naturally in Kiswahili or English.", color: C.accent, bg: "rgba(26,107,79,0.06)" },
        { icon: "shield", title: "Voice Authentication", desc: "Secure biometric login using ECAPA-TDNN voiceprint technology. No passwords needed.", color: C.blue, bg: "rgba(37,99,235,0.06)" },
        { icon: "globe", title: "Offline-First Design", desc: "Full functionality without internet. Auto-syncs when connectivity returns.", color: C.orange, bg: "rgba(232,103,60,0.06)" },
        { icon: "camera", title: "Smart Photo Capture", desc: "GPS-stamped photo evidence with AI analysis for crop disease detection and compliance.", color: C.purple, bg: "rgba(124,58,237,0.06)" },
        { icon: "leaf", title: "Farm Intelligence", desc: "Real-time weather, soil moisture alerts, and predictive analytics for better harvests.", color: "#22C77E", bg: "rgba(34,199,126,0.06)" },
        { icon: "zap", title: "On-Device AI", desc: "FunctionGemma LLM runs locally on your phone. Private, fast, and always available.", color: "#D97706", bg: "rgba(217,119,6,0.06)" },
    ];

    return (
        <div>
            {/* ── Hero Section ──────────────────────────── */}
            <section style={{ position: "relative", padding: "160px 24px 100px", overflow: "hidden" }}>
                {/* Animated background orbs */}
                <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
                    <div className="glow-blob" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(26,107,79,0.12) 0%, transparent 60%)", top: -100, right: "10%" }} />
                    <div className="glow-blob" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(34,199,126,0.08) 0%, transparent 60%)", bottom: 0, left: "5%", animationDelay: "-8s" }} />
                    {/* Dot grid */}
                    <div style={{
                        position: "absolute", inset: 0,
                        backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                        maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
                    }} />
                </div>

                <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 60, flexWrap: "wrap" }}>
                        {/* Left — Copy */}
                        <div style={{ flex: "1 1 440px", maxWidth: 520 }}>
                            <FadeIn>
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    background: "rgba(26,107,79,0.06)", border: "1px solid rgba(26,107,79,0.12)",
                                    borderRadius: 100, padding: "6px 16px 6px 8px", marginBottom: 28,
                                }}>
                                    <span style={{ width: 24, height: 24, borderRadius: 7, background: C.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Icon name="zap" size={12} color="#fff" />
                                    </span>
                                    <span style={{ fontFamily: fontDisplay, fontSize: 12.5, fontWeight: 600, color: C.accent, letterSpacing: "-0.01em" }}>
                                        Now available on iOS & Android
                                    </span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.1}>
                                <h1 style={{
                                    fontFamily: fontHero, fontSize: "clamp(40px, 5vw, 58px)",
                                    fontWeight: 400, color: C.text, lineHeight: 1.08,
                                    letterSpacing: "-0.02em", margin: "0 0 20px",
                                }}>
                                    Your field crew's
                                    <br />
                                    <span style={{ fontStyle: "italic", color: C.accent }}>AI companion</span>
                                </h1>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <p style={{
                                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 16.5,
                                    color: C.textSoft, lineHeight: 1.7, maxWidth: 420, margin: "0 0 32px",
                                    fontWeight: 500,
                                }}>
                                    Voice-powered task management that works offline. Speak in Kiswahili or English — GroundBase handles the rest with on-device AI.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                                    <a href="#" className="btn-cta" style={{
                                        display: "inline-flex", alignItems: "center", gap: 8,
                                        padding: "14px 28px", borderRadius: 100, fontSize: 14.5,
                                        textDecoration: "none",
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-2.11 4.45-3.74 4.25z" /></svg>
                                        App Store
                                    </a>
                                    <a href="#" className="btn-ghost" style={{
                                        display: "inline-flex", alignItems: "center", gap: 8,
                                        padding: "14px 28px", borderRadius: 100, fontSize: 14.5,
                                        textDecoration: "none",
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill={C.text}><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.328a1 1 0 010 1.73l-2.302 1.328-2.535-2.535 2.535-2.535zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" /></svg>
                                        Google Play
                                    </a>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div style={{ display: "flex", gap: 28, marginTop: 40 }}>
                                    {[
                                        { val: "50K+", label: "Active Users" },
                                        { val: "99.2%", label: "Uptime" },
                                        { val: "4.8★", label: "App Rating" },
                                    ].map((s, i) => (
                                        <div key={i}>
                                            <div style={{ fontFamily: fontDisplay, fontSize: 22, fontWeight: 700, color: C.text }}>{s.val}</div>
                                            <div style={{ fontFamily: font, fontSize: 12.5, color: C.textMuted, marginTop: 2 }}>{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right — Phone */}
                        <FadeIn delay={0.2} y={30} style={{ flex: "0 0 auto" }}>
                            <PhoneMockup />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ── Features Grid ─────────────────────────── */}
            <section style={{ padding: "80px 24px 100px", background: C.bgOff }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 60 }}>
                            <span style={{ fontFamily: fontDisplay, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.accent, marginBottom: 12, display: "block" }}>
                                Built for the field
                            </span>
                            <h2 style={{ fontFamily: fontHero, fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: C.text, lineHeight: 1.12, margin: 0 }}>
                                Everything your team needs,
                                <br />
                                <span style={{ fontStyle: "italic" }}>right in their pocket</span>
                            </h2>
                        </div>
                    </FadeIn>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
                        {features.map((f, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="card-hover" style={{
                                    background: "#fff", borderRadius: 16, padding: "28px 24px",
                                    cursor: "default", height: "100%",
                                }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 14, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                                        <Icon name={f.icon} size={22} color={f.color} strokeWidth={1.8} />
                                    </div>
                                    <h3 style={{ fontFamily: fontDisplay, fontSize: 17, fontWeight: 700, color: C.text, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{f.title}</h3>
                                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14.5, color: C.textSoft, lineHeight: 1.65, margin: 0, fontWeight: 500 }}>{f.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ────────────────────────────── */}
            <section style={{ padding: "80px 24px" }}>
                <FadeIn>
                    <div style={{
                        maxWidth: 900, margin: "0 auto", textAlign: "center",
                        background: "linear-gradient(135deg, #1A6B4F 0%, #2D8B6A 50%, #22C77E 100%)",
                        borderRadius: 24, padding: "60px 40px", position: "relative", overflow: "hidden",
                    }}>
                        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                        <div style={{ position: "absolute", bottom: -60, left: -20, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
                        <div style={{ position: "relative" }}>
                            <h2 style={{ fontFamily: fontHero, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, color: "#fff", lineHeight: 1.15, margin: "0 0 16px" }}>
                                Ready to transform
                                <br />
                                <span style={{ fontStyle: "italic" }}>your field operations?</span>
                            </h2>
                            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", fontWeight: 500, lineHeight: 1.6 }}>
                                Join 50,000+ field workers across East Africa already using GroundBase to work smarter.
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                                <a href="#" style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    padding: "14px 28px", borderRadius: 100, fontSize: 14.5,
                                    background: "#fff", color: C.accent, fontFamily: fontDisplay,
                                    fontWeight: 600, textDecoration: "none",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                                    transition: "all 0.3s ease",
                                    letterSpacing: "-0.01em",
                                }}>
                                    Download the App
                                </a>
                                <a href="/pricing" style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    padding: "14px 28px", borderRadius: 100, fontSize: 14.5,
                                    background: "rgba(255,255,255,0.15)", color: "#fff",
                                    fontFamily: fontDisplay, fontWeight: 600, textDecoration: "none",
                                    border: "1px solid rgba(255,255,255,0.25)",
                                    transition: "all 0.3s ease",
                                    letterSpacing: "-0.01em",
                                }}>
                                    View Pricing
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
