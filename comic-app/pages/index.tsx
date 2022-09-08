import type { NextPage } from "next";
import ComicInfo from "../modules/ComicInfo";

const Home: NextPage = () => {
  return (
    <div className="comic-app">
      <ComicInfo />
    </div>
  );
};

export default Home;
