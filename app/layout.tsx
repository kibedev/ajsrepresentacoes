import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollObserver from "./components/ScrollObserver";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "JS Representações – Especialistas em Motopeças",
  description:
    "Mais de 18 anos conectando as melhores marcas do Brasil aos lojistas de Pernambuco, Paraíba e Alagoas. Representação comercial especializada em motopeças.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
