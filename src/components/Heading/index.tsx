import React from "react";

type HeadingProps = {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string;
  className?: string;
  children?: React.ReactNode;
};

const headingStyles: Record<string, string> = {
  h1: "font-bebas font-bold tracking-[2%] text-h1-mobile md:text-h1-desktop",
  h2: "font-bebas font-normal tracking-[2%] text-h2-mobile md:text-h2-desktop",
  h3: "font-bebas font-normal tracking-[2%] text-h3-mobile md:text-h3-desktop",
  h4: "font-bebas font-normal tracking-[2%] text-h4-mobile md:text-h4-desktop",
  h5: "font-bebas font-normal tracking-[2%] text-h4-mobile md:text-h4-desktop",
};

const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const Heading: React.FC<HeadingProps> = ({
  type = "h2",
  text = "",
  className = "",
  children,
}) => {
  const Tag = type;
  const classes = `${headingStyles[type]} font-bold ${className}`;

  const renderContent = () => {
    if (typeof children === "string") {
      return toTitleCase(children);
    } else if (children) {
      return children;
    } else {
      return toTitleCase(text);
    }
  };

  return <Tag className={classes}>{renderContent()}</Tag>;
};
