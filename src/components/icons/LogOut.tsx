import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgLogOut = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M15.0996 7.56001C14.7896 3.96001 12.9396 2.49001 8.88961 2.49001H8.75961C4.28961 2.49001 2.49961 4.28001 2.49961 8.75001V15.27C2.49961 19.74 4.28961 21.53 8.75961 21.53H8.88961C12.9096 21.53 14.7596 20.08 15.0896 16.54"
      stroke="#DCDCDC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.99988 12H20.3799"
      stroke="#DCDCDC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.15 8.64999L21.5 12L18.15 15.35"
      stroke="#DCDCDC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgLogOut;
