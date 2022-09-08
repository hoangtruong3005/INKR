import React from "react";
import BasicInfo from "./BasicInfo";
import BasicPromotion from "./BasicPromotion";

declare interface ComicProps {}

const InfoLeft: React.FC<ComicProps> = () => {
  return (
    <div className="info-left">
      <div>
        <BasicInfo />
      </div>

      <div>
        <BasicPromotion />
      </div>

      <div>
        Chapter List
      </div>
    </div>
  );
};

export default InfoLeft;
