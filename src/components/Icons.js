import {
  LeftArrowStyle,
  RightArrowStyle,
  MainHeaderSearchIconStyle,
} from "../styles/Svg.styled";

// Import Icons
import home_icon from "../assets/icons/home_icon.svg";
import discover_icon from "../assets/icons/discover_icon.svg";
import library_icon from "../assets/icons/library_icon.svg";
import liked_song_icon from "../assets/icons/liked_song_icon.svg";
import sound_icon from "../assets/icons/sound_icon.svg";
import recently_played_icon from "../assets/icons/recently_played_icon.svg";
import create_playlist_icon from "../assets/icons/create_playlist_icon.svg";
import myPlay_list_icon from "../assets/icons/myPlay_list_icon.svg";
import search_icon from "../assets/icons/search_icon.svg";
import left_arrow_icon from "../assets/icons/left_arrow_icon.svg";
import right_arrow_icon from "../assets/icons/right_arrow_icon.svg";

// home icon
export const HomeIcon = () => {
  return <img src={home_icon} alt="" />;
};

// Dicover icon
export const DiscoverIcon = () => {
  return <img src={discover_icon} alt="" />;
};

// Library icon
export const LibraryIcon = () => {
  return <img src={library_icon} alt="" />;
};

// Liked songs icon
export const LikedSongIcon = () => {
  return <img src={liked_song_icon} alt="" />;
};

// Sound icon
export const SoundIcon = () => {
  return <img src={sound_icon} alt="" />;
};

// Recently played music icon
export const RecentlyPlayedMusicIcon = () => {
  return <img src={recently_played_icon} alt="" />;
};

// Created playlist icon
export const CreatedPlaylistIcon = () => {
  return <img src={create_playlist_icon} alt="" />;
};

// My playlist icon
export const MyPlaylistIcon = () => {
  return <img src={myPlay_list_icon} alt="" />;
};

// Search icon
export const SearchIcon = () => {
  return <img src={search_icon} alt="" />;
};

// Main header Search icon
export const MainHeaderSearchIcon = () => {
  return <MainHeaderSearchIconStyle src={search_icon} alt="" />;
};

// Left Arrow Icon
export const LeftArrowIcon = () => {
  return (
    <LeftArrowStyle>
      <img src={left_arrow_icon} alt="" />
    </LeftArrowStyle>
  );
};

// right Arrow Icon
export const RightArrowIcon = () => {
  return (
    <RightArrowStyle>
      <img src={right_arrow_icon} alt="" />
    </RightArrowStyle>
  );
};
