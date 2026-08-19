import GameDetails from "@/components/GameDetails";
import { ArrowRight, CircleHelp, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#101214]">
      <GameDetails />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-20 text-white sm:px-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-marine-800/30 blur-3xl" />
        <section className="relative z-10 flex max-w-3xl flex-col items-center text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-marine-600">
            Mostra Científica
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Racismo nos jogos: dados que precisam ser vistos
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Explore uma análise estatística sobre a presença do racismo nos jogos
            eletrônicos e o impacto dessa realidade na comunidade gamer.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/painel"
              className="flex items-center gap-2 rounded-md bg-marine-600 px-5 py-3 text-sm font-semibold text-[#101214] transition hover:bg-blue-300"
            >
              <LayoutGrid size={17} />
              Ir para o painel
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/sobre"
              className="flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
            >
              <CircleHelp size={17} />
              Saber mais sobre
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
