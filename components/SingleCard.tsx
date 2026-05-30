import Link from "next/link";

interface SingleCardProps {
  title: string;
  cover: string;
  spotifyUrl: string;
  youtubeUrl: string;
}

export default function SingleCard({
  title,
  cover,
  spotifyUrl,
  youtubeUrl,
}: SingleCardProps) {
  return (
    <div className="group">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>

      <div className="flex gap-3">
        <Link
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-black border border-pink-300 hover:bg-pink-300 text-pink-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors text-sm text-center"
        >
          Spotify
        </Link>
        <Link
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-mint-400 hover:bg-mint-500 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm text-center"
        >
          YouTube
        </Link>
      </div>
    </div>
  );
}
