"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AudioPlayer from "@/components/AudioPlayer";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/album", label: "Album" },
    { href: "/music", label: "Music" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-pink-300">Lil'</span>
          <span className="text-mint-400 ml-2">HOPS</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white hover:text-pink-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <AudioPlayer />
        </div>
      </div>
    </nav>
  );
}
