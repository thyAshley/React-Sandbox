import React from 'react'
import { ISongProps } from '../types/types'

const Song = ({ currentSong }: ISongProps) => {
  return (
    <div className="song-container">
      <h1>{currentSong.cover}</h1>
      <h1>{currentSong.name}</h1>
      <h1>{currentSong.artist}</h1>
    </div>
  )
}

export default Song
