import React from "react";
import Image from "next/image";

import Coin from "@/public/svg/Coin.svg";
import Currency from "@/public/svg/currency.svg";

declare interface ComicProps {}

// const data = [
//   {
//     title: '3 chapters ',
//     tag: 'FREE',
//     amount: {
//       total_chapters: 7,
//       pay_per_chapter: ''
//     }
//   }
// ];

const basic_price = {
  total_discount: "3",
  total_chapters: 7,
  pay_per_chapter: 5,
};

const promotion_price = {
  title: "Save money with INKR Extra ",
  price: 18,
  discount_price: 35,
  discount_percent: 50,
};

const total_price = 35;

const BasicPromotion: React.FC<ComicProps> = () => {
  const renderBasicPrice = () => (
    <div className="basic-promotion__basic-price">
      <div className="left">
        <div>FREE</div>
        <div>{basic_price?.total_discount} chapters</div>
      </div>

      <div className="right">
        <div>LOCKED</div>
        <div>
          {basic_price?.total_chapters} chapters
          <span>
            (
            <span className="price">
              <Image width={12} height={12} alt="coin" src={Coin?.src} />
            </span>
            <span>{basic_price?.pay_per_chapter}</span>
            <span className="slash">/</span>
            <span>chapter</span>)
          </span>
        </div>
      </div>
    </div>
  );

  const renderTotalPrice = () => {
    return (
      <div className="basic-promotion__total-price">
        <div className="left">
          <div className="title">Total Price</div>
          <div className="subtitle">Instant access to all chapters • No Ad</div>
        </div>

        <div className="right">
          <div>
            <span className="price">
              <Image width={16} height={16} alt="coin" src={Coin?.src} />
            </span>

            <span>{total_price}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderPromotionPrice = () => {
    return (
      <div className="basic-promotion__promotion-price">
        <div className="left">
          <div className="title">
            Save money with INKR Extra
            <span className="price">
              <Image width={16} height={16} alt="coin" src={Currency?.src} />
            </span>
          </div>

          <div className="subtitle">Instant access to all chapters • No Ad</div>
        </div>

        <div className="right">
          <div>
            <div>-{promotion_price.discount_percent}%</div>
            <div>
              <span className="price">
                <Image width={16} height={16} alt="coin" src={Coin?.src} />
              </span>

              <span className="price--old">{promotion_price.price}</span>
              <span className="price--new">
                {promotion_price.discount_price}
              </span>
            </div>
          </div>

          <div>Saving rates may vary</div>
        </div>
      </div>
    );
  };

  return (
    <div className="basic-promotion">
      <div className="basic-promotion__title">Pricing & Promotion</div>

      <div className="basic-promotion__des">
        {renderBasicPrice()}
        <div className="basic-promotion__group">
          {renderTotalPrice()}

          <div className="rectangle">
            <div />
          </div>

          {renderPromotionPrice()}
        </div>
      </div>

      <div className="basic-promotion__more">
        <div>
          <span>Want to read for free</span>
          <span>? Learn more </span>
        </div>
      </div>
    </div>
  );
};

export default BasicPromotion;
