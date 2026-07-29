import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://minesafe.vercel.app";

const title = "MineSafe — Safety that's always close at hand";
const description =
  "A wearable device that monitors gas levels and worker health in real time.";

/** Shared preview for WhatsApp, Telegram, Instagram, Facebook, iMessage, etc. */
const shareImage = {
  url: "/assets/og-share.jpg",
  width: 1200,
  height: 630,
  alt: "MineSafe — wearable mining safety device",
  type: "image/jpeg" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "MineSafe",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  // Open Graph → WhatsApp, Telegram, Instagram, Facebook, LinkedIn, Discord…
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "MineSafe",
    images: [shareImage],
    locale: "en_US",
    type: "website",
  },
  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage.url],
  },
  other: {
    "og:image:secure_url": `${siteUrl}/assets/og-share.jpg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
