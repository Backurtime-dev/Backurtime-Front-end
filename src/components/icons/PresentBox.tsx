import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgPresentBox = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1_5488"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="22"
      height="22"
    >
      <path d="M1 1H23V23H1V1Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1_5488)">
      <path
        d="M20.5938 15.2656V18.7031C20.5938 20.6016 19.0547 22.1406 17.1562 22.1406H6.84375C4.94526 22.1406 3.40625 20.6016 3.40625 18.7031V15.2656"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4219 12.1719H3.57812C2.62886 12.1719 1.85938 11.4023 1.85938 10.4531V8.73436C1.85938 7.78514 2.62886 7.01561 3.57812 7.01561H20.4219C21.3711 7.01561 22.1406 7.78514 22.1406 8.73436V10.4531C22.1406 11.4023 21.3711 12.1719 20.4219 12.1719Z"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.70313 7.01562C6.27927 7.01562 5.125 5.86136 5.125 4.4375C5.125 3.01364 6.27927 1.85937 7.70313 1.85937"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.70312 1.85938C9.38118 1.85938 10.3219 5.29688 12 5.29688"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.2969 7.01562C17.7207 7.01562 18.875 5.86136 18.875 4.4375C18.875 3.01364 17.7207 1.85937 16.2969 1.85937"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.2969 1.85938C14.6188 1.85938 13.6781 5.29688 12 5.29688"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 3.57812V7.01562"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 15.2656V18.7031"
        stroke="#DCDCDC"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
export default SvgPresentBox;
