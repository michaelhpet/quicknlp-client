import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export default function Textarea(props: Props) {
  return (
    <textarea
      {...props}
      className={`border-0 outline-0 text-xl bg-background resize-none placeholder:text-highlight ${
        props.className || ""
      }`}
    ></textarea>
  );
}
