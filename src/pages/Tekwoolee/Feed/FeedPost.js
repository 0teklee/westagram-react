import React from "react";
import PostStyles from "./FeedPost.module.scss";
import Comment from "../Comment/Comment";

function FeedPost({
  name = ":)",
  profileImage,
  mainImage,
  description = "have a good day!",
}) {
  return (
    <div className={PostStyles.postWrapper}>
      <div className={PostStyles.postUpper}>
        <img src={profileImage} alt={`${name}의 프로필 사진`} />
        <span>{name}</span>
      </div>
      <div className={PostStyles.content}>
        <img src={mainImage} alt={`${name}의 포스팅`} />
        <div className={PostStyles.caption}>
          <div className={PostStyles.postIcons}>
            <i className={`fa-regular fa-heart`}></i>
            <i className={`fa-regular fa-comment`}></i>
            <i className={`fa-solid fa-paper-plane`}></i>
            <i className={`fa-regular fa-bookmark`}></i>
          </div>
          <span className={PostStyles.captionName}>{name}</span>{" "}
          <span>{description}</span>
        </div>
      </div>
      <div className={PostStyles.comment}>
        {/* <Comment /> */}
        {/* 위 자리에 JSON 데이터 받아서 맵 돌리기*/}
        <input placeholder="댓글 달기"></input>
        <i className={`fa-regular fa-face-smile ${PostStyles.smileIcon}`}></i>
      </div>
    </div>
  );
}

export default FeedPost;
