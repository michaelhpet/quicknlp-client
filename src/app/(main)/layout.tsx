import Tabs from "@/components/Tabs";
import QuickNLPIcon from "@/icons/QuickNLPIcon";

interface Props {
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  const tabs = [
    { href: "/paraphrasing", label: "Paraphrasing" },
    { href: "/grammar-check", label: "Grammar check" },
    { href: "/summarization", label: "Summarization" },
    { href: "/tokenization", label: "Tokenization" },
    { href: "/topic-modelling", label: "Topic modelling" },
    { href: "/sentiment-analysis", label: "Sentiment analysis" },
  ];

  return (
    <section className="flex flex-col gap-4">
      <Tabs tabs={tabs} />
      {props.children}
    </section>
  );
}
