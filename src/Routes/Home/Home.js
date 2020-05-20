import React from 'react';
import {
  SocialShowcase,
  PhotographyShowcase,
  ContentShowcase,
} from './Components';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div class='morph-wrap'>
        <svg class='morph' width='1400' height='770' viewBox='0 0 1400 770'>
          <path d='M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z' />
        </svg>
      </div>
      <header>
        <div className='left-content'>
          <h1>Jared</h1>
          <h1>Robinson</h1>
        </div>
        <div className='right-content'>
          <span>
            content creator<span className='dot'>.</span> photographer
            <span className='dot'>.</span> avid dog lover
          </span>
        </div>
      </header>
      <main>
        <section className='SocialsShowcase'>
          <SocialShowcase />
        </section>
        <section className='ContentShowcase'>
          <ContentShowcase />
          <div className='route-btn'>
            <Link to='/Photography'>Learn More</Link>
          </div>
        </section>
        <section className='PhotoShowcase'>
          <PhotographyShowcase />
          <div className='route-btn'>
            <Link to='/Photography'>Learn More</Link>
          </div>
        </section>
      </main>
    </>
  );
}
