import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMart Pro",
  description: "O marketplace definitivo para desenvolvedores. Encontre as melhores ferramentas, recursos, e produtos para otimizar seu desenvolvimento de software. Qualidade, inovação e suporte especializado ao seu alcance.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
