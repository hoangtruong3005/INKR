import React, { ReactElement } from "react";
import BgImage from "@/public/svg/bg.svg";

import {
  ReadOutlined,
  LikeOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

declare interface ComicProps {}

declare type reactionType = {
  icon: ReactElement;
  count: string;
};

declare type authorType = {
  title: string;
  author: string;
  total_chapters: number;
};

const data: authorType = {
  title: "Kasane",
  author: "By Kodansha",
  total_chapters: 10,
};

const hashtags: string[] = ["18", "NEW", "TRENDING", "BESTSELLER", "MANGA"];

const reactions: reactionType[] = [
  { icon: <ReadOutlined />, count: "74.483" },
  { icon: <LikeOutlined />, count: "15,863" },
]

const BasicInfo: React.FC<ComicProps> = () => {
  const renderReactions = () => {
    return reactions.map((el, index) => (
      <div key={`${el?.icon}--${index}`}>
        <span>{el.icon}</span>
        <span>{el?.count}</span>
      </div>
    ));
  };

  const renderHashtags = () => {
    return hashtags.map((el: string) => <div key={el}>{el}</div>);
  };

  const renderActions = () => {
    return [
      {
        icon: <ShareAltOutlined />,
        action: () => {},
      },
      {
        icon: <MoreOutlined />,
        action: () => {},
      },
    ].map((el) => <div key={`${el?.icon}`}>{el?.icon}</div>);
  };

  return (
    <div className="basic-info">
      <div
        className="basic-info__bg"
        style={{ backgroundImage: `url(${BgImage?.src})` }}
      />

      <div className="basic-info__des">
        <div className="basic-info__left">
          <div className="top">
            <h2 className="title">{data?.title}</h2>
            <div className="author">{data?.author}</div>

            <div className="chapters">
              Drama {data?.total_chapters} chapters
            </div>

            <div className="reactions">{renderReactions()}</div>
            <div className="hashtags">{renderHashtags()}</div>
          </div>

          <div className="bottom">
            <div>Read First Chapter for FREE</div>
          </div>
        </div>

        <div className="basic-info__right">
          {renderActions()}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
