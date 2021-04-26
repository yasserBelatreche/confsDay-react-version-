import React, {useRef, useState} from 'react';
import Hero from './heroSection/HeroSection';
import About from './aboutSection/AboutSection';
import Conferences from './conferencesSection/ConferencesSection';
import Agenda from './agendaSection/AgendaSection';
import Speakers from './speakersSection/SpeakersSection';
import Testimonials from './testimonialsSection/TestimonialsSection';
import Sponsors from './sponsorsSection/SponsorsSection';
import './Content.css'


const Content = () => {
  const [scroll, setScrollTop] = useState(0);
  const container = useRef(null);
  
   

  return (
    <div className="home-content">
      <Hero />
      <About />
      <Conferences/>
      <Agenda/>
      <Speakers/>
      <Testimonials/>
      <Sponsors/>
    </div>
  )
}

export default Content;