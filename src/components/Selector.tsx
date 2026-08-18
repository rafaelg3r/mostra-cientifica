"use client";

import { useState } from "react";

export type GameData = {
  name: string;
  accent: string;
  category: string;
  year: string;
  technology: string;
  status: string;
  description: string;
  players: string;
  prejudice: string;
  stats: string;
  observations: string;
};

export const games: GameData[] = [
  {
    name: "Roblox",
    accent: "from-cyan-500/80 to-blue-600/80",
    category: "Plataforma social",
    year: "2025",
    technology: "Lua / Roblox Studio",
    status: "~380,1M MAU",
    description:
      "A Roblox registrou cerca de 380,1 milhões de MAU em 2025 e também 144 milhões de DAU no Q4. Foram documentados casos de racismo, antissemitismo e discurso de ódio em experiências da plataforma.",
    players: "~380,1 milhões de MAU; ~144 milhões de DAU no Q4/2025",
    prejudice: "Racismo, antissemitismo e discurso de ódio",
    stats:
      "A CBS encontrou dezenas de suásticas e insultos raciais/antissemitas em Spray Paint!",
    observations:
      "A Roblox proíbe discurso de ódio e tem moderação 24/7, mas não divulga números detalhados de denúncias e banimentos por preconceito.",
  },
  {
    name: "Fortnite",
    accent: "from-violet-500/80 to-purple-600/80",
    category: "Battle Royale",
    year: "2025",
    technology: "Unreal Engine",
    status: "~110M MAU",
    description:
      "A Epic chegou a aproximadamente 110 milhões de MAU em 2025, com picos de jogadores simultâneos em 2026. Há registros de racismo, homofobia e linguagem discriminatória em comunidade e transmissões.",
    players: "~110 milhões de MAU; ~575 mil jogadores simultâneos em 2026",
    prejudice: "Racismo, homofobia e discriminação em geral",
    stats:
      "FaZe Dubs foi afastado após uso de termo racial pejorativo; criador foi suspenso por comentário homofóbico.",
    observations:
      "A Epic proíbe linguagem de ódio e insultos discriminatórios, mas não divulga estatísticas oficiais sobre ocorrências.",
  },
  {
    name: "Minecraft",
    accent: "from-emerald-500/80 to-teal-600/80",
    category: "Sandbox",
    year: "2025",
    technology: "Java / Bedrock",
    status: "~212M MAU",
    description:
      "O jogo atingiu cerca de 212 milhões de MAU em 2025. Estudos apontaram racismo, supremacia branca, sexismo e linguagem ofensiva em chats públicos de servidores Java.",
    players: "~212 milhões de MAU",
    prejudice:
      "Racismo, supremacia branca, sexismo e linguagem sexual/ofensiva",
    stats:
      "Estudo da ADL em 2023 encontrou presença significativa de linguagem de ódio em chats públicos Java.",
    observations:
      "A Microsoft/Mojang proíbe discurso de ódio e oferece mecanismos de denúncia, mas não publica estatísticas por preconceito.",
  },
  {
    name: "CS2",
    accent: "from-amber-500/80 to-orange-600/80",
    category: "FPS competitivo",
    year: "2026",
    technology: "Source Engine",
    status: "1,17M simultâneos",
    description:
      "Counter-Strike 2 registrou cerca de 1,17 milhão de jogadores simultâneos em fevereiro de 2026. A comunidade tem histórico de racismo, homofobia, xenofobia e sexismo, especialmente em chats.",
    players: "~1,17 milhão de jogadores simultâneos; pico histórico ~1,86M",
    prejudice: "Racismo, homofobia, xenofobia e sexismo",
    stats:
      "O jogador profissional BOROS foi banido após insultos raciais contra um jogador chinês.",
    observations:
      "A Valve não publica estatísticas públicas sistemáticas sobre preconceito na comunidade; o dado se refere a jogadores simultâneos, não MAU.",
  },
  {
    name: "League of Legends",
    accent: "from-rose-500/80 to-pink-600/80",
    category: "MOBA",
    year: "2025",
    technology: "Unreal Engine",
    status: "~150M MAU",
    description:
      "O jogo é estimado em cerca de 150 milhões de MAU. Há registros de racismo, sexismo, homofobia e assédio, com estudos apontando que cerca de 36% dos jogadores relatam assédio frequente.",
    players: "~150 milhões de MAU (estimativa)",
    prejudice: "Racismo, sexismo, homofobia e assédio",
    stats: "Aproximadamente 36% dos jogadores relatam assédio frequente.",
    observations:
      "A Riot tem sistemas de denúncia, filtros e punições, mas não divulga estatísticas públicas detalhadas por preconceito.",
  },
  {
    name: "Valorant",
    accent: "from-slate-500/80 to-zinc-700/80",
    category: "FPS tático",
    year: "2026",
    technology: "Unreal Engine",
    status: "18–21M MAU",
    description:
      "A Riot estimou mais de 35 milhões de jogadores mensais em 2024; em 2026, o jogo ficou em faixa de 18 a 21 milhões de MAU. Há casos documentados de racismo, homofobia e sexismo.",
    players: "~18–21 milhões de MAU em 2026; 35M mensais em 2024",
    prejudice: "Racismo, homofobia e sexismo",
    stats:
      "Jogadores e streamers foram punidos por termos racistas e comentários discriminatórios.",
    observations:
      "A Riot possui regras específicas contra racismo, homofobia, sexismo e capacitismo, mas não publica estatísticas detalhadas de punições por categoria.",
  },
  {
    name: "Apex Legends",
    accent: "from-lime-500/80 to-green-600/80",
    category: "Battle Royale",
    year: "2026",
    technology: "Source / Unreal",
    status: "20–22M MAU",
    description:
      "Apex apresenta aproximadamente 20 a 22 milhões de MAU segundo estimativas. Há relatos de insultos raciais e sexuais, especialmente no chat de voz, mas sem estatísticas públicas confiáveis.",
    players: "~20–22 milhões de MAU; ~170M cadastros até 2024",
    prejudice: "Insultos raciais e sexuais, especialmente em voz",
    stats:
      "Não há estatísticas públicas confiáveis que quantifiquem racismo ou preconceito em Apex.",
    observations:
      "EA e Respawn possuem políticas contra discurso de ódio e assédio, mas não divulgam dados específicos de moderação por preconceito.",
  },
  {
    name: "Overwatch 2",
    accent: "from-red-500/80 to-rose-600/80",
    category: "FPS cooperativo",
    year: "2026",
    technology: "Unreal Engine",
    status: "8,5M MAU",
    description:
      "Overwatch 2 tem aproximadamente 8,5 a 8,6 milhões de MAU em 2026. Há registros de racismo, assédio e hate raids direcionados a streamers negros, sem dados públicos detalhados.",
    players: "~8,5–8,6 milhões de MAU",
    prejudice: "Racismo, assédio e ataques direcionados a streamers negros",
    stats:
      "Ocorreram campanhas de assédio e hate raids contra streamers negros associados ao jogo.",
    observations:
      "A Blizzard usa filtros de chat e bloqueio de voz e proíbe discriminação, mas não divulga estatísticas públicas detalhadas.",
  },
  {
    name: "Free Fire",
    accent: "from-indigo-500/80 to-violet-600/80",
    category: "Battle Royale",
    year: "2026",
    technology: "Unity",
    status: "~130M MAU",
    description:
      "Free Fire alcançou cerca de 130 milhões de MAU em 2026, com mais de 100 milhões de DAU no Q2 de 2025. Há principalmente relatos de racismo, machismo e assédio, além de um caso explícito de ofensa racial.",
    players: "~130 milhões de MAU; >100M DAU no Q2/2025",
    prejudice: "Racismo, machismo e assédio",
    stats:
      "Um jogador brasileiro da LOUD foi alvo de ofensa racial envolvendo o termo “macaco”.",
    observations:
      "O caso gerou repercussão na comunidade, mas não havia confirmação de punição oficial no momento do relatório.",
  },
  {
    name: "PUBG Mobile",
    accent: "from-fuchsia-500/80 to-pink-700/80",
    category: "Battle Royale",
    year: "2026",
    technology: "Unreal Engine",
    status: "110–150M MAU",
    description:
      "PUBG Mobile estima 110 a 150 milhões de MAU em 2026. Foram documentados casos de racismo e xenofobia no cenário competitivo, com banimentos relevantes em transmissões.",
    players: "~110–150 milhões de MAU",
    prejudice: "Racismo e xenofobia, especialmente em esports",
    stats:
      "O jogador profissional brasileiro NTX recebeu banimento de um ano após linguagem racialmente ofensiva.",
    observations:
      "Os regulamentos competitivos do PUBG Mobile preveem punições para linguagem racista, mas não há estatísticas públicas abrangentes da comunidade.",
  },
  {
    name: "Warzone",
    accent: "from-yellow-500/80 to-amber-600/80",
    category: "FPS battle royale",
    year: "2026",
    technology: "IW Engine",
    status: "30–50M MAU",
    description:
      "Warzone tem cerca de 30 a 50 milhões de MAU em 2026. Há registros de racismo, sexismo e discurso de ódio, com a Activision relatando 350 mil contas banidas por toxicidade e nomes ofensivos.",
    players: "~30–50 milhões de MAU; ~44 mil simultâneos no Steam",
    prejudice: "Racismo, sexismo e discurso de ódio",
    stats:
      "A Activision informou banimento de 350 mil contas em um ano por nomes racistas ou comportamento tóxico.",
    observations:
      "Esse número engloba comportamentos tóxicos gerais da franquia e não deve ser interpretado como 350 mil casos exclusivamente de racismo em Warzone.",
  },
  {
    name: "Mobile Legends",
    accent: "from-sky-500/80 to-cyan-700/80",
    category: "MOBA",
    year: "2026",
    technology: "Unity",
    status: "40,8M MAU",
    description:
      "O jogo tem aproximadamente 40,8 milhões de MAU em 2026. Há relatos informais de sexismo, racismo e assédio verbal, mas dados públicos confiáveis sobre a extensão do problema são insuficientes.",
    players: "~40,8 milhões de MAU",
    prejudice: "Sexismo, racismo e assédio verbal",
    stats:
      "Não foram encontradas pesquisas ou estatísticas públicas confiáveis que quantifiquem esses casos.",
    observations:
      "A Moonton possui sistema de denúncias e regras contra discurso de ódio, mas não publica números detalhados por preconceito.",
  },
];

const HEX_SIZE = 50;
const HEX_WIDTH = HEX_SIZE * 1.732;
const HEX_HEIGHT = HEX_SIZE * 2;
const ROW_OFFSET = HEX_WIDTH / 2;
const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const rows = [games.slice(0, 4), games.slice(4, 8), games.slice(8, 12)];

type SelectorProps = {
  selectedGame: GameData;
  onSelectGame: (game: GameData) => void;
};

const Selector = ({ selectedGame, onSelectGame }: SelectorProps) => {
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col bg-[#101214] px-4 py-4">
      <header className="flex items-center justify-between border-b border-white/10 pb-3">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          painel de seleção
        </h1>
      </header>

      <div className="mt-3 border-l border-[#3b82f6]/30 pl-3">
        <p className="text-sm text-white/50">
          selecione um jogo - click para saber mais
        </p>
      </div>

      <div className="mt-6 flex flex-1 items-center justify-center overflow-hidden py-2">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${Math.max(...rows.map((row) => row.length))}, ${HEX_WIDTH}px)`,
            columnGap: "4px",
            rowGap: "0px",
          }}
        >
          {rows.flatMap((row, rowIndex) =>
            row.map((game, columnIndex) => {
              const isSelected = selectedGame.name === game.name;

              return (
                <button
                  key={`${rowIndex}-${game.name}`}
                  type="button"
                  className={`group relative flex cursor-pointer items-center justify-center transition-all duration-200 hover:-translate-y-1 ${
                    isSelected ? "scale-[1.04]" : ""
                  }`}
                  style={{
                    width: `${HEX_WIDTH}px`,
                    height: `${HEX_HEIGHT}px`,
                    marginLeft: rowIndex % 2 === 1 ? `${ROW_OFFSET}px` : "-2px",
                    marginTop: rowIndex > 0 ? "-20px" : "0px",
                    clipPath: HEX_CLIP,
                    gridColumn: columnIndex + 1,
                    gridRow: rowIndex + 1,
                  }}
                  aria-label={game.name}
                  onClick={() => onSelectGame(game)}
                  onMouseEnter={(event) => {
                    setTooltip({
                      name: game.name,
                      x: event.clientX + 12,
                      y: event.clientY + 18,
                    });
                  }}
                  onMouseMove={(event) => {
                    setTooltip({
                      name: game.name,
                      x: event.clientX + 12,
                      y: event.clientY + 18,
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center border border-white/15 bg-linear-to-br ${game.accent} shadow-inner shadow-black/20 transition-all duration-200 ${
                      isSelected
                        ? "ring-2 ring-white/80 ring-offset-2 ring-offset-[#101214]"
                        : ""
                    }`}
                    style={{ clipPath: HEX_CLIP }}
                  />
                </button>
              );
            }),
          )}
        </div>

        {tooltip && (
          <div
            className="pointer-events-none fixed z-9999 whitespace-nowrap rounded-md border border-white/10 bg-[#171a1d]/95 px-2.5 py-1 text-[10px] font-medium text-white/80 shadow-lg"
            style={{
              left: tooltip.x,
              top: tooltip.y,
            }}
          >
            {tooltip.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;