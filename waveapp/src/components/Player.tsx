import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { IPlayerProps } from '../types'

const Player = ({ songInfo, setSongInfo, audioRef, currentSong, isPlaying, setIsPlaying }: IPlayerProps) => {

  const playSongHandler = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef?.current?.pause();
    } else {
      setIsPlaying(true);
      audioRef?.current?.play();
    }
  }

  const getTime = (time: number | null) => {
    if (!time) return "0:00"
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  }

  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    audioRef!.current!.currentTime = +e.target.value
    setSongInfo({
      ...songInfo,
      currentTime: +e.target.value
    })
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input min={0} max={songInfo.duration} value={songInfo.currentTime || 0} type="range" onChange={dragHandler} />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
