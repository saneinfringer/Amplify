import React from "react";
import "./style/style.css";
import { CiRepeat, CiShuffle, CiVolume  } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { FaPlay } from "react-icons/fa6";



const Controls = ({ song }) => {
  return (
    <div className="controls">
      <button><CiVolume /></button>
      <button><CiRepeat /></button>
      <button><CiShuffle /></button>
      <button><FcLike /></button>
    </div>
  );
}

export default Controls;