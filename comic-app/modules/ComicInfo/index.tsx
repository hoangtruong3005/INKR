import React from "react";

import InfoLeft from "./InfoLeft";
import InfoRight from "./InfoRight";

declare interface ComicProps {}

const ComicInfo: React.FC<ComicProps> = () => {
  return (
    <div className="comic-info">
      <div className="comic-info__left"><InfoLeft /></div>
      <div className="comic-info__right"><InfoRight /></div>
    </div>
  );
};

export default ComicInfo;
