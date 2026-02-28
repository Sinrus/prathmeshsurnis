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
  title: "Prathmesh Surnis — AI Success Manager | Making AI Work for Businesses",
  description:
    "I help businesses adopt AI that actually delivers results. From strategy to implementation — AI consulting, workshops, and business process optimization.",
  keywords: [
    "AI Success Manager",
    "AI Strategy",
    "Digital Transformation",
    "AI Adoption",
    "Business Process Optimization",
    "Innovation Management",
    "AI Consulting",
    "German SME",
    "Prathmesh Surnis",
  ],
  authors: [{ name: "Prathmesh Surnis" }],
  openGraph: {
    title: "Prathmesh Surnis — AI Success Manager",
    description:
      "I help businesses adopt AI that actually delivers results. From strategy to implementation.",
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
