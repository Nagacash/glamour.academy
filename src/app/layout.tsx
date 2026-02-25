import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glamour Akademie – The Perfect Skin®",
  description: "Klinische Präzision trifft ästhetische Empathie. 60 Jahre gebündeltes Wissen in Treatments, Masterclasses & Artist Training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#f5f0eb" />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
