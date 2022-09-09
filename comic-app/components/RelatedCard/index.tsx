import React from "react";
import Image from "next/image";
import Currency from "@/public/svg/currency.svg";

declare type relatedCardType = {
  title: string;
  status: string;
  image_url: string;
  total_reading: number;
};

declare interface RelatedCardProps {
  data: relatedCardType;
}

const RelatedCard: React.FC<RelatedCardProps> = ({ data }) => {
  return (
    <div className="related-card">
      <div
        className="related-card__bg"
        style={{ backgroundImage: `url(${data?.image_url})` }}
      />

      <div className="related-card__info">
        <div className="related-card__title">{data?.title}</div>

        <div className="related-card__tag">
          <span className="price">
            <Image width={16} height={16} alt="coin" src={Currency?.src} />
          </span>

          <span>EXCLUSIVE</span>
        </div>

        <div className="related-card__status">{data?.status}</div>
        <div className="related-card__read">{data?.total_reading}K reads</div>
      </div>
    </div>
  );
};

export default RelatedCard;
