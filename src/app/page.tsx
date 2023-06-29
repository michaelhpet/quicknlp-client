import Button from "@/components/Button";
import TextArea from "@/components/TextArea";
import CodeIcon from "@/icons/CodeIcon";
import DropdownIcon from "@/icons/DropdownIcon";

export default function Home() {
  return (
    <article className="flex flex-col items-center gap-8 py-10 text-center">
      <h1 className="font-bold text-8xl">
        Run quick NLP algorithms on the web
      </h1>
      <p className="text-4xl">
        Write a text, choose an algorithm, and export desired result in various
        formats.
      </p>
      <form className="w-full flex flex-col gap-8 p-6 border-2 border-foreground rounded-2xl">
        <TextArea name="corpus" rows={3} placeholder="Write something..." />
        <div className="flex items-center justify-end gap-4">
          <Button size="lg" endIcon={DropdownIcon} className="min-w-[200px]">
            Choose algo
          </Button>
          <Button size="lg" variant="contained" startIcon={CodeIcon}>
            Invoke
          </Button>
        </div>
      </form>
    </article>
  );
}
