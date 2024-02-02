import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";

interface Icons {
  iconId: number;
  iconName: string;
}
interface Args {
  categoryId: number;
  rstId: number;
  resortName: string;
  categoryView: Array<string>;
  mapLocation: Array<string>;
  imageCodes: Array<string>;
  name: string;
  description: string;
  bedding: null;
  maxOccupancy: number;
  maxAdults: number;
  transferType: string;
  roomClass: string;
  webImgCode: string;
  thumbnailImgURL: string;
  fullImageURL: string;
  amenities: Array<object>;
  restaurants: Array<object>;
  loveNest: boolean;
  rstCode: string;
  categoryCode: string;
  icons: Array<Icons>;
}

export const RoomDetails = (args: Args) => {
  const { name, categoryCode, description, categoryView, icons } = args;
  return (
    <div className="flex flex-row pt-12 sm:pt-16 max-w-[125rem] m-auto">
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-6">
        <div className="sm:grid sm:col-span-4">
          <div className=" mb-8">
            <h2 className="text-[1.8rem] sm:text-[2.4rem] font-semibold">
              {name} - {categoryCode}
            </h2>
          </div>
          <div className="mb-8 sm:pr-8 lg:pr-0">
            <p className="text-[1.6rem] lg:text-[1.6rem]">{description}</p>
          </div>
          <div className="flex flex-row mb-4">
            <div>
              <p className="text-[1.5rem] font-semibold text-blue">
                Room View:
              </p>
            </div>
            <span>&nbsp;</span>
            {categoryView &&
              categoryView.map((category, index) => (
                <div className="text-[1.5rem] font-semibold" key={index}>
                  <p>
                    {category}
                    {index < categoryView.length - 1 ? (
                      <span>{","}&nbsp;</span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="sm:grid sm:col-span-2">
          <div className="sm:ml-16">
            <div className="text-[1.5rem] font-semibold text-blue mb-4">
              <h3>Included Features:</h3>
            </div>
            {icons &&
              icons.map((icon, index) => (
                <div className="flex flex-row" key={index}>
                  <div className="p-3 bg-gray-c4 mb-4">
                    <Icon
                      className="w-5 h-5 bg-black  cursor-pointer"
                      src={CDN_ICONS_URL + "user.svg"}
                    />{" "}
                  </div>
                  <div className="p-2 pl-4">
                    <span className="text-[1.4rem] text-onyx font-semibold">
                      {icon.iconName}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
