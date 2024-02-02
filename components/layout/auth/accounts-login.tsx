"use client";

import { CDN_ICONS_URL } from "@/utils/constants";
import { Icon } from "@sanservices/brands-ui";

export function AccountLogin({ onButtonClick = () => {} }) {
  return (
    <>
      <button
        onClick={onButtonClick}
        className="flex uppercase fs-1 bg-black py-3 px-2 leading-7 text-base font-semibold rounded-none text-white"
      >
        <div className="mt-[0.1rem]">
          <Icon
            src={CDN_ICONS_URL + "user.svg"}
            className="w-5 h-5 mr-2 bg-white mt-[0.1rem]"
          />
        </div>
        Sign In or Join
      </button>
    </>
  );
}
