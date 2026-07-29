import Image from "next/image";
import { GlowButton } from "./GlowButton";
import { PRESENTATION_URL } from "@/lib/links";

export function Cta() {
  return (
    <section id="presentation" className="bg-background px-4 py-[60px]">
      <div className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center overflow-hidden rounded-[46px] bg-surface px-6 py-12 md:px-10 md:py-16">
        <div className="pointer-events-none absolute -left-[55px] top-12 h-[641px] w-[315px] max-md:opacity-40">
          <Image
            src="/assets/cta-glow-left-v2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute -right-10 -top-[200px] h-[560px] w-[315px] max-md:opacity-40">
          <Image
            src="/assets/cta-glow-right-v2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-2.5">
            <h2 className="text-[clamp(2rem,5vw,3.4375rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
              Ready to reach new highs?
            </h2>
            <p className="max-w-[460px] font-[family-name:var(--font-jakarta)] text-lg leading-[1.4] tracking-[-0.54px] text-muted">
              Stop guessing. Start converting. Book a call and let&apos;s build
              content that performs.
            </p>
          </div>

          <GlowButton
            label="Presentation"
            href={PRESENTATION_URL}
            iconSrc="/assets/cta-btn-icon-v2.png"
          />

          <p className="flex flex-wrap items-center justify-center gap-2 font-[family-name:var(--font-jakarta)] text-lg tracking-[-0.54px] text-white">
            <span>Not ready yet? DM us on</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="relative inline-block size-[22px] overflow-hidden align-middle transition-opacity hover:opacity-70"
              aria-label="X (Twitter)"
            >
              <Image src="/assets/icon-x.png" alt="" fill className="object-contain" />
            </a>
            <span>with your questions.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
