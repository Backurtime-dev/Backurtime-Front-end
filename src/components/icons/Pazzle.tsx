import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgPazzle = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1_5537"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="22"
      height="22"
    >
      <path d="M23 1H1V23H23V1Z" fill="#DCDCDC" />
    </mask>
    <g mask="url(#mask0_1_5537)">
      <mask
        id="mask1_1_5537"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="22"
        height="22"
      >
        <path d="M1 1H23V23H1V1Z" fill="white" />
      </mask>
      <g mask="url(#mask1_1_5537)">
        <path
          d="M18.7604 10.3099V6.92966C18.7604 5.99625 18.0037 5.23957 17.0703 5.23957H13.6901C13.6901 3.37275 12.1767 1.85935 10.3099 1.85935C8.44305 1.85935 6.92969 3.37275 6.92969 5.23957H3.54947C2.61601 5.23957 1.85938 5.99625 1.85938 6.92966V10.3099C3.7262 10.3099 5.23956 11.8232 5.23956 13.6901C5.23956 15.5569 3.7262 17.0703 1.85938 17.0703V20.4505C1.85938 21.384 2.61601 22.1406 3.54947 22.1406H6.92969C6.92969 20.2738 8.44305 18.7604 10.3099 18.7604C12.1767 18.7604 13.6901 20.2738 13.6901 22.1406H17.0703C18.0037 22.1406 18.7604 21.384 18.7604 20.4505V17.0703C20.6272 17.0703 22.1406 15.5569 22.1406 13.6901C22.1406 11.8232 20.6272 10.3099 18.7604 10.3099Z"
          stroke="#DCDCDC"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);
export default SvgPazzle;
