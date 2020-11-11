import React, { useState, useEffect, useRef } from 'react';
import songCardStyle from './SongCard.module.scss'
import playerStyle from './PlayerStyle.module.scss'
import cn from 'classnames'


const SongCard = ({ songLists }) => {
  const [audioSource, setAudioSrc] = useState("");
  const [selectedSongArtist, setSelectedArtist] = useState("");
  const [selectedSongTitle, setSelectedTitle] = useState("");
  const [selectedSongArtwork, setSelectedArtwork] = useState("");
  const [isPlaying, setPlaying] = useState(false);
  const [isSelected, setSelected] = useState(0);
  const [isMuted, setMute] = useState(false);
  const [audioCurrentTime, setCurrentTime] = useState(0);


  // ref


  const audioRef = useRef(null);
  const audioPlayerRef = useRef(null);
  const timeLineRef = useRef(null);
  const progressBarRef = useRef(null);
  const hoverPlayheadRef = useRef(null);
  const progressBarHandleRef = useRef(null);
  const audioDurationRef = useRef(null);
  const volumeRef = useRef(null);
  const volumeLineRef = useRef(null);
  const volumeProgressRef = useRef(null);
  const volumeBarHandleRef = useRef(null);

  

  // function for control audios


  const updatePlayer = (index) =>{
    
    const currentSong = songLists[index].audio;
    setAudioSrc(currentSong);
    setSelectedArtist(songLists[index].author);
    setSelectedTitle(songLists[index].name);
    setSelectedArtwork(songLists[index].img);
    setSelected(index+1);
    audioRef.current.load();
  }

  const playOrPause = () => {
    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
  }

  const changeIsPlayingStatus = () => {
    setPlaying(true);
  }

  const changeIsPlayingStatusToFalse = () => {
    setPlaying(false);
  }

  const mute = () => {
    const currentVolume = audioRef.current.volume
    isMuted ?
      (audioRef.current.muted = false, setMute(false),
      volumeProgressRef.current.style.height = currentVolume*92 + "px",
      volumeBarHandleRef.current.style.top = 102 - currentVolume*92 + "px")
      : (audioRef.current.muted = true, setMute(true),
        volumeProgressRef.current.style.height = '0px',
        volumeBarHandleRef.current.style.top = '98px')
  }

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    seconds = (seconds >= 10) ? seconds : "0" + seconds;

    let timeString = minutes + ":" +  seconds;

    return timeString
  }


  // bottom player function


    // player prev, play or pause, next button function


    const toPrevSong = (currentIndex) => {
      currentIndex > 1 ? updatePlayer(currentIndex-2) : updatePlayer(songLists.length-1)
    }
  
    const toNextSong = (currentIndex) => {
      if(currentIndex == songLists.length) {
        updatePlayer(0);
      } else {
        updatePlayer(currentIndex);
      }
    }


    // playbar time line funtions

  const audioOnLoaded = () => {
    timeLineRef.current.setAttribute('aria-valuemax', audioRef.current.duration);
    audioDurationRef.current.dataset.content = formatTime(audioRef.current.duration);
    audioRef.current.play();
    audioPlayerRef.current.style.visibility = "visible";
  } 
  
  const timeUpdate = () => {
    const duration = audioRef.current.duration;
    const playPercent = (audioRef.current.currentTime*100 / duration);

    progressBarRef.current.style.width = playPercent + "%";
    progressBarHandleRef.current.style.left = playPercent + "%";

    setCurrentTime(formatTime(parseInt(audioRef.current.currentTime)));
    timeLineRef.current.setAttribute('aria-valuenow', audioRef.current.currentTime);
  }

  const changeCurrentTime = (e) => {
    const duration = audioRef.current.duration;
  
    const playheadWidth = timeLineRef.current.offsetWidth;
    const offsetWidth = timeLineRef.current.offsetLeft;
    const userClickWidth = e.clientX - offsetWidth;
  
    const userClickWidthInPercent = (userClickWidth*100)/playheadWidth;

    progressBarRef.current.style.width = userClickWidthInPercent + "%";
    progressBarHandleRef.current.style.left = userClickWidthInPercent + "%";

    audioRef.current.currentTime = (duration * userClickWidthInPercent)/100;
  }

  const hoverTimeLine = (e) => {
    const duration = audioRef.current.duration;
    
    const playheadWidth = timeLineRef.current.offsetWidth
    
    const offsetWidth = timeLineRef.current.offsetLeft;
    const userClickWidth = e.clientX - offsetWidth;
    const userClickWidthInPercent = (userClickWidth*100)/playheadWidth;
  
    if(userClickWidthInPercent <= 100){
      hoverPlayheadRef.current.style.width = userClickWidthInPercent + "%";
    }
    
    const time = (duration * userClickWidthInPercent)/100;
    
    if( (time >=0) && (time <= duration)){
      hoverPlayheadRef.current.dataset.content = formatTime(time);
    }
  }


  // volume control function


  const changeCurrentVolume = (e) => {
    const volumeLineheight = volumeLineRef.current.offsetHeight;
    const volumeLineoffsetTop = volumeLineRef.current.offsetTop;
    const userClickHeight = volumeLineheight - e.offsetY + volumeLineoffsetTop;

    if(userClickHeight > 92) {
      volumeProgressRef.current.style.height = 92 + "px";
      volumeBarHandleRef.current.style.top = 10 + "px";

      audioRef.current.volume = 1;
      volumeRef.current.setAttribute('aria-valuenow', audioRef.current.volume);
    } else if(userClickHeight < 0) {
      volumeProgressRef.current.style.height = 0 + "px";
      volumeBarHandleRef.current.style.top = 98 + "px";

      audioRef.current.volume = 0;
      volumeRef.current.setAttribute('aria-valuenow', audioRef.current.volume);
    } else {
      const userClickHeightInPercent = userClickHeight/volumeLineheight;

      volumeProgressRef.current.style.height = userClickHeight + "px";
      volumeBarHandleRef.current.style.top = 98 - userClickHeight + "px";

      audioRef.current.volume = userClickHeightInPercent;
      volumeRef.current.setAttribute('aria-valuenow', audioRef.current.volume);
    }
  }

  useEffect(() => {    
    audioRef.current.addEventListener('loadeddata', audioOnLoaded, false);
    audioRef.current.addEventListener('timeupdate', timeUpdate, false);
    audioRef.current.addEventListener('playing', changeIsPlayingStatus, false);
    audioRef.current.addEventListener('pause', changeIsPlayingStatusToFalse, false);
    audioRef.current.addEventListener('ended', (e) => {toNextSong(isSelected)}, false);
    timeLineRef.current.addEventListener("click", changeCurrentTime, false);
    timeLineRef.current.addEventListener("mousemove", hoverTimeLine, false);
    volumeRef.current.addEventListener("click", changeCurrentVolume, true);

    return () => {
      audioRef.current.removeEventListener('loadeddata', audioOnLoaded);
      audioRef.current.removeEventListener('timeupdate', timeUpdate);
      audioRef.current.removeEventListener('playing', changeIsPlayingStatus);
      audioRef.current.removeEventListener('pause', changeIsPlayingStatusToFalse);
      audioRef.current.removeEventListener('ended', (e) => {toNextSong(isSelected)});
      timeLineRef.current.removeEventListener("click", changeCurrentTime);
      timeLineRef.current.removeEventListener("mousemove", hoverTimeLine);
      volumeRef.current.removeEventListener("click", changeCurrentVolume);
    }
  });

  return (
    <div className="songCard_section">
      <div className={songCardStyle.info_filter_section}>
        <div className={songCardStyle.info_link}>
          <a>행사안내</a>
          <a>참가하기</a>
        </div>
      </div>
      <ul className={songCardStyle.loading_list}>
        {songLists.map((musicList, index) => (
          <li key={musicList.id} className={songCardStyle.playTile_item}>
            <div className={songCardStyle.playTile}>

              <div className={songCardStyle.playTile_artwork}>

                <div className={songCardStyle.cover_image} style={{height: '100%', width:' 100%'}}>
                  <span className={songCardStyle.artwork} style={{backgroundImage: `url(${musicList.img})`, width: '100%', height: '100%', opacity: 1}}></span>
                </div>

                <div className={songCardStyle.play_pause_button_container} >
                  <a
                    role="button"
                    className={cn(songCardStyle.play_pause_button,
                      {[songCardStyle.is_playing]: isPlaying && isSelected == musicList.id})}
                    onClick={isSelected == musicList.id ? playOrPause : () => {updatePlayer(index)}}
                  >
                  </a>
                </div>
              </div>
            </div>

            <div className={songCardStyle.description}>
              <a className={songCardStyle.song_title} href=""><h3 className="word_truncated">{musicList.name}</h3></a>
              <a className={cn(songCardStyle.artist_name, "word_truncated")} href="">by {musicList.author}</a>
            </div>

            <div className={songCardStyle.play_like_count}>
              <div className={songCardStyle.play_info_display_section}>
                <div className={songCardStyle.play_icon}></div>
                <span className={songCardStyle.num_play}>500</span>
              </div>
              <div className={songCardStyle.like_info_display_section}>
                <a role="button" className={cn(songCardStyle.like_button, 'sc_ir')}>like</a>
                <span className={songCardStyle.num_likes}>10</span>
              </div>
            </div>

          </li>
        ))}
      </ul>
      
      <audio ref={ audioRef }>
        <source src={ audioSource } type="audio/ogg"/>
          Your browser does not support the audio element.
      </audio>

      <div className={playerStyle.bottom_player_slider} ref={ audioPlayerRef }>
        
        <div className={playerStyle.playControls__bg}></div>

        <div className={playerStyle.player_control_bar} style={{ margin: 'auto'}}>
          <div className={playerStyle.controll_buttons}>
            <button className={cn(playerStyle.player_control_button, playerStyle.backward, 'sc_ir')} onClick={() => toPrevSong(isSelected)} />
            <button className={
                cn (
                  playerStyle.player_control_button, 'sc_ir',
                  {[playerStyle.pause]: isPlaying == true,
                  [playerStyle.play_current]: isPlaying == false}
                )
              }
              onClick={playOrPause}
            />
            <button className={cn(playerStyle.player_control_button, playerStyle.forward, 'sc_ir')} onClick={() => toNextSong(isSelected)} />
          </div>

          <div className={playerStyle.play_time_progress}>{ audioCurrentTime ? audioCurrentTime : "0:00" }</div>
          
          <div className={playerStyle.playtime_section}>
            <div className={playerStyle.play_time_bar}>
              <div className={playerStyle.play_time_line} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" ref={ timeLineRef }>
                <div className={playerStyle.progress_bar} ref={ progressBarRef }></div>
                <div className={playerStyle.hover_playhead} ref={ hoverPlayheadRef } data-content="0:00"></div>
                <div className={playerStyle.progress_bar_handle} ref={ progressBarHandleRef }></div>
              </div>
            </div>
          </div>
          
          <div className={playerStyle.play_time_duration} ref={ audioDurationRef } data-content="0:00"></div>
          
          <div className={playerStyle.volume_control_section}>
            <div className={cn(playerStyle.volume)}>
              <button className={
                cn(
                  {[playerStyle.volume_button_muted]: isMuted == true,
                    [playerStyle.volume_button]: isMuted == false},
                  playerStyle.volume_button,
                  playerStyle.player_control_button,
                  'sc_ir'
                )}
                onClick={mute}
              >volume</button>
              <div className={playerStyle.volume_control_slider_wrapper} role="slider" aria-valuemin="0" aria-valuemax="1" aria-label="Volume" aria-valuenow="1" ref={ volumeRef }>
                <div className={playerStyle.volume_control_slider_background} ref={ volumeLineRef }></div>
                <div
                  className={playerStyle.volume_control_slider_progress}
                  style={{height: '92px'}}
                  ref={ volumeProgressRef }
                ></div>
                <div
                  className={playerStyle.volume_control_slider_handle}
                  style={{top: '10px'}}
                  ref={ volumeBarHandleRef }
                ></div>
              </div>  
            </div>
          </div>

          <div className={playerStyle.current_playing_song_info}>
            <div style={{height: '30px', width: '30px'}}>
              <span className={playerStyle.player_song_artwork} style={{ backgroundImage: `url('${selectedSongArtwork}')`, width: '30px', height: '30px', opacity: 1 }}></span>
            </div>
            <div className={playerStyle.song_info}>
              <a className={cn(playerStyle.song_info_title, 'word_truncated')}>{selectedSongTitle}</a>
              <a className={cn(playerStyle.song_info_artist, 'word_truncated')}>{selectedSongArtist}</a>
            </div>
          </div>

          <button className={cn(playerStyle.playTile_like_button, 'sc_ir')}>like</button>

        </div>

      </div>

    </div>
  );
};

export default SongCard;