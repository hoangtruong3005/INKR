import React from "react";
import About from "./About";

declare interface ComicProps {}

const InfoRight: React.FC<ComicProps> = () => {
  return (
    <div className="info-right">
      <div>
        <About />
      </div>

      <div>Related</div>

      <div>Comment</div>

      <div>Connect</div>
    </div>
  );
};

export default InfoRight;
