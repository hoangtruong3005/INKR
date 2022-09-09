import React from "react";
import { SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import OwnerUrl from "@/public/svg/owner.svg";
import AuthorUrl from "@/public/svg/author.svg";
import CommentCard from "@/components/CommentCard";

declare interface ComicProps {}

const data = [
  {
    title: "Title Name 1",
    created_date: "PREQUEL",
    image_url: AuthorUrl?.src,
    total_liked: 45.6,
    total_reply: 44,
    author: "Han Solo",
    message:
      "I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it.",
  },
];

const Comment: React.FC<ComicProps> = () => {
  const renderRelatedList = () => {
    return data.map((el, index) => (
      <div key={index}>
        <CommentCard data={el} />
      </div>
    ));
  };

  return (
    <div className="comments">
      <h4>12 Comment</h4>

      <div className="comments__list">{renderRelatedList()}</div>

      <div className="comments__reply">
        <div className="owner" style={{ backgroundImage: `url(${OwnerUrl?.src})` }} />

        <Input placeholder="Add your comment" />
      </div>

      <div className="comments__submit">
        <Button icon={<SendOutlined />}>send</Button>
      </div>
    </div>
  );
};

export default Comment;
