"use client";

import GameDetails from "@/components/GameDetails";
import InfoDisplayer from "@/components/InfoDisplayer";
import Selector, { games } from "@/components/Selector";
import { useState } from "react";

export default function PainelPage() {
  const [selectedGame, setSelectedGame] = useState(games[0]);

  return (
    <div className="flex h-dvh min-h-0 overflow-hidden max-[1024px]:flex-col max-[1024px]:overflow-y-auto max-[1024px]:bg-[#101214]">
      <div className="w-60 shrink-0 max-[1024px]:w-full">
        <GameDetails />
      </div>

      <div className="min-w-0 flex-1 max-[1024px]:w-full max-[1024px]:min-w-0">
        <Selector selectedGame={selectedGame} onSelectGame={setSelectedGame} />
      </div>

      <div className="xl:w-105 lg:w-90 w-full shrink-0 max-[1024px]:w-full">
        <InfoDisplayer game={selectedGame} />
      </div>
    </div>
  );
}
