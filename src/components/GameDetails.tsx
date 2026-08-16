import { BowArrow, CircleQuestionMark, House, LayoutGrid } from "lucide-react";
import NavLink from "./NavLink";
import IntegranteItem from "./IntegranteItem";

const GameDetails = () => {
  return (
    <div className="flex flex-12 flex-col gap-10 h-[100% - 16px] bg-[#1A1C20] border border-marine-800 p-6">
      {/* logo */}
      <div className="flex h-max pb-2">
        {/* image */}
        <div className="w-15 bg-gray-600 mr-2 rounded-full"></div>
        <div className="flex flex-col p-2 gap-1.5 h-15 font-sans">
          <h1 className="text-sm font-bold text-white">Nome aqui</h1>
          <h2 className="text-xs text-white/60">Informações sobre jogos</h2>
        </div>
      </div>
      {/* separator */}
      <div className="bg-marine-800 h-px -m-6 w-[100% + 24px] " />

      <div className="flex flex-col justify-between h-full">
        {/* Navigation */}
        <div className="flex flex-col h-max gap-4">
          <h2 className="text-xs uppercase font-light text-white/40 tracking-widest font-inter">
            Navegação
          </h2>
          <div className="flex flex-col gap-1">
            <NavLink isActive={true}>
              <LayoutGrid width={18} height={18} />
              Painel
            </NavLink>
            <NavLink isActive={false}>
              <CircleQuestionMark width={18} height={18} />
              Sobre
            </NavLink>
            <NavLink isActive={false}>
              <House width={18} height={18} />
              Início
            </NavLink>
          </div>
          <h2 className="text-xs uppercase font-light text-white/40 tracking-widest font-inter">
            Categorias
          </h2>
          <div className="flex flex-col gap-1">
            <NavLink isActive={false}>
              <BowArrow width={18} height={18} />
              FPS
            </NavLink>
            <NavLink isActive={false}>
              <CircleQuestionMark width={18} height={18} />
              BATTLE ROYALE
            </NavLink>
            <NavLink isActive={false}>
              <House width={18} height={18} />
              MOBA
            </NavLink>
          </div>
        </div>
        {/* Other content */}
        <div className="flex flex-col gap-3 ">
          <h2 className="text-xs uppercase font-light text-white/40 tracking-widest font-inter">
            Integrantes
          </h2>
          <div className="flex flex-col gap-1.5">
            <IntegranteItem integrante="Alexandre P." number="1" />
            <IntegranteItem integrante="João Vitor A." number="2" />
            <IntegranteItem integrante="João Gabriel R." number="3" />
            <IntegranteItem integrante="Lucas M." number="4" />
            <IntegranteItem integrante="Rafael C." number="5" />
            <IntegranteItem integrante="Victor K." number="6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
