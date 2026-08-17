import Image from "next/image";
import { InstagramIcon } from "./icons/lucide-instagram";

type IntegranteItemProps = {
  integrante: string;
  number?: string;
};

const IntegranteItem = ({ integrante, number }: IntegranteItemProps) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-white/5">
      <div className="flex items-center gap-2.5 overflow-hidden">
        <div className="shrink-0">
          <Image
            src={`/integrantes-${number}.jpg`}
            alt={integrante}
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover ring-1 ring-white/10"
          />
        </div>

        {integrante && (
          <h3 className="truncate text-sm text-white/80">{integrante}</h3>
        )}
      </div>

      <InstagramIcon
        width={16}
        height={16}
        className="shrink-0 text-white/25 transition-colors hover:text-white/50"
      />
    </div>
  );
};

export default IntegranteItem;
