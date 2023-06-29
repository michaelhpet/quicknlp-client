import IconProps from "@/types/IconProps";
import Link from "next/link";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "sm" | "md" | "lg";
  variant?: "contained" | "outlined";
  href?: string;
  external?: boolean;
  startIcon?: (props: IconProps) => JSX.Element;
  endIcon?: (props: IconProps) => JSX.Element;
}

export default function Button(props: Props) {
  const {
    size,
    variant,
    href,
    external,
    startIcon: StartIcon,
    endIcon: EndIcon,
    ...domProps
  } = props;

  const element = (
    <button
      {...domProps}
      className={`flex items-center justify-center sm:justify-between gap-1 px-3 py-2 border-2 border-foreground rounded-lg hover:scale-105 transition-all ${
        size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg"
      } leading-none ${
        variant === "contained" ? "text-background bg-foreground" : ""
      } ${domProps.className || ""}`}
    >
      {StartIcon ? (
        <StartIcon
          size={size === "sm" ? "20" : size === "lg" ? "28" : "22"}
          color={
            variant === "contained"
              ? "rgb(var(--background-color))"
              : "rgb(var(--foreground-color))"
          }
        />
      ) : null}
      {domProps.children}
      {EndIcon ? (
        <EndIcon
          size={size === "sm" ? "20" : size === "lg" ? "28" : "22"}
          color={
            variant === "contained"
              ? "rgb(var(--background-color))"
              : "rgb(var(--foreground-color))"
          }
        />
      ) : null}
    </button>
  );

  if (href)
    return (
      <Link href={href} {...(external ? { target: "_blank" } : {})}>
        {element}
      </Link>
    );

  return element;
}
