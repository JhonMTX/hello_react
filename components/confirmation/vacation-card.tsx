import { CDN_IMAGES_URL } from "@/utils/constants";
import Image from "next/image";
import { VacationExtraImages } from "./vacation-extras";

type Props = {
  path: string;
  alt: string;
  label: string;
};

export default function VacationCard({ path, alt, label }: Props) {
  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="image-card max-w-[26rem] p-6 rounded-t-lg transition ease-in-out delay-100 hover:-translate-y-6">
      <Image
        alt={alt}
        src={`${CDN_IMAGES_URL}${path}`}
        width={220}
        height={440}
        priority
        style={imageStyle}
      />
      <p className="text-[2.2rem] text-white bg-blue uppercase text-center py-8 rounded-b-lg">
        {label}
      </p>
    </div>
  );
}
