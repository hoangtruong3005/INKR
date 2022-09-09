import React from "react";

import RelatedUrl from "@/public/svg/details/related.svg";
import RelatedCard from "@/components/RelatedCard";

declare interface ComicProps {}

const data = [
  {
    title: "Title Name 1",
    status: "PREQUEL",
    image_url: RelatedUrl?.src,
    total_reading: 45.6,
  },

  {
    title: "Title Name 2",
    status: "PREQUEL",
    image_url: RelatedUrl?.src,
    total_reading: 45.6,
  },

  {
    title: "Title Name 3",
    status: "PREQUEL",
    image_url: RelatedUrl?.src,
    total_reading: 45.6,
  },
];

const Related: React.FC<ComicProps> = () => {
  const renderRelatedList = () => {
    return data.map((el, index) => (
      <div key={index}>
        <RelatedCard data={el} />

        <div className="rectangle">
          <div />
        </div>
      </div>
    ));
  };

  return (
    <div className="related">
      <h4>Related</h4>

      <div className="related__list">{renderRelatedList()}</div>
    </div>
  );
};

export default Related;
