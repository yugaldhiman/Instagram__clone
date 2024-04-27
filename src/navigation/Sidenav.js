import React from "react";
import logo from "./img/logo.png";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
function Sidenav() {
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src={logo} alt="error" />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          {/* icons */}
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          {/* icons */}
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          {/* icons */}
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          {/* icons */}
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          {/* icons */}
          <SendIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          {/* icons */}
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          {/* icons */}
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          {/* icons */}
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
