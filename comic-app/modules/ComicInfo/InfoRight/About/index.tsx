/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import classnames from 'classnames';

import Detail1 from "@/public/svg/details/detail_1.svg";
import Detail2 from "@/public/svg/details/detail_2.svg";
import Detail3 from "@/public/svg/details/detail_3.svg";
import Detail4 from "@/public/svg/details/detail_4.svg";
import Detail5 from "@/public/svg/details/detail_5.svg";

import Avatar from "@/public/svg/details/default.svg";
import Avatar1 from "@/public/svg/details/default-1.svg";
import Avatar2 from "@/public/svg/details/default-2.svg";

declare interface ComicProps {}

declare type genresType = {
  label: string;
};

declare type detailType = {
  src: string;
};

declare type creditType = {
  title: string;
  author: string;
  avatar_url: string;
};

declare type factType = {
  title: string;
  content: string;
};

const genres: genresType[] = [
  { label: "Horror" },
  { label: "Psychological" },
  { label: "Seinen" },
];

const details: detailType[] = [
  { src: Detail1?.src },
  { src: Detail2?.src },
  { src: Detail3?.src },
  { src: Detail4?.src },
  { src: Detail5?.src },
];

const credits: creditType[] = [
  { avatar_url: Avatar?.src, author: "Kodansha", title: "Publisher" },
  { avatar_url: Avatar1?.src, author: "Kodansha", title: "Publisher" },
  { avatar_url: Avatar2?.src, author: "Kodansha", title: "Publisher" },
];

const facts: factType[] = [
  { title: "Last Updated", content: "2 days ago" },
  { title: "Age Rating", content: "Mature (18+)" },
  { title: "Color", content: "Black & White" },
  { title: "Origin Media", content: "Print" },
  { title: "Style Origin", content: "Japanese Comics (Manga)" },
  { title: "Copyright", content: "© Daruma Matsuura / Kodansha Ltd." },
  { title: "Other Names", content: "Kasane -voleuse de visage" },
];

const About: React.FC<ComicProps> = () => {
  const [hasMore, setHasMore] = useState<boolean>(false);

  const renderGenres = () => {
    return genres?.map((el, index) => <div key={index}>{el?.label}</div>);
  };

  const renderImages = () => {
    return details?.map?.((el) => (
      <div key={`${el?.src}`} style={{ backgroundImage: `url(${el?.src})` }} />
    ));
  };

  const renderCredits = () =>
    credits?.map((el, index) => (
      <div key={index} className="credit">
        <div
          className="credit__avatar"
          style={{ backgroundImage: `url(${el?.avatar_url})` }}
        />

        <div className="credit__info">
          <div>{el?.author}</div>
          <div>{el?.title}</div>
        </div>
      </div>
    ));

  const renderFacts = () =>
    facts.map((el, index) => (
      <div key={index} className="fact">
        <div className="fact__title">{el?.title}</div>
        <div className="fact__content">{el?.content}</div>
      </div>
    ));

  return (
    <div className="about">
      <h4>About This</h4>

      <div className="about__box">
        <h5>Genres</h5>

        <div className="about__genres">{renderGenres()}</div>

        <div className="about__summary">
          <h5>Summary</h5>

          <div className="about__description">
            Kasane is an ugly girl who is severely bullied by her classmates
            because of her appearance; making things worse, Kasane's mother was
            a beautiful actress to whom Kasane is a dark contrast, even though
            she is as talented as her mother. However, there is nothing to do
            with this.
          </div>

          <div
            className={classnames("about__more", {
              "about__more--show": hasMore,
            })}
          >
            <div className="images">{renderImages()}</div>

            <div className="credits">
              <h5>Credits</h5>

              {renderCredits()}
            </div>

            <div className="facts">
              <h5>Other Facts</h5>

              {renderFacts()}
            </div>
          </div>

          {!hasMore && (
            <div className="about__action">
              <div onClick={() => setHasMore((state) => !state)}>Show More</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
