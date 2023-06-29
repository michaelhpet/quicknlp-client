import "./globals.css";
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
    <html lang="en">
      <body className={spaceGrotesk.className}>{props.children}</body>
    </html>
  );
}

export const metadata = {
  title: "Quick NLP - NLP algorithms on the web",
  description:
    "QuickNLP is a web-based library of NLP algorithms for transform plain text into structured and meaningful information as desired. Write a text, choose an algorithm, and export desired result with different formats.",
};
