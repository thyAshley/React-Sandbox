import React, { useState, SyntheticEvent, useRef } from "react";
import "./styles/app.scss";

import Player from "./components/Player";
import Song from "./components/Song";
import data from "./utils/data";
import { ISong, ISongInfoProps } from "./types";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [showLibrary, setShowLibrary] = useState(false);
  const [songs, setSongs] = useState<ISong[]>(data());
  const [currentSong, setCurrentSong] = useState<ISong>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [songInfo, setSongInfo] = useState<ISongInfoProps>({
    currentTime: 0,
    duration: 0,
  });

  const updateDuration = (e: SyntheticEvent<HTMLMediaElement>) => {
    setSongInfo({
      ...songInfo,
      duration: e.currentTarget.duration,
    });
  };
  const updateTimeHandler = (e: SyntheticEvent<HTMLMediaElement>) => {
    setSongInfo({
      ...songInfo,
      currentTime: e.currentTarget.currentTime,
    });
  };
  return (
    <div className="App">
      <Nav setShowLibrary={setShowLibrary} showLibrary={showLibrary} />
      <Song currentSong={currentSong} />
      <Player
        setCurrentSong={setCurrentSong}
        songs={songs}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setSongs={setSongs}
      />
      <Library showLibrary={showLibrary} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} />

      <audio
        onLoadedMetadata={updateDuration}
        onTimeUpdate={updateTimeHandler}
        src={currentSong.audio}
        ref={audioRef}
      />
    </div>
  );
}

export default App;
