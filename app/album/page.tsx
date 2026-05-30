import Link from "next/link";
import { album } from "@/lib/content";
import StickerBadge from "@/components/StickerBadge";
import CountdownRelease from "@/components/CountdownRelease";

export default function AlbumPage() {
  return (
    <div className="bg-black">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4">
              <StickerBadge text="Coming Soon" variant="coming-soon" />
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-white mb-4">
              {album.title}
            </h1>
            <p className="text-mint-400 text-2xl mb-6">
              {album.tagline}
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              {album.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href={album.preSaveUrl} target="_blank" className="px-8 py-3 bg-black border-2 border-pink-300 text-pink-300 font-bold rounded-lg hover:bg-pink-300 hover:text-black transition-colors text-center">
                Pre-Save
              </Link>
              <Link href="#tracklist" className="px-8 py-3 border-2 border-mint-400 text-mint-400 font-bold rounded-lg hover:bg-mint-400 hover:text-black transition-colors text-center">
                Tracklist
              </Link>
            </div>
            <CountdownRelease />
          </div>
        </div>
      </section>


      <section id="tracklist" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12">
          Tracklist
        </h2>

        <div className="mb-12">
          <div className="space-y-0">
            {album.tracks.map((track) => (
              <Link
                key={track.number}
                href={`https://open.spotify.com/search/Lil'%20Hops%20${encodeURIComponent(track.title)}`}
                target="_blank"
                className="flex items-center gap-4 p-6 border-b border-mint-900 hover:bg-mint-950 hover:bg-opacity-50 hover:border-mint-400 transition-all cursor-pointer"
              >
                <span className="text-mint-400 font-bold text-lg w-8">
                  {track.number}
                </span>
                <span className="text-white text-lg flex-1 hover:text-mint-400 transition-colors">
                  {track.title}
                </span>
              </Link>
            ))}
          </div>
        </div>


        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <StickerBadge text="Bonus" variant="bonus" />
            Bonustracks
          </h3>
          <div className="space-y-0">
            {album.bonusTracks.map((track) => (
              <Link
                key={track.number}
                href={`https://open.spotify.com/search/Lil'%20Hops%20${encodeURIComponent(track.title)}`}
                target="_blank"
                className="flex items-center gap-4 p-6 border-b border-mint-900 hover:bg-mint-950 hover:bg-opacity-50 hover:border-mint-400 transition-all cursor-pointer"
              >
                <span className="text-mint-400 font-bold text-lg w-8">
                  {track.number}
                </span>
                <span className="text-gray-300 text-lg flex-1 hover:text-mint-400 transition-colors">
                  {track.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
