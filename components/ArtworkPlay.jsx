import React, { useState, useEffect } from 'react';

function ArtworkPlay({ isPlaying, audioSrc }) {

  return (
    // <button onClick={isPlaying ? audioElement.play() : audioElement.pause()}>
    <div className="artword_play">
                  <div className="icon">
                  <button onClick={!isPlaying ? false : true } />
                    <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
                  </div>

    <style jsx>{`
      .icon {
        background-color: white;
      }
    `}</style>
    
    </div>
    // </button>
  )
}


// class ArtworkPlay extends React.Component {
//   constructor() {
//     super();
//     this.playSong = this.playSong.bind(this);
//     this.togglePlay = this.togglePlay.bind(this);
//   }

//   playSong() {
//     const { index, playlist, playSong } = this.props;
//     playSong(playlist, index);
//   }

//   togglePlay() {
//     const { isPlaying } = this.props;
//     const audioElement = document.getElementById('audio');

//     if (isPlaying) {
//       audioElement.pause();
//     } else {
//       audioElement.play();
//     }
//   }

//   render() {
//     const { isActive, isPlaying } = this.props;
//     return (
//       <div
//         className={`artwork-play ${isActive ? 'artwork-play--active' : ''}`}
//         role="button"
//         tabIndex="0"
//         onClick={isActive ? this.togglePlay : this.playSong}
//       >
//         <i className={`artwork-play__icon ion-${isActive && isPlaying ? 'radio-waves' : 'ios-play'}`} />
//       </div>
//     );
//   }
// }

export default ArtworkPlay;