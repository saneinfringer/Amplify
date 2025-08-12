import React from "react";
import "./style/style.css";
const SongDetail = ({ song }) => {
  return (
    <div className="song_detail">
      <marquee behavior="" direction="">
        this is the song name
      </marquee>
      <p>unknown Artist</p>
    </div>
  );
}

export default SongDetail;