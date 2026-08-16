import Image from "next/image";
import { InstagramIcon } from "./icons/lucide-instagram";

type IntegranteItemProps = {
  integrante: string;
  number?: string;
};

const IntegranteItem = ({ integrante, number }: IntegranteItemProps) => {
  return (
    <div className="flex items-center justify-between text-sm py-2.5 bg-marine-800/30 px-3 rounded-md cursor-pointer ">
      <div className="flex items-center gap-3">
        <Image
          src={`/integrantes-${number}.jpg`}
          alt="Integrante"
          width={32}
          height={32}
          className="rounded-full max-h-8 object-cover"
        />
        {integrante && <h3 className="text-white/90">{integrante}</h3>}
      </div>
      <InstagramIcon width={24} height={24} className="text-white/40" />
    </div>
  );
};

export default IntegranteItem;
