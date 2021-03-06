import { MutableRefObject } from "react";

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
  setCurrentSong: (song: ISong) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  showLibrary: boolean;
}

export interface ILibrarySongProps {
  song: ISong;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  setCurrentSong: (song: ISong) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

export interface IPlayerProps {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  currentSong: ISong;
  setCurrentSong: (song: ISong) => void;
  setSongs: (song: ISong[]) => void;
  songs: ISong[];
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  songInfo: ISongInfoProps;
  setSongInfo: (song: ISongInfoProps) => void;
}

export interface ISongInfoProps {
  currentTime: number;
  duration: number;
}

export interface INav {
  showLibrary: boolean;
  setShowLibrary: (show: boolean) => void;
}
