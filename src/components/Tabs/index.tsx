"use client";

import QuickNLPIcon from "@/icons/QuickNLPIcon";
import Button from "../Button";
import { usePathname } from "next/navigation";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import cls from "@/utils/cls";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tabs: Array<{
    href: string;
    label: string;
  }>;
}

export default function Tabs(props: Props) {
  const pathname = usePathname();

  const { tabs, className, ...domProps } = props;

  function active(href: string) {
    return pathname.includes(href);
  }

  return (
    <nav
      {...domProps}
      className={cls(
        "w-full overflow-auto flex items-center gap-4 p-2",
        className
      )}
    >
      {tabs.map((tab) => (
        <Button
          key={tab.href}
          {...(active(tab.href)
            ? { startIcon: QuickNLPIcon }
            : { variant: "plain" })}
          href={tab.href}
        >
          {tab.label}
        </Button>
      ))}
    </nav>
  );
}
