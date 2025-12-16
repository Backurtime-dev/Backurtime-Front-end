import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgFaqCircle = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M8 7.03863L8.46813 5.63423C9.45044 2.68731 13.3382 2.0564 15.202 4.54146C16.2938 5.99715 16.2176 8.01836 15.0194 9.38776L13.7361 10.8544C12.7384 11.9947 12.1884 13.4583 12.1884 14.9734V15.4155"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z"
      fill="#DCDCDC"
    />
  </svg>
);
export default SvgFaqCircle;
