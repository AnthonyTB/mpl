import React from 'react';
import {
  SocialShowcase,
  PhotographyShowcase,
  ContentShowcase,
} from './Components';
import './Home.css';
import { Portrait } from '../../Assets/';

export default function Home() {
  return (
    <>
      <header>
        <div className='left-content'>
          <img src={Portrait} alt='Jared & Keira' />
        </div>
        <div className='right-content'>
          <h1>Jared Robinson</h1>
          <hr />
          <span>content creator, photographer, avid dog lover</span>
        </div>
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
