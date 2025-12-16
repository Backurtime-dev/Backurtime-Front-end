import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgLoadMore = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M14.8901 5.07999C14.0201 4.81999 13.0601 4.64999 12.0001 4.64999C7.21008 4.64999 3.33008 8.52999 3.33008 13.32C3.33008 18.12 7.21008 22 12.0001 22C16.7901 22 20.6701 18.12 20.6701 13.33C20.6701 11.55 20.1301 9.88999 19.2101 8.50999"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.1302 5.32L13.2402 2"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.1298 5.32001L12.7598 7.78001"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLoadMore;
