"use client";

import { CircleQuestionMark, House, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLink from "./NavLink";
import IntegranteItem from "./IntegranteItem";

const navItems = [
  { key: "inicio", label: "Início", href: "/", icon: House },
  { key: "painel", label: "Painel", href: "/painel", icon: LayoutGrid },
  { key: "sobre", label: "Sobre", href: "/sobre", icon: CircleQuestionMark },
];

const GameDetails = () => {
  const pathname = usePathname();
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const isHome = pathname === "/";

  const activeTab =
    pathname === "/painel"
      ? "painel"
      : pathname === "/sobre"
        ? "sobre"
        : "inicio";

  return (
    <aside
      className={`flex bg-[#1A1C20] text-white ${
        isHome
          ? "w-full flex-row items-center justify-between gap-6 border-b border-white/10 px-8 py-4 max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-3 max-[640px]:px-5"
          : "h-full w-60 flex-col  gap-6 p-4 max-[1024px]:h-auto max-[1024px]:w-full max-[1024px]:gap-3 max-[1024px]:rounded-b-xl max-[1024px]:border-b max-[1024px]:border-white/10"
      }`}
    >
      <div
        className={`flex items-center gap-3 border-white/10 ${
          isHome ? "shrink-0" : "border-b pb-4 max-[1024px]:pb-3"
        }`}
      >
        <div className="h-9 w-9 rounded-full bg-gray-600" />
        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold text-white">
            Nome aqui
          </h1>
          <h2 className="truncate text-[11px] text-white/50">
            Informações sobre jogos
          </h2>
        </div>
      </div>

      <div
        className={`flex gap-3 max-[1024px]:gap-2 ${
          isHome
            ? "items-center max-[640px]:w-full max-[640px]:flex-col max-[640px]:items-stretch"
            : "flex-col"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <h2
            className={`px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35 ${
              isHome ? "hidden" : ""
            }`}
          >
            Navegação
          </h2>

          <button
            type="button"
            onClick={() => setIsMembersOpen((open) => !open)}
            className={`flex items-center justify-center rounded-md border border-white/10 bg-white/3 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-white/35 transition hover:bg-white/5 lg:hidden ${
              isHome ? "hidden" : ""
            }`}
            aria-label="Alternar integrantes"
          >
            <span>Integrantes</span>
            <span className="ml-1 text-[11px] text-white/60">
              {isMembersOpen ? "−" : "+"}
            </span>
          </button>
        </div>

        <div
          className={`flex gap-1 ${
            isHome
              ? "flex-row max-[640px]:flex-wrap"
              : "flex-col max-[1024px]:flex-row max-[1024px]:flex-wrap"
          }`}
        >
          {navItems.map(({ key, label, href, icon: Icon }) => (
            <NavLink key={key} href={href} isActive={activeTab === key}>
              <Icon width={16} height={16} />
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col gap-3 pt-2 max-[1024px]:pt-0 ${
          isHome ? "hidden" : ""
        }`}
      >
        <h2 className="px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35 max-[1024px]:hidden">
          Integrantes do Grupo
        </h2>

        <div
          className={`${
            isMembersOpen ? "block" : "hidden"
          } flex flex-col gap-0.5 max-[1024px]:rounded-lg max-[1024px]:border max-[1024px]:border-white/10 max-[1024px]:bg-white/3 max-[1024px]:p-2 lg:block`}
        >
          <IntegranteItem integrante="Alexandre P." number="1" />
          <IntegranteItem integrante="João Vitor A." number="2" />
          <IntegranteItem integrante="João Gabriel R." number="3" />
          <IntegranteItem integrante="Lucas M." number="4" />
          <IntegranteItem integrante="Rafael C." number="5" />
          <IntegranteItem integrante="Victor K." number="6" />
        </div>
      </div>
    </aside>
  );
};

export default GameDetails;
