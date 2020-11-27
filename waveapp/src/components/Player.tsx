import React, { SyntheticEvent, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { IPlayerProps, ISongInfoProps } from '../types'

const Player = ({ currentSong, isPlaying, setIsPlaying }: IPlayerProps) => {
  const [songInfo, setSongInfo] = useState<ISongInfoProps>({
    currentTime: 0,
    duration: 0,
  })

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const updateDuration = (e: SyntheticEvent<HTMLMediaElement>) => {
    setSongInfo({
      ...songInfo,
      duration: e.currentTarget.duration
    })
  }
  const updateTimeHandler = (e: SyntheticEvent<HTMLMediaElement>) => {
    setSongInfo({
      ...songInfo,
      currentTime: e.currentTarget.currentTime
    })
    console.log(songInfo);
  }
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
    audioRef.current!.currentTime = +e.target.value
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
      <audio onLoadedMetadata={updateDuration} onTimeUpdate={updateTimeHandler} src={currentSong.audio} ref={audioRef} />
    </div>
  );
};

export default Player;
