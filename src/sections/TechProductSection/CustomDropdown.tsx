import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import Icon from "@/src/components/Icon/Icon";

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative md:w-56" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-[#DAE4F2] rounded-lg px-4 py-3 body text-sm hover:bg-blue-50 text-left flex items-center justify-between bg-white"
      >
        <span>{value || placeholder}</span>
        <Icon
          icon="filter-dropdown-icon"
          width={16}
          height={16}
          otherClasses={classNames(
            "transition-all ease-in-out duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full flex flex-col border border-[#DAE4F2] rounded-lg bg-white mt-1 shadow-custom-xl">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={classNames(
                "w-full text-left px-4 py-3 hover:bg-blue-50 body text-sm",
                opt === value ? "bg-[#F5F9FF] font-semibold" : ""
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
