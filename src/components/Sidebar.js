import React from "react";
import { SidebarStyled } from "../styles/sidebar.styled";
import profile_picture from "../assets/images/profile_picture.png";
import main_body_top_img from "../assets/images/main_body_top_img.png";

import {
  CreatedPlaylistIcon,
  DiscoverIcon,
  HomeIcon,
  LeftArrowIcon,
  LibraryIcon,
  LikedSongIcon,
  MyPlaylistIcon,
  RecentlyPlayedMusicIcon,
  RightArrowIcon,
  SearchIcon,
  SoundIcon,
  MainHeaderSearchIcon,
} from "./Icons";
import {
  InputDivStyle,
  MainHeader,
  MainHeaderArrowStyle,
  StyledMainBody,
  MainBodyTopImage,
  MainBody,
  PlayList,
} from "../styles/main.styled";
import Cards from "./Cards";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <div>
        <input type="checkbox" id="nav-toggle" style={{ display: "none" }} />
        <div className="sidebar">
          <div className="sidebar-brand">
            <img src={profile_picture} alt="" />
            <span>Hey! Aleen</span>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href="/">
                  <HomeIcon />
                  <span className="list_span">Home</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <DiscoverIcon />
                  <span className="list_span">Discover</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <LibraryIcon />
                  <span className="list_span">Your Library</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <LikedSongIcon />
                  <span className="list_span active">Liked Songs</span>
                  <SoundIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <RecentlyPlayedMusicIcon />
                  <span className="list_span">Recently Played</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <CreatedPlaylistIcon />
                  <span className="list_span">Create Playlist</span>
                </a>
              </li>
              <br />
              <br />
              <li>
                <a href="/">
                  <MyPlaylistIcon />
                  <span className="list_span">My PlayList</span>
                  <SearchIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Riffs & Runs</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>African Heat</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Gidi Nights</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Running out of Playlist na....</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Saturday was a Good Day</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Gidi Nights</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Riffs & Runs</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>African Heat</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Gidi Nights</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Running out of Playlist na....</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Saturday was a Good Day</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Gidi Nights</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Running out of Playlist na....</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Saturday was a Good Day</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Gidi Nights</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-content">
        <MainHeader>
          <MainHeaderArrowStyle>
            <LeftArrowIcon />
            <RightArrowIcon />
          </MainHeaderArrowStyle>
          <InputDivStyle>
            <MainHeaderSearchIcon />
            <input type="text" name="" id="" />
          </InputDivStyle>
        </MainHeader>
        <StyledMainBody>
          <MainBody>
            <MainBodyTopImage src={main_body_top_img} alt="main_body_top_img" />
            <br />
            <PlayList>
              <h1>Welcome Back!</h1>
              <Cards />
            </PlayList>
          </MainBody>
        </StyledMainBody>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
