"use client"
import { ThemeProvider } from "next-themes";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZHORBEN",
  description:
    "Build and scale your business fast with our world-class senior developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
