import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  display: "swap",
});

const manrope = localFont({
  src: "../../public/fonts/ManropeV5VF.woff2",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "[rokybeast]",
  description: "RokyBeast's Portfolio! :D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${clashDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
