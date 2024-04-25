import React from "react";
import Sugesstions from "../sugesstionss/Sugesstions";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">Timeline</div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
