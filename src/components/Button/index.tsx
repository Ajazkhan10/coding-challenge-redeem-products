import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Icon from "../Icon/Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  label?: string;
  slug?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  slug,
  ...props
}) => {
  const variantStyles = {
    primary:
      "w-fit group flex items-center whitespace-nowrap cursor-pointer justify-center gap-2 text-white text-base lg:text-[18px] hover:bg-black font-Montserrat hover:opacity-70 border-none outline-none font-semibold px-10 py-5 lg:py-[26px] rounded-full bg-custom-gradient shadow-custom-sm transition-transform duration-300",
    secondary:
      "py-[2px] px-[35px] rounded-full md:py-[14px] md:px-[58px] font-bebas hover:bg-secondary_dark_blue text-white rounded-[64px] text-sm md:text-2xl tracking-[2%] leading-7 font-medium hover:opacity-90 opacity-100 bg-secondary_deep_blue transition duration-300 ease-in-out",
  };

  const combinedClasses = classNames(variantStyles[variant], className);

  const content = (
    <>
      {label}
      {variant === "primary" && (
        <Icon icon="button-icon" width={18} height={18} className="transition-transform duration-300 group-hover:rotate-0"/>
      )}
    </>
  );

  if (slug) {
    return (
      <Link href={slug} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
