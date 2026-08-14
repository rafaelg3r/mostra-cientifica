import type { Metadata } from "next";
import { JetBrains_Mono, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mostra Científica | Racismo nos Jogos",
  description:
    "Projeto de pesquisa que visa analisar a presença de racismo nos jogos eletrônicos, explorando dados e informações estatísticas sobre casos e relatos de jogadores ao redor do mundo. Através de uma abordagem crítica e informativa, o projeto busca conscientizar jogadores, desenvolvedores e a comunidade em geral sobre o impacto do racismo em ambientes digitais.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${raleway.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
