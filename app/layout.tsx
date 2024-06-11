import "../public/css/globals.css";
import { type Metadata, Viewport } from "next";
import { Epilogue } from "next/font/google";
import { PropsWithChildren } from "react";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const epilogue = Epilogue({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-epilogue",
});

export const viewport: Viewport = {
  themeColor: "#1d3531",
};

export const metadata: Metadata = {
  title: "WhatsJob",
  description: "Bot para enviar vagas de TI para o seu WhatsApp!",
  creator: "Eduardo Amaro",
  applicationName: "WhatsJob",
  keywords:
    "Vagas TI, Vagas Desenvolvedor, BOT de Vagas, Vagas Mensais, Vagas Semanais, Tecnologia, Vagas Google, Vagas Programador, Vagas Junior",
  appleWebApp: {
    statusBarStyle: "black",
  },
  icons: {
    icon: "/images/base-icon.svg",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={epilogue.className}>
        <Header />
        <main>{children}</main>
        <Analytics />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
