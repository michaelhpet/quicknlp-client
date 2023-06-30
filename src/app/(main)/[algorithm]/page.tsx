import CorpusForm from "@/components/CorpusForm";

export default function Page() {
  return (
    <article className="flex flex-col md:flex-row items-center gap-4 pb-10">
      <CorpusForm withSettingsButton fullHeight />
      <CorpusForm fullHeight />
    </article>
  );
}
