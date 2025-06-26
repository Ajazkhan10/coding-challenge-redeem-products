import Image from "next/image";
import Icon from "../Icon/Icon";

const AeroCard = () => {
  return (
    <div className="relative w-full h-[150px] rounded-xl overflow-hidden bg-black text-white p-4 flex flex-col justify-between shadow-custom-xl">

      <div className="flex justify-between items-center">
        <p className="body !text-white">Aerocard</p>
        <Icon icon="aerocard-icon" width={24} height={24} />
      </div>

      <div className="flex justify-between items-center">
        <p className="body !text-white">John Kite</p>
        <p className="body !text-white">07/23</p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60px] pointer-events-none">
        <Image
          src="/assets/wave-pethern-image.png"
          alt="wave-pethern"
          width={264}
          height={148}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </div>
  );
};

export default AeroCard;
