import type { Metadata } from "next";
import Link from "next/link";
import { artist, social } from "@/lib/content";

export const metadata: Metadata = {
  title: "Presse & Media – Lil' Hops | Kinderpop Künstlerin",
  description: "Pressematerialien, Fotos und Kontakt für Redaktionen. Lil' Hops – aufstrebende Kinderpop-Künstlerin aus Deutschland.",
  robots: { index: true, follow: true },
};

export default function MediaPage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Presse & Media
        </h1>
        <p className="text-xl text-gray-300">
          Materialien für Redaktionen, Journalisten und Partner
        </p>
      </section>

      {/* Artist Info */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/5 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Über Lil' Hops</h2>
          <p className="text-lg text-gray-300 mb-6">
            {artist.shortBio}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-400 mb-2">Genre</p>
              <p className="text-white font-bold">{artist.genre}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Zielgruppe</p>
              <p className="text-white font-bold">Kinder von 6–12 Jahren</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Album Release</p>
              <p className="text-white font-bold">05.06.2026</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Ähnliche Künstler</p>
              <p className="text-white font-bold">{artist.similarArtists.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pressematerialien */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-8">Pressematerialien</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <a href="/assets/album/BE BOLD BE YOU.png" download className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-mint-400/50 transition-all text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-white font-bold mb-2">Album Cover</h3>
            <p className="text-gray-400 text-sm">PNG - High Res</p>
          </a>
          <a href="/assets/character/lil-hops.png" download className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-pink-300/50 transition-all text-center">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-white font-bold mb-2">Artist Photo</h3>
            <p className="text-gray-400 text-sm">PNG - High Res</p>
          </a>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center opacity-50">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-white font-bold mb-2">Press Kit</h3>
            <p className="text-gray-400 text-sm">PDF (Coming Soon)</p>
          </div>
        </div>
      </section>

      {/* Pressekontakt */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-8">Pressekontakt</h2>
        <div className="bg-gradient-to-br from-pink-400/10 to-mint-400/10 border border-pink-400/20 rounded-xl p-12">
          <p className="text-lg text-white mb-4">
            Für Presseanfragen, Interviews und weitere Informationen:
          </p>
          <p className="text-2xl font-bold text-pink-300 mb-8">
            {artist.pressContact}
          </p>
          <p className="text-lg text-gray-300 italic">
            „{artist.pressQuote}"
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-8">Offizielle Links</h2>
        <div className="flex flex-wrap gap-4">
          <a href={social.spotify} target="_blank" className="px-6 py-3 bg-black border-2 border-mint-400 text-mint-400 font-bold rounded-lg hover:bg-mint-400 hover:text-black transition-colors">
            Spotify
          </a>
          <a href={social.youtube} target="_blank" className="px-6 py-3 bg-black border-2 border-pink-300 text-pink-300 font-bold rounded-lg hover:bg-pink-300 hover:text-black transition-colors">
            YouTube
          </a>
          <a href={social.tiktok} target="_blank" className="px-6 py-3 bg-black border-2 border-gray-400 text-gray-400 font-bold rounded-lg hover:bg-gray-400 hover:text-black transition-colors">
            TikTok
          </a>
        </div>
      </section>
    </div>
  );
}
