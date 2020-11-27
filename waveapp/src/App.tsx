import React, { useState } from 'react';
import './styles/app.scss';

import Player from './components/Player';
import Song from './components/Song';
import data from './utils/data'
import { ISong } from './types/types'

function App() {
  const [songs, setSongs] = useState<ISong[]>(data());
  const [currentSong, setCurrentSong] = useState<ISong>(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
