import type { Metadata } from "next";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark pt-12 h-screen flex flex-col justify-between overflow-auto, lg:pt-20">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
