import React from "react";
import { ILibrarySongProps } from "../types";

const LibrarySong = ({ song }: ILibrarySongProps) => {
  return (
    <div className="library-song">
      <img src={song.cover} alt={`${song.name}`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>

  );
};

export default LibrarySong;
