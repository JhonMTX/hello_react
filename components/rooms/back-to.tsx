import { useState } from "react";
import Icons from "../global/icons";
import Link from "next/link";

type Props = {
  backto: string;
  label: string;
};

export default function BackTo({ backto, label }: Props) {
  return (
    <div className="max-w-[116.4rem] mx-auto px-6 text-onyx text-[1.6rem]">
      <Link
        className="h-[6.16rem] inline-block md:mt-[1.2rem] pt-[2.1rem] pb-[1.9rem] pr-[3rem] font-semibold cursor-pointer no-underline transition-all duration-300 ease-in-out"
        href={backto}
      >
         <Icons
          name="boldArrow"
          className={`inline relative  w-[1.4rem] h-[1.6rem] fill-blue mr-[0.8rem] ml-[0.8rem] stroke-2 mb-[0.3rem] transform scale-x-[-1] scale-y-[-1]`}
        />
        {label}
      </Link>
    </div>
  );
}
