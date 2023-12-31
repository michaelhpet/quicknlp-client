import "./globals.css";
import Providers from "./providers";
import QuickNLPIcon from "@/icons/QuickNLPIcon";
import Link from "next/link";
import DropdownIcon from "@/icons/DropdownIcon";
import ExternalLinkIcon from "@/icons/ExternalLinkIcon";
import MenuIcon from "@/icons/MenuIcon";
import Button, { ThemeButton } from "@/components/Button";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "san-serif"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <Providers>
          <header className="sticky top-0 max-w-[1080px] mx-auto flex items-center justify-between p-4 bg-background">
            <Link href="/" className="flex items-center gap-2">
              <QuickNLPIcon />
              <h1 className="text-lg font-bold">QuickNLP</h1>
            </Link>

            <div className="items-center gap-4 hidden sm:flex">
              <Button endIcon={DropdownIcon} className="min-w-[200px]">
                Algorithms
              </Button>
              <ThemeButton />
            </div>

            <Button
              startIcon={MenuIcon}
              className="block sm:hidden"
              aria-label="Menu button"
            />
          </header>

          <main className="max-w-[1080px] mx-auto px-4">{props.children}</main>

          <footer className="border-t-2 border-solid border-foreground">
            <div className="max-w-[1080px] mx-auto flex items-center gap-4 px-4 py-8">
              <p>&copy;{new Date().getFullYear()}</p>
              <Button
                href="https://michaelhpet.com"
                external
                endIcon={ExternalLinkIcon}
              >
                Michael Peter
              </Button>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Quick NLP - NLP algorithms on the web",
  description:
    "QuickNLP is a web-based library of NLP algorithms for transform plain text into structured and meaningful information as desired. Write a text, choose an algorithm, and export desired result with different formats.",
};
