import "../styles/globals.css";
import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
});

const interFont = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Backurtime",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${cinzelFont.variable} ${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
