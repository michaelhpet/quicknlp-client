import Tabs from "@/components/Tabs";
import getAlgorithms from "@/lib/api/getAlgorithms";
import makeHref from "@/lib/utils/makeHref";

interface Props {
  children: React.ReactNode;
}

export default async function Layout(props: Props) {
  const algorithms = await getAlgorithms();

  const tabs = algorithms.map((algo) => ({
    href: makeHref(algo.name),
    label: algo.name,
  }));

  return (
    <section className="flex flex-col">
      <Tabs tabs={tabs} />
      {props.children}
    </section>
  );
}
