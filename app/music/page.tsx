import { singles, moresingles } from "@/lib/content";
import SingleCard from "@/components/SingleCard";

export default function MusicPage() {
  const allSingles = [...singles, ...moresingles];

  return (
    <div className="bg-black">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-white mb-12">
          Singles
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSingles.map((single) => (
            <SingleCard
              key={single.id}
              title={single.title}
              cover={single.cover}
              spotifyUrl={single.spotifyUrl}
              youtubeUrl={single.youtubeUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
