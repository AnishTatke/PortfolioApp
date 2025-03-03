import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Logo from "@/app/assets/logo.png";
import Backdrop from "./components/Backdrop";
import { Providers } from "./providers";
import dotenv from "dotenv";
import { connectToDB } from "@/lib/mongo";
dotenv.config();

const inter = Oswald({ weight: '300', subsets: ["latin"] });

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
  connectToDB();
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
