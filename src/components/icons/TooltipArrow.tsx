import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
};

const TooltipArrow = ({ width = 9, height = 8, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 9 8"
    fill="none"
    {...props}
  >
    <path
      d="M5.33185 0.5C4.94695 -0.166667 3.98469 -0.166666 3.59979 0.5L0.135694 6.5C-0.249207 7.16667 0.231919 8 1.00172 8H7.92992C8.69972 8 9.18085 7.16667 8.79595 6.5L5.33185 0.5Z"
      fill="white"
    />
  </svg>
);
export default TooltipArrow;
