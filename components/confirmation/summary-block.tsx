"use client";

import { useEffect, useState } from "react";
import { ContentBlock } from "./confirmation-container";
import DetailsBlock from "./detail-block";

export default function SummaryBlock({
  id,
  label,
  content,
  children,
}: {
  id: string;
  label: string;
  content: ContentBlock[];
  children?: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const summaryStyle = isMobile ? "basis-full" : "basis-7/12";

  return (
    <div className={`${id}-summary py-12`}>
      <h3 className={`${id}-title font-light text-[2.7rem] sm:text-[3.6rem]`}>{label}</h3>
      <hr className="mt-1 mb-16 border-t border-solid border-silver-chalice" />
      <div className={`${id}-information flex`}>
        <div className={`summary-details ${summaryStyle}`}>
          {content.map(({ labels, details }, index) => {
            return (
              <div key={id + "-dlb-" + index} className="details w-full">
                {index > 0 && (
                  <hr className="my-9 border-t border-solid border-silver-chalice" />
                )}
                <DetailsBlock id={id} labels={labels} details={details} />
              </div>
            );
          })}
        </div>
        {!isMobile && ( // change like the Luigi changes
          <div className="summary-children basis-5/12 pl-12">
            {children && children}
          </div>
        )}
      </div>
    </div>
  );
}