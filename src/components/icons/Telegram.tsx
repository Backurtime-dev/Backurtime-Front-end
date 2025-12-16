import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgTelegram = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1_5524"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path d="M0 1.90735e-06H24V24H0V1.90735e-06Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1_5524)">
      <path
        d="M21.78 2.67628L1.46504 10.4311C0.434589 10.8245 0.451557 11.4197 1.50259 11.7541L6.06657 13.06L8.46559 19.9204C8.82962 20.9615 9.79131 21.202 10.6026 20.455L13.6548 17.6448L17.944 21.0986C18.8156 21.7745 19.7077 21.4431 19.9266 20.3622L23.2552 3.92643C23.4741 2.84559 22.8103 2.28309 21.78 2.67628Z"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.12793 13.0285L18.3533 6.78274L10.5124 15.1143L9.12516 20.7327"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5498 15.1443L17.9073 21.0687"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
export default SvgTelegram;
