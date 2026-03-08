import { useState, useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════
// GroundBase Mobile App — Full UI Prototype
// Earthy & Natural Theme · Clean & Modern
// ═══════════════════════════════════════════════════════

const C = {
  bg: "#FCFCFA",
  bgOff: "#F5F5F0",
  bgSubtle: "#EDE9E3",
  bgDark: "#1A1F1C",
  bgCard: "#FFFFFF",
  accent: "#1A6B4F",
  accentLight: "#22C77E",
  accentSoft: "rgba(26,107,79,0.08)",
  accentMid: "#2D8B6A",
  orange: "#D4713B",
  orangeSoft: "rgba(212,113,59,0.08)",
  blue: "#3B7DD8",
  blueSoft: "rgba(59,125,216,0.08)",
  red: "#D64545",
  redSoft: "rgba(214,69,69,0.08)",
  text: "#1A1F1C",
  textSoft: "#5A6356",
  textMuted: "#8F9B8A",
  border: "rgba(0,0,0,0.06)",
  borderMed: "rgba(0,0,0,0.10)",
  shadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
  shadowMd: "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
  shadowLg: "0 4px 16px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.06)",
  radius: 14,
  radiusSm: 10,
  radiusXs: 8,
};

const font = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";
const fontDisplay = "'Space Grotesk', 'DM Sans', sans-serif";

// ── Icons (inline SVG) ──────────────────────────────
const Icon = ({ name, size = 22, color = C.textSoft, strokeWidth = 1.8 }) => {
  const s = { width: size, height: size, display: "block" };
  const p = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", style: s };
  const icons = {
    home: <svg {...p}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    tasks: <svg {...p}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
    mic: <svg {...p}><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
    activity: <svg {...p}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    user: <svg {...p}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    settings: <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    sun: <svg {...p}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
    cloud: <svg {...p}><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
    droplet: <svg {...p}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
    wind: <svg {...p}><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
    camera: <svg {...p}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
    mapPin: <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    clock: <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    check: <svg {...p}><polyline points="20 6 9 17 4 12"/></svg>,
    chevRight: <svg {...p}><polyline points="9 18 15 12 9 6"/></svg>,
    chevLeft: <svg {...p}><polyline points="15 18 9 12 15 6"/></svg>,
    bell: <svg {...p}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
    search: <svg {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    leaf: <svg {...p}><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.5 6.5A6.97 6.97 0 0011 20z"/><path d="M5 19l6-6"/></svg>,
    barChart: <svg {...p}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
    plus: <svg {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    eye: <svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    shield: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    logout: <svg {...p}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
    globe: <svg {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    zap: <svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={color} stroke="none"/></svg>,
  };
  return icons[name] || null;
};

// ── Animated Gradient Background ─────────────────────
const GradientBg = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
    <div style={{
      position: "absolute", width: 300, height: 300, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(26,107,79,0.12) 0%, transparent 70%)",
      top: -80, right: -60, animation: "drift1 12s ease-in-out infinite",
    }} />
    <div style={{
      position: "absolute", width: 200, height: 200, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(34,199,126,0.08) 0%, transparent 70%)",
      bottom: 40, left: -40, animation: "drift1 15s ease-in-out infinite reverse",
    }} />
  </div>
);

// ═══════════════════════════════════════════════════════
// SCREENS
// ═══════════════════════════════════════════════════════

// ── Login Screen ─────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [focusField, setFocusField] = useState(null);

  return (
    <div style={{ ...styles.screen, background: C.bg, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <GradientBg />
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 28px" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 18, background: C.accent,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 32px rgba(26,107,79,0.25)", marginBottom: 20,
          }}>
            <span style={{ fontSize: 28, fontFamily: fontDisplay, fontWeight: 700, color: "#fff" }}>G</span>
          </div>
          <h1 style={{ fontFamily: fontDisplay, fontSize: 26, fontWeight: 700, color: C.text, margin: "0 0 6px" }}>
            Groundbase
          </h1>
          <p style={{ fontFamily: font, fontSize: 14, color: C.textMuted, margin: 0, letterSpacing: 0.2 }}>
            AI-native field operations
          </p>
        </div>

        {/* Inputs */}
        <div style={{ marginBottom: 16 }}>
          <label style={styles.inputLabel}>Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setFocusField("email")}
            onBlur={() => setFocusField(null)}
            style={{
              ...styles.input,
              borderColor: focusField === "email" ? C.accent : C.border,
              boxShadow: focusField === "email" ? `0 0 0 3px ${C.accentSoft}` : "none",
            }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label style={styles.inputLabel}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={pass}
            onChange={e => setPass(e.target.value)}
            onFocus={() => setFocusField("pass")}
            onBlur={() => setFocusField(null)}
            style={{
              ...styles.input,
              borderColor: focusField === "pass" ? C.accent : C.border,
              boxShadow: focusField === "pass" ? `0 0 0 3px ${C.accentSoft}` : "none",
            }}
          />
        </div>
        <div style={{ textAlign: "right", marginBottom: 28 }}>
          <span style={{ fontFamily: font, fontSize: 13, color: C.accent, cursor: "pointer", fontWeight: 500 }}>
            Forgot password?
          </span>
        </div>

        {/* Login Button */}
        <button onClick={onLogin} style={styles.btnPrimary}>
          Sign In
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0" }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <span style={{ fontFamily: font, fontSize: 12, color: C.textMuted }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        {/* Social */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Google", "Apple"].map(p => (
            <button key={p} onClick={onLogin} style={styles.btnSocial}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "20px 28px 32px" }}>
        <p style={{ fontFamily: font, fontSize: 13, color: C.textMuted, margin: 0 }}>
          Don't have an account? <span style={{ color: C.accent, fontWeight: 600, cursor: "pointer" }}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

// ── Dashboard/Home ───────────────────────────────────
function HomeScreen() {
  const weatherData = { temp: 24, condition: "Partly Cloudy", humidity: 67, wind: 12 };
  const stats = [
    { label: "Active Tasks", value: "12", icon: "tasks", color: C.accent, bg: C.accentSoft },
    { label: "Completed", value: "38", icon: "check", color: "#22C77E", bg: "rgba(34,199,126,0.08)" },
    { label: "Overdue", value: "3", icon: "clock", color: C.orange, bg: C.orangeSoft },
    { label: "Photos", value: "156", icon: "camera", color: C.blue, bg: C.blueSoft },
  ];

  const recentActivity = [
    { title: "Site inspection completed", time: "2m ago", icon: "check", color: "#22C77E" },
    { title: "New task assigned: Fence repair", time: "15m ago", icon: "tasks", color: C.accent },
    { title: "Photo uploaded: Crop section B4", time: "1h ago", icon: "camera", color: C.blue },
    { title: "Weather alert: Rain expected", time: "2h ago", icon: "cloud", color: C.orange },
  ];

  return (
    <div style={{ ...styles.screenInner, paddingBottom: 100 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px 8px" }}>
        <div>
          <p style={{ fontFamily: font, fontSize: 13, color: C.textMuted, margin: "0 0 2px" }}>Good morning,</p>
          <h1 style={{ fontFamily: fontDisplay, fontSize: 22, fontWeight: 700, color: C.text, margin: 0 }}>
            James Kariuki
          </h1>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={styles.iconBtn}><Icon name="search" size={20} /></div>
          <div style={{ ...styles.iconBtn, position: "relative" }}>
            <Icon name="bell" size={20} />
            <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: 4, background: C.orange, border: "2px solid " + C.bg }} />
          </div>
        </div>
      </div>

      {/* Weather Card */}
      <div style={{ padding: "12px 20px" }}>
        <div style={{
          background: "linear-gradient(135deg, #1A6B4F 0%, #2D8B6A 50%, #22C77E 100%)",
          borderRadius: 18, padding: "20px 22px", color: "#fff", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
          <div style={{ position: "absolute", bottom: -30, right: 40, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
            <div>
              <p style={{ fontFamily: font, fontSize: 13, opacity: 0.8, margin: "0 0 4px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Icon name="mapPin" size={13} color="rgba(255,255,255,0.8)" strokeWidth={2} /> Nyeri County
                </span>
              </p>
              <div style={{ fontFamily: fontDisplay, fontSize: 40, fontWeight: 700, lineHeight: 1, margin: "4px 0 6px" }}>
                {weatherData.temp}°C
              </div>
              <p style={{ fontFamily: font, fontSize: 13, opacity: 0.8, margin: 0 }}>{weatherData.condition}</p>
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
              {[
                { icon: "droplet", val: `${weatherData.humidity}%`, label: "Humidity" },
                { icon: "wind", val: `${weatherData.wind}km/h`, label: "Wind" },
              ].map((w, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <Icon name={w.icon} size={16} color="rgba(255,255,255,0.7)" />
                  <div style={{ fontFamily: fontDisplay, fontSize: 14, fontWeight: 600, marginTop: 2 }}>{w.val}</div>
                  <div style={{ fontFamily: font, fontSize: 10, opacity: 0.6 }}>{w.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ padding: "8px 20px 4px" }}>
        <h3 style={styles.sectionTitle}>Overview</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: C.bgCard, borderRadius: C.radiusSm, padding: "16px 14px",
              border: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: C.radiusXs, background: s.bg,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon name={s.icon} size={18} color={s.color} strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: C.text, lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ fontFamily: font, fontSize: 11, color: C.textMuted, marginTop: 2 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ padding: "16px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h3 style={{ ...styles.sectionTitle, margin: 0 }}>Recent Activity</h3>
          <span style={{ fontFamily: font, fontSize: 13, color: C.accent, fontWeight: 500, cursor: "pointer" }}>See all</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {recentActivity.map((a, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 0",
              borderBottom: i < recentActivity.length - 1 ? `1px solid ${C.border}` : "none",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: `${a.color}10`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon name={a.icon} size={16} color={a.color} strokeWidth={2} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: font, fontSize: 14, color: C.text, fontWeight: 500 }}>{a.title}</div>
                <div style={{ fontFamily: font, fontSize: 12, color: C.textMuted, marginTop: 1 }}>{a.time}</div>
              </div>
              <Icon name="chevRight" size={16} color={C.textMuted} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Tasks Screen ─────────────────────────────────────
function TasksScreen() {
  const [activeTab, setActiveTab] = useState("today");
  const tabs = ["today", "upcoming", "completed"];
  const tasks = [
    { title: "Inspect fence perimeter — Section A", priority: "high", due: "9:00 AM", location: "North Field", progress: 0, hasPhoto: true },
    { title: "Apply fertilizer to maize plot", priority: "medium", due: "11:00 AM", location: "Plot B4", progress: 60, hasPhoto: false },
    { title: "Check irrigation system valves", priority: "low", due: "2:00 PM", location: "Main Pump House", progress: 0, hasPhoto: true },
    { title: "Record cattle health — Lot 7", priority: "high", due: "4:00 PM", location: "Livestock Area", progress: 25, hasPhoto: true },
    { title: "Update crop growth log", priority: "medium", due: "5:30 PM", location: "Office", progress: 0, hasPhoto: false },
  ];
  const priorityColors = { high: C.red, medium: C.orange, low: C.accent };
  const priorityBgs = { high: C.redSoft, medium: C.orangeSoft, low: C.accentSoft };

  return (
    <div style={{ ...styles.screenInner, paddingBottom: 100 }}>
      <div style={{ padding: "16px 20px 8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontFamily: fontDisplay, fontSize: 22, fontWeight: 700, color: C.text, margin: 0 }}>Tasks</h1>
          <button style={{
            ...styles.iconBtn, background: C.accent, border: "none",
          }}>
            <Icon name="plus" size={18} color="#fff" strokeWidth={2.5} />
          </button>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: 4, marginTop: 16, background: C.bgOff,
          borderRadius: 12, padding: 3,
        }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              flex: 1, padding: "9px 0", fontFamily: font, fontSize: 13, fontWeight: 600,
              border: "none", borderRadius: 10, cursor: "pointer",
              background: activeTab === t ? C.bgCard : "transparent",
              color: activeTab === t ? C.text : C.textMuted,
              boxShadow: activeTab === t ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
              textTransform: "capitalize", transition: "all 0.2s ease",
            }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Task List */}
      <div style={{ padding: "8px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {tasks.map((t, i) => (
            <div key={i} style={{
              background: C.bgCard, borderRadius: C.radiusSm, padding: "16px",
              border: `1px solid ${C.border}`, position: "relative", overflow: "hidden",
            }}>
              {/* Priority indicator */}
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                background: priorityColors[t.priority], borderRadius: "3px 0 0 3px",
              }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ flex: 1, paddingLeft: 6 }}>
                  <div style={{ fontFamily: font, fontSize: 14, fontWeight: 600, color: C.text, lineHeight: 1.4 }}>{t.title}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 3, fontFamily: font, fontSize: 12, color: C.textMuted }}>
                      <Icon name="clock" size={12} color={C.textMuted} /> {t.due}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 3, fontFamily: font, fontSize: 12, color: C.textMuted }}>
                      <Icon name="mapPin" size={12} color={C.textMuted} /> {t.location}
                    </span>
                  </div>
                </div>
                <span style={{
                  fontFamily: font, fontSize: 11, fontWeight: 600, color: priorityColors[t.priority],
                  background: priorityBgs[t.priority], padding: "3px 8px", borderRadius: 6,
                  textTransform: "capitalize",
                }}>{t.priority}</span>
              </div>
              {/* Progress bar */}
              {t.progress > 0 && (
                <div style={{ marginTop: 8, paddingLeft: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontFamily: font, fontSize: 11, color: C.textMuted }}>Progress</span>
                    <span style={{ fontFamily: font, fontSize: 11, color: C.accent, fontWeight: 600 }}>{t.progress}%</span>
                  </div>
                  <div style={{ height: 4, background: C.bgOff, borderRadius: 2 }}>
                    <div style={{ height: 4, width: `${t.progress}%`, background: C.accent, borderRadius: 2, transition: "width 0.5s ease" }} />
                  </div>
                </div>
              )}
              {/* Action row */}
              <div style={{ display: "flex", gap: 8, marginTop: 10, paddingLeft: 6 }}>
                {t.hasPhoto && (
                  <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: font, fontSize: 12, color: C.accent, cursor: "pointer" }}>
                    <Icon name="camera" size={14} color={C.accent} /> Photo required
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Voice AI Screen ──────────────────────────────────
function VoiceScreen() {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Good morning, James. You have 12 tasks today. 3 are high priority. Would you like me to read them out?" },
    { role: "user", text: "Yes, what's the most urgent one?" },
    { role: "ai", text: "Your most urgent task is inspecting the fence perimeter in Section A, due at 9:00 AM. It requires a photo for verification. Should I navigate you there?" },
  ]);

  return (
    <div style={{ ...styles.screenInner, display: "flex", flexDirection: "column", paddingBottom: 100 }}>
      <div style={{ padding: "16px 20px 8px" }}>
        <h1 style={{ fontFamily: fontDisplay, fontSize: 22, fontWeight: 700, color: C.text, margin: 0 }}>AI Assistant</h1>
        <p style={{ fontFamily: font, fontSize: 13, color: C.textMuted, margin: "4px 0 0" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: C.accentLight, display: "inline-block" }} />
            Online · Using Claude
          </span>
        </p>
      </div>

      {/* Chat messages */}
      <div style={{ flex: 1, padding: "12px 20px", display: "flex", flexDirection: "column", gap: 12, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start",
          }}>
            <div style={{
              maxWidth: "82%", padding: "12px 16px", borderRadius: 16,
              background: m.role === "user" ? C.accent : C.bgCard,
              color: m.role === "user" ? "#fff" : C.text,
              fontFamily: font, fontSize: 14, lineHeight: 1.5,
              border: m.role === "ai" ? `1px solid ${C.border}` : "none",
              borderBottomRightRadius: m.role === "user" ? 4 : 16,
              borderBottomLeftRadius: m.role === "ai" ? 4 : 16,
              boxShadow: m.role === "ai" ? "0 1px 4px rgba(0,0,0,0.03)" : "none",
            }}>
              {m.role === "ai" && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: 6, background: C.accent,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 10, fontFamily: fontDisplay, fontWeight: 700, color: "#fff" }}>G</span>
                  </div>
                  <span style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: C.accent }}>GroundBase AI</span>
                </div>
              )}
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Voice Orb */}
      <div style={{ padding: "16px 20px 8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Mic Button */}
        <button
          onClick={() => setIsListening(!isListening)}
          style={{
            width: 72, height: 72, borderRadius: "50%", border: "none", cursor: "pointer",
            background: isListening
              ? "linear-gradient(135deg, #22C77E 0%, #1A6B4F 100%)"
              : "linear-gradient(135deg, #1A6B4F 0%, #14523C 100%)",
            boxShadow: isListening
              ? "0 0 0 8px rgba(34,199,126,0.15), 0 0 0 16px rgba(34,199,126,0.06), 0 4px 20px rgba(26,107,79,0.3)"
              : "0 4px 16px rgba(26,107,79,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.3s ease",
            animation: isListening ? "pulse 1.5s ease-in-out infinite" : "none",
          }}
        >
          <Icon name="mic" size={28} color="#fff" strokeWidth={2} />
        </button>
        <p style={{ fontFamily: font, fontSize: 12, color: C.textMuted, marginTop: 10, textAlign: "center" }}>
          {isListening ? "Listening..." : "Tap to speak"}
        </p>

        {/* Quick actions */}
        <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {["Read my tasks", "Weather update", "Take a photo"].map((q, i) => (
            <button key={i} style={{
              fontFamily: font, fontSize: 12, color: C.accent, background: C.accentSoft,
              border: `1px solid rgba(26,107,79,0.12)`, borderRadius: 20, padding: "6px 14px",
              cursor: "pointer", fontWeight: 500,
            }}>
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Activity Screen ──────────────────────────────────
function ActivityScreen() {
  const chartData = [35, 52, 48, 65, 42, 70, 58];
  const maxVal = Math.max(...chartData);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const activities = [
    { type: "completed", text: "Maize plot inspection completed", time: "Today, 8:30 AM", metric: "45 min" },
    { type: "photo", text: "Photo evidence uploaded for Task #142", time: "Today, 7:15 AM", metric: "3 photos" },
    { type: "sync", text: "Offline data synced successfully", time: "Yesterday, 6:00 PM", metric: "12 records" },
    { type: "alert", text: "Low soil moisture detected — Plot C2", time: "Yesterday, 3:45 PM", metric: "Warning" },
    { type: "completed", text: "Cattle health check — Lot 5", time: "Yesterday, 11:00 AM", metric: "30 min" },
    { type: "completed", text: "Irrigation system maintenance", time: "Mar 5, 2:30 PM", metric: "1.5 hrs" },
  ];
  const typeMap = {
    completed: { icon: "check", color: "#22C77E" },
    photo: { icon: "camera", color: C.blue },
    sync: { icon: "globe", color: C.accent },
    alert: { icon: "zap", color: C.orange },
  };

  return (
    <div style={{ ...styles.screenInner, paddingBottom: 100 }}>
      <div style={{ padding: "16px 20px 8px" }}>
        <h1 style={{ fontFamily: fontDisplay, fontSize: 22, fontWeight: 700, color: C.text, margin: 0 }}>Activity</h1>
      </div>

      {/* Weekly Chart */}
      <div style={{ padding: "8px 20px 4px" }}>
        <div style={{
          background: C.bgCard, borderRadius: C.radius, padding: "20px 18px 16px",
          border: `1px solid ${C.border}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: C.text }}>Tasks This Week</span>
            <span style={{ fontFamily: fontDisplay, fontSize: 18, fontWeight: 700, color: C.accent }}>370</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 100 }}>
            {chartData.map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: "100%", maxWidth: 32, height: `${(v / maxVal) * 80}px`,
                  background: i === chartData.length - 2 ? C.accent : C.bgSubtle,
                  borderRadius: 6, transition: "height 0.5s ease",
                }} />
                <span style={{ fontFamily: font, fontSize: 10, color: C.textMuted }}>{days[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div style={{ padding: "12px 20px 0" }}>
        <h3 style={styles.sectionTitle}>Timeline</h3>
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 17, top: 10, bottom: 10, width: 1.5, background: C.bgSubtle }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {activities.map((a, i) => {
              const t = typeMap[a.type];
              return (
                <div key={i} style={{ display: "flex", gap: 14, padding: "10px 0", alignItems: "flex-start" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, background: `${t.color}10`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, position: "relative", zIndex: 1, border: `2px solid ${C.bg}`,
                  }}>
                    <Icon name={t.icon} size={16} color={t.color} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: font, fontSize: 14, color: C.text, fontWeight: 500, lineHeight: 1.4 }}>{a.text}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
                      <span style={{ fontFamily: font, fontSize: 12, color: C.textMuted }}>{a.time}</span>
                      <span style={{ fontFamily: font, fontSize: 12, color: t.color, fontWeight: 500 }}>{a.metric}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Profile/Settings Screen ──────────────────────────
function ProfileScreen({ onLogout }) {
  const menuItems = [
    { icon: "user", label: "Edit Profile", desc: "Name, photo, contact info" },
    { icon: "bell", label: "Notifications", desc: "Alerts, reminders, sounds" },
    { icon: "globe", label: "Language", desc: "Kiswahili (KE)", badge: "SW" },
    { icon: "mapPin", label: "Farm Locations", desc: "Manage your locations" },
    { icon: "shield", label: "Privacy & Security", desc: "Voice auth, PIN, biometrics" },
    { icon: "barChart", label: "Reports", desc: "Export data, analytics" },
    { icon: "leaf", label: "Offline Mode", desc: "Sync settings, storage" },
  ];

  return (
    <div style={{ ...styles.screenInner, paddingBottom: 100 }}>
      {/* Profile Header */}
      <div style={{
        background: "linear-gradient(135deg, #1A6B4F 0%, #2D8B6A 100%)",
        padding: "24px 20px 32px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          <div style={{
            width: 64, height: 64, borderRadius: 20, background: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(255,255,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: fontDisplay, fontSize: 24, fontWeight: 700, color: "#fff" }}>JK</span>
          </div>
          <div>
            <h2 style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: "#fff", margin: 0 }}>James Kariuki</h2>
            <p style={{ fontFamily: font, fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "3px 0 0" }}>Farm Manager · Nyeri County</p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 4, marginTop: 6,
              background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "3px 8px",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: "#22C77E" }} />
              <span style={{ fontFamily: font, fontSize: 11, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>Voice verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div style={{ padding: "16px 20px" }}>
        <div style={{
          background: C.bgCard, borderRadius: C.radius, border: `1px solid ${C.border}`,
          overflow: "hidden",
        }}>
          {menuItems.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 14, padding: "14px 16px",
              borderBottom: i < menuItems.length - 1 ? `1px solid ${C.border}` : "none",
              cursor: "pointer",
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, background: C.accentSoft,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon name={item.icon} size={18} color={C.accent} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: font, fontSize: 14, fontWeight: 600, color: C.text }}>{item.label}</div>
                <div style={{ fontFamily: font, fontSize: 12, color: C.textMuted, marginTop: 1 }}>{item.desc}</div>
              </div>
              {item.badge && (
                <span style={{
                  fontFamily: font, fontSize: 11, fontWeight: 600, color: C.accent,
                  background: C.accentSoft, padding: "2px 8px", borderRadius: 6,
                }}>{item.badge}</span>
              )}
              <Icon name="chevRight" size={16} color={C.textMuted} />
            </div>
          ))}
        </div>

        {/* Logout */}
        <button onClick={onLogout} style={{
          width: "100%", marginTop: 16, padding: "14px", fontFamily: font, fontSize: 14,
          fontWeight: 600, color: C.red, background: C.redSoft, border: `1px solid rgba(214,69,69,0.12)`,
          borderRadius: C.radiusSm, cursor: "pointer", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 8,
        }}>
          <Icon name="logout" size={18} color={C.red} /> Sign Out
        </button>

        <p style={{ fontFamily: font, fontSize: 11, color: C.textMuted, textAlign: "center", marginTop: 16 }}>
          GroundBase v2.1.0 · Made in Kenya 🇰🇪
        </p>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════
// MAIN APP — Tab Navigation
// ═══════════════════════════════════════════════════════

export default function GroundBaseApp() {
  const [screen, setScreen] = useState("login");
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { key: "home", label: "Home", icon: "home" },
    { key: "tasks", label: "Tasks", icon: "tasks" },
    { key: "voice", label: "Voice", icon: "mic" },
    { key: "activity", label: "Activity", icon: "activity" },
    { key: "profile", label: "Profile", icon: "user" },
  ];

  if (screen === "login") {
    return (
      <div style={styles.phoneFrame}>
        <style>{globalCSS}</style>
        <LoginScreen onLogin={() => setScreen("app")} />
      </div>
    );
  }

  const renderScreen = () => {
    switch (activeTab) {
      case "home": return <HomeScreen />;
      case "tasks": return <TasksScreen />;
      case "voice": return <VoiceScreen />;
      case "activity": return <ActivityScreen />;
      case "profile": return <ProfileScreen onLogout={() => { setScreen("login"); setActiveTab("home"); }} />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div style={styles.phoneFrame}>
      <style>{globalCSS}</style>
      <div style={styles.screen}>
        {/* Status Bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "8px 20px 4px", background: activeTab === "profile"
            ? "linear-gradient(135deg, #1A6B4F 0%, #2D8B6A 100%)" : C.bg,
        }}>
          <span style={{ fontFamily: font, fontSize: 12, fontWeight: 600, color: activeTab === "profile" ? "#fff" : C.text }}>9:41</span>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {/* Signal & battery icons */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="8" width="3" height="4" rx="0.5" fill={activeTab === "profile" ? "rgba(255,255,255,0.6)" : C.textMuted} />
              <rect x="4" y="5" width="3" height="7" rx="0.5" fill={activeTab === "profile" ? "rgba(255,255,255,0.8)" : C.textSoft} />
              <rect x="8" y="2" width="3" height="10" rx="0.5" fill={activeTab === "profile" ? "#fff" : C.text} />
              <rect x="12" y="0" width="3" height="12" rx="0.5" fill={activeTab === "profile" ? "#fff" : C.text} />
            </svg>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
              <rect x="0" y="1" width="18" height="10" rx="2" stroke={activeTab === "profile" ? "#fff" : C.text} strokeWidth="1"/>
              <rect x="19" y="3.5" width="2" height="5" rx="1" fill={activeTab === "profile" ? "#fff" : C.text}/>
              <rect x="1.5" y="2.5" width="13" height="7" rx="1" fill={activeTab === "profile" ? "#fff" : C.accent}/>
            </svg>
          </div>
        </div>

        {/* Screen Content */}
        <div style={{ flex: 1, overflow: "auto", background: C.bg }}>
          {renderScreen()}
        </div>

        {/* Tab Bar */}
        <div style={{
          display: "flex", justifyContent: "space-around", alignItems: "center",
          padding: "8px 8px 24px", background: C.bgCard,
          borderTop: `1px solid ${C.border}`, position: "absolute", bottom: 0, left: 0, right: 0,
        }}>
          {tabs.map(t => {
            const isActive = activeTab === t.key;
            const isVoice = t.key === "voice";
            return (
              <button key={t.key} onClick={() => setActiveTab(t.key)} style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                background: "none", border: "none", cursor: "pointer", padding: "4px 12px",
                position: "relative",
              }}>
                {isVoice ? (
                  <div style={{
                    width: 44, height: 44, borderRadius: 14,
                    background: isActive ? C.accent : C.accentSoft,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: -16,
                    boxShadow: isActive ? "0 4px 12px rgba(26,107,79,0.3)" : "none",
                    transition: "all 0.2s ease",
                  }}>
                    <Icon name={t.icon} size={20} color={isActive ? "#fff" : C.accent} strokeWidth={2} />
                  </div>
                ) : (
                  <Icon name={t.icon} size={22} color={isActive ? C.accent : C.textMuted} strokeWidth={isActive ? 2 : 1.6} />
                )}
                <span style={{
                  fontFamily: font, fontSize: 10, fontWeight: isActive ? 600 : 500,
                  color: isActive ? C.accent : C.textMuted,
                  marginTop: isVoice ? 0 : 0,
                }}>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════

const styles = {
  phoneFrame: {
    width: 390, maxWidth: "100%", height: 844, margin: "20px auto",
    borderRadius: 40, overflow: "hidden",
    boxShadow: "0 8px 60px rgba(0,0,0,0.12), 0 2px 20px rgba(0,0,0,0.08)",
    border: "8px solid #1A1F1C",
    position: "relative", background: C.bg,
  },
  screen: {
    width: "100%", height: "100%", display: "flex", flexDirection: "column",
    position: "relative", overflow: "hidden", background: C.bg,
    fontFamily: font,
  },
  screenInner: {
    width: "100%",
  },
  input: {
    width: "100%", padding: "14px 16px", fontFamily: font, fontSize: 15,
    border: `1.5px solid ${C.border}`, borderRadius: C.radiusSm,
    background: C.bgCard, color: C.text, outline: "none",
    transition: "all 0.2s ease", boxSizing: "border-box",
  },
  inputLabel: {
    display: "block", fontFamily: font, fontSize: 13, fontWeight: 600,
    color: C.textSoft, marginBottom: 6,
  },
  btnPrimary: {
    width: "100%", padding: "15px", fontFamily: font, fontSize: 15,
    fontWeight: 600, color: "#fff", background: C.accent,
    border: "none", borderRadius: C.radiusSm, cursor: "pointer",
    boxShadow: "0 4px 14px rgba(26,107,79,0.25)",
    transition: "all 0.2s ease",
  },
  btnSocial: {
    flex: 1, padding: "13px", fontFamily: font, fontSize: 14,
    fontWeight: 600, color: C.text, background: C.bgCard,
    border: `1.5px solid ${C.border}`, borderRadius: C.radiusSm,
    cursor: "pointer",
  },
  iconBtn: {
    width: 40, height: 40, borderRadius: 12, background: C.bgOff,
    border: `1px solid ${C.border}`, display: "flex", alignItems: "center",
    justifyContent: "center", cursor: "pointer",
  },
  sectionTitle: {
    fontFamily: fontDisplay, fontSize: 15, fontWeight: 700, color: C.text,
    margin: "0 0 12px", letterSpacing: -0.2,
  },
};

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 0; height: 0; }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes drift1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, 15px); }
  }
  input::placeholder { color: ${C.textMuted}; }
  button:active { transform: scale(0.97); }
`;
