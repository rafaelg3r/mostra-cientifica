"use client";

import {
  CircleQuestionMark,
  FlaskConical,
  House,
  LayoutGrid,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import IntegranteItem from "./IntegranteItem";
import NavLink from "./NavLink";

const navItems = [
  { key: "inicio", label: "Início", href: "/", icon: House },
  { key: "painel", label: "Painel", href: "/painel", icon: LayoutGrid },
  { key: "sobre", label: "Sobre", href: "/sobre", icon: CircleQuestionMark },
];

const GameDetails = () => {
  const pathname = usePathname();
  const [isMembersOpen, setIsMembersOpen] = useState(false);

  const activeTab =
    pathname === "/painel"
      ? "painel"
      : pathname === "/sobre"
        ? "sobre"
        : "inicio";

  return (
    <header className="relative flex w-full shrink-0 flex-row items-center justify-between gap-6 border-b border-white/10 bg-[#1A1C20] px-8 py-4 text-white max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-3 max-[640px]:px-5">
      <div className="flex shrink-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500">
          <FlaskConical className="text-white" width={18} height={18} />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold text-white">
            Mostra Científica 2026
          </h1>
          <h2 className="truncate text-[11px] text-white/50">
            Dados sobre preconceitos nos Jogos Digitais
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 max-[640px]:w-full max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-2">
        <div className="flex items-center justify-between gap-2">
          <h2 className="hidden px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
            Navegação
          </h2>
        </div>

        <div className="flex flex-row gap-1 max-[640px]:flex-wrap">
          {navItems.map(({ key, label, href, icon: Icon }) => (
            <NavLink key={key} href={href} isActive={activeTab === key}>
              <Icon width={16} height={16} />
              {label}
            </NavLink>
          ))}
        </div>

        <div className="relative max-[640px]:w-full">
          <button
            type="button"
            onClick={() => setIsMembersOpen((open) => !open)}
            aria-expanded={isMembersOpen}
            className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-white/70 transition hover:bg-white/5 hover:text-white max-[640px]:w-full max-[640px]:justify-center"
          >
            <Users width={15} height={15} />
            Integrantes
          </button>

          {isMembersOpen && (
            <div className="absolute right-0 top-full z-20 mt-2 w-64 rounded-lg border border-white/10 bg-[#1A1C20] p-3 shadow-2xl max-[640px]:left-0 max-[640px]:right-auto max-[640px]:w-full">
              <h2 className="mb-2 px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                Integrantes do grupo
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
          )}
        </div>
      </div>
    </header>
  );
};

export default GameDetails;
