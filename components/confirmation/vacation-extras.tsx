import { CDN_IMAGES_URL } from "@/utils/constants";
import Image from "next/image";
import VacationCard from "./vacation-card";
import informationByBrand from "@/utils/vacation-extra-information";
import CardSlider from "./card-slider";

export type Slide = {
  code: string;
  alt: string;
  path: string;
  label: string;
  schedulerModeIndex: string;
}

export type VacationExtraImages = {
  title: string;
  subtitle: string;
  content: string;
  slides: Slide[];
}


type Props = {
  brand: string;
  information: VacationExtraImages;
}

export default function VacationExtras({brand, information}:Props) {
  const {title, subtitle, content, slides} = information;

  return (
    <section className="complete-your-vacation max-w-[102.4rem] flex px-6 items-center justify-center flex-col mx-auto pb-32 pt-24 border-t border-light-siver">
      <div className="header max-w-[76rem] w-full text-center mb-6">
        <h3 className="title text-[3.8rem] leading-none uppercase font-light mb-8">
          {title}{" "}
          <span className="subtitle text-[2.4rem] font-normal text-lightGray">{subtitle}</span>
        </h3>
        <p className="description text-[1.8rem] text-lightGray">
          {content}
        </p>
      </div>
      <CardSlider slides={slides}/>
    </section>
  );
}
