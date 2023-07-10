import CorpusForm from "@/components/CorpusForm";
import ResultArea from "@/components/ResultArea";
import QuickNLPIcon from "@/icons/QuickNLPIcon";
import getAlgorithm from "@/lib/api/getAlgorithm";
import getAlgorithms from "@/lib/api/getAlgorithms";
import makeHref from "@/lib/utils/makeHref";

interface Props {
  params: { algo: string };
}

export default async function Page(props: Props) {
  const algorithm = await getAlgorithm(props.params.algo);

  return (
    <section className="h-full flex flex-col items-center gap-4 py-4 pb-10">
      <div className="h-full flex flex-col md:flex-row md:grow gap-4 pb-10">
        <CorpusForm withSettingsButton fullHeight />
        <ResultArea />
      </div>

      <article className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <QuickNLPIcon color="rgb(var(--accent-color))" size="48" />
          <h1 className="font-bold text-accent text-4xl">{algorithm.name}</h1>
        </div>

        <p className="text-2xl">{algorithm.description}</p>
      </article>
    </section>
  );
}

export async function generateStaticParams() {
  const algorithms = await getAlgorithms();
  return algorithms.map((algo) => ({
    params: { algo: makeHref(algo.name) },
  }));
}

export const dynamicParams = false;
