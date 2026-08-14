import GameDetails from "@/components/GameDetails";
import InfoDisplayer from "@/components/InfoDisplayer";
import Selector from "@/components/Selector";

export default function Home() {
  return (
    <div className="flex h-dvh ">
      <GameDetails></GameDetails>
      <Selector></Selector>
      <InfoDisplayer></InfoDisplayer>
    </div>
  );
}
