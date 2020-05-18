import React, { useContext } from 'react';
import './ContentShowcase.css';
import { Context } from '../../../../Components/Context/Context';

export default function ContentShowcase() {
  const { twitchVOD, twitchStream } = useContext(Context);
  const liveStatus = twitchStream.data.length > 0;

  const renderStream = () => {
    return (
      <iframe
        title="ManPantsLive's Live Stream"
        src={`https://player.twitch.tv/?channel=manpantslive&muted=true&autoplay=true`}
        allowFullScreen={true}
        frameBorder='0'
        scrolling='no'
        height='100%'
        width='100%'
      />
    );
  };

  const renderRebroadcast = () => {
    return (
      <iframe
        title="ManPantsLive's Live Stream"
        src={`https://player.twitch.tv/?video=v${twitchVOD.data[0].id}&muted=true&autoplay=true`}
        allowFullScreen={true}
        frameBorder='0'
        scrolling='no'
        height='100%'
        width='100%'
      />
    );
  };

  return (
    <>
      <div className='status'>
        <span className={`live-status ${liveStatus}`}>
          {liveStatus ? 'LIVE' : 'REBROADCAST'}
          <span>
            <i class='fas fa-circle'></i>
          </span>
        </span>
      </div>
      <div className='video-container'>
        {liveStatus ? renderStream() : renderRebroadcast()}
      </div>
    </>
  );
}
