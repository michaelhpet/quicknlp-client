import CopyIcon from "@/icons/CopyIcon";
import Button from "../Button";

interface Props {
  type?: "text" | "png";
}

export default function ResultArea(props: Props) {
  const tabs = [{ label: "TEXT" }, { label: "PNG" }];
  return (
    <div className="w-full flex md:flex-col gap-4 p-6 border-2 border-foreground rounded-2xl">
      <div className="flex items-center gap-2">
        <Button>TEXT</Button>
        <Button variant="plain">PNG</Button>
      </div>
      <article className="max-h-[360px] overflow-auto" id="result_area">
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam at,
          nihil aspernatur tempora doloremque perferendis molestiae qui quae
          minus rerum consectetur voluptates praesentium nemo nisi beatae
          deserunt libero ut unde consequuntur laboriosam voluptatem saepe totam
          aliquam. Corrupti mollitia rem sit quae laboriosam fugit autem fuga
          voluptas, quos consequatur debitis expedita. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ut perspiciatis officia ab,
          delectus aut molestiae veniam nulla dolore ipsam non perferendis?
          Perferendis, quae est quaerat rerum quibusdam obcaecati modi mollitia,
          molestiae vero, in reiciendis! Omnis, officia aliquid atque, molestias
          explicabo consectetur consequatur ducimus magni cupiditate
          accusantium, voluptas quo doloremque ullam? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Commodi aliquid corrupti totam officia
          numquam, minus distinctio quod dolorem sit culpa maiores sint velit
          dolores adipisci expedita quos dolorum iusto, eum quas, facilis saepe
          odit possimus sapiente? Eius quos at voluptates? Corrupti aperiam qui
          nostrum vitae officiis repellat in maxime necessitatibus?
        </p>
      </article>
      <div className="flex items-center justify-end mt-auto">
        <Button variant="contained" size="lg" startIcon={CopyIcon}>
          Copy
        </Button>
      </div>
    </div>
  );
}
