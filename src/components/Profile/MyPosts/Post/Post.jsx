import React from "react";
import s from "../Post/Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png" />
      {props.message}
      <div>
        <span>Like</span> {props.likecounts}
      </div>
    </div>
  );
};

export default Post;
