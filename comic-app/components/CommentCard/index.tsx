import React from "react";

import { LikeOutlined, MessageOutlined } from "@ant-design/icons";

declare type CommentCardType = {
  author: string;
  message: string;
  image_url: string;
  created_date: string;
  total_liked: number;
  total_reply: number;
};

declare interface CommentCardProps {
  data: CommentCardType;
}

const CommentCard: React.FC<CommentCardProps> = ({ data }) => {
  const renderReactions = () =>
    [
      { icon: <LikeOutlined color="rgba(255, 255, 255, 0.85);" />, content: data.total_liked },
      { icon: <MessageOutlined color="rgba(255, 255, 255, 0.85);" />, content: data.total_reply },
    ].map((el) => (
      <div key={`${el?.icon}`}>
        <span className="icon">{el?.icon}</span>

        <span>{el.content}</span>
      </div>
    ));

  return (
    <div className="comment-card">
      <div
        className="comment-card__bg"
        style={{ backgroundImage: `url(${data?.image_url})` }}
      />

      <div className="comment-card__content">
        <div className="comment-card__author">
          {data?.author} <span>Commented on Chapter 35 • 24 min. ago</span>
        </div>

        <div className="comment-card__message">{data?.message}</div>
        <div className="comment-card__reactions">{renderReactions()} <span className="action">Reply</span></div>
      </div>
    </div>
  );
};

export default CommentCard;
