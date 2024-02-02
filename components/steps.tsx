"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";

type Step = {
  href: string;
  label: string;
};

const steps: Step[] = [
  {
    href: "/vacation",
    label: "Vacation",
  },
  {
    href: "/rooms",
    label: "Room",
  },
  {
    href: "/flights",
    label: "Flights",
  },
  {
    href: "/guests",
    label: "Guests",
  },
  {
    href: "/payment",
    label: "Payment",
  },
];

export function Steps() {
  const pathname = usePathname();
  const isConfirmationPage = pathname.startsWith('/confirmation');

  return (
    <section className={`steps-container relative flex h-[10rem] max-h-[26rem] w-full items-center justify-center before:absolute before:inset-0 before:bg-black before:bg-opacity-40 before:content-[''] sm:h-[26rem] ${isConfirmationPage ? 'hidden' : ''}`}>
      <picture className="steps-bgs h-full w-full overflow-hidden">
        <source
          media="(min-width:1163px)"
          srcSet="https://cdn.sandals.com/obe/v12/images/step1/vacation/steps-background.jpg" // the v12 path must be change in a future
        />
        <source
          media="(min-width: 768px)"
          srcSet="https://cdn.sandals.com/obe/v12/images/step1/vacation/tablet-steps-bg.jpg" // the v12 path must be change in a future
        />
        <img
          className="resolution-img h-full w-full"
          src="https://cdn.sandals.com/obe/v12/images/step1/vacation/mobile-steps-bg.jpg" // the v12 path must be change in a future
          alt="Blue Sky"
        />
      </picture>
      <div className="steps absolute flex w-full max-w-screen-lg justify-center">
        <ul
          className="
            mt-12 mb-5 flex w-full justify-center before:absolute before:top-[4.2rem] before:h-[0.3rem] before:w-full before:max-w-sm before:bg-shadow-blue
            before:content-[''] sm:mt-9 sm:mb-14 sm:before:top-16 sm:before:max-w-3xl lg:before:top-16 lg:before:max-w-[54rem]"
        >
          {steps.map((step, index) => {
            const active = pathname.startsWith(step.href);
            const goBack =
              steps.findIndex((s) => pathname.startsWith(s.href)) > index;

            return (
              <li
                key={step.label + index}
                className={clsx(
                  goBack ? "pointer-events-auto" : "pointer-events-none",
                  "mx-[0.6rem]",
                  "cursor-pointer",
                  "sm:mx-12",
                  "z-10",
                  "lg:mx-16"
                )}
              >
                <Link prefetch={goBack} href={step.href}>
                  <div className="flex flex-col items-center justify-center bg-anti-flash-white bg-transparent">
                    <div
                      className={clsx(
                        active
                          ? "h-[2.3rem] w-[2.3rem] bg-white text-dark-blue sm:h-[3.7rem] sm:w-[3.7rem]"
                          : "mt-2 h-6 w-6 bg-shadow-blue before:hidden sm:h-10 sm:w-10",
                        "flex items-center justify-center rounded-full text-[1.65rem] sm:text-[1.65rem]"
                      )}
                    >
                      {active && (
                        <Icon
                          src={CDN_ICONS_URL + "checkmark.svg"}
                          className="bg-dark-blue w-5 h-5 sm:w-8 sm:h-8"
                        />
                      )}
                    </div>
                    <span
                      className={clsx(
                        active
                          ? "pt-3 text-white sm:pt-[1.1rem]"
                          : "pt-4 text-aero sm:pt-7",
                        "px-2 text-base font-bold uppercase sm:text-[1.2rem]"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
