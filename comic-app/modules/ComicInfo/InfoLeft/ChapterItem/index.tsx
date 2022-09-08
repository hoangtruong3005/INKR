import Image from "next/image";
import React from "react";
import Coin from "@/public/svg/Coin.svg";

import classnames from "classnames";
import { Progress } from "antd";
import { LockOutlined } from "@ant-design/icons";

declare type chapterType = {
  id: string | number;
  url_image: string;
  read_date: string;

  price: string | null;
  title: string;
  status: string;

  is_read: boolean;
  release_date: string;
  percent_completed: number;
};

declare interface ChapterItemProps {
  modes?: string[];
  chapter: chapterType;
}

const ChapterItem: React.FC<ChapterItemProps> = ({ chapter, modes }) => {
  const now = new Date();
  const isLock = chapter?.status === "LOCKED";
  const readDate = new Date(chapter?.read_date || '');

  const lastedDate =  (now.getTime() - readDate.getTime()) / (1000 * 3600 * 24) || 0;
  const hasRelatedMode = modes?.includes?.('RELATED')

  return (
    <div className="chapter-item">
      <div
        className={classnames("chapter-item__bg", {
          "chapter-item__bg--lock": isLock,
        })}
        style={{ backgroundImage: `url(${chapter?.url_image})` }}
      >
        {isLock && (
          <div className="chapter-item__lock">
            <LockOutlined width={12} height={12} />
          </div>
        )}

        {chapter?.is_read && (
          <div className="chapter-item__progress">
            <div className="outer">
              <div
                className="inner"
                style={{ width: `${chapter?.percent_completed}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="chapter-item__content">
        <div className="chapter-item__left">
          <div>{chapter?.title}</div>
          {hasRelatedMode && <div>Last read {Math.floor(lastedDate)} days ago </div>}
        </div>

        <div className="chapter-item__right">
          {chapter?.price && (
            <span className="price">
              <Image width={16} height={16} alt="coin" src={Coin?.src} />
            </span>
          )}

          <p>{chapter?.price || "FREE"}</p>
        </div>
      </div>
    </div>
  );
};

export default ChapterItem;
