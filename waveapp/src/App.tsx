import React, { useState } from 'react';
import './styles/app.scss';

import Player from './components/Player';
import Song from './components/Song';
import data from './utils/data'
import { ISong } from './types'
import Library from './components/Library';

function App() {
  const [songs, setSongs] = useState<ISong[]>(data());
  const [currentSong, setCurrentSong] = useState<ISong>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
