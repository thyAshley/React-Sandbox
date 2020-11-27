export interface ISong {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
}

export interface ISongProps {
  currentSong: ISong;
}

export interface ILibraryProps {
  songs: ISong[];
}

export interface ILibrarySongProps {
  song: ISong;
}

export interface IPlayerProps {
  currentSong: ISong;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export interface ISongInfoProps {
  currentTime: number;
  duration: number;
}
