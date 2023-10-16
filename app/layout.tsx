import { ThemeProviders } from "@/utils/ThemeProviders";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopNavBar from "@/components/Navbar-component/TopNavBar";
import ColorThemes from "@/components/ColorThemes";
import ReduxProviders from "@/utils/ReduxProviders";
import PageNavBar from "@/components/Navbar-component/PageNavBar";

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
      <body className={`${inter.className} `}>
        <ReduxProviders>
          <ThemeProviders>
            <div className="children m-5">
              <div className="topnav m-1 mb-8">
                <TopNavBar />
              </div>
              {children}
              <div className="bottombar absolute bottom-0 right-0 m-2 ">
                <PageNavBar />
              </div>

              <div className="color-themes absolute bottom-0 ">
                <ColorThemes />
              </div>
            </div>
          </ThemeProviders>
        </ReduxProviders>
      </body>
    </html>
  );
}
