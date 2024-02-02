import { Amenities, Room } from "./fetch";


function getUniqueAmeneties(amenities: Amenities[], amenitiesIDS: number[]) {
  const uniqueIDS = Array.from(new Set<number>(amenitiesIDS));
  const uniqueAmenities: string[] = [];

  uniqueIDS.forEach((id) => {
    const amenityfound = amenities.find((amenity) => id === amenity.amenityId);
    if (amenityfound) {
      switch (amenityfound.amenityId) {
        case 6:
        case 83:
        case 114:
        case 129:
        case 131:
        case 211:
        case 212: // these IDS are not for the filter, that is why we avoid it.
          break;
        default:
          uniqueAmenities.push(amenityfound.amenityName);
          break;
      }
    }
  });

  return uniqueAmenities;
}

function amenetiesForFilterOptions(rooms: Room[]) {
  const roomTypes: Amenities[] = [];
  const features: Amenities[] = [];
  const featuresIDS: number[] = [];
  const roomTypesIDS: number[] = [];

  rooms.forEach((room) => {
    room.amenities.forEach((amenitie) => {
      if (amenitie.amenityCategory === "Features") {
        featuresIDS.push(amenitie.amenityId);
        features.push(amenitie);
      }
      if (amenitie.amenityCategory === "Room Types") {
        roomTypesIDS.push(amenitie.amenityId);
        roomTypes.push(amenitie);
      }
    });
  });

  const uniqueRoomTypes = getUniqueAmeneties(roomTypes, roomTypesIDS);
  const uniqueFeatures = getUniqueAmeneties(features, featuresIDS);

  return {
    features: uniqueFeatures,
    roomTypes: uniqueRoomTypes,
  };
}

function roomViewForFilterOptions(rooms: Room[]) {
  const roomViews: string[] = [];

  rooms.forEach((room) => {
    room.categoryView.forEach((view) => roomViews.push(view));
  });

  const uniqueViews = Array.from(new Set(roomViews));

  return uniqueViews;
}

function levelsForFilterOptions(rooms: Room[]) {
  const levels: string[] = [];
  let haveLoveNest = false;

  rooms.forEach((room) => {
    levels.push(room.roomClass);

    if (!haveLoveNest && room.loveNest) {
      haveLoveNest = true;
    }
  });

  const uniqueLevels = Array.from(new Set(levels));
  /**
   * changed the name of the room levels beacuse the names aren't the expected to show on the filter.
   **/
  const formatLevels: string[] = uniqueLevels.map((level) => {
    switch (level) {
      case "BUTLER":
        return "Butler Elite";

      case "CONCIERGE":
        return "Club Sandals";

      default:
        return "Sandals Luxury";
    }
  });

  /** Love Nest isn't a room class so we had to added in this way */
  if (haveLoveNest) {
    formatLevels.push("Love Nest");
  }

  return formatLevels;
}

export default function createFilterOptions(rooms: Room[]) {
  const { features, roomTypes } = amenetiesForFilterOptions(rooms);
  const roomView = roomViewForFilterOptions(rooms);
  const levels = levelsForFilterOptions(rooms);

  const options = {
    features: {
      type: 'checkbox',
      content: features
    },
    roomTypes: {
      type: 'checkbox',
      content: roomTypes
    },
    roomViews: {
      type: 'checkbox',
      content: roomView
    },
    levels: {
      type: 'checkbox',
      content: levels,
    } 
  }

  return options;
}
