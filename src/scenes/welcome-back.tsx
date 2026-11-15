import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const C = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  muted: "var(--muted-foreground)",
  card: "var(--card)",
  border: "var(--border)",
  primary: "var(--primary)",
  accent: "var(--accent)",
};

const font = "var(--font-sans), 'Plus Jakarta Sans', Arial, sans-serif";
const mono = "var(--font-mono), 'IBM Plex Mono', monospace";

const center: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  height: "100%",
  padding: "100px 76px",
  boxSizing: "border-box",
};

const label: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 19,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: C.muted,
};

const title: React.CSSProperties = {
  fontFamily: font,
  fontWeight: 650,
  color: C.foreground,
  letterSpacing: "-0.065em",
  lineHeight: 0.98,
};

const fade = (frame: number, duration: number) =>
  interpolate(frame, [0, 14, duration - 14, duration], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const rise = (frame: number, delay = 0) =>
  interpolate(frame, [delay, delay + 22], [38, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <span
        style={{
          width: 13,
          height: 13,
          borderRadius: 4,
          background: C.primary,
          transform: "rotate(45deg)",
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontFamily: font,
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: "-0.04em",
          color: dark ? "#f5f5f5" : C.foreground,
        }}
      >
        My Coworker AI
      </span>
    </div>
  );
}

function SceneFrame({
  children,
  frame,
  duration,
  dark = false,
}: {
  children: React.ReactNode;
  frame: number;
  duration: number;
  dark?: boolean;
}) {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: dark ? "#111111" : C.background,
        color: dark ? "#f5f5f5" : C.foreground,
        opacity: fade(frame, duration),
        overflow: "hidden",
        fontFamily: font,
      }}
    >
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 58%)",
          opacity: 0.75,
        }}
      />
      {children}
    </AbsoluteFill>
  );
}

function Topline({ index, dark = false }: { index: string; dark?: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 66,
        left: 70,
        right: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: dark ? "rgba(255,255,255,.55)" : C.muted,
        ...label,
        fontSize: 15,
      }}
    >
      <span>MY COWORKER AI</span>
      <span>{index}</span>
    </div>
  );
}

export function OpeningScene() {
  const frame = useCurrentFrame();
  return (
    <SceneFrame frame={frame} duration={105}>
      <Topline index="A SMALL PRODUCT DETAIL" />
      <div style={center}>
        <div
          style={{
            ...label,
            marginBottom: 38,
            opacity: interpolate(frame, [10, 28], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          THE MOMENT AFTER SIGN-IN
        </div>
        <div
          style={{
            ...title,
            fontSize: 116,
            transform: `translateY(${rise(frame, 12)}px)`,
          }}
        >
          A familiar
          <br />
          <span style={{ color: C.primary }}>return.</span>
        </div>
        <p
          style={{
            marginTop: 42,
            maxWidth: 690,
            color: C.muted,
            fontSize: 30,
            lineHeight: 1.45,
            opacity: interpolate(frame, [28, 46], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          Sometimes, the smallest details make an experience feel considered.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 76,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: 0.7,
        }}
      >
        <Brand />
      </div>
    </SceneFrame>
  );
}

const providerRows = [
  { name: "Google", detail: "Continue with Google", mark: "G" },
  { name: "GitHub", detail: "Continue with GitHub", mark: "⌘" },
  { name: "Email & Password", detail: "Sign in with email", mark: "@" },
];

export function SignInScene() {
  const frame = useCurrentFrame();
  return (
    <SceneFrame frame={frame} duration={135}>
      <Topline index="01 / RECOGNIZE THE RETURN" />
      <div style={center}>
        <div style={{ ...label, marginBottom: 24 }}>THE FIRST RETURN</div>
        <h2 style={{ ...title, fontSize: 76, margin: "0 0 20px" }}>
          Sign in.
          <br />
          <span style={{ color: C.primary }}>Feel at home.</span>
        </h2>
        <p style={{ color: C.muted, fontSize: 25, margin: "0 0 48px" }}>
          A welcome-back moment follows a familiar sign-in method.
        </p>
        <div
          style={{
            width: 690,
            padding: 28,
            borderRadius: 26,
            background: C.card,
            border: `1px solid ${C.border}`,
            boxShadow: "0 28px 90px rgba(0,0,0,.10)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            transform: `translateY(${rise(frame, 8)}px)`,
          }}
        >
          {providerRows.map((provider, i) => {
            const selected = i === 0;
            const appear = interpolate(frame, [12 + i * 9, 28 + i * 9], [0, 1], {
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={provider.name}
                style={{
                  height: 82,
                  borderRadius: 16,
                  border: `1px solid ${selected ? C.primary : C.border}`,
                  background: selected ? "color-mix(in oklab, var(--primary) 8%, var(--card))" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 24px",
                  gap: 20,
                  opacity: appear,
                }}
              >
                <span
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    background: selected ? C.primary : "color-mix(in oklab, var(--foreground) 7%, transparent)",
                    color: selected ? "#fff" : C.foreground,
                    fontSize: 23,
                    fontWeight: 700,
                  }}
                >
                  {provider.mark}
                </span>
                <span style={{ flex: 1, textAlign: "left", fontSize: 23, fontWeight: 550 }}>
                  {provider.detail}
                </span>
                {selected && (
                  <span style={{ ...label, color: C.primary, fontSize: 13 }}>
                    MATCHED
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <div style={{ ...label, fontSize: 14, marginTop: 24 }}>
          GOOGLE · GITHUB · EMAIL & PASSWORD
        </div>
      </div>
    </SceneFrame>
  );
}

export function WelcomeModalScene() {
  const frame = useCurrentFrame();
  const modalY = interpolate(frame, [10, 32], [48, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const modalOpacity = interpolate(frame, [8, 24], [0, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <SceneFrame frame={frame} duration={165}>
      <Topline index="02 / A PERSONAL WELCOME" />
      <div style={center}>
        <div style={{ ...label, marginBottom: 36 }}>A FIRST RETURN</div>
        <div
          style={{
            width: 720,
            border: `1px solid ${C.border}`,
            borderRadius: 30,
            padding: "46px 48px 42px",
            background: C.card,
            boxShadow: "0 35px 100px rgba(0,0,0,.14)",
            textAlign: "left",
            transform: `translateY(${modalY}px)`,
            opacity: modalOpacity,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 230,
              height: 230,
              right: -110,
              top: -120,
              borderRadius: "50%",
              background: "color-mix(in oklab, var(--primary) 18%, transparent)",
              filter: "blur(42px)",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: 18,
                display: "grid",
                placeItems: "center",
                color: "#fff",
                background: C.primary,
                fontSize: 29,
                fontWeight: 700,
              }}
            >
              ✦
            </div>
            <span style={{ ...label, color: C.primary, fontSize: 13, alignSelf: "center" }}>
              SHOWN ONCE
            </span>
          </div>
          <div style={{ ...label, fontSize: 13, marginTop: 42, color: C.primary }}>
            RECONNECTED VIA GOOGLE ACCOUNT
          </div>
          <h2 style={{ ...title, fontSize: 67, margin: "18px 0 14px" }}>
            Welcome back!
          </h2>
          <p style={{ color: C.muted, fontSize: 24, lineHeight: 1.45, margin: 0 }}>
            You have safely signed back in. We're glad to have you here.
          </p>
          <div
            style={{
              marginTop: 34,
              borderRadius: 18,
              border: "1px solid color-mix(in oklab, var(--primary) 30%, var(--border))",
              background: "color-mix(in oklab, var(--primary) 7%, transparent)",
              padding: "24px 26px",
            }}
          >
            <div style={{ ...label, color: C.primary, fontSize: 13 }}>SESSION CONFIRMED</div>
            <div style={{ fontSize: 29, fontWeight: 650, marginTop: 10 }}>
              Welcome back, <span style={{ color: C.primary }}>there.</span>
            </div>
          </div>
          <div
            style={{
              marginTop: 30,
              height: 58,
              borderRadius: 14,
              background: C.primary,
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontSize: 21,
              fontWeight: 650,
            }}
          >
            Continue
          </div>
        </div>
        <p style={{ ...label, fontSize: 14, marginTop: 30 }}>
          THE WELCOME MODAL IS A ONE-TIME MOMENT
        </p>
      </div>
    </SceneFrame>
  );
}

export function ReloginWaveScene() {
  const frame = useCurrentFrame();
  const dash = interpolate(frame, [0, 168], [0, -4620], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const reveal = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  return (
    <SceneFrame frame={frame} duration={195} dark>
      <Topline index="03 / EVERY RETURN" dark />
      <div style={center}>
        <div style={{ ...label, color: "rgba(255,255,255,.55)", marginBottom: 28 }}>
          AND EVERY TIME YOU RETURN
        </div>
        <h2 style={{ ...title, color: "#f5f5f5", fontSize: 70, margin: "0 0 22px" }}>
          A quiet signal.
          <br />
          <span style={{ color: "#f5f5f5" }}>You're back.</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,.58)", fontSize: 24, margin: "0 0 42px" }}>
          A subtle wave travels around the Home screen after each relogin.
        </p>
        <div
          style={{
            position: "relative",
            width: 790,
            height: 1030,
            borderRadius: 34,
            border: "1px solid rgba(255,255,255,.16)",
            background: "linear-gradient(145deg, #1b1b1b, #111111 62%)",
            padding: 42,
            boxSizing: "border-box",
            textAlign: "left",
            overflow: "visible",
            opacity: reveal,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Brand dark />
            <span style={{ ...label, color: "rgba(255,255,255,.42)", fontSize: 12 }}>HOME</span>
          </div>
          <div style={{ marginTop: 84 }}>
            <div style={{ ...label, color: "rgba(255,255,255,.45)", fontSize: 13 }}>WORKSPACE</div>
            <div style={{ color: "#f5f5f5", fontSize: 52, fontWeight: 650, letterSpacing: "-.06em", marginTop: 18 }}>
              Good to have
              <br />
              you back.
            </div>
            <div style={{ color: "rgba(255,255,255,.52)", fontSize: 21, marginTop: 20 }}>
              Pick up where your work left off.
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 58 }}>
            {["Workspace Alpha", "Interface study", "Product exploration", "New workspace"].map((name, i) => (
              <div
                key={name}
                style={{
                  height: 142,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,.11)",
                  background: "rgba(255,255,255,.035)",
                  padding: 22,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: 30, height: 30, borderRadius: 9, background: "rgba(255,255,255,.09)" }} />
                <div style={{ color: "rgba(255,255,255,.72)", fontSize: 17, marginTop: 22 }}>{name}</div>
              </div>
            ))}
          </div>
          <svg
            viewBox="0 0 790 1030"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="55%" stopColor="#d9dce2" stopOpacity=".78" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <filter id="wave-blur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="9" />
              </filter>
            </defs>
            <rect
              x="2"
              y="2"
              width="786"
              height="1026"
              rx="32"
              fill="none"
              stroke="url(#wave-gradient)"
              strokeWidth="13"
              strokeDasharray="420 4200"
              strokeDashoffset={dash}
              opacity=".35"
              filter="url(#wave-blur)"
            />
            <rect
              x="2"
              y="2"
              width="786"
              height="1026"
              rx="32"
              fill="none"
              stroke="url(#wave-gradient)"
              strokeWidth="3"
              strokeDasharray="420 4200"
              strokeDashoffset={dash}
              opacity=".95"
            />
          </svg>
        </div>
        <div style={{ ...label, color: "rgba(255,255,255,.48)", fontSize: 13, marginTop: 34 }}>
          5.6 SECONDS · REPLAYS AFTER EACH LOGOUT → SIGN-IN
        </div>
      </div>
    </SceneFrame>
  );
}

export function ClosingScene() {
  const frame = useCurrentFrame();
  return (
    <SceneFrame frame={frame} duration={60}>
      <div style={center}>
        <div style={{ ...label, marginBottom: 34 }}>MY COWORKER AI</div>
        <h2 style={{ ...title, fontSize: 90, transform: `translateY(${rise(frame, 4)}px)` }}>
          Small details.
          <br />
          <span style={{ color: C.primary }}>Thoughtful returns.</span>
        </h2>
        <div style={{ marginTop: 54 }}>
          <Brand />
        </div>
        <div style={{ ...label, fontSize: 13, marginTop: 64 }}>
          WELCOME BACK EXPERIENCE
        </div>
      </div>
    </SceneFrame>
  );
}
