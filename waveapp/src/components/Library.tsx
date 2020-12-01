import React from 'react'
import { ILibraryProps } from '../types'
import LibrarySong from './LibrarySong'

const Library = ({ showLibrary, songs, setCurrentSong, audioRef, isPlaying, setIsPlaying }: ILibraryProps) => {
  return (
    <div className={`library ${showLibrary ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} key={song.id} setCurrentSong={setCurrentSong} audioRef={audioRef} setIsPlaying={setIsPlaying} />
        ))}
      </div>
    </div>
  )
}

export default Library
