import React from 'react';
import YouTube from 'react-youtube';

class youtube extends React.Component {
  render() {
    const opts = {
      height: '450',
      width: '100%',
      playerVars: {
        autoplay: true,
        loop: true,
        playlist: "W7edvITC9g4",
      },
    };

    return (
      <div>
        <YouTube videoId="W7edvITC9g4" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
    event.target.mute(); // 음소거
  }
}

export default youtube;