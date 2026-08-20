import GameDetails from "@/components/GameDetails";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CircleAlert,
  FlaskConical,
  Search,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#101214]">
      <GameDetails />
      <main className="flex-1 px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <section className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                <FlaskConical size={16} />
                Sobre o projeto
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Racismo nos jogos: dados que precisam ser vistos.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Uma investigação visual sobre como o preconceito aparece em
                comunidades de jogos digitais e por que falar sobre isso é
                essencial para construir espaços mais seguros.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-5 text-sm leading-6 text-white/60">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/35">
                Mostra Científica 2026
              </p>
              <p className="mt-3">
                Este projeto transforma informações dispersas em uma leitura
                direta, comparável e acessível para jogadores, educadores e toda
                a comunidade.
              </p>
            </div>
          </section>

          <section className="grid gap-4 py-12 sm:grid-cols-3">
            <InfoCard
              icon={<Target size={20} />}
              eyebrow="Finalidade"
              title="Dar visibilidade"
              text="Evidenciar a presença do racismo no ambiente digital e estimular uma conversa responsável sobre seus impactos."
            />
            <InfoCard
              icon={<Search size={20} />}
              eyebrow="Pergunta"
              title="O que os dados revelam?"
              text="Quais formas de preconceito aparecem nas comunidades e como as plataformas respondem a esses casos?"
            />
            <InfoCard
              icon={<BarChart3 size={20} />}
              eyebrow="Entrega"
              title="Informação para agir"
              text="Um painel que organiza jogos, relatos, estatísticas e observações para facilitar a análise e a conscientização."
            />
          </section>

          <section className="grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Como foi criado
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Pesquisa que virou experiência
              </h2>
              <p className="mt-4 leading-7 text-white/55">
                A equipe reuniu referências públicas, analisou diferentes
                comunidades e organizou os achados em uma interface pensada para
                a leitura rápida, sem perder o contexto de cada caso.
              </p>
            </div>

            <div className="space-y-8">
              <Step number="01" title="Levantamento">
                Selecionamos jogos de gêneros e plataformas diferentes para
                representar a diversidade do cenário digital.
              </Step>
              <Step number="02" title="Organização">
                Cruzamos indicadores de audiência, relatos e registros de
                preconceito para apresentar cada caso com clareza.
              </Step>
              <Step number="03" title="Visualização">
                Criamos um painel interativo para que os dados possam ser
                comparados e compreendidos em poucos passos.
              </Step>
            </div>
          </section>

          <section className="mt-14 grid gap-6 border-t border-white/10 pt-12 lg:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-[#1A1C20] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <BookOpen className="text-blue-400" size={21} />
                <h2 className="text-xl font-semibold">Como ler o painel</h2>
              </div>
              <p className="mt-4 leading-7 text-white/60">
                Cada jogo reúne dados de alcance, atividade e registros de
                preconceito. Use os filtros para explorar os títulos e abra os
                detalhes para conhecer as fontes e observações reunidas pela
                equipe.
              </p>
              <Link
                href="/painel"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Explorar o painel <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-lg border border-amber-400/20 bg-amber-400/4 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <CircleAlert className="text-amber-300" size={21} />
                <h2 className="text-xl font-semibold">Importante</h2>
              </div>
              <p className="mt-4 leading-7 text-white/60">
                Os números são aproximações baseadas em fontes públicas e os
                relatos não representam a totalidade dos casos. Ausência de um
                registro não significa ausência de preconceito: significa que
                ainda há muito a investigar e documentar.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function InfoCard({
  icon,
  eyebrow,
  title,
  text,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <article className="border border-white/10 bg-[#1A1C20] p-6">
      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-md bg-blue-500/15 text-blue-400">
        {icon}
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
    </article>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <span className="font-mono text-xs text-blue-400">{number}</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/55">{children}</p>
      </div>
    </div>
  );
}
