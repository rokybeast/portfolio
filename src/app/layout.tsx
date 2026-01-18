import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const syne = localFont({
  src: "../../public/fonts/Syne.woff2",
  variable: "--font-syne",
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
      <body className={`${manrope.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
