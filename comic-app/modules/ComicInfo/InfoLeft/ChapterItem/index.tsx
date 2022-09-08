import React from "react";
import Image from "next/image";

import Coin from "@/public/svg/Coin.svg";

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
  chapter: chapterType;
}

const ChapterItem: React.FC<ChapterItemProps> = ({ chapter }) => {
  return (
    <div className="chapter-item">
      <div
        className="chapter-item__bg"
        style={{ backgroundImage: `url(${chapter?.url_image})` }}
      />

      <div className="chapter-item__content">
        <div className="chapter-item__left">
          <div>{chapter?.title}</div>
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
