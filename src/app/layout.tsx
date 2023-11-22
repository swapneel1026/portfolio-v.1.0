import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SideNavbar from "./components/SideNavbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Swapneel's Portfolio",
  description: "Showcasing my work and handson experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-1 selection:bg-[#0aff9d] selection:text-black ">
          <SideNavbar />
          <div className="w-full bg-[#111111]">{children}</div>
        </div>
      </body>
    </html>
  );
}
