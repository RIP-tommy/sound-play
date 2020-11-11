import React, { useState } from 'react';

function Player( {isPlaying}) {
 
  return (
    <div className="bottom_player_slider">
      <h2>{console.log(isPlaying)}</h2>
      <button onClick={!isPlaying ? true : false}>
        <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
      </button>

      <style jsx>{`
        .bottom_player_slider {
          position: fixed;
          bottom: 0;
          width: 100%;
          -webkit-perspective: 900;
          perspective: 900;
          -webkit-perspective-origin: 80% 100%;
          perspective-origin: 80% 100%;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Player