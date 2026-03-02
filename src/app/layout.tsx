import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prathmesh Surnis — AI, Innovation & Business Development",
  description:
    "AI and Innovation professional at the intersection of artificial intelligence, innovation management, and new business development. Turning emerging technology into real-world impact.",
  keywords: [
    "AI Strategy",
    "Innovation Management",
    "New Business Development",
    "Strategic Foresight",
    "Digital Transformation",
    "AI Adoption",
    "Business Process Optimization",
    "AI & Innovation",
    "Prathmesh Surnis",
  ],
  authors: [{ name: "Prathmesh Pradip Surnis" }],
  openGraph: {
    title: "Prathmesh Surnis — AI, Innovation & Business Development",
    description:
      "At the intersection of AI, innovation management, and business development. Turning emerging technology into real-world impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
