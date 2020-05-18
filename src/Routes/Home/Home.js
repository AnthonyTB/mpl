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
