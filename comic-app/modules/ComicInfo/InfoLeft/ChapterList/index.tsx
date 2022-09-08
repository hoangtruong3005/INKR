import React from "react";

import ChapterItem from "@/modules/ComicInfo/InfoLeft/ChapterItem";
import ChapterThumbnail from '@/public/svg/Chapter_thumbnail.svg';

declare interface ComicProps {}

const chapters = [
  {
    id: "abc",
    url_image: ChapterThumbnail?.src,
    read_date: "",
    release_date: "",
    price: null,
    is_read: true,
    status: "ACTIVATED",
    title: "Chapter 1",
    percent_completed: 90,
  },

  {
    id: "xyz",
    url_image: ChapterThumbnail?.src,
    read_date: "",
    release_date: "",
    price: null,
    is_read: false,
    status: "LOCKED",
    title: "Chapter 2",
    percent_completed: 0,
  },
];

const ChapterList: React.FC<ComicProps> = () => {
  const renderLastedList = () => {
    return chapters.map((el) => <ChapterItem chapter={el} key={`${el?.id}`} />);
  };

  return (
    <div className="chapter-list">
      <div className="chapter-list__lasted">
        <h4 className="chapter-list__title">Last read</h4>

        <div className="chapter-list__contents">{renderLastedList()}</div>
      </div>

      <div className="chapter-list__release">
        <h4 className="chapter-list__title">10 chapters</h4>
        <p className="chapter-list__subtitle">New chapter every Thursday </p>

        <div className="chapter-list__contents">{renderLastedList()}</div>
      </div>
    </div>
  );
};

export default ChapterList;
