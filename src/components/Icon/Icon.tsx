import React, { CSSProperties, SVGAttributes } from "react";

type IconProps = SVGAttributes<SVGElement> & {
  icon: string;
  iconColor?: CSSProperties;
  iconWidth?: number;
  iconHeight?: number;
  otherClasses?: string;
};

const Icon: React.FC<IconProps> = ({
  icon,
  iconColor,
  iconWidth = 26,
  iconHeight = 26,
  otherClasses,
  ...props
}) => {
  return (
    <svg
      className={otherClasses}
      data-testid="icon"
      style={iconColor}
      width={iconWidth}
      height={iconHeight}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use href={`/sprite.svg#${icon}`} xlinkHref={`/sprite.svg#${icon}`} />
    </svg>
  );
};

export default Icon;