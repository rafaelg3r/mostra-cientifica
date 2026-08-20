import GameDetails from "@/components/GameDetails";

export default function SobrePage() {
  return (
    <div className="flex h-dvh flex-col">
      <GameDetails />
      <main className="flex flex-1 items-center justify-center bg-[#101214] p-8 text-white">
        <div className="max-w-xl rounded-lg border border-marine-800 bg-[#1A1C20] p-8">
          <h1 className="mb-4 text-3xl font-bold">Sobre</h1>
          <p className="text-white/70">
            Esta página foi criada para representar a seção de informações
            gerais sobre o projeto.
          </p>
        </div>
      </main>
    </div>
  );
}
