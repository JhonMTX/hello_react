import { RoomsHighlights } from "./rooms-highlights";
import { useState } from "react";
import { RoomsAmenities } from "./rooms-amenities";
import { RoomsDescription } from "./rooms-description";
import { RoomsCategoryView } from "./rooms-category-view";
import { RoomsFeatures } from "./rooms-features";
import { Amenities } from "@/utils/fetch";

type Icons = {
  iconId: number;
  iconName: string;
};

type Rooms = {
  highlights?: Array<string>;
  resortName: string;
  amenities?: Array<Amenities>;
  roomDescription?: string;
  categoryView?: Array<string>;
  icons?: Array<Icons>;
  roomFeaturesTitle?: string;
  roomHighlightsTitle?: string;
  roomDescriptionTitle?: string;
};

export const RoomToggler = ({
  highlights,
  resortName,
  amenities,
  roomDescription,
  categoryView,
  icons,
  roomFeaturesTitle,
  roomHighlightsTitle,
  roomDescriptionTitle,
}: Rooms) => {
  const [showHighlights, setShowHighlights] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showRoomDescription, setShowRoomDescription] = useState(false);
  const [showCategoryView, setShowCategoryView] = useState(false);
  const [showRoomFeatures, setShowRoomFeatures] = useState(false);

  const toggleHighlights = () => {
    setShowHighlights(!showHighlights);
  };

  const toggleAmenities = () => {
    setShowAmenities(!showAmenities);
  };

  const toggleRoomDescription = () => {
    setShowRoomDescription(!showRoomDescription);
  };

  const toggleCategoryView = () => {
    setShowCategoryView(!showCategoryView);
  };

  const toggleRoomFeatures = () => {
    setShowRoomFeatures(!showRoomFeatures);
  };

  return (
    <div className="lg:max-w-[106rem] lg:m-auto">
      <div className="sm:hidden">
        {roomDescription && (
          <RoomsDescription
            roomDescription={roomDescription}
            toggleRoomDescription={toggleRoomDescription}
            showRoomDescription={showRoomDescription}
            roomDescriptionTitle={roomDescriptionTitle}
          />
        )}
      </div>
      <div className="sm:hidden">
        {categoryView && (
          <RoomsCategoryView
            categoryView={categoryView}
            toggleCategoryView={toggleCategoryView}
            showCategoryView={showCategoryView}
          />
        )}
      </div>
      <div className="sm:hidden">
        <RoomsFeatures
          toggleRoomFeatures={toggleRoomFeatures}
          showRoomFeatures={showRoomFeatures}
          icons={icons}
          roomFeaturesTitle={roomFeaturesTitle}
        />
      </div>
      {highlights && (
        <RoomsHighlights
          highlights={highlights}
          resortName={resortName}
          showMoreHighlights={showHighlights}
          toggleHighlights={toggleHighlights}
          roomHighlightsTitle={roomHighlightsTitle}
        />
      )}
      {amenities && (
        <RoomsAmenities
          amenities={amenities}
          resortName={resortName}
          showMoreAmenities={showAmenities}
          toggleAmenities={toggleAmenities}
        />
      )}
    </div>
  );
};
