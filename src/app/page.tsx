import AlgoCard from "@/components/AlgoCard";
import CorpusForm from "@/components/CorpusForm";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 mb-10">
      <article className="flex flex-col items-center gap-8 py-10 sm:pt-20 text-center">
        <h1 className="font-bold text-6xl sm:text-8xl">
          Run quick NLP algorithms on the web
        </h1>
        <p className="text-2xl sm:text-4xl">
          Write a text, choose an algorithm, and export desired result in
          various formats.
        </p>
        <CorpusForm withAlgoSelect />
      </article>

      <article className="flex flex-col gap-6">
        <h2 className="font-bold text-2xl text-center text-accent">
          Algorithms
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(324px,_1fr))] gap-6">
          {Array(16)
            .fill(0)
            .map((_, i) => (
              <AlgoCard
                key={i}
                name="Sentiment analysis"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
              inventore blanditiis doloremque numquam facilis, suscipit veniam
              similique esse laudantium at. Obcaecati at nihil suscipit ad, sunt ullam
              ratione commodi qui."
              />
            ))}
        </div>
      </article>
    </section>
  );
}
