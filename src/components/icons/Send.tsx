import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const SvgSend = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_1_5179)">
      <mask
        id="mask0_1_5179"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="-7"
        y="-4"
        width="32"
        height="32"
      >
        <path
          d="M8.55635 26.4957L23.052 12L8.55635 -2.49569L-5.93934 12L8.55635 26.4957Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
        />
      </mask>
      <g mask="url(#mask0_1_5179)">
        <path
          d="M20.7677 9.92744C17.4054 7.2787 7.8023 2.40808 4.79774 2.40808C3.34443 2.40808 2.86525 3.17699 2.8881 4.26466C2.9235 5.95474 4.23576 8.67042 5.1679 10.3936C5.70957 11.3949 5.71085 12.602 5.16851 13.603C4.21762 15.358 2.87081 18.1473 2.88807 19.8392C2.89861 20.872 3.3908 21.5926 4.79773 21.5926C7.8023 21.5926 17.4054 16.722 20.7677 14.0733C22.5067 12.7032 22.5067 11.2975 20.7677 9.92744Z"
          stroke="#DCDCDC"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.86133 12.0004H17.3079"
          stroke="#DCDCDC"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_5179">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSend;
