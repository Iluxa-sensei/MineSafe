import Image from "next/image";
import { PRESENTATION_URL } from "@/lib/links";

const links = [
  { href: "#solution", label: "Solution" },
  { href: "#competitors", label: "Competitors" },
  { href: "#connect", label: "Connect" },
];

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[20px]">
      <nav className="pointer-events-auto flex h-[59px] max-w-[640px] items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] px-1.5 py-1 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150">
        <a
          href="#top"
          className="relative size-[49px] shrink-0 overflow-hidden rounded-full"
        >
          <Image
            src="/assets/nav-logo-v2.png"
            alt="MineSafe"
            width={55}
            height={52}
            className="absolute left-[-5%] top-[-3%] h-[107%] w-[111%] max-w-none"
            priority
          />
        </a>

        <div className="flex items-center gap-6 px-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-[17px] font-medium tracking-[-0.51px] text-white transition-opacity hover:opacity-70 sm:inline"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={PRESENTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative ml-auto flex h-[46px] w-[106px] items-center justify-center rounded-full bg-[#1c1b1a] shadow-[inset_0_4px_4px_rgba(255,255,255,0.25)]"
        >
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 size-full overflow-visible"
            viewBox="0 0 106 46"
            fill="none"
          >
            <defs>
              <linearGradient
                id="presentation-border-glow"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#fc6002" stopOpacity="0" />
                <stop offset="40%" stopColor="#fc6002" stopOpacity="1" />
                <stop offset="70%" stopColor="#ff0000" stopOpacity="1" />
                <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
              </linearGradient>
              <filter
                id="presentation-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect
              x="1"
              y="1"
              width="104"
              height="44"
              rx="22"
              ry="22"
              stroke="url(#presentation-border-glow)"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength="100"
              className="animate-border-trace"
              filter="url(#presentation-glow)"
            />
          </svg>
          <span className="relative z-10 text-[17px] font-medium tracking-[-0.51px] text-white">
            Presentation
          </span>
        </a>
      </nav>
    </header>
  );
}
