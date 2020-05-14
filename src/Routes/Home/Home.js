import React from 'react';
import {
  SocialShowcase,
  PhotographyShowcase,
  ContentShowcase,
} from './Components';
import './Home.css';

export default function Home() {
  return (
    <>
      <header>
        <div className='left-content'>
          <h1>Jared</h1>
          <h1>Robinson</h1>
          <hr />
          <span>content creator, photographer, avid dog lover</span>
        </div>
        <div className='right-content'></div>
      </header>
      <section className='SocialsShowcase'>
        <SocialShowcase />
      </section>
      <section className='ContentShowcase'>
        <ContentShowcase />
      </section>
      <section className='PhotoShowcase'>
        <PhotographyShowcase />
      </section>
    </>
  );
}
