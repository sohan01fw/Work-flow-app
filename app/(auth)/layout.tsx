import BlurBgTheme from "@/utils/Blurbg/AuthTheme";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  `}>
        <BlurBgTheme />
        <div className="children z-30 md:backdrop-blur-xl md:bg-white/30 ">
          {children}
        </div>
      </body>
    </html>
  );
}
