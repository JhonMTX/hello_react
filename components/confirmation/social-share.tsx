import { toParam } from "@/utils/lib";

type Props = {
  brand: string;
  url: string;
  data: SocialData;
};

type SocialData = {
  url: string;
  options: object;
};

const encodeToURI = (options: object) => {
  const keys = Object.keys(options);
  const temporal = {} as any;

  keys.forEach((key) => {
    const value = options[key as keyof object];
    temporal[key] = encodeURIComponent(value);
  });

  return toParam(temporal);
};

export default function SocialShare({ brand, data }: Props) {
  const encodedURL = `${data.url}?${encodeToURI(data.options)}`;

  return (
    <section className="social-share m-auto pt-36 sm:pt-20 pb-24 max-w-[102.4rem] flex items-center flex-col px-6">
      <svg
        version="1.1"
        className="w-[6.25rem] h-[6.25rem] fill-blue mb-4"
        viewBox="0 0 1025 1024"
      >
        <g id="icomoon-ignore"></g>
        <path d="M858.552 1024.162h-188.414l-1.815-21.556c0-0.81-0.146-1.459-0.227-2.269-0.32-2.451-0.519-5.317-0.551-8.224v-0.042q0-154.135 0-308.108v-79.58h164.394c-0.162-30.632-0.146-61.589-0.13-91.573 0-8.59 0-17.342 0-25.932h-163.584v-23.663c0-7.618-0.113-15.397-0.227-22.853-0.243-17.342-0.502-35.171 0.6-52.837 0.688-31.907 26.716-57.509 58.724-57.509 1.396 0 2.781 0.049 4.152 0.144l-0.185-0.010h99.92v-117.181h-105.35c-0.543-0.008-1.185-0.012-1.828-0.012-30.684 0-59.068 9.846-82.166 26.551l0.41-0.283c-41.85 29.321-70.761 74.655-77.853 126.922l-0.106 0.957c-1.909 14.778-2.999 31.871-2.999 49.219 0 3.381 0.041 6.752 0.124 10.113l-0.010-0.499c0 9.4 0 19.125-0.357 28.85 0 1.459 0 3.242 0 5.349 0 1.135 0 2.431 0 3.728v23.663h-120.715c0 8.266 0 16.37 0 24.636 0 30.308 0 61.427-0.097 92.222h120.796v419.778h-395.208c-91.54-0.101-165.724-74.268-165.853-165.792v-692.727c0.129-91.536 74.313-165.703 165.843-165.804h692.709c91.547 0.092 165.74 74.262 165.869 165.792v692.727c-0.129 91.542-74.322 165.712-165.86 165.804h-0.009zM714.823 976.998h143.73c65.48-0.074 118.538-53.155 118.575-118.637v-692.718c-0.111-65.423-53.144-118.423-118.57-118.478h-692.705c-65.431 0.055-118.465 53.055-118.575 118.467v692.726c0.037 65.486 53.095 118.566 118.568 118.64h347.937v-325.288h-11.994c-25.138 0-51.135-0.162-76.678 0-0.585 0.039-1.269 0.061-1.957 0.061-8.406 0-16.042-3.295-21.687-8.663l0.013 0.013c-5.326-5.464-8.611-12.939-8.611-21.182 0-0.531 0.014-1.058 0.041-1.582l-0.003 0.073c0.194-36.143 0.178-72.772 0.162-108.267v-42.14c0.023-2.309 0.193-4.555 0.501-6.757l-0.031 0.274c0-0.648 0.146-1.297 0.211-1.945l2.026-21.394h118.316c0-4.7 0-9.4 0-14.263-0.068-2.894-0.106-6.304-0.106-9.723 0-19.77 1.287-39.239 3.782-58.328l-0.24 2.249c9.005-66.398 45.111-122.942 96.616-158.99l0.744-0.493c30.431-21.894 68.45-35.014 109.534-35.014 0.489 0 0.978 0.002 1.466 0.006h152.569v210.051l-22.302 1.135c-0.734 0.107-1.582 0.168-2.444 0.168-0.166 0-0.332-0.002-0.497-0.007l0.024 0.001c-2.433 0.31-5.249 0.487-8.106 0.487-0.136 0-0.272 0-0.408-0.001h-113.433c-13.647 0-15.041 5.349-15.511 12.966-0.989 15.884-0.762 31.929-0.519 49.109h162.352l1.021 22.529c0 1.297 0.113 2.269 0.162 3.242 0.146 2.431 0.259 4.7 0.259 7.293 0 13.452 0 26.743 0 40.195 0 34.846 0 70.827 0.211 106.16 0.062 0.729 0.097 1.578 0.097 2.435 0 16.891-13.693 30.584-30.584 30.584-0.941 0-1.873-0.043-2.793-0.126l0.119 0.009c-36.597-0.324-73.842-0.324-109.872-0.162h-21.475v32.253q0 146.355 0 293.035z"></path>
      </svg>
      <h3 className="uppercase text-[1.8rem] font-semibold text-center">
        share you upcoming {brand} vacation on facebook
      </h3>
      <p className="text-[1.6rem] leading-9 max-w-[55rem] text-center">
        Let your friends know you&apos;ll be soaking up the sun on an exotic
        Luxury All-Inclusive Caribbean vacation to Beaches Resorts.
      </p>
      <a
        href={encodedURL}
        className="uppercase w-full max-w-[29.5rem] text-[1.6rem] py-1 px-14 rounded-lg mt-8 text-white bg-blue hover:bg-spiro-disco"
        target="_blank"
      >
        share your vacation now
      </a>
    </section>
  );
}