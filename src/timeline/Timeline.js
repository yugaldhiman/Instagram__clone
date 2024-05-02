import React from "react";
import Post from "./posts/Post";
import Sugesstions from "../sugesstionss/Sugesstions";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          <Post />
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
