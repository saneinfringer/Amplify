import React from "react";
import "./style/style.css";
const ProgressBar = ({ progress }) => {
  return (
    <div className="progress">
      <div className="progress_bar">
        <div className="progress_line">

        </div>
      </div>

      <div className="time">
        <span>00:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}

export default ProgressBar;