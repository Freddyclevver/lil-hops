import type { Metadata } from "next";
import { artist } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über Lil' Hops – Kinderpop aus Deutschland | Be Bold. Be Kind. Be You.",
  description: "Lil' Hops ist die aufstrebende Kinderpop-Künstlerin aus Deutschland. Deutschsprachige Pop-Musik für Kinder von 6–12 Jahren – mutig, modern, mit Herz. Ähnlich wie Dikka, Dizzy Disco oder Lea.",
  keywords: ["Kinderpop", "Kindermusik", "Pop für Kinder", "Lil Hops", "deutschsprachige Kindermusik"],
  openGraph: {
    title: "Über Lil' Hops",
    description: "Deine Freundin mit den langen Ohren und noch längeren Herzen.",
    images: ["/assets/album/BE BOLD BE YOU.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-0 bg-gradient-to-b from-pink-600/10 via-black to-black">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center z-10">
          {/* Left: Image */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src="/assets/character/magnific_2889466973 1.png"
              alt="Lil' Hops"
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-6 px-4 py-2 border border-mint-400/50 rounded-full text-sm text-mint-400">
              ✦ Be Bold. Be Kind. Be You.
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hey, ich bin Lil&apos; Hops!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Deine Freundin mit den langen Ohren und noch längeren Herzen.
            </p>
          </div>
        </div>
      </section>

      {/* Wer bin ich Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-start gap-4 mb-8">
          <span className="text-mint-400 text-2xl mt-1">●</span>
          <h2 className="text-3xl font-bold text-white">Wer bin ich?</h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed">
          {artist.bio}
        </p>
      </section>

      {/* Stats Cards */}
      <section className="max-w-5xl mx-auto px-6 py-20 bg-gradient-to-br from-pink-500/40 via-pink-400/20 to-black rounded-2xl shadow-2xl shadow-pink-500/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-pink-400/20 border-2 border-pink-400/60 rounded-xl p-6 text-center hover:bg-pink-400/30 transition-colors">
            <div className="text-3xl mb-3">🎧</div>
            <p className="text-gray-300 text-sm mb-2 font-semibold">Vibe</p>
            <p className="text-white font-bold text-lg">{artist.vibe}</p>
          </div>

          <div className="bg-pink-400/20 border-2 border-pink-400/60 rounded-xl p-6 text-center hover:bg-pink-400/30 transition-colors">
            <div className="text-3xl mb-3">💜</div>
            <p className="text-gray-300 text-sm mb-2 font-semibold">Alter (Feeling)</p>
            <p className="text-white font-bold text-lg">{artist.age}</p>
          </div>

          <div className="bg-pink-400/20 border-2 border-pink-400/60 rounded-xl p-6 text-center hover:bg-pink-400/30 transition-colors">
            <div className="text-3xl mb-3">🐰</div>
            <p className="text-gray-300 text-sm mb-2 font-semibold">Heimat</p>
            <p className="text-white font-bold text-lg">{artist.heimat}</p>
          </div>

          <div className="bg-pink-400/20 border-2 border-pink-400/60 rounded-xl p-6 text-center hover:bg-pink-400/30 transition-colors">
            <div className="text-3xl mb-3">⭐</div>
            <p className="text-gray-300 text-sm mb-2 font-semibold">Hashtag</p>
            <p className="text-white font-bold text-lg">#HopsWithHeart</p>
          </div>
        </div>
      </section>

      {/* Separator */}

      {/* Meine Mission Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-start gap-4 mb-8">
          <span className="text-mint-400 text-2xl mt-1">●</span>
          <h2 className="text-3xl font-bold text-white">Meine Mission</h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          {artist.mission}
        </p>

        {/* Values */}
        <div className="space-y-6">
          {artist.values.map((value) => (
            <div key={value.label} className="flex items-start gap-4">
              <div className={`flex-shrink-0 px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap ${
                value.label === "Be Bold"
                  ? "bg-cyan-300 text-black"
                  : value.label === "Be Kind"
                  ? "bg-pink-400 text-black"
                  : "bg-white/10 border-2 border-white text-white"
              }`}>
                {value.label}
              </div>
              <p className="text-gray-300 pt-1">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}

      {/* Quote Block */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl p-12 bg-gradient-to-br from-pink-500/20 to-black border border-pink-400/40">
          <div className="border-l-4 border-pink-400 pl-8">
            <p className="text-3xl md:text-4xl font-bold text-white italic mb-6 leading-tight">
              „{artist.quote}"
            </p>
            <p className="text-lg text-gray-300 mb-8">
              — Lil' Hops, backstage, kurz bevor die Lichter angehen
            </p>
            <p className="text-2xl font-black text-pink-300">
              {artist.hashtag}
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}

      {/* Was ich liebe Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-start gap-4 mb-8">
          <span className="text-mint-400 text-2xl mt-1">●</span>
          <h2 className="text-3xl font-bold text-white">Was ich liebe</h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed">
          {artist.lovesText}
        </p>
      </section>

      {/* Für Fans von Section - SEO */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-start gap-4 mb-8">
          <span className="text-mint-400 text-2xl mt-1">●</span>
          <h2 className="text-3xl font-bold text-white">Für Fans von...</h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Lil' Hops steht in einer Reihe mit den beliebtesten Kinderpop-Künstlerinnen im deutschsprachigen Raum. Ihre Musik ist für Fans von <span className="text-mint-400 font-bold">Dikka, Dizzy Disco, Lea und Vanessa May</span> gemacht — eingängige Pop-Melodien mit einer positiven Botschaft für Kids zwischen 6 und 12 Jahren.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Mit dem Album <span className="text-pink-300 font-bold">"Be Bold. Be You."</span> schließt sich Lil' Hops den deutschsprachigen Künstlern an, die es verstehen, Kindern Mut zuzusprechen und sie in ihrer Authentizität zu unterstützen.
        </p>
      </section>

      {/* Galerie Section */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="/assets/character/magnific_2889466973 1.png"
              alt="Lil' Hops Moment"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="/assets/character/Bildschirmfoto 2026-05-12 um 13.16.42.png"
              alt="Lil' Hops Moment"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl p-12 text-center bg-gradient-to-br from-pink-400/10 to-mint-400/10 border border-pink-400/20">
          <div className="relative z-10">
            <p className="text-xl text-white font-bold mb-2">
              Lil' Hops ist für alle, die manchmal zweifeln, aber trotzdem weitermachen.
              <br />
              Willkommen in der Crew. 💜
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {artist.hashtags.map((tag, idx) => (
                <div
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    idx % 2 === 0
                      ? "bg-mint-400/20 text-mint-300"
                      : "bg-pink-400/20 text-pink-300"
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
