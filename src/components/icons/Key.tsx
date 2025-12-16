import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgKey = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M19.1409 14.6858C17.2526 16.5649 14.5484 17.1424 12.1743 16.3999L7.85676 20.7083C7.54509 21.0291 6.93093 21.2216 6.49093 21.1574L4.49259 20.8824C3.83259 20.7908 3.21843 20.1674 3.11759 19.5074L2.84259 17.5091C2.77843 17.0691 2.98926 16.4549 3.29176 16.1433L7.60009 11.8349C6.86676 9.45159 7.43509 6.74743 9.32343 4.86826C12.0276 2.16409 16.4184 2.16409 19.1318 4.86826C21.8451 7.57243 21.8451 11.9816 19.1409 14.6858Z"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.31543 17.0324L9.42376 19.1408"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.292 11.0833C15.0514 11.0833 15.667 10.4677 15.667 9.70828C15.667 8.94889 15.0514 8.33328 14.292 8.33328C13.5326 8.33328 12.917 8.94889 12.917 9.70828C12.917 10.4677 13.5326 11.0833 14.292 11.0833Z"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgKey;
