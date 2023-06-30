import DropdownIcon from "@/icons/DropdownIcon";
import Button from "../Button/Button";
import Textarea from "../Textarea";
import CodeIcon from "@/icons/CodeIcon";
import SettingsIcon from "@/icons/SettingsIcon";

interface Props {
  withAlgoSelect?: boolean;
  withSettingsButton?: boolean;
  fullHeight?: boolean;
}

export default function CorpusForm(props: Props) {
  return (
    <form className="w-full flex flex-col gap-8 p-6 border-2 border-foreground rounded-2xl">
      <Textarea
        name="corpus"
        rows={3}
        placeholder="Write something..."
        {...(props.fullHeight ? { className: "min-h-[400px]" } : {})}
      />

      <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
        {props.withSettingsButton ? (
          <Button
            aria-label="Settings button"
            variant="plain"
            startIcon={SettingsIcon}
          />
        ) : null}

        {props.withAlgoSelect ? (
          <Button
            size="lg"
            endIcon={DropdownIcon}
            className="min-w-full sm:min-w-[220px]"
          >
            Choose algo
          </Button>
        ) : null}

        <Button
          size="lg"
          variant="contained"
          startIcon={CodeIcon}
          className="min-w-full sm:min-w-0"
        >
          Invoke
        </Button>
      </div>
    </form>
  );
}
