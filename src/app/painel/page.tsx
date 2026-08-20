"use client";

import GameDetails from "@/components/GameDetails";
import InfoDisplayer from "@/components/InfoDisplayer";
import Selector, { games } from "@/components/Selector";
import { useState } from "react";

export default function PainelPage() {
  const [selectedGame, setSelectedGame] = useState<
    (typeof games)[number] | undefined
  >();

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-[#101214]">
      <GameDetails />

      <div className="flex min-h-0 flex-1 overflow-hidden max-[1024px]:flex-col max-[1024px]:overflow-y-auto">
        <div className="min-w-0 flex-1 max-[1024px]:w-full min-[1441px]:!w-2/3 min-[1441px]:!flex-none">
          <Selector
            selectedGame={selectedGame}
            onSelectGame={setSelectedGame}
          />
        </div>

        <div className="xl:w-105 lg:w-90 w-full shrink-0 max-[1024px]:w-full min-[1441px]:!w-1/3">
          <InfoDisplayer game={selectedGame} />
        </div>
      </div>
    </div>
  );
}
