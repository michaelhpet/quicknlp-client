import QuickNLPIcon from "@/icons/QuickNLPIcon";
import Button from "../Button";
import ExternalLinkIcon from "@/icons/ExternalLinkIcon";
import CodeIcon from "@/icons/CodeIcon";
import AlgoInfo from "@/lib/types/AlgoInfo";

export default function AlgoCard(props: Partial<AlgoInfo>) {
  return (
    <article className="group min-h-[320px] flex flex-col gap-2 p-6 border-2 border-foreground rounded-lg">
      <div className="flex items-center gap-2">
        <QuickNLPIcon />
        <p className="font-bold text-2xl">{props.name}</p>
      </div>
      <p className="text-lg text-highlight line-clamp-6">{props.description}</p>

      <div className="opacity-100 group-hover:opacity-100 md:opacity-0 flex flex-col sm:flex-row items-center justify-end gap-4 mt-auto transition-all">
        <Button
          href={props.aboutUrl}
          external
          endIcon={ExternalLinkIcon}
          className="min-w-full sm:min-w-0"
        >
          Read more
        </Button>

        <Button
          href={props.href}
          variant="contained"
          startIcon={CodeIcon}
          className="min-w-full sm:min-w-0"
        >
          Try
        </Button>
      </div>
    </article>
  );
}
