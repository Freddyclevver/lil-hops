import Link from "next/link";
import { social, artist } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-pink-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <Link
            href={social.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black hover:opacity-70 transition-opacity"
            title="Spotify"
          >
            🎵
          </Link>
          <Link
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black hover:opacity-70 transition-opacity"
            title="YouTube"
          >
            📹
          </Link>
          <Link
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black hover:opacity-70 transition-opacity"
            title="Instagram"
          >
            📸
          </Link>
          <Link
            href={social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black hover:opacity-70 transition-opacity"
            title="TikTok"
          >
            🎬
          </Link>
        </div>

        {/* Hashtag */}
        <div className="text-center mb-8">
          <p className="text-black text-lg font-bold">
            {artist.hashtag}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-black text-opacity-80 mb-8">
          <p>&copy; 2026 Lil' Hops. All rights reserved.</p>
          <p>Be Bold. Be Kind. Be You.</p>
        </div>

        {/* Legal Links */}
        <div className="text-center text-xs pt-6">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="#privacy" className="!text-black hover:opacity-70 transition-opacity">
              Datenschutzbestimmungen
            </Link>
            <Link href="#cookies" className="!text-black hover:opacity-70 transition-opacity">
              Cookie-Richtlinie
            </Link>
            <Link href="#cookie-settings" className="!text-black hover:opacity-70 transition-opacity">
              Cookie-Einstellungen
            </Link>
            <Link href="#terms" className="!text-black hover:opacity-70 transition-opacity">
              Nutzungsbedingungen
            </Link>
            <Link href="#sitemap" className="!text-black hover:opacity-70 transition-opacity">
              Seitenübersicht
            </Link>
            <Link href="#imprint" className="!text-black hover:opacity-70 transition-opacity">
              Betriebsvereinbarung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
