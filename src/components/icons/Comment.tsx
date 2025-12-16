import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const SvgComment = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M3 12C3 16.9706 7.02944 21 12 21C13.7711 21 15.4226 20.4884 16.815 19.605L21 21L19.605 16.815C20.4884 15.4226 21 13.7711 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComment;
