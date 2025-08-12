import React from "react";
import './App.css';
import MusicElement from "./components/MusicElement";
import Controls from "./components/Controls";
import ProgressBar from "./components/progressBar";
import SongDetail from "./components/songDetail";
import NextPlayPause from "./components/NextPlayPause";
import MusicList from "./components/MusicList";

const App = () => {
  return (
    <div className="Player">
      <h3>Amplify</h3>
      <MusicElement/>
      <SongDetail/>
      <Controls/>
      <ProgressBar/>
      <NextPlayPause/>
      <MusicList/>
    </div>
  )
}

export default App;