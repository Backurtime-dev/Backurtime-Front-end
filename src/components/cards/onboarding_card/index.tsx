import Image from "next/image";

interface OnboardingCardProps {
  image: string;
  title: string;
  description?: string;
  selected: boolean;
}

const OnboardingCard = ({
  image,
  title,
  description,
  selected,
}: OnboardingCardProps) => {
  return (
    <div
      className={`bg-primitives-white_10 ${selected ? "border-primitives-green" : "border-primitives-white_10"} relative flex w-full flex-col items-start gap-4 overflow-hidden rounded-[42px] border p-2 pt-1 sm:p-1`}
    >
      <Image
        src="/pages/profile/shadow-white.svg"
        fill
        alt="layer"
        className="object-fill"
      />

      <div className="bg-primitives-white_10 relative z-2 flex h-[214px] w-full items-center justify-center overflow-hidden rounded-[38px]">
        <Image
          src="/pages/profile/layer.png"
          fill
          alt="layer"
          className="object-cover opacity-5"
        />

        <div className="relative flex h-full w-[200px] items-center justify-center bg-contain bg-center bg-no-repeat object-bottom bg-blend-screen">
          <Image
            src={image}
            alt="onboarding-card-image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-2 min-h-10 w-full px-4 pb-4">
        <div className="mb-2">
          <p className="font-cinzel text-base leading-[120%] font-bold tracking-[.16px] text-white sm:text-xl sm:tracking-[.2px]">
            {title}
          </p>
        </div>

        <div className="mb-4">
          <p className="font-inter text-grey-light text-xs leading-[140%] font-normal tracking-[0.12px] sm:text-base sm:tracking-[0.16px]">
            {description}
          </p>
        </div>

        <div>
          {selected ? (
            <button className="relative flex min-h-12 w-full items-center justify-center px-12 py-[13px]">
              <div className="flex gap-2.5">
                <Image
                  src="/icons/tick-icon.svg"
                  alt=""
                  width={16}
                  height={10}
                />
                <span className="font-cinzel text-center text-[18px] leading-[122%]! font-bold text-white">
                  Selected
                </span>
              </div>
            </button>
          ) : (
            <button className="relative flex min-h-12 w-full items-center justify-center px-12 py-[13px]">
              <span className="font-cinzel text-lg leading-[122%]! font-bold text-white">
                Select
              </span>

              <Image
                src="/components/frame-left-btn.svg"
                alt=""
                width={20}
                height={48}
                className="absolute top-0 right-0 h-full w-5 object-cover object-right"
              />
              <Image
                src="/components/frame-btn.svg"
                alt=""
                width={20}
                height={48}
                className="absolute top-0 left-0 h-full min-h-12 w-[calc(100%-20px)] object-cover object-left"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingCard;
