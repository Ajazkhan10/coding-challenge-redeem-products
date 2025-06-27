import React from "react";
import classNames from "classnames";

interface SortByButtonsProps {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
}

const SortByButtons: React.FC<SortByButtonsProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="w-fit flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 whitespace-nowrap">
      <p className="w-fit body hidden md:block">Sort by:</p>
      <div className="w-fit flex gap-2 whitespace-nowrap">
        {options?.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={classNames(
              "w-fit text-center body font-semibold py-2 px-3 rounded-lg border transition",
              selected === opt
                ? "bg-textGradient text-white"
                : "text-[#252F3D] bg-textGradient bg-clip-text text-transparent"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortByButtons;
