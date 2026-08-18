"use client";

import { CircleQuestionMark, House, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import IntegranteItem from "./IntegranteItem";

const navItems = [
  { key: "inicio", label: "Início", href: "/", icon: House },
  { key: "painel", label: "Painel", href: "/painel", icon: LayoutGrid },
  { key: "sobre", label: "Sobre", href: "/sobre", icon: CircleQuestionMark },
];

const GameDetails = () => {
  const pathname = usePathname();
  const activeTab =
    pathname === "/painel"
      ? "painel"
      : pathname === "/sobre"
        ? "sobre"
        : "inicio";

  return (
    <aside className="flex h-full w-[240px] flex-col gap-6 bg-[#1A1C20] p-4 text-white">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
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

      <div className="flex flex-col gap-3">
        <h2 className="px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
          Navegação
        </h2>
        <div className="flex flex-col gap-1">
          {navItems.map(({ key, label, href, icon: Icon }) => (
            <NavLink key={key} href={href} isActive={activeTab === key}>
              <Icon width={16} height={16} />
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 pt-2">
        <h2 className="px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
          Integrantes do Grupo
        </h2>
        <div className="flex flex-col gap-0.5">
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
