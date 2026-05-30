import Link from "next/link";
import { album, artist } from "@/lib/content";
import SinglesSection from "@/components/SinglesSection";
import NewsletterForm from "@/components/NewsletterForm";
import StickerBadge from "@/components/StickerBadge";
import CountdownRelease from "@/components/CountdownRelease";

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-0 bg-gradient-to-tr from-pink-500/40 via-black/50 to-black">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-2 items-center z-10">
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-pink-300">Lil'</span>
              <br />
              <span className="text-mint-400">HOPS</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-6">
              {artist.tagline}
            </p>
            <p className="text-lg text-gray-300 mb-12">
              Pop-Musik für Kinder, die mutig zu sich selbst stehen.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link href="/album" className="px-8 py-4 bg-black border-2 border-pink-300 text-pink-300 font-bold rounded-lg hover:bg-pink-300 hover:text-black transition-colors">
                Album entdecken
              </Link>
              <Link href="/music" className="px-8 py-4 border-2 border-mint-400 text-mint-400 font-bold rounded-lg hover:bg-mint-400 hover:text-black transition-colors">
                Singles
              </Link>
            </div>
            <CountdownRelease />
          </div>

          {/* Right: Character Video - Full Screen Height */}
          <div className="hidden md:flex justify-center items-center animate-fade-in-right min-h-screen">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen object-contain drop-shadow-2xl"
            >
              <source src="/assets/character/lil-hops-dancing.mp4" type="video/mp4" />
              <img
                src="/assets/character/lil-hops.png"
                alt="Lil' Hops"
                className="w-full h-screen object-contain drop-shadow-2xl"
              />
            </video>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-mint-900 via-black to-black opacity-20" />
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

      {/* Separator */}

      {/* Album Teaser Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4">
              <StickerBadge text="Coming Soon" variant="coming-soon" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {album.title}
            </h2>
            <p className="text-mint-400 text-xl mb-6">
              {album.tagline}
            </p>
            <p className="text-gray-300 mb-8">
              {album.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/album" className="px-6 py-3 bg-black border-2 border-pink-300 text-pink-300 font-bold rounded-lg hover:bg-pink-300 hover:text-black transition-colors text-center">
                Tracklist ansehen
              </Link>
              <Link href={album.preSaveUrl} target="_blank" className="px-6 py-3 border-2 border-mint-400 text-mint-400 font-bold rounded-lg hover:bg-mint-400 hover:text-black transition-colors text-center">
                Pre-Save
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}

      {/* Singles Section */}
      <SinglesSection />

      {/* Separator */}

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl p-12 text-center backdrop-blur-sm">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-black opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-600 to-transparent opacity-10" />

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-2xl border border-pink-400 border-opacity-30" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-3">
              Im Loop bleiben
            </h2>
            <p className="text-gray-200 mb-10 text-lg">
              Erhalte Neuigkeiten zum Album, neue Singles und exklusive Updates.
            </p>
            <div className="flex justify-center">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}

      {/* Social Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">
          Folge Lil' Hops
        </h2>
        <p className="text-mint-400 text-4xl md:text-5xl lg:text-7xl font-black break-words">
          {artist.hashtag}
        </p>
      </section>
    </div>
  );
}
