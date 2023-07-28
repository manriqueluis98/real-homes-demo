import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Archivo, Archivo_Black, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Real Homes Demo",
  description: "Web Demo Developed by Luis Manrique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${archivo.variable} ${archivo_black.variable} ${archivo.className}`}
      >
        {children}
      </body>
    </html>
  );
}
