import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const SvgAndroid = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1_5094"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path d="M0 1.90735e-06H24V24H0V1.90735e-06Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1_5094)">
      <path
        d="M16.6875 18.5156H13.875V21.8906C13.875 22.6672 14.5046 23.2969 15.2812 23.2969C16.0579 23.2969 16.6875 22.6672 16.6875 21.8906V18.5156Z"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 11.0156H18.0938V15.2344C18.0938 16.011 18.7234 16.6406 19.5 16.6406C20.2766 16.6406 20.9062 16.011 20.9062 15.2344V12.4219C20.9062 11.6452 20.2766 11.0156 19.5 11.0156Z"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.90625 11.0156H4.5C3.72337 11.0156 3.09375 11.6452 3.09375 12.4219V15.2344C3.09375 16.011 3.72337 16.6406 4.5 16.6406C5.27663 16.6406 5.90625 16.011 5.90625 15.2344V11.0156Z"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0937 11.0156H5.90625V18.5156H18.0937V11.0156Z"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.3125 18.5156H10.125V21.8906C10.125 22.6672 9.49538 23.2969 8.71875 23.2969C7.94212 23.2969 7.3125 22.6672 7.3125 21.8906V18.5156Z"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0942 0.703126L16.0752 3.39516"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.92525 3.39514L5.90625 0.70311"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1.64063C8.89341 1.64063 6.375 4.15903 6.375 7.26563V8.20312H17.625V7.26563C17.625 4.15903 15.1066 1.64063 12 1.64063Z"
        stroke="#DCDCDC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default SvgAndroid;
