type Variant =
  | "ops"
  | "marketing"
  | "sales"
  | "assistant"
  | "codereview"
  | "standup";

const accentVar: Record<Variant, string> = {
  ops: "var(--color-mint)",
  marketing: "var(--color-amber)",
  sales: "var(--color-steel)",
  assistant: "var(--color-plum)",
  codereview: "var(--color-gold)",
  standup: "var(--color-rose)",
};

export function AgentEmblem({ variant }: { variant: Variant }) {
  const accent = accentVar[variant];
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
      className="h-full w-full"
    >
      <defs>
        <radialGradient id={`halo-${variant}`} cx="0.5" cy="0.45" r="0.55">
          <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
          <stop offset="55%" stopColor={accent} stopOpacity="0.05" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`grain-${variant}`}
          x="0"
          y="0"
          width="3"
          height="3"
          patternUnits="userSpaceOnUse"
        >
          <rect width="3" height="3" fill="transparent" />
          <circle cx="0.5" cy="0.5" r="0.3" fill="rgba(237,233,222,0.06)" />
        </pattern>
      </defs>

      {/* Halo */}
      <rect width="160" height="160" fill={`url(#halo-${variant})`} />
      {/* Subtle dot grain */}
      <rect width="160" height="160" fill={`url(#grain-${variant})`} />

      {variant === "ops" && <OpsScene accent={accent} />}
      {variant === "marketing" && <MarketingScene accent={accent} />}
      {variant === "sales" && <SalesScene accent={accent} />}
      {variant === "assistant" && <AssistantScene accent={accent} />}
      {variant === "codereview" && <CodeReviewScene accent={accent} />}
      {variant === "standup" && <StandupScene accent={accent} />}

      {/* Bottom horizon line — recurring motif */}
      <line
        x1="20"
        y1="138"
        x2="140"
        y2="138"
        stroke="rgba(237,233,222,0.18)"
        strokeWidth="0.6"
      />
    </svg>
  );
}

const stroke = "rgba(237,233,222,0.85)";
const strokeMuted = "rgba(237,233,222,0.55)";
const sw = 1.4;

/* --- 01 OPS — Watchtower over a constellation of nodes --- */
function OpsScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* horizon dots */}
      {[28, 50, 76, 102, 128].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={138 - (i % 2 ? 1 : 3)}
          r={1.2}
          fill={i === 2 ? accent : strokeMuted}
        />
      ))}
      {/* constellation */}
      <g stroke={strokeMuted} strokeWidth="0.6">
        <line x1="40" y1="100" x2="62" y2="86" />
        <line x1="62" y1="86" x2="86" y2="98" />
        <line x1="86" y1="98" x2="112" y2="80" />
        <line x1="112" y1="80" x2="130" y2="96" />
      </g>
      {[40, 62, 86, 112, 130].map((x, i) => {
        const y = [100, 86, 98, 80, 96][i];
        return (
          <circle
            key={x}
            cx={x}
            cy={y}
            r={i === 2 ? 2.4 : 1.6}
            fill={i === 2 ? accent : stroke}
          />
        );
      })}
      {/* Tower */}
      <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        {/* base flare */}
        <path d="M64 138 L80 38 L96 138" />
        {/* cabin */}
        <rect x="69" y="44" width="22" height="14" rx="1" />
        {/* roof */}
        <path d="M65 44 L80 28 L95 44 Z" />
        {/* cabin window */}
        <rect x="73" y="48" width="14" height="6" fill={accent} fillOpacity="0.35" stroke="none" />
        {/* signal beam */}
        <path d="M80 22 L80 12" />
      </g>
      {/* signal sparks */}
      <g fill={accent}>
        <circle cx="74" cy="14" r="1.2" opacity="0.7" />
        <circle cx="86" cy="14" r="1.2" opacity="0.7" />
        <circle cx="80" cy="8" r="1.4" />
      </g>
    </g>
  );
}

/* --- 02 MARKETING — Paper plane gliding over waves + bar chart --- */
function MarketingScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* baseline */}
      <line x1="22" y1="120" x2="138" y2="120" stroke={strokeMuted} strokeWidth="0.6" />
      {/* bars */}
      <g fill={stroke} opacity="0.45">
        <rect x="28" y="106" width="6" height="14" rx="1" />
        <rect x="40" y="98" width="6" height="22" rx="1" />
        <rect x="52" y="88" width="6" height="32" rx="1" />
      </g>
      <rect x="64" y="78" width="6" height="42" rx="1" fill={accent} />
      <g fill={stroke} opacity="0.45">
        <rect x="76" y="92" width="6" height="28" rx="1" />
        <rect x="88" y="100" width="6" height="20" rx="1" />
      </g>
      {/* wave trail */}
      <path
        d="M22 64 C 44 78, 60 50, 84 60 S 124 36, 138 50"
        fill="none"
        stroke={strokeMuted}
        strokeWidth="0.9"
        strokeDasharray="2 3"
      />
      {/* paper plane */}
      <g
        stroke={stroke}
        strokeWidth={sw}
        strokeLinejoin="round"
        strokeLinecap="round"
        transform="translate(96 30) rotate(18)"
      >
        <path d="M0 0 L36 14 L14 16 L8 28 L14 16 L0 0 Z" fill={accent} fillOpacity="0.35" />
        <line x1="0" y1="0" x2="14" y2="16" />
      </g>
      {/* trailing dots */}
      <g fill={accent}>
        <circle cx="80" cy="44" r="1" />
        <circle cx="68" cy="50" r="1.4" />
        <circle cx="56" cy="58" r="1.8" opacity="0.7" />
      </g>
    </g>
  );
}

/* --- 03 SALES — Rotary phone handset + waveform notebook --- */
function SalesScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* notebook */}
      <g
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="24" y="78" width="68" height="48" rx="3" fill="rgba(237,233,222,0.04)" />
        {/* spiral */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1={32 + i * 11} y1="74" x2={32 + i * 11} y2="82" stroke={strokeMuted} />
        ))}
      </g>
      {/* waveform */}
      <g stroke={accent} strokeWidth="1.2" strokeLinecap="round">
        <path d="M30 102 L36 96 L42 110 L48 90 L54 108 L60 94 L66 104 L72 98 L78 106 L86 102" fill="none" />
      </g>
      {/* underline 'note' */}
      <line x1="30" y1="116" x2="78" y2="116" stroke={strokeMuted} strokeWidth="0.6" strokeDasharray="2 2" />

      {/* phone handset */}
      <g
        transform="translate(92 28) rotate(28)"
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(237,233,222,0.06)"
      >
        <path d="M0 6 Q 0 0 6 0 L18 0 Q 22 0 22 6 L22 12 L42 12 L42 6 Q 42 0 46 0 L58 0 Q 64 0 64 6 L64 14 Q 64 20 58 20 L46 20 Q 42 20 42 14 L42 12 L22 12 L22 14 Q 22 20 18 20 L6 20 Q 0 20 0 14 Z" />
      </g>
      {/* signal sparks at phone earpiece */}
      <g fill={accent}>
        <circle cx="118" cy="22" r="1.2" />
        <circle cx="124" cy="18" r="1.4" />
        <circle cx="130" cy="14" r="1.8" />
      </g>
    </g>
  );
}

/* --- 04 ASSISTANT — Teacup, letters, crescent moon --- */
function AssistantScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* moon + star */}
      <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
        <path
          d="M124 32 a 14 14 0 1 0 -8 22 a 11 11 0 0 1 8 -22 z"
          fill={accent}
          fillOpacity="0.18"
        />
      </g>
      <g fill={stroke}>
        <path d="M101 36 l 1.6 4 l 4 1.6 l -4 1.6 l -1.6 4 l -1.6 -4 l -4 -1.6 l 4 -1.6 z" />
      </g>
      {/* letters stack */}
      <g
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(237,233,222,0.06)"
      >
        <rect x="22" y="100" width="68" height="22" rx="2" />
        <path d="M22 100 L56 116 L90 100" />
        <rect x="28" y="92" width="68" height="22" rx="2" transform="rotate(-3 62 103)" />
        <rect x="34" y="84" width="68" height="22" rx="2" transform="rotate(-7 68 95)" />
      </g>
      {/* teacup */}
      <g
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(92 80)"
      >
        <path d="M2 4 L30 4 Q 30 26 16 26 Q 2 26 2 4 Z" fill="rgba(237,233,222,0.06)" />
        <path d="M30 8 Q 38 8 38 14 Q 38 20 30 20" />
        <ellipse cx="16" cy="4" rx="14" ry="2" fill="rgba(237,233,222,0.18)" />
      </g>
      {/* steam */}
      <g stroke={accent} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85">
        <path d="M100 76 q 4 -6 0 -12 q -4 -6 0 -12" />
        <path d="M112 76 q 4 -6 0 -12" />
      </g>
    </g>
  );
}

/* --- 05 CODE REVIEW — Magnifier over brackets + flag --- */
function CodeReviewScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* code rules */}
      <g stroke={strokeMuted} strokeWidth="0.6">
        <line x1="22" y1="68" x2="138" y2="68" />
        <line x1="22" y1="80" x2="138" y2="80" />
        <line x1="22" y1="92" x2="138" y2="92" />
        <line x1="22" y1="104" x2="138" y2="104" />
        <line x1="22" y1="116" x2="138" y2="116" />
      </g>
      {/* highlighted line */}
      <rect x="22" y="86" width="116" height="12" fill={accent} fillOpacity="0.16" />
      {/* angle brackets */}
      <g stroke={stroke} strokeWidth={sw + 0.4} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M40 76 L30 92 L40 108" />
        <path d="M120 76 L130 92 L120 108" />
      </g>
      {/* slash */}
      <line x1="76" y1="108" x2="92" y2="76" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      {/* magnifier */}
      <g
        transform="translate(92 28)"
        stroke={stroke}
        strokeWidth={sw + 0.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(237,233,222,0.05)"
      >
        <circle cx="14" cy="14" r="14" fill={accent} fillOpacity="0.18" />
        <path d="M24 24 L36 36" />
      </g>
      {/* flag */}
      <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <line x1="50" y1="42" x2="50" y2="64" />
        <path d="M50 42 L66 46 L62 50 L66 54 L50 50 Z" fill={accent} fillOpacity="0.7" />
      </g>
    </g>
  );
}

/* --- 06 STANDUP — Round table top-down with 3 chairs and clock --- */
function StandupScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* table shadow */}
      <ellipse cx="80" cy="92" rx="44" ry="14" fill="rgba(237,233,222,0.04)" />
      {/* table top */}
      <ellipse cx="80" cy="86" rx="44" ry="14" stroke={stroke} strokeWidth={sw} fill="rgba(237,233,222,0.06)" />
      {/* clock at center */}
      <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" fill="none">
        <circle cx="80" cy="86" r="9" fill="rgba(237,233,222,0.06)" />
        <line x1="80" y1="86" x2="80" y2="80" stroke={accent} strokeWidth="1.6" />
        <line x1="80" y1="86" x2="86" y2="86" />
      </g>
      {/* tick marks */}
      <g stroke={strokeMuted} strokeWidth="0.6">
        <line x1="80" y1="78" x2="80" y2="79.6" />
        <line x1="80" y1="92.4" x2="80" y2="94" />
        <line x1="72" y1="86" x2="73.6" y2="86" />
        <line x1="86.4" y1="86" x2="88" y2="86" />
      </g>
      {/* chairs (top-down): 3 around */}
      <g stroke={stroke} strokeWidth={sw} strokeLinecap="round">
        <rect x="48" y="50" width="14" height="6" rx="1.5" transform="rotate(-22 55 53)" fill="rgba(237,233,222,0.06)" />
        <rect x="98" y="50" width="14" height="6" rx="1.5" transform="rotate(22 105 53)" fill="rgba(237,233,222,0.06)" />
        <rect x="73" y="116" width="14" height="6" rx="1.5" fill={accent} fillOpacity="0.4" />
      </g>
      {/* speech ribbon above */}
      <g stroke={accent} strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M52 36 q 12 -10 28 -4 q 16 6 28 -2" />
      </g>
      <g fill={accent}>
        <circle cx="48" cy="38" r="1.2" />
        <circle cx="112" cy="32" r="1.2" />
      </g>
    </g>
  );
}
