"use client";

import {
  CircleQuestionMark,
  FlaskConical,
  House,
  LayoutGrid,
} from "lucide-react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

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
    <header className="flex w-full shrink-0 flex-row items-center justify-between gap-6 border-b border-white/10 bg-[#1A1C20] px-8 py-4 text-white max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-3 max-[640px]:px-5">
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
      </div>
    </header>
  );
};

export default GameDetails;
