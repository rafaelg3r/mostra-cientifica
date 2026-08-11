import GameDetails from "@/components/GameDetails";
import InfoDisplayer from "@/components/InfoDisplayer";
import Selector from "@/components/Selector";

export default function Home() {
  return (
    <div className="flex h-full bg-amber-600">
      <GameDetails></GameDetails>
      <Selector></Selector>
      <InfoDisplayer></InfoDisplayer>
    </div>
  );
}
