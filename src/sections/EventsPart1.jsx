// src/sections/EventsPart1.jsx
import React from 'react';
import VideoBackground from '../components/VideoBackground';
import './Events.css';
import videoConcertGeneration from '../video/Concert_Video_Generation.mp4';

export default function EventsPart1() {
  return (
    <section id="events1" className="section events" style={{ height: '100%', position: 'relative' }}>
      <VideoBackground src={videoConcertGeneration} overlayOpacity={0.7} gradientOverlay />
      <div className="events__hero-content reveal" style={{ position: 'absolute', bottom: '15%', left: '5%', zIndex: 10 }}>
        <h2 className="events__headline" style={{ fontSize: '5rem', margin: 0, lineHeight: '1.1' }}>
          A Stage. An Audience. <br/><span className="text-gold">A Platform.</span>
        </h2>
        <p className="events__subheadline body-lg" style={{ marginTop: '1rem', opacity: 0.9, fontSize: '1.5rem' }}>
          300+ Events Per Year. 40 Million Attendees.
        </p>
      </div>
    </section>
  );
}
