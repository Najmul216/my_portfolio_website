import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Md. Nazmul Hasan Chowdhury",
  description: "Portfolio website create with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#2d2d7a]`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
