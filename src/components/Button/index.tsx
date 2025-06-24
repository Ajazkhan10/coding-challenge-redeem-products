import React from "react";
import classNames from "classnames";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tabButton";
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
      "bg-primary_orange px-6 py-3 rounded-full text-white hover:opacity-90 font-bebas font-medium text-2xl leading-7 tracking-[2%] text-center transition duration-300 ease-in-out",
    secondary:
      "py-[2px] px-[35px] rounded-full md:py-[14px] md:px-[58px] font-bebas hover:bg-secondary_dark_blue text-white rounded-[64px] text-sm md:text-2xl tracking-[2%] leading-7 font-medium hover:opacity-90 opacity-100 bg-secondary_deep_blue transition duration-300 ease-in-out",
    tabButton:
      "rounded-lg px-3 md:px-6 py-3 font-Roboto capitalize text-base md:text-lg bg-secondary_light_blue  hover:bg-primary_orange text-white font-medium leading-7 tracking-[2%] text-center",
  };

  const combinedClasses = classNames(
    variantStyles[variant],
    className
  );



  if (slug) {
    return (
      <Link href={slug} className={combinedClasses}>
            {label && label}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
          {label && label}
    </button>
  );
};

export default Button;
