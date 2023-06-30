"use client";

import cls from "@/utils/cls";
import { DetailedHTMLProps, FormEvent, TextareaHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export default function Textarea(props: Props) {
  function handleInput(e: FormEvent<HTMLTextAreaElement>) {
    if (window) {
      e.currentTarget.style.height = "auto";
      if (e.currentTarget.scrollHeight < 400)
        e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
      else e.currentTarget.style.height = "400px";
    }
  }

  return (
    <textarea
      {...props}
      className={cls(
        "border-0 outline-0 text-xl bg-background resize-none placeholder:text-highlight",
        props.className
      )}
      onInput={handleInput}
    ></textarea>
  );
}
