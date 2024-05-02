import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>R</Avatar>
          rajan_ . <span>12h</span>
        </div>
        <MoreHorizIcon />
      </div>

      <div className="post__image">
        <img
          src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconsSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by 180 people.
      </div>
      <br />
      <br />
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>T</Avatar>
          tomar_ . <span>5h</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img
          src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconsSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by 240 people.
      </div>
      <br />
      <br />
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>H</Avatar>
          himanshu_ . <span>10h</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img
          src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconsSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by 160 people.
      </div>
    </div>
  );
}

export default Post;
