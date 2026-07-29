import Image from "next/image";
import { GlowButton } from "./GlowButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background px-4 pb-16 pt-28"
    >
      <div className="animate-glow-float pointer-events-none absolute -left-[100px] -top-[84px] h-[750px] w-[400px] max-md:left-[-180px] max-md:opacity-70">
        <Image
          src="/assets/hero-glow-left-v2.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="animate-glow-float-delayed pointer-events-none absolute -right-[80px] -top-10 h-[786px] w-[429px] max-md:right-[-200px] max-md:opacity-70">
        <Image
          src="/assets/hero-glow-right-v2.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center gap-8 text-center">
        <div className="animate-fade-up inline-flex items-center justify-center rounded-full bg-accent-soft px-2.5 py-1.5">
          <p className="font-[family-name:var(--font-jakarta)] text-sm tracking-[-0.42px] text-accent">
            Place where revolution starts
          </p>
        </div>

        <div className="animate-fade-up-delay-1 flex flex-col items-center gap-2">
          <h1 className="text-[clamp(3.5rem,12vw,8.4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
            MineSafe
          </h1>
          <p className="max-w-[450px] font-[family-name:var(--font-jakarta)] text-lg font-medium leading-7 tracking-[-0.6px] text-muted sm:text-xl">
            A wearable device that monitors gas levels and worker health in real
            time.
          </p>
        </div>

        <div className="animate-fade-up-delay-2">
          <GlowButton label="View details" href="#solution" />
        </div>
      </div>
    </section>
  );
}
