import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgReply = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M8.54969 7.50528V5.28182C8.54969 4.22204 7.93648 3.96809 7.18715 4.71743L2.20458 9.70004C1.45525 10.4494 1.45525 11.6757 2.20458 12.425L7.18715 17.4076C7.93648 18.157 8.54969 17.9029 8.54969 16.8432V14.6196C9.53599 14.3864 10.5633 14.2593 11.621 14.2593C16.0309 14.2593 19.9376 16.4076 22.3569 19.7131C21.5146 12.834 15.6562 7.50528 8.54969 7.50528Z"
      stroke="#DCDCDC"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgReply;
