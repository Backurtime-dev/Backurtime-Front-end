import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const SvgSpore = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M16.6839 14.4C13.6699 13.2432 10.3335 13.2429 7.3193 14.3991L7.31536 14.4006C4.80585 15.3632 2.05138 13.5866 1.97342 10.9034C1.97224 10.8632 1.97168 10.8229 1.97168 10.7824V10.7166C1.97163 5.18629 6.4615 0.703125 12 0.703125C17.5385 0.703125 22.0284 5.18629 22.0284 10.7166V10.7824C22.0284 10.8228 22.0278 10.863 22.0266 10.9031C21.9488 13.5867 19.1936 15.3632 16.6839 14.4Z"
      stroke="#DCDCDC"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.98542 13.8846V15.6956C8.98542 16.4164 8.76063 17.1193 8.34232 17.7067C7.92401 18.2941 7.69922 18.997 7.69922 19.7178C7.69922 20.1033 8.01216 20.4157 8.39822 20.4157H15.6008C15.9869 20.4157 16.2998 20.1033 16.2998 19.7178V19.6743C16.2998 18.9607 16.0723 18.2657 15.6501 17.6898C15.228 17.1141 15.0004 16.419 15.0004 15.7054V13.8811"
      stroke="#DCDCDC"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0257 20.4162V21.1368C15.0257 22.3298 14.0572 23.2969 12.8624 23.2969H11.1369C9.94216 23.2969 8.97363 22.3298 8.97363 21.1368V20.4162"
      fill="#DCDCDC"
    />
    <path
      d="M15.0257 20.4162V21.1368C15.0257 22.3298 14.0572 23.2969 12.8624 23.2969H11.1369C9.94216 23.2969 8.97363 22.3298 8.97363 21.1368V20.4162"
      stroke="#DCDCDC"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSpore;
