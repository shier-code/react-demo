/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-08 11:04:28
 * @LastEditors: went
 * @LastEditTime: 2021-11-12 17:36:59
 */
import React, { memo, useEffect, useRef, useState } from 'react'
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSizeImage, formatDate, getPlayUrl } from '@/utils/format-utils'
import { getSongDetailAction } from '../store/actionCreators'
import { useCallback } from 'react';
export default memo(function WTAppPlayerBar() {
  //props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChangeing, setIsChangeing] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const dispatch = useDispatch()


  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)

  //other handle
  const audioRef = useRef()
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, "mm:ss")
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
  }, [currentSong])
  //handle function 
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }
  const timeUpdate = (e) => {
    if (!isChangeing) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / duration * 100)
    }
  }
  const sliderChange = useCallback((value) => {
    setIsChangeing(true)
    const currentTime = value / 100 * duration / 1000
    setCurrentTime(currentTime * 1000)
    setProgress(value)
  }, [duration])
  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChangeing(false)
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play" onClick={e => playMusic()}></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="total-time">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn valueme"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
    </PlaybarWrapper>
  )
})
