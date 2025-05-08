import type { Metadata } from "next";
import { Oswald, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import Logo from "@/app/assets/logo.png";
import Backdrop from "./components/Backdrop";
import { Providers } from "./providers";
import dotenv from "dotenv";
dotenv.config();

const inter = Ubuntu_Mono({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishspace",
  description: "Anish Tatke's personal website",
  icons: [{ rel: "icon", url: Logo.src, type: "image/png"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>    
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
