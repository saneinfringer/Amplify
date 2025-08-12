import React from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import "./style/style.css";
import imgSrc from "../assets/song.jpeg"; // Adjust the path as necessary
const MusicList = ({ musicList }) => {
  return (
    <div className="music_list">
      {/* {musicList.map((music, index) => (
        <div key={index} className="music_item">
          <img src={music.cover} alt={`${music.title} cover`} />
          <div className="music_info">
            <h4>{music.title}</h4>
            <p>{music.artist}</p>
          </div>
        </div>
      ))} */}
      <ul className="ul_music">
        <li>
            <img src={imgSrc} alt="" />
            <div className="song_name_list">
                <p>this is the song by </p>
                <span><FaPlay/></span>
            </div>
        </li>

        <li>
            <img src={imgSrc} alt="" />
            <div className="song_name_list">
                <p>this is the song by </p>
                <span><FaPlay/></span>
            </div>
        </li>

        <li>
            <img src={imgSrc} alt="" />
            <div className="song_name_list">
                <p>this is the song by </p>
                <span><FaPlay/></span>
            </div>
        </li>

        <li>
            <img src={imgSrc} alt="" />
            <div className="song_name_list">
                <p>this is the song by </p>
                <span><FaPlay/></span>
            </div>
        </li>
      </ul>
    </div>
  );
}

export default MusicList;