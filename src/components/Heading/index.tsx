import React from "react";

type HeadingProps = {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string | number;
  className?: string;
  children?: React.ReactNode;
};

const headingStyles: Record<string, string> = {
  h1: "font-Montserrat !m-0 text-[96px] lg:text-[200px] !font-black leading-[80%] tracking-[0] uppercase",
  h2: "font-Montserrat !m-0 text-[32px] lg:text-[48px] !font-black leading-[80%] tracking-[0] uppercase",
  h3: "!font-black text-[24px] lg:text-[32px] leading-[100%] m-0 font-Montserrat uppercase",
  h4: "font-bebas font-normal tracking-[2%] text-h4-mobile md:text-h4-desktop",
  h5: "font-bebas font-normal tracking-[2%] text-h4-mobile md:text-h4-desktop",
};

export const Heading: React.FC<HeadingProps> = ({
  type = "h1",
  text = "",
  className = "",
  children,
}) => {
  const Tag = type;
  const classes = `${headingStyles[type]} font-bold ${className}`;

  return <Tag className={classes}>{text || children}</Tag>;
};
