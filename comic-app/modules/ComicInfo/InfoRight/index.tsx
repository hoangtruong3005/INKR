import React from "react";
import About from "./About";
import Related from "./Related";
import Comments from "./Comments";

declare interface ComicProps {}

const InfoRight: React.FC<ComicProps> = () => {
  return (
    <div className="info-right">
      <div>
        <About />
      </div>

      <div>
        <Related />
      </div>

      <div>
        <Comments />
      </div>

      <div>Connect</div>
    </div>
  );
};

export default InfoRight;
