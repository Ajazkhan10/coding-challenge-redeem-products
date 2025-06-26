import { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import AeroCard from "./AeroCard";
import Button from "../Button";
import classNames from "classnames";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [previewAmount, setPreviewAmount] = useState<number | null>(null);
  const [activeAmount, setActiveAmount] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setPreviewAmount(null); // reset preview on outside click
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const amountData = [1000, 5000, 7500];

  return (
    <nav className="w-full flex relative items-center justify-end h-[128px] max-w-[1446px] mx-auto px-4">
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-fit border border-[#DAE4F2] rounded-2xl hover:bg-purple-50 transition-colors ease-in-out duration-300 shadow-custom-xl py-2 px-4 group flex items-center gap-6 justify-between"
        >
          <p className="w-fit flex items-center gap-2 body !font-semibold ">
            <Icon icon="favicon" width={32} height={32} />
            <span className="bg-textGradient bg-clip-text text-transparent">
              {activeAmount ? `+${activeAmount}` : "10,000"}
            </span>
          </p>
          <Icon
            icon="arrow-up"
            width={24}
            height={24}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute right-0 z-50 mt-4 w-[280px] sm:w-[312px] bg-white border border-[#DAE4F2] rounded-2xl shadow-custom-xl py-4 flex flex-col">
            <p className="body w-full pb-4 px-6 border-b border-gray-200 !font-normal !text-[#252F3D]">
              Add Balance
            </p>
            <div className="w-full px-6 pt-6">
              <AeroCard />
              <div className="flex items-center gap-2 text-center pt-10 pb-6 overflow-x-auto">
                {amountData.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setPreviewAmount(amount)}
                    className={classNames(
                      "w-fit text-center body font-semibold py-1 px-3 rounded-lg border transition",
                      previewAmount === amount
                        ? "bg-card-background text-white"
                        : "bg-[#E5F0FF] text-[#252F3D]"
                    )}
                  >
                    +{amount}
                  </button>
                ))}
              </div>
              <Button
                variant="secondary"
                label={`Add Points${previewAmount ? ` +${previewAmount}` : ""}`}
                className="px-6 w-full"
                icon={<Icon icon="aerocard-icon" width={24} height={24} />}
                onClick={() => {
                  if (previewAmount !== null) {
                    setActiveAmount(previewAmount);
                    setOpen(false);
                    setPreviewAmount(null);
                  }
                }}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
