import { LayoutGrid } from "lucide-react";

const GameDetails = () => {
  return (
    <div className="flex flex-col gap-10 h-[100% - 16px] bg-[#1A1C20] border border-white/10 m-4 p-4 rounded-md">
      {/* logo */}
      <div className="flex h-max">
        {/* image */}
        <div className="w-15 bg-gray-600 mr-2 rounded-full"></div>
        <div className="flex flex-col p-2 gap-1.5 h-15 font-sans">
          <h1 className="text-sm font-bold text-white">Nome aqui</h1>
          <h2 className="text-xs text-white/60">Informações sobre jogos</h2>
        </div>
      </div>
      {/* panel */}
      <div className="flex flex-col gap-6 h-max">
        <h2 className="text-sm text-white/40 tracking-widest font-mono">
          VISÃO GERAL
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 text-sm text-white/60 p-3 bg-white/10 rounded-full">
            <LayoutGrid width={18} height={18} />
            Painel
          </li>
          <li className="flex items-center gap-2 text-sm text-white/60 py-2.5 px-4 bg-white/10 rounded-full">
            Gênero
          </li>
          <li className="flex items-center gap-2 text-sm text-white/60 py-2.5 px-4 bg-white/10 rounded-full">
            Plataformas
          </li>
        </ul>
      </div>
      {/* game list */}
      <div className="flex"></div>
    </div>
  );
};

export default GameDetails;
