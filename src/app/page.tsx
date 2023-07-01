import AlgoCard from "@/components/AlgoCard";
import CorpusForm from "@/components/CorpusForm";
import getAlgorithms from "@/lib/api/getAlgorithms";
import makeHref from "@/lib/utils/makeHref";

export default async function Home() {
  console.log("getting algorithms");
  const algorithms = await getAlgorithms();
  console.log("algorithms are", algorithms);

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
          {algorithms.map((algo) => (
            <AlgoCard
              key={algo.name}
              name={algo.name}
              description={algo.description}
              href={makeHref(algo.name)}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
