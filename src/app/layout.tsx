import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Quick NLP - NLP algorithms on the web",
  description:
    "QuickNLP is a web-based library of NLP algorithms for transform plain text into structured and meaningful information as desired. Write a text, choose an algorithm, and export desired result with different formats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
