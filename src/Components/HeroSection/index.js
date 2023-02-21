import React, {useState} from 'react'
import video from '../../videos/video.mp4'
import { useNavigate } from 'react-router-dom';
import './btn.css';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1} from './HeroElements'

const HeroSection = () => {
  const route = useNavigate();
  const refreshPage = () => {
    route('CompanyHome');
    window.location.reload();
  }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Your Documents with you everywhere!</HeroH1>
          <p>FEEL SAFE WITH WARA2Y</p>
          <div className='loginoptions'>
            <h2>GET STARTED</h2>
            <button onClick={() => route('UserLogin')} className='btn userbtn'>User</button>
            <button onClick={() => route('CompanyLogin')} className='btn companybtn'>Company</button>
          </div>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection