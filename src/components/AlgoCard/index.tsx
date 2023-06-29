import BrightnessIcon from "@/icons/BrightnessIcon";

export default function AlgoCard() {
  return (
    <article className="flex flex-col gap-2 p-6 border-2 border-foreground rounded-lg">
      <div className="flex items-center gap-2">
        <BrightnessIcon />
        <p className="font-bold text-2xl">Summarization</p>
      </div>
      <p className="text-lg text-highlight">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        inventore blanditiis doloremque numquam facilis, suscipit veniam
        similique esse laudantium at. Obcaecati at nihil suscipit ad, sunt ullam
        ratione commodi qui.
      </p>
    </article>
  );
}
