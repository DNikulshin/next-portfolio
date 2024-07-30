import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikulshin.D - Potrfolio",
  description: "Web Developer Portfolio <Nikulshin Dmitriy>",
  keywords:
    "Web Developer Portfolio, Портфолио Web разработчика, Портфолио Web разработчика Nikulshin Dmitriy, Портфолио Web разработчика Никульшин Дмитрий",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FFFFFF",
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

const mainStyleBg = {
  backgroundImage: `url('/static/assets/images/bg-3.webp')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundColor: "rgba(3, 80, 113, .8)",
  minHeight: "100vh",
  width: "100%",
  filter: "alpha(opacity=80)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("sm:bg-[#035071] overflow-x-hidden", inter.className)}
        style={mainStyleBg}
      >
        <Header className="bg-[#035071] shadow" />
        {children}
      </body>
    </html>
  );
}
