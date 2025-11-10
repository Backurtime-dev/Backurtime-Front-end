import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "../styles/globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
});

const interFont = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Backurtime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
