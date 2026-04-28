"use client";

import { useState } from "react";

export function CopyLine({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label="copy install command"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          /* ignore */
        }
      }}
      className="group relative flex items-center gap-3 rounded-full border border-rule bg-ink-2/80 px-5 py-2.5 font-mono text-[13px] text-paper-dim backdrop-blur transition hover:border-amber/60 hover:text-paper"
    >
      <span aria-hidden className="text-amber">$</span>
      <span className="select-all">{text}</span>
      <span
        aria-hidden
        className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-rule text-paper-muted transition group-hover:border-amber/60 group-hover:text-amber"
      >
        {copied ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </span>
      <span
        aria-live="polite"
        className={`pointer-events-none absolute -top-7 right-2 text-[10px] uppercase tracking-[0.18em] text-mint transition ${copied ? "opacity-100" : "opacity-0"}`}
      >
        copied
      </span>
    </button>
  );
}
