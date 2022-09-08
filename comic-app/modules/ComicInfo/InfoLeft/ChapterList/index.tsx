import React from "react";

import {
  BellOutlined,
  SortAscendingOutlined
} from '@ant-design/icons';

import ChapterItem from "@/modules/ComicInfo/InfoLeft/ChapterItem";
import ChapterThumbnail from "@/public/svg/Chapter_thumbnail.svg";

declare interface ComicProps {}

const chapters_lasted = [
  {
    id: "abc",
    url_image: ChapterThumbnail?.src,
    read_date: "09/07/2022",
    release_date: "",
    price: null,
    is_read: true,
    status: "ACTIVATED",
    title: "Chapter 1",
    percent_completed: 90,
  },
];

const chapters = [
  {
    id: "abc",
    url_image: ChapterThumbnail?.src,
    read_date: "09/07/2022",
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
    status: "ACTIVATED",
    title: "Chapter 2",
    percent_completed: 0,
  },

  {
    id: "xyz1",
    url_image: ChapterThumbnail?.src,
    read_date: "",
    release_date: "",
    price: null,
    is_read: false,
    status: "ACTIVATED",
    title: "Chapter 3",
    percent_completed: 0,
  },

  {
    id: "xyz2",
    url_image: ChapterThumbnail?.src,
    read_date: "",
    release_date: "",
    price: "5",
    is_read: false,
    status: "LOCKED",
    title: "Chapter 4",
    percent_completed: 0,
  },

  {
    id: "xyz3",
    url_image: ChapterThumbnail?.src,
    read_date: "",
    release_date: "",
    price: "5",
    is_read: false,
    status: "LOCKED",
    title: "Chapter 5",
    percent_completed: 0,
  },

  {
    id: "xyz4",
    url_image: ChapterThumbnail?.src,
    read_date: "",
    release_date: "",
    price: "5",
    is_read: false,
    status: "LOCKED",
    title: "Chapter 6",
    percent_completed: 0,
  },
];

const ChapterList: React.FC<ComicProps> = () => {
  const renderLastedList = () => {
    return chapters_lasted.map((el) => (
      <ChapterItem modes={["RELATED"]} chapter={el} key={`${el?.id}`} />
    ));
  };

  const renderReleaseList = () => {
    return chapters.map((el) => <ChapterItem chapter={el} key={`${el?.id}`} />);
  };

  const renderActions = () => {

    return [
      { icon: <BellOutlined width={16} height={16} /> },
      { icon: <SortAscendingOutlined width={16} height={16} /> },
    ].map((el) => <div key={`${el?.icon}`}>{el?.icon}</div>);
  };

  return (
    <div className="chapter-list">
      <div className="chapter-list__lasted">
        <h4 className="title">Last read</h4>

        <div className="chapter-list__contents">{renderLastedList()}</div>
      </div>

      <div className="chapter-list__release">
        <div className="chapter-list__flex">
          <div className="chapter-list__left">
            <h4 className="title">10 chapters</h4>
            <p className="subtitle">
              New chapter every Thursday{" "}
            </p>
          </div>

          <div className="chapter-list__right">{renderActions()}</div>
        </div>

        <div className="chapter-list__contents">{renderReleaseList()}</div>
      </div>
    </div>
  );
};

export default ChapterList;
