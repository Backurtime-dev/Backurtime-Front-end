import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const More = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.0007 10.8337C10.4609 10.8337 10.834 10.4606 10.834 10.0003C10.834 9.54009 10.4609 9.16699 10.0007 9.16699C9.54041 9.16699 9.16732 9.54009 9.16732 10.0003C9.16732 10.4606 9.54041 10.8337 10.0007 10.8337Z"
      stroke="white"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.834 10.8337C16.2942 10.8337 16.6673 10.4606 16.6673 10.0003C16.6673 9.54009 16.2942 9.16699 15.834 9.16699C15.3737 9.16699 15.0007 9.54009 15.0007 10.0003C15.0007 10.4606 15.3737 10.8337 15.834 10.8337Z"
      stroke="white"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16732 10.8337C4.62755 10.8337 5.00065 10.4606 5.00065 10.0003C5.00065 9.54009 4.62755 9.16699 4.16732 9.16699C3.70708 9.16699 3.33398 9.54009 3.33398 10.0003C3.33398 10.4606 3.70708 10.8337 4.16732 10.8337Z"
      stroke="white"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default More;
