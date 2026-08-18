import type { GameData } from "./Selector";

type InfoDisplayerProps = {
  game: GameData;
};

const InfoDisplayer = ({ game }: InfoDisplayerProps) => {
  return (
    <aside className="flex h-full w-full flex-col bg-[#171a1d] px-4 py-4 text-white">
      <div className="border-b border-white/10 pb-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b5bac1]">
          Jogo selecionado
        </p>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-[#1d1f22] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="flex items-center gap-3">
          <div
            className={`h-10 w-10 rounded-xl bg-linear-to-br ${game.accent} shadow-inner shadow-black/20`}
          />
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#949ba4]">
              Projeto
            </p>
            <h2 className="mt-1 truncate text-lg font-semibold text-white">
              {game.name}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="rounded-xl border border-white/10 bg-[#1f2125] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#949ba4]">
            Descrição
          </p>
          <p className="mt-2 text-sm leading-6 text-[#dfe4ea]/85">
            {game.description}
          </p>
        </div>

        <div className="space-y-2 rounded-xl border border-white/10 bg-[#1f2125] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="rounded-lg bg-[#2b2d31] p-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#949ba4]">
              Jogadores mensais
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {game.players}
            </p>
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
              Estatísticas importantes
            </p>
            <p className="mt-1 text-sm font-medium text-white">{game.stats}</p>
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
    </aside>
  );
};

export default InfoDisplayer;
