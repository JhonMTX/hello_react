import { Airlines, ItinerariesContext, Itinerary } from './itineraries-container';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { ItineraryRountrip } from './itinerary-roundtrip';
import ItineraryPreview from './itinerary-preview';

export function ItineraryCard({
  index,
  itinerary,
  activeItineraries,
  setActiveItineraries,
}: {
  index: number;
  itinerary: Itinerary;
  activeItineraries: boolean[];
  setActiveItineraries: Dispatch<SetStateAction<boolean[]>>;
}) {
  const {summary, detail} = itinerary;
  const { grandTotalAmount } = itinerary.summary;
  const isActive = activeItineraries[index];
  const activeCardStyle = isActive
    ? 'border-2 border-blue border-solid rounded-lg'
    : '';

  return (
    <div className={`itinerary-card mt-3 ${activeCardStyle}`}>
      <ItineraryPreview index={index} summary={summary} activeItineraries={activeItineraries} setActiveItineraries={setActiveItineraries}/>
      {isActive && 
        <ItineraryRountrip index={index} details={detail} flightPrice={grandTotalAmount} activeItineraries={activeItineraries} setActiveItineraries={setActiveItineraries}/>
      }
    </div>
  );
}
