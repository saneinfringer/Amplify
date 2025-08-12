import React from "react";
import "./style/style.css";
import { FaPlay, FaPause } from "react-icons/fa6";
import { GiNextButton, GiPreviousButton  } from "react-icons/gi";

const NextPlayPause = ({ isPlaying, onPlayPause }) => {
  return (
    <div className="control_btn">
      <button><GiPreviousButton /></button>
      <button className="play_"><FaPlay /></button>
      <button><GiNextButton /></button>
    </div>
  );
}

export default NextPlayPause;