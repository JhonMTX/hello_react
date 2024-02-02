import { Amenities } from "../../utils/fetch";

type RoomAmenitiesProps = {
  resortName?: string;
  amenities: Array<Amenities>;
  showMoreAmenities?: boolean;
  toggleAmenities?: () => void;
};

export const RoomsAmenities = ({ amenities }: RoomAmenitiesProps) => {
  const groupedAmenities = amenities.reduce(
    (acc, amenity) => {
      const { amenityCategory } = amenity;
      if (!acc[amenityCategory]) {
        acc[amenityCategory] = [];
      }
      acc[amenityCategory]?.push(amenity);

      return acc;
    },
    {} as Record<string, Amenities[]>,
  );

  return (
    <div className="flex flex-row mt-[2rem] mb-[5rem]">
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-6 sm:px-6 lg:grid lg:grid-cols-8 lg:min-w-[106rem] md:min-w-[95rem] sm:min-w-[72rem]">
        {Object.entries(groupedAmenities).map(([amenityTitle, amenityList]) => (
          <div key={amenityTitle} className="sm:col-span-2 mb-8">
            <div className="flex flex-row sm:mr-auto sm:ml-auto pr-6 pl-6">
              <span className="text-[1.3rem] leading-10 font-semibold list-none ">
                {amenityTitle}
              </span>
            </div>
            <div className="flex flex-row sm:mr-auto sm:ml-auto pr-6 pl-6">
              <div className="flex flex-row">
                <ul className="flex flex-col">
                  {amenityList.map((amenity, index) => (
                    <li key={index} className="text-[1.3rem] leading-10 font-normal list-none ">
                      <div className="flex">
                        <span className="mr-1.5 text-[2.5rem] ">•</span>
                        <span className="text-onyx">{amenity.amenityName}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
