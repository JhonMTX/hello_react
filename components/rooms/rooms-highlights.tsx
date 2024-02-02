interface RoomHighlightsProps {
  resortName: string;
  highlights?: Array<string>;
  showMoreHighlights: boolean;
  toggleHighlights: () => void;
  roomHighlightsTitle?: string;
}

export const RoomsHighlights = ({
  resortName,
  showMoreHighlights,
  highlights,
  toggleHighlights,
  roomHighlightsTitle,
}: RoomHighlightsProps) => {
  const highlightsLength = highlights?.length || 0;
  return (
    <div>
      <div className="flex flex-row py-8 border-t-2 border-anti-flash-white">
        <div className="grid grid-cols-1">
          {highlights && (
            <div className="flex flex-row sm:mr-auto sm:ml-auto pr-6 pl-6">
              <div
                className={`grid grid-cols-1 ${
                  highlights.length > 1
                    ? "sm:grid sm:grid-cols-8 sm:px-6 lg:grid lg:grid-cols-6 lg:min-w-[106rem] md:min-w-[95rem] sm:min-w-[72rem]"
                    : ""
                }`}
              >
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={` ${
                      highlightsLength > 1 && index === highlights.length - 1
                        ? "sm:col-span-4 sm:w-[33.9rem] lg:col-span-2"
                        : "sm:col-span-4 lg:col-span-2"
                    }`}
                  >
                    <li className="text-[1.3rem] leading-10 font-semibold list-none ">
                      <div className="flex">
                        <span className="mr-1.5 text-[2.5rem] ">•</span>
                        <div className="text-onyx">{item}</div>
                      </div>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
