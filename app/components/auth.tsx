export function Auth() {
  return (
    <section
      id="auth"
      className="relative scroll-mt-12 border-t border-paper/8 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mx-auto mb-12 max-w-[820px] text-center md:mb-16">
          <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper-muted">
            authentication · pick one
          </p>
          <h2 className="serif text-balance text-[34px] font-light leading-[1.04] tracking-[-0.02em] text-paper sm:text-[44px] md:text-[56px]">
            Two ways to authenticate.{" "}
            <span className="serif-italic text-amber">Read before you choose.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[60ch] text-balance text-[15px] leading-[1.6] text-paper-dim md:text-[16px]">
            The framework supports both a Claude subscription OAuth token and a
            per-token Anthropic API key. They aren&apos;t interchangeable from
            Anthropic&apos;s policy standpoint — match the one that fits how
            you actually run the platform.
          </p>
        </header>

        <div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-2 md:gap-6">
          {/* Option A — OAuth */}
          <div className="relative flex flex-col rounded-2xl border border-paper/12 bg-ink-2/40 p-7 md:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-amber">
                option A
              </span>
              <span className="rounded-full border border-paper/15 bg-ink/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper-muted">
                default
              </span>
            </div>
            <h3 className="serif text-[24px] font-light leading-[1.15] tracking-[-0.015em] text-paper md:text-[28px]">
              OAuth from a Claude subscription
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-paper-dim">
              Long-lived (~1 year) token from{" "}
              <code className="rounded bg-ink/60 px-1.5 py-0.5 font-mono text-[12.5px] text-paper">
                claude setup-token
              </code>
              . Flat subscription cost, no per-call billing.
            </p>

            <ul className="mt-6 space-y-2.5 text-[13.5px] leading-[1.55] text-paper-dim">
              <li className="flex gap-2.5">
                <span className="mt-[7px] inline-block h-1 w-1 flex-none rounded-full bg-mint" />
                You are the subscriber, agents are your personal/internal
                automation, volume is sane for one human.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-[7px] inline-block h-1 w-1 flex-none rounded-full bg-rose" />
                <span>
                  <strong className="text-paper">Not appropriate</strong> for
                  agents serving external customers, your team beyond yourself,
                  or anything resembling a hosted product. Per Anthropic&apos;s
                  policy, OAuth is intended for ordinary individual use of
                  Claude Code by the subscriber. Risks token revocation /
                  account suspension.
                </span>
              </li>
            </ul>

            <a
              href="https://code.claude.com/docs/en/legal-and-compliance#authentication-and-credential-use"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-1.5 self-start font-mono text-[11.5px] text-paper-muted transition hover:text-amber"
            >
              Read Anthropic&apos;s policy →
            </a>
          </div>

          {/* Option B — API key */}
          <div className="relative flex flex-col rounded-2xl border border-paper/12 bg-ink-2/40 p-7 md:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-amber">
                option B
              </span>
              <span className="rounded-full border border-mint/30 bg-ink/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mint">
                multi-user safe
              </span>
            </div>
            <h3 className="serif text-[24px] font-light leading-[1.15] tracking-[-0.015em] text-paper md:text-[28px]">
              Anthropic API key
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-paper-dim">
              Generated at{" "}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-paper underline decoration-paper/30 underline-offset-2 transition hover:decoration-amber"
              >
                console.anthropic.com
              </a>
              . Per-token billing.
            </p>

            <ul className="mt-6 space-y-2.5 text-[13.5px] leading-[1.55] text-paper-dim">
              <li className="flex gap-2.5">
                <span className="mt-[7px] inline-block h-1 w-1 flex-none rounded-full bg-mint" />
                Fully supported by Anthropic&apos;s terms for automation,
                products, and multi-user scenarios.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-[7px] inline-block h-1 w-1 flex-none rounded-full bg-mint" />
                No authentication risk: meant for exactly this kind of
                deployment.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-[7px] inline-block h-1 w-1 flex-none rounded-full bg-gold" />
                Higher cost than a flat subscription. Worth it once your agents
                serve more than just you.
              </li>
            </ul>

            <a
              href="https://console.anthropic.com"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-1.5 self-start font-mono text-[11.5px] text-paper-muted transition hover:text-amber"
            >
              Open Console →
            </a>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[60ch] text-center font-mono text-[11.5px] leading-[1.6] text-paper-faint md:mt-12">
          Set <code className="text-paper">CLAUDE_CODE_OAUTH_TOKEN</code>{" "}
          <em className="text-paper-muted not-italic">or</em>{" "}
          <code className="text-paper">ANTHROPIC_API_KEY</code> in{" "}
          <code className="text-paper">.env</code>. The{" "}
          <code className="text-paper">setup</code> skill asks you which during
          first-run setup. If both are set, the API key wins.
        </p>
      </div>
    </section>
  );
}
