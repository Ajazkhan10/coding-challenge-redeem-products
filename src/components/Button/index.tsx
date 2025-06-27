import React, { ReactNode } from "react";
import classNames from "classnames";
import Link from "next/link";
import Icon from "../Icon/Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  label?: string;
  slug?: string;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  variant = "primary",
  className,
  slug,
  ...props
}) => {
  const variantStyles = {
    primary:
      "w-fit group flex items-center whitespace-nowrap cursor-pointer justify-center gap-2 text-white text-base lg:text-[18px] hover:bg-black font-Montserrat hover:opacity-70 border-none outline-none font-semibold px-10 py-5 lg:py-[26px] rounded-full bg-custom-gradient shadow-custom-sm transition-transform duration-300",
    secondary:
      "w-fit group flex items-center whitespace-nowrap cursor-pointer justify-center gap-2 text-white text-base font-Montserrat border-none outline-none font-semibold px-10 py-3  rounded-full bg-custom-gradient shadow-custom-sm transition-transform duration-300",
  };

  const combinedClasses = classNames(variantStyles[variant], className);

  const content = (
    <>
      {icon && variant === "secondary" && icon}
      {label}
      {variant === "primary" && (
        <Icon
          icon="button-icon"
          width={18}
          height={18}
          className="transition-transform duration-300 group-hover:rotate-0"
        />
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
    <button aria-label="primary-button" className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
