import IconProps from "@/types/IconProps";
import Link from "next/link";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "sm" | "md" | "lg";
  variant?: "contained" | "outlined" | "plain";
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
    children,
    className,
    ...domProps
  } = props;

  const element = (
    <button
      {...domProps}
      className={makeClassName({ variant, size, className })}
    >
      {StartIcon ? (
        <StartIcon
          size={makeSize({ size, variant, children })}
          color={makeColor({ variant })}
        />
      ) : null}
      {children}
      {EndIcon ? (
        <EndIcon
          size={makeSize({ size, variant, children })}
          color={makeColor({ variant })}
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

function makeClassName({
  variant,
  size,
  className,
}: Pick<Props, "variant" | "size" | "className">) {
  const classes = [
    "flex items-center justify-center sm:justify-between gap-1 px-3 py-2 md:hover:scale-105 transition-transform leading-none whitespace-nowrap",
  ];

  if (variant === "contained") classes.push("text-background bg-foreground");
  else classes.push("text-foreground bg-background");

  if (variant !== "plain")
    classes.push("border-2 border-foreground rounded-lg");

  if (size === "sm") classes.push("text-base");
  else if (size === "lg") classes.push("text-2xl");
  else classes.push("text-lg");

  if (className) classes.push(className);

  return classes.join(" ");
}

function makeSize({
  size,
  variant,
  children,
}: Pick<Props, "size" | "variant" | "children">) {
  if (size === "sm") {
    if (variant === "plain" && !children) return "34";
    return "20";
  } else if (size === "lg") {
    if (variant === "plain" && !children) return "44";
    return "28";
  } else {
    if (variant === "plain" && !children) return "38";
    return "22";
  }
}

function makeColor({ variant }: Pick<Props, "variant">) {
  if (variant === "contained") return "rgb(var(--background-color))";
  return "rgb(var(--foreground-color))";
}
