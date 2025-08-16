import React, { useState } from "react";
import "./style/style.css";
const MusicElement = () => {
  const [isHovered, setisHovered] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setisHovered(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setisHovered(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setisHovered(false);
    let file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      uploadAudio(file);
    } else {
      alert("Please drop a valid audio file");
      return;
    }
  };

  const uploadAudio = async (file) => {
    try {
      const formData = new FormData();
      formData.append("mp3file", file);

      // use the correct path your server mounts the router on
      const resp = await fetch("http://localhost:8000/uploadsong", {
        method: "POST",
        body: formData,
      });

      // read raw text first so JSON parse won't throw unexpectedly
      const raw = await resp.text();
      console.log("[UPLOAD] status=", resp.status, "raw=", raw);

      if (!resp.ok) {
        // try to parse JSON error if possible
        try {
          const json = raw ? JSON.parse(raw) : null;
          console.error("Upload failed, server returned:", resp.status, json);
          alert("Upload failed: " + (json?.message || resp.status));
        } catch (e) {
          console.error(
            "Upload failed, server returned non-JSON:",
            resp.status,
            raw
          );
          alert("Upload failed: " + (raw || resp.status));
        }
        return;
      }

      // success: parse JSON if present
      let data = null;
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch (e) {
        console.warn("Upload succeeded but response JSON parse failed:", e);
      }

      console.log("Upload success data:", data);
      alert("Audio file uploaded successfully");
    } catch (err) {
      console.error("Error uploading audio file:", err);
      // alert("Error uploading audio file: " + err.message);
    }
  };

  return (
    <div className="music_element">
      <div
        className={`song_picture ${isHovered ? "hovered" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <img src="" alt="song cover" />
      </div>
    </div>
  );
};

export default MusicElement;
