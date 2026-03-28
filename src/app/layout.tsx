
// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import HomeNav from "@/components/HomeNav";
import ThemeProvider from "./theme-provider";
import PageTransition from "./page-transition";
import DelayedFooter from "@/delayed-footer";
import { Inter, Young_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshay | Software Developer",
  description: "Bento-style personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${youngSerif.variable} antialiased px-6 hide-scrollbar`}>
        <ThemeProvider>
          <HomeNav />
          <PageTransition>{children}</PageTransition>
          <DelayedFooter />
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}