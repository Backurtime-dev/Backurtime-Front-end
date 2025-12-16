import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const SvgApple = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1_5061"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path d="M0 1.90735e-06H24V24H0V1.90735e-06Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1_5061)">
      <path
        d="M18.1786 12.6928C18.1786 10.2669 19.8454 9.02629 20.5918 8.46318C19.0276 6.11427 16.2187 6.23221 16.1327 6.23221C14.4279 6.23221 13.0005 7.2583 12.2213 7.2583C11.3031 7.2583 9.72243 6.28363 8.48488 6.28363C8.33615 6.28363 2.88379 6.45979 2.88379 12.9746C2.88379 16.659 5.83574 23.2805 8.71105 23.2968C10.1488 23.305 11.3744 22.3747 12.4651 22.3747C14.1737 22.3747 14.6901 23.3071 16.1278 23.3071C19.0031 23.3071 21.1628 17.4149 21.1628 17.3744C21.1628 17.129 18.1786 16.2732 18.1786 12.6928Z"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4922 0.70316C16.5807 3.89422 14.2986 6.10803 12.0192 5.96919C11.6436 3.42266 14.2984 0.70316 16.4922 0.70316Z"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default SvgApple;
