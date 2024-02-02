import {
  CDN_ICONS_URL,
  COOKIE_PREFERENCES_URL,
  PRIVACY_POLICY_URL,
  TERMS_AND_CONDITIONS_URL,
} from "@/utils/constants";
import { Icon } from "@sanservices/brands-ui";

export function Footer() {
  /** duplicated styles variables **/
  const lineDivider =
    "line-divider w-[0.1rem] h-[1.2rem] border-r-[0.05rem] border-solid border-sandals-gray mt-[0.1rem] mx-[0.9rem]";

  return (
    <footer className="w-full bg-black py-16 px-6 flex flex-col justify-center items-center">
      <Icon
        src={CDN_ICONS_URL + "sandals.svg"}
        className="w-32 h-12 sm:w-[8.3rem] sm:h-[2.1rem] bg-sandals-gray"
      />
      <a
        href="tel:18887263257"
        className="flex flex-col text-white items-center"
      >
        <h2 className="text-[2.8rem] leading-[3.9rem] sm:text-[3.3rem] font-light hover:text-dark-blue">
          1-888-SANDALS
        </h2>
        <h2 className="text-[1.4rem] text-sandals-gray sm:text-[1.6rem] sm:leading-[2.2rem] hover:text-white">
          (888) 726-3257 FROM 7AM TO 11PM
        </h2>
      </a>
      <div className="external-links flex justify-center items-center text-sandals-gray text-[1.2rem] leading-[3rem] mt-4">
        <a
          href={TERMS_AND_CONDITIONS_URL}
          target="_blank"
          className="hover:text-white"
        >
          Terms & Conditions
        </a>
        <div className={lineDivider} />
        <a
          href={PRIVACY_POLICY_URL}
          target="_blank"
          className="hover:text-white"
        >
          Privacy Policy
        </a>
        <div className={lineDivider} />
        <a
          href={COOKIE_PREFERENCES_URL}
          target="_blank"
          className="hover:text-white"
        >
          Cookie Preferences
        </a>
      </div>
    </footer>
  );
}
