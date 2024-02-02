import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";

type Icons = {
  iconId: number;
  iconName: string;
};

interface RoomsFeaturesProps {
  toggleRoomFeatures: () => void;
  showRoomFeatures: boolean;
  icons?: Array<Icons>;
  roomFeaturesTitle?: string;
}

export const RoomsFeatures = ({
  toggleRoomFeatures,
  showRoomFeatures,
  icons,
  roomFeaturesTitle
}: RoomsFeaturesProps) => {
  return (
    <div className="flex flex-row py-8 border-t-2 border-anti-flash-white">
      <div className="grid grid-cols-1">
        <div className="flex flex-row mb-4">
          <div className="pr-4">
            <div className="mt-2">
              <button onClick={toggleRoomFeatures}>
                <Icon
                  className="w-5 h-5 bg-black cursor-pointer"
                  src={CDN_ICONS_URL + "user.svg"}
                />
              </button>
            </div>
          </div>
          <div className="uppercase text-[1.6rem] font-semibold">
            {roomFeaturesTitle}
          </div>
        </div>
        {showRoomFeatures &&
          icons &&
          icons.map((icon, index) => (
            <div className="flex flex-row  pr-6 pl-6" key={index}>
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
  );
};
