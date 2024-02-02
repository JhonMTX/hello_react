import Image from "next/image";
import { Restaurants as Restaurant } from "@/utils/fetch";
import { CDN_RESTAURANT_LOGOS_URL } from "@/utils/constants";

type Props = {
  restaurant: Restaurant;
};

const RestaurantBox = ({ restaurant }: Props) => {
  return (
    <div key={`${restaurant.id}`} className="mt-10 mx-auto">
      <div className="flex flex-col items-center justify-center bg-gray-f4 w-[26.2rem] h-[15.4rem]">
        <figure className="flex items-center justify-center max-w-[9.8rem] max-h-[21rem] mx-auto pt-[75%] transform -translate-y-1/2">
          <Image
            src={`${CDN_RESTAURANT_LOGOS_URL}${restaurant.logo}`}
            alt={restaurant.name}
            height={98}
            width={210}
          />
        </figure>
      </div>
      <h3 className="mt-2 text-[1.9rem] text-center font-semibold">{restaurant.name}</h3>
    </div>
  );
};

export default RestaurantBox;
