import { CDN_IMAGES_URL } from "@/utils/constants";
import Image from "next/image";

export type MobileApp = {
  title: string;
  subtitle: string;
  content: string;
  image: {
    path: string;
    alt: string;
  };
};

export default function MobileApp({ information }: { information: MobileApp }) {
  const { title, subtitle, content, image } = information;
  const { path, alt } = image;
  const imageStyle = {
    width: "100%",
    height: "auto",
    marginBottom: "-6.8rem",
  };
  const appImageStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <section className="mobile-app bg-mobile-app-banner flex justify-center items-center px-6">
      <div className="content w-full max-w-[102.4rem] flex justify-center flex-col-reverse sm:flex-row pt-14 sm:pt-16 pb-6 sm:pb-[5.5rem] lg:py-8 sm:mx-12 lg:mx-0">
        <div className="mobile-image max-w-[27rem] sm:max-w-[36rem] basis-full sm:basis-6/12 lg:basis-5/12 sm:mr-14 mt-10 sm:mt-0 self-center w-full">
          <Image
            src={`${CDN_IMAGES_URL}${path}`}
            alt={alt}
            width={360}
            height={360}
            priority
            style={imageStyle}
          />
        </div>
        <div className="information text-white basis-full sm:basis-6/12 lg:basis-7/12 flex flex-col sm:pt-8 lg:pt-0 lg:mt-14">
          <h3 className="title uppercase text-[3.3rem] leading-none font-light">
            {title}{" "}
            <span className="subtitle text-[3.9rem] font-normal sm:block lg:inline">
              {subtitle}
            </span>
          </h3>
          <p className="descriptin text-[1.8rem] font-light mt-6 mb-8">
            {content}
          </p>
          <div className="app-options flex w-full max-w-md">
            <a
              href="https://itunes.apple.com/us/app/sandals-beaches-resorts/id1092711303?mt=8"
              target="_blank"
              className="w-full mr-8"
            >
              <Image
                src={`${CDN_IMAGES_URL}/confirmation/app-store.png`}
                width={118}
                height={40}
                alt="App Store"
                style={appImageStyle}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mobimanage.sandals&hl=en"
              target="_blank"
              className="w-full mr-8"
            >
              <Image
                src={`${CDN_IMAGES_URL}/confirmation/play-store.png`}
                width={118}
                height={40}
                alt="Play Store"
                style={appImageStyle}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
