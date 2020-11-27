import React from "react";
import { ISongProps } from "../types";

const Song = ({ currentSong }: ISongProps) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={`${currentSong.name}`} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
