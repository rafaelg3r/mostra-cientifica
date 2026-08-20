import { games, gameImages, type GameData } from "./Selector";

type InfoDisplayerProps = {
  game?: GameData;
};

const getIndicatorValue = (status: string) => {
  const match = status.match(/([\d.,]+)(?:–([\d.,]+))?/);

  if (!match) {
    return { value: 0, label: "Indicador não quantificado" };
  }

  const parseValue = (value: string) =>
    Number(value.replaceAll(".", "").replace(",", "."));
  const firstValue = parseValue(match[1]);
  const lastValue = match[2] ? parseValue(match[2]) : firstValue;
  const value = (firstValue + lastValue) / 2;
  const unit = status.includes("milhão") || status.includes("M") ? "mi" : "mil";

  return {
    value,
    label: match[2] ? `${match[1]}–${match[2]} ${unit}` : `${match[1]} ${unit}`,
  };
};

const getPrejudiceTopics = (prejudice: string, description: string) => {
  const topics = [
    {
      label: "Racismo",
      keywords: ["racismo", "racial", "negros", "ofensa racial"],
    },
    { label: "Antissemitismo", keywords: ["antissemitismo", "suásticas"] },
    { label: "Xenofobia", keywords: ["xenofobia"] },
    { label: "Gênero", keywords: ["sexismo", "machismo"] },
    { label: "LGBTQIA+", keywords: ["homofobia"] },
    { label: "Assédio", keywords: ["assédio", "ataques", "hate raids"] },
    { label: "Discurso de ódio", keywords: ["discurso de ódio"] },
    {
      label: "Discriminação",
      keywords: ["discriminação", "discriminatória", "discriminatórios"],
    },
    { label: "Supremacia branca", keywords: ["supremacia branca"] },
    {
      label: "Linguagem ofensiva",
      keywords: ["linguagem ofensiva", "insultos", "linguagem sexual/ofensiva"],
    },
  ];
  const source = `${prejudice} ${description}`.toLocaleLowerCase("pt-BR");

  return topics.map((topic) => ({
    ...topic,
    active: topic.keywords.some((keyword) => source.includes(keyword)),
  }));
};

const InfoDisplayer = ({ game }: InfoDisplayerProps) => {
  const indicator = game ? getIndicatorValue(game.status) : null;
  const largestIndicator = Math.max(
    ...games.map((item) => getIndicatorValue(item.status).value),
  );
  const topics = game
    ? getPrejudiceTopics(game.prejudice, game.description)
    : [];
  const indicatorWidth = indicator
    ? Math.max(8, (indicator.value / largestIndicator) * 100)
    : 0;

  return (
    <aside className="flex h-full w-full flex-col overflow-y-auto bg-[#171a1d] px-4 py-4 text-white">
      <div className="border-b border-white/10 pb-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b5bac1]">
          Visão estatística
        </p>
      </div>

      {!game ? (
        <div className="flex flex-1 items-center justify-center">
          <div className="max-w-xs rounded-2xl border border-dashed border-white/15 bg-[#1d1f22] p-6 text-center">
            <p className="text-sm font-semibold text-white">
              Selecione um jogo
            </p>
            <p className="mt-2 text-sm leading-6 text-[#949ba4]">
              Escolha um dos jogos no painel para ver suas informações.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-4 rounded-2xl border border-white/10 bg-[#1d1f22] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="flex items-center gap-3">
              <div
                className={`h-10 w-10 rounded-xl bg-linear-to-br ${game.accent} shadow-inner shadow-black/20`}
                style={{
                  backgroundImage: gameImages[game.name]
                    ? `url("${gameImages[game.name]}")`
                    : undefined,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#949ba4]">
                  Jogo
                </p>
                <h2 className="mt-1 truncate text-lg font-semibold text-white">
                  {game.name}
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-white/10 bg-[#1f2125] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#949ba4]">
                    Jogadores mensais
                  </p>
                  <p className="mt-1 font-mono text-2xl font-semibold tracking-tight text-white">
                    {indicator?.label}
                  </p>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-cyan-200">
                  estimativa
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-300 to-blue-500 transition-all duration-500"
                  style={{ width: `${indicatorWidth}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-[#737b85]">
                <span>escala comparativa</span>
                <span>
                  maior indicador: {getIndicatorValue(games[0].status).label}
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#1f2125] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#949ba4]">
                    Temas identificados
                  </p>
                  <p className="mt-1 text-xs text-[#dfe4ea]/70">
                    Encontradas nos casos e na descrição
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-cyan-300/70 border-r-rose-400 border-b-amber-300 text-xs font-semibold text-white">
                  {topics.filter((topic) => topic.active).length}/
                  {topics.length}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
                {topics.map((topic) => (
                  <div key={topic.label}>
                    <div className="mb-1 flex items-center justify-between text-[10px]">
                      <span className="text-[#dfe4ea]/75">{topic.label}</span>
                      <span
                        className={
                          topic.active ? "text-cyan-200" : "text-[#606872]"
                        }
                      >
                        {topic.active ? "citado" : "—"}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/8">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${topic.active ? "w-full bg-cyan-300" : "w-1/5 bg-white/15"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#1f2125] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#949ba4]">
                Descrição
              </p>
              <p className="mt-2 text-sm leading-6 text-[#dfe4ea]/85">
                {game.description}
              </p>
            </div>
            <div className="space-y-2 rounded-xl border border-white/10 bg-[#1f2125] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-cyan-300/10 bg-cyan-300/5 p-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200/70">
                    Atividade diária
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/85">
                    {game.dailyActivity}
                  </p>
                </div>

                <div className="rounded-lg border border-amber-300/10 bg-amber-300/5 p-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200/70">
                    Pico simultâneo
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/85">
                    {game.simultaneousPeak}
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-[#2b2d31] p-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#949ba4]">
                  Casos mais comuns
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {game.prejudice}
                </p>
              </div>

              <div className="rounded-lg bg-[#2b2d31] p-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#949ba4]">
                  Evidência em destaque
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {game.stats}
                </p>
              </div>

              <div className="rounded-lg bg-[#2b2d31] p-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#949ba4]">
                  Observações
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {game.observations}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default InfoDisplayer;
