"use client";

import { useEffect, useState } from "react";

export type GameData = {
  name: string;
  accent: string;
  category: string;
  year: string;
  technology: string;
  status: string;
  description: string;
  players: string;
  dailyActivity: string;
  simultaneousPeak: string;
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
    status: "~380,1M Usuários/mensais",
    description:
      "O Roblox registrou cerca de 380,1 milhões de Usuários Mensais em 2025 e também 144 milhões de Usuários diários no quarto trimestre. Foram documentados casos de racismo, antissemitismo e discurso de ódio em experiências da plataforma.",
    players:
      "~380,1 milhões de Usuários Mensais; ~144 milhões de Usuários diários no 4º Trimestre/2025",
    dailyActivity:
      "80–100 milhões de jogadores ativos diariamente em 2025–2026",
    simultaneousPeak:
      "20–30 milhões de jogadores simultâneos (estimativa global)",
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
    status: "~110 milhões de Usuários Mensais",
    description:
      "A Epic chegou a aproximadamente 110 milhões de Usuários Mensais em 2025, com picos de jogadores simultâneos em 2026. Há registros de racismo, homofobia e linguagem discriminatória em comunidades e transmissões.",
    players:
      "~110 milhões de Usuários Mensais; ~575 mil jogadores simultâneos em 2026",
    dailyActivity: "900 mil–1,3 milhão de jogadores por dia (média estimada)",
    simultaneousPeak:
      "9,75 milhões de jogadores simultâneos em novembro de 2025",
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
    status: "~212 milhões de Usuários Mensais",
    description:
      "O jogo atingiu cerca de 212 milhões de Usuários Mensais em 2025. Estudos apontaram racismo, supremacia branca, sexismo e linguagem ofensiva em chats públicos de servidores Java.",
    players: "~212 milhões de Usuários Mensais",
    dailyActivity: "Aproximadamente 32 milhões de jogadores ativos diariamente",
    simultaneousPeak: "~2,8 milhões de jogadores simultâneos (estimativa)",
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
    status: "1,17 milhão de jogadores simultâneos",
    description:
      "Counter-Strike 2 registrou cerca de 1,17 milhão de jogadores simultâneos em fevereiro de 2026. A comunidade tem histórico de racismo, homofobia, xenofobia e sexismo, especialmente em chats.",
    players:
      "~1,17 milhão de jogadores simultâneos; pico histórico de ~1,86 milhão",
    dailyActivity:
      "Centenas de milhares a mais de 1 milhão simultâneos no Steam (média)",
    simultaneousPeak: "1,86 milhão de jogadores simultâneos em abril de 2025",
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
    status: "~150 milhões de Usuários Mensais",
    description:
      "O jogo é estimado em cerca de 150 milhões de Usuários Mensais. Há registros de racismo, sexismo, homofobia e assédio, com estudos apontando que cerca de 36% dos jogadores relatam assédio frequente.",
    players: "~150 milhões de Usuários Mensais (estimativa)",
    dailyActivity:
      "Aproximadamente 25–40 milhões de jogadores ativos diariamente",
    simultaneousPeak: "1–1,2 milhão de jogadores simultâneos (estimativa)",
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
    status: "18–21 milhões de Usuários Mensais",
    description:
      "A Riot estimou mais de 35 milhões de jogadores mensais em 2024; em 2026, o jogo ficou na faixa de 18 a 21 milhões de Usuários Mensais. Há casos documentados de racismo, homofobia e sexismo.",
    players:
      "~18–21 milhões de Usuários Mensais em 2026; mais de 35 milhões em 2024",
    dailyActivity: "Aproximadamente 5 milhões de jogadores rastreados por dia",
    simultaneousPeak: "Picos da base rastreada chegaram a ~6,86 milhões",
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
    status: "20–22 milhões de Usuários Mensais",
    description:
      "Apex apresenta aproximadamente 20 a 22 milhões de Usuários Mensais, segundo estimativas. Há relatos de insultos raciais e sexuais, especialmente no chat de voz, mas sem estatísticas públicas confiáveis.",
    players:
      "~20–22 milhões de Usuários Mensais; ~170 milhões de cadastros até 2024",
    dailyActivity: "70–140 mil jogadores simultâneos em média no Steam em 2025",
    simultaneousPeak: "~325 mil jogadores simultâneos no Steam em 2026",
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
    status: "8,5 milhões de Usuários Mensais",
    description:
      "Overwatch 2 tem aproximadamente 8,5 a 8,6 milhões de Usuários Mensais em 2026. Há registros de racismo, assédio e ataques direcionados a streamers negros, sem dados públicos detalhados.",
    players: "~8,5–8,6 milhões de Usuários Mensais",
    dailyActivity: "20–70 mil jogadores simultâneos em média no Steam",
    simultaneousPeak: "~165 mil jogadores simultâneos em fevereiro de 2026",
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
    status: "~130 milhões de Usuários Mensais",
    description:
      "Free Fire alcançou cerca de 130 milhões de Usuários Mensais em 2026, com mais de 100 milhões de Usuários diários no segundo trimestre de 2025. Há principalmente relatos de racismo, machismo e assédio, além de um caso explícito de ofensa racial.",
    players:
      "~130 milhões de Usuários Mensais; mais de 100 milhões de Usuários diários no 2º Trimestre/2025",
    dailyActivity:
      "15–25 milhões de jogadores ativos diariamente em algumas plataformas",
    simultaneousPeak: "Não há pico simultâneo global confiável",
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
    status: "110–150 milhões de Usuários Mensais",
    description:
      "PUBG Mobile estima 110 a 150 milhões de Usuários Mensais em 2026. Foram documentados casos de racismo e xenofobia no cenário competitivo, com banimentos relevantes em transmissões.",
    players: "~110–150 milhões de Usuários Mensais",
    dailyActivity: "Dezenas de milhões de jogadores ativos",
    simultaneousPeak: "Não há pico simultâneo global confiável",
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
    status: "30–50 milhões de Usuários Mensais",
    description:
      "Warzone tem cerca de 30 a 50 milhões de Usuários Mensais em 2026. Há registros de racismo, sexismo e discurso de ódio, com a Activision relatando 350 mil contas banidas por toxicidade e nomes ofensivos.",
    players:
      "~30–50 milhões de Usuários Mensais; ~44 mil jogadores simultâneos no Steam",
    dailyActivity: "Não há média diária global confiável",
    simultaneousPeak:
      "Não há pico simultâneo global confiável entre as plataformas",
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
    status: "40,8 milhões de Usuários Mensais",
    description:
      "O jogo tem aproximadamente 40,8 milhões de Usuários Mensais em 2026. Há relatos informais de sexismo, racismo e assédio verbal, mas dados públicos confiáveis sobre a extensão do problema são insuficientes.",
    players: "~40,8 milhões de Usuários Mensais",
    dailyActivity:
      "~40–55 milhões de jogadores mensais estimados em determinados períodos",
    simultaneousPeak: "Não há pico simultâneo global confiável",
    prejudice: "Sexismo, racismo e assédio verbal",
    stats:
      "Não foram encontradas pesquisas ou estatísticas públicas confiáveis que quantifiquem esses casos.",
    observations:
      "A Moonton possui sistema de denúncias e regras contra discurso de ódio, mas não publica números detalhados por preconceito.",
  },
];

const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const rows = [games.slice(0, 4), games.slice(4, 8), games.slice(8, 12)];

export const gameImages: Record<string, string> = {
  Roblox: "/roblox.png",
  Fortnite: "/fortnite.webp",
  Minecraft: "/minecraft.jpg",
  CS2: "/cs2.jpg",
  "League of Legends": "/LeagueOfLegends.webp",
  Valorant: "/valorant.jpg",
  "Apex Legends": "/apexlegends.jpg",
  "Overwatch 2": "/Overwatch-2.webp",
  "Free Fire": "/freefire.jpg",
  "PUBG Mobile": "/pubg-mobile.jpg",
  Warzone: "/warzone.webp",
  "Mobile Legends": "/mobile-legends.webp",
};

type SelectorProps = {
  selectedGame?: GameData;
  onSelectGame: (game?: GameData) => void;
};

const Selector = ({ selectedGame, onSelectGame }: SelectorProps) => {
  const [viewportWidth, setViewportWidth] = useState(1024);
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);

    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const hexSize =
    viewportWidth <= 390
      ? 32
      : viewportWidth <= 480
        ? 40
        : viewportWidth <= 640
          ? 48
          : viewportWidth <= 640
            ? 60
            : 72;
  const hexWidth = hexSize * 1.732;
  const hexHeight = hexSize * 2;
  const rowOffset =
    viewportWidth <= 480
      ? -25
      : viewportWidth <= 640
        ? -42
        : viewportWidth <= 520
          ? -32
          : -56.5;
  const baseOffset =
    viewportWidth <= 390
      ? 7
      : viewportWidth <= 480
        ? 14
        : viewportWidth <= 640
          ? 9
          : 10;

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

      <div
        className="mt-6 flex flex-1 items-center justify-center overflow-hidden py-2"
        onClick={() => {
          onSelectGame(undefined);
          setTooltip(null);
        }}
      >
        <div
          className="selector-hex-grid grid "
          style={{
            gridTemplateColumns: `repeat(${Math.max(...rows.map((row) => row.length))}, ${hexWidth}px)`,
            columnGap: "10px",
            rowGap: "5px",
            paddingLeft: hexWidth / 4,
          }}
        >
          {rows.flatMap((row, rowIndex) =>
            row.map((game, columnIndex) => {
              const isSelected = selectedGame?.name === game.name;

              return (
                <button
                  key={`${rowIndex}-${game.name}`}
                  type="button"
                  className={`group relative flex cursor-pointer items-center justify-center transition-all duration-200 hover:-translate-y-1 ${
                    isSelected ? "scale-[1.1] z-10" : ""
                  }`}
                  style={{
                    width: hexWidth,
                    height: hexHeight,
                    marginLeft:
                      rowIndex % 2 === 1 ? `${rowOffset}px` : `${baseOffset}px`,
                    marginTop: rowIndex > 0 ? `${hexSize * -0.4}px` : "0px",
                    clipPath: HEX_CLIP,

                    gridColumn: columnIndex + 1,
                    gridRow: rowIndex + 1,
                  }}
                  aria-label={game.name}
                  aria-pressed={isSelected}
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelectGame(game);
                  }}
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
                    style={{
                      clipPath: HEX_CLIP,
                      backgroundImage: gameImages[game.name]
                        ? `url("${gameImages[game.name]}")`
                        : undefined,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      filter: isSelected
                        ? "none"
                        : "grayscale(1) brightness(0.35) saturate(0.2)",
                    }}
                  />
                </button>
              );
            }),
          )}
        </div>

        {tooltip && viewportWidth > 1024 && (
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
