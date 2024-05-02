import React, { useState } from "react";
import Post from "./posts/Post";
import Sugesstions from "../sugesstionss/Sugesstions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "rajan dhiman_",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 180,
      timestamp: "12h",
    },
    {
      user: "tomar_23",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      likes: 240,
      timestamp: "5h",
    },
    {
      user: "himanshu dhiman_",
      postImage:
        "https://plus.unsplash.com/premium_photo-1687382111414-7b87afa5da34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGltYWdlfGVufDB8fDB8fHww",
      likes: 160,
      timestamp: "10h",
    },
    {
      user: "yugal dhiman_",
      postImage:
        "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      likes: 190,
      timestamp: "10h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              like={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
