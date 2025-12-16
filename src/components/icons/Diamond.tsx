import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgDiamond = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1_5293"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path d="M0 1.90735e-06H24V24H0V1.90735e-06Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1_5293)">
      <path
        d="M23.2926 9.63537C23.2733 9.83923 23.1894 10.0373 23.0426 10.1961L12.7046 21.3932C12.5617 21.5486 12.3799 21.6451 12.189 21.6834C12.0643 21.7079 11.9357 21.7079 11.811 21.6834C11.6201 21.6451 11.4383 21.5486 11.2954 21.3932L0.957329 10.1961C0.810563 10.0373 0.726609 9.83923 0.707437 9.63537C0.686812 9.41857 0.740063 9.19549 0.869578 9.00509L5.15597 2.71699C5.33442 2.45506 5.63133 2.29821 5.94839 2.29821H18.0516C18.3687 2.29821 18.6656 2.45506 18.844 2.71699L23.1304 9.00509C23.2599 9.19549 23.3132 9.41857 23.2926 9.63537Z"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0001 21.6834L6.99805 9.63535L10.5453 2.29819"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 21.6834L17.0021 9.63536L13.4549 2.29821"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.707031 9.63538H6.99752H17.0017H23.2922"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
export default SvgDiamond;
