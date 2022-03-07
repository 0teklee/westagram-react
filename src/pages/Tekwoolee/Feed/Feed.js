import React, { useEffect, useState } from "react";
import TopNav from "../TopNav/TopNav";
import FeedPost from "./FeedPost";
import FeedStyles from "./Feed.module.scss";

function Feed() {
  const [post, setPost] = useState([
    {
      id: 0,
      name: "",
      profileImg: "1",
      mainImg: "1",
      description: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/data/PostFeedData.JSON", { method: "GET" }) //
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <article className={FeedStyles.outer}>
      <TopNav />
      <main>
        {post.map((post) => {
          return (
            <FeedPost
              name={post.name}
              profileImage={post.profileImg}
              description={post.description}
              mainImage={post.mainImg}
              key={post.id}
            />
          );
        })}
        {console.log(post)}
      </main>
    </article>
  );
}
export default Feed;
