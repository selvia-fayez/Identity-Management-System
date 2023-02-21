import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent, Sec1, Sec2} from './UserHomeElements'
import { useNavigate } from 'react-router-dom';
import '../HeroSection/btn.css';
import upload from '../../images/upload.jpg'
import view from '../../images/view.jpg'
import React, { Component } from 'react';


const HeroSection = () => {
 
    const route = useNavigate()
    return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
          </HeroBg>
          <HeroContent>
              <Sec1>
                  <h1>Upload Your Documents</h1>
                  <img className='img' src={upload} type='upload.jpg'></img>
                  <button onClick={() => route('/Upload')} className='btn userbtn btnuser'>Upload</button>
              </Sec1>
              <Sec2>
              <h1>View Your Requests</h1>
                  <img className='img' src={view} type='view.jpg'></img>
                  <button onClick={() => route('/ViewRequest')} className='btn userbtn btnuser'>View</button>
              </Sec2>
          </HeroContent>
      </HeroContainer>
    );
  };
  
  export default HeroSection