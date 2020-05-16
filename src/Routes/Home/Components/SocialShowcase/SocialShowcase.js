import React from 'react';
import './SocialShowcase.css';
import { useContext } from 'react';
import { Context } from '../../../../Components/Context/Context';

export default function SocialShowcase() {
  const { twitterData, instagramData, twitchFollowers } = useContext(Context);

  const insert = (arr, index, newItem) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index),
  ];

  const formatCount = (val) => {
    if (val.toString().length === 5) {
      let arr = val.toString().split('');
      return insert(arr, 2, '.').slice(0, 4).join('') + 'K';
    } else if (val.toString().length === 6) {
      let arr = val.toString().split('');
      return insert(arr, 3, '.').slice(0, 5).join('') + 'K';
    } else if (val.toString().length === 7) {
      let arr = val.toString().split('');
      return insert(arr, 1, '.').slice(0, 3).join('') + 'M';
    } else if (val.toString().length <= 4) {
      return val.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,');
    }
  };

  return (
    <>
      {
        (twitterData,
        instagramData,
        twitchFollowers ? (
          <>
            <h1>Social Media</h1>
            <ul>
              <li>
                <i class='fab fa-twitter'></i>
                <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <linearGradient
                      id='myGradient1'
                      gradientTransform='rotate(45)'
                    >
                      <stop offset='5%' stop-color='#0072ff' />
                      <stop offset='95%' stop-color='#00c6ff' />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url('#myGradient1')"
                    d='M32.6,-47.6C46.6,-41.8,65.2,-40,71.6,-31.2C77.9,-22.3,72.1,-6.4,67.9,8.5C63.7,23.3,61.3,37.1,52.6,43.6C43.9,50.1,29.1,49.3,15.4,54C1.7,58.7,-10.8,69,-23.2,69.7C-35.6,70.3,-47.9,61.2,-60,50.3C-72.1,39.4,-84,26.6,-85.1,12.8C-86.2,-1,-76.5,-15.7,-65.2,-25.3C-53.9,-35,-41.1,-39.4,-29.9,-46.6C-18.8,-53.7,-9.4,-63.5,0,-63.5C9.3,-63.4,18.6,-53.4,32.6,-47.6Z'
                    transform='translate(100 100)'
                  />
                </svg>
                <div className='stats'>
                  <span className='count'>
                    {formatCount(twitterData.followers_count)}
                  </span>
                  <span className='label'>followers</span>
                </div>
                <button className='twitter-btn'>
                  <a href='twitter.com' target='blank_'>
                    follow
                  </a>
                </button>
              </li>
              <li>
                <i class='fab fa-instagram'></i>
                <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <radialGradient
                      id='myGradient2'
                      r='150%'
                      cx='30%'
                      cy='107%'
                    >
                      <stop stop-color='#fccc63' offset='0' />
                      <stop stop-color='#fccc63' offset='0.05' />
                      <stop stop-color='#fd5949' offset='0.45' />
                      <stop stop-color='#d6249f' offset='0.6' />
                      <stop stop-color='#285AEB' offset='0.9' />
                    </radialGradient>
                  </defs>
                  <path
                    fill="url('#myGradient2')"
                    d='M32.6,-47.6C46.6,-41.8,65.2,-40,71.6,-31.2C77.9,-22.3,72.1,-6.4,67.9,8.5C63.7,23.3,61.3,37.1,52.6,43.6C43.9,50.1,29.1,49.3,15.4,54C1.7,58.7,-10.8,69,-23.2,69.7C-35.6,70.3,-47.9,61.2,-60,50.3C-72.1,39.4,-84,26.6,-85.1,12.8C-86.2,-1,-76.5,-15.7,-65.2,-25.3C-53.9,-35,-41.1,-39.4,-29.9,-46.6C-18.8,-53.7,-9.4,-63.5,0,-63.5C9.3,-63.4,18.6,-53.4,32.6,-47.6Z'
                    transform='translate(100 100)'
                  />
                </svg>
                <div className='stats'>
                  <span className='count'>
                    {formatCount(
                      instagramData.graphql.user.edge_followed_by.count
                    )}
                  </span>
                  <span className='label'>followers</span>
                </div>

                <button className='instagram-btn'>
                  <a href='instagram.com' target='blank_'>
                    follow
                  </a>
                </button>
              </li>
              <li>
                <i class='fab fa-twitch'></i>
                <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <linearGradient
                      id='myGradient3'
                      gradientTransform='rotate(45)'
                    >
                      <stop offset='5%' stop-color='#2a0845' />
                      <stop offset='95%' stop-color='#6441a5' />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url('#myGradient3')"
                    d='M32.6,-47.6C46.6,-41.8,65.2,-40,71.6,-31.2C77.9,-22.3,72.1,-6.4,67.9,8.5C63.7,23.3,61.3,37.1,52.6,43.6C43.9,50.1,29.1,49.3,15.4,54C1.7,58.7,-10.8,69,-23.2,69.7C-35.6,70.3,-47.9,61.2,-60,50.3C-72.1,39.4,-84,26.6,-85.1,12.8C-86.2,-1,-76.5,-15.7,-65.2,-25.3C-53.9,-35,-41.1,-39.4,-29.9,-46.6C-18.8,-53.7,-9.4,-63.5,0,-63.5C9.3,-63.4,18.6,-53.4,32.6,-47.6Z'
                    transform='translate(100 100)'
                  />
                </svg>
                <div className='stats'>
                  <span className='count'>
                    {formatCount(twitchFollowers.total)}
                  </span>
                  <span className='label'>followers</span>
                </div>

                <button className='twitch-btn'>
                  <a href='twitch.tv/manpantslive' target='blank_'>
                    follow
                  </a>
                </button>
              </li>
            </ul>
          </>
        ) : (
          'Loading..'
        ))
      }
    </>
  );
}
