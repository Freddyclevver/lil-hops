import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lil' Hops – Be Bold. Be You.",
  description: "Pop-Künstlerin für Kinder. Album 'Be Bold. Be You.' coming soon.",
  alternates: {
    canonical: "https://lil-hops.vercel.app",
  },
  openGraph: {
    title: "Lil' Hops",
    description: "Be Bold. Be Kind. Be You. #HOPSWITHHEART",
    images: ["/assets/album/BE BOLD BE YOU.png"],
    url: "https://lil-hops.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lil' Hops – Be Bold. Be You.",
    description: "Pop-Künstlerin für Kinder. Album coming 05.06.2026.",
    images: ["/assets/album/BE BOLD BE YOU.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-bg)] text-[color:var(--color-soft-white)]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
