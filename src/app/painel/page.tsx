import GameDetails from "@/components/GameDetails";
import InfoDisplayer from "@/components/InfoDisplayer";
import Selector from "@/components/Selector";

export default function PainelPage() {
  return (
    <div className="flex h-dvh min-h-0 overflow-hidden">
      <div className="w-[240px] shrink-0">
        <GameDetails />
      </div>

      <div className="min-w-0 flex-[2]">
        <Selector />
      </div>

      <div className="w-[260px] shrink-0">
        <InfoDisplayer />
      </div>
    </div>
  );
}
