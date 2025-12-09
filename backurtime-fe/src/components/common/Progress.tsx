export default function Progress({
  filled,
}: {
  filled?: number | boolean | undefined;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="33"
      viewBox="0 0 24 33"
      fill="none"
      className="mr-[-9.579px] h-[32.568px] w-[23.947px]"
    >
      {filled ? (
        <>
          <path
            d="M6.48152 6.89928C6.98495 5.30532 8.46361 4.22168 10.1352 4.22168H12.5591C15.1489 4.22168 16.9927 6.73763 16.2128 9.20718L11.3722 24.5334C10.8688 26.1274 9.39014 27.211 7.71857 27.211H5.29465C2.70486 27.211 0.861028 24.6951 1.64099 22.2255L6.48152 6.89928Z"
            fill="url(#paint0_linear_1230_118663)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1230_118663"
              x1="8.92688"
              y1="4.22168"
              x2="8.92688"
              y2="27.211"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0.5" />
            </linearGradient>
          </defs>
        </>
      ) : (
        <>
          <path
            d="M6.48152 6.89879C6.98495 5.30483 8.46361 4.22119 10.1352 4.22119H12.5591C15.1489 4.22119 16.9927 6.73714 16.2128 9.20669L11.3722 24.5329C10.8688 26.1269 9.39014 27.2105 7.71857 27.2105H5.29465C2.70486 27.2105 0.861028 24.6946 1.64099 22.225L6.48152 6.89879Z"
            fill="white"
            fill-opacity="0.07"
          />
          <path
            d="M6.48152 6.89879C6.98495 5.30483 8.46361 4.22119 10.1352 4.22119H12.5591C15.1489 4.22119 16.9927 6.73714 16.2128 9.20669L11.3722 24.5329C10.8688 26.1269 9.39014 27.2105 7.71857 27.2105H5.29465C2.70486 27.2105 0.861028 24.6946 1.64099 22.225L6.48152 6.89879Z"
            fill="url(#paint0_linear_1230_118647)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1230_118647"
              x1="6.29268"
              y1="4.22119"
              x2="6.29268"
              y2="27.2105"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A0DBF0" />
              <stop offset="1" stop-color="#00FFEA" />
            </linearGradient>
          </defs>
        </>
      )}
    </svg>
  );
}
