import React from 'react'
import { ILibraryProps } from '../types'
import LibrarySong from './LibrarySong'

const Library = ({ songs }: ILibraryProps) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  )
}

export default Library
