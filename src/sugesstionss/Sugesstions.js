import React from "react";
import "./Sugesstions.css";
import { Avatar } from "@mui/material";

function Sugesstions() {
  return (
    <div className="sugessions">
      <div className="suggestions__title">Sugesstions for you</div>
      <div className="sugesstions__usernames">
        <div className="sugesstion__username">
          <div className="username__lift">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">@nj@li_dhiman__</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sugesstion__username">
          <div className="username__lift">
            <span className="avatar">
              <Avatar>N</Avatar>
            </span>
            <div className="username__info">
              <span className="username">@nikhil kumar__</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sugesstion__username">
          <div className="username__lift">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">its_aniket_varma__</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sugesstion__username">
          <div className="username__lift">
            <span className="avatar">
              <Avatar>Y</Avatar>
            </span>
            <div className="username__info">
              <span className="username">theyugaldhiman__</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sugesstion__username">
          <div className="username__lift">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">@aparnadhiman__</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Sugesstions;
