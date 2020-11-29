import React from "react";

import { ILibrarySongProps } from "../types";

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }: ILibrarySongProps) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) audioRef.current?.play()
  }

  return (
    <div className={`library-song ${song.active ? 'active' : ''}`} onClick={songSelectHandler}>
      <img src={song.cover} alt={`${song.name}`} />
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>

  );
};

export default LibrarySong;
