import Image from "next/image";
import { PRESENTATION_URL } from "@/lib/links";

type GlowButtonProps = {
  href?: string;
  label: string;
  iconSrc?: string;
};

export function GlowButton({
  href = PRESENTATION_URL,
  label,
  iconSrc = "/assets/btn-pickaxe-v2.png",
}: GlowButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="animate-button-glow relative inline-flex h-[57px] items-center gap-[5px] overflow-hidden rounded-full p-[10px] transition-transform duration-300 hover:scale-[1.03]"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          backgroundImage:
            "linear-gradient(182.3deg, rgb(252, 96, 2) 56.68%, rgb(255, 104, 11) 50.73%, rgb(255, 0, 0) 132.27%)",
        }}
      />
      <span className="relative size-[37px] shrink-0 overflow-hidden rounded-full">
        <Image
          src={iconSrc}
          alt=""
          width={43}
          height={41}
          className="absolute left-[-8%] top-[-7%] h-[111%] w-[116%] max-w-none"
        />
      </span>
      <span className="relative whitespace-nowrap font-semibold text-[17px] tracking-[-0.51px] text-white">
        {label}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_10px_7.8px_rgba(255,255,255,0.25)]"
      />
    </a>
  );
}
