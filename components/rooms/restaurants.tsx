import { Restaurants as Restaurant } from "@/utils/fetch";
import RestaurantBox from "./restaurant-box";

interface Props {
  restaurants: Restaurant[];
}

const Restaurants = ({ restaurants }: Props) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white gap-0">
      {restaurants.map((restaurant) => (
        <RestaurantBox key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
