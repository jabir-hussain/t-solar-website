import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T-Solar - Solar Solutions Made Simple",
  description: "Transform your home with solar energy. Professional solar panel installation, energy assessment, and maintenance services.",
  keywords: "solar energy, solar panels, renewable energy, solar installation, energy assessment",
  openGraph: {
    title: "T-Solar - Solar Solutions Made Simple",
    description: "Transform your home with solar energy. Professional solar panel installation, energy assessment, and maintenance services.",
    type: "website",
    locale: "en_US",
    url: "https://t-solar.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
