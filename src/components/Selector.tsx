"use client";

import { useState } from "react";

const games = [
  { name: "Game 01", accent: "from-cyan-500/80 to-blue-600/80" },
  { name: "Game 02", accent: "from-violet-500/80 to-purple-600/80" },
  { name: "Game 03", accent: "from-emerald-500/80 to-teal-600/80" },
  { name: "Game 04", accent: "from-amber-500/80 to-orange-600/80" },
  { name: "Game 05", accent: "from-rose-500/80 to-pink-600/80" },
  { name: "Game 06", accent: "from-slate-500/80 to-zinc-700/80" },
  { name: "Game 07", accent: "from-lime-500/80 to-green-600/80" },
  { name: "Game 08", accent: "from-red-500/80 to-rose-600/80" },
  { name: "Game 09", accent: "from-indigo-500/80 to-violet-600/80" },
  { name: "Game 10", accent: "from-fuchsia-500/80 to-pink-700/80" },
  { name: "Game 11", accent: "from-yellow-500/80 to-amber-600/80" },
  { name: "Game 12", accent: "from-sky-500/80 to-cyan-700/80" },
];

const HEX_SIZE = 50;
const HEX_WIDTH = HEX_SIZE * 1.732;
const HEX_HEIGHT = HEX_SIZE * 2;
const ROW_OFFSET = HEX_WIDTH / 2;
const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const rows = [games.slice(0, 4), games.slice(4, 8), games.slice(8, 12)];

const Selector = () => {
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
            row.map((game, columnIndex) => (
              <button
                key={`${rowIndex}-${game.name}`}
                type="button"
                className="group relative flex cursor-pointer items-center justify-center transition-transform duration-200 hover:-translate-y-1"
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
                  className={`flex h-full w-full items-center justify-center bg-linear-to-br ${game.accent} shadow-inner shadow-black/20`}
                  style={{ clipPath: HEX_CLIP }}
                />
              </button>
            )),
          )}
        </div>

        {tooltip && (
          <div
            className="pointer-events-none fixed z-[9999] whitespace-nowrap rounded-md border border-white/10 bg-[#171a1d]/95 px-2.5 py-1 text-[10px] font-medium text-white/80 shadow-lg"
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
