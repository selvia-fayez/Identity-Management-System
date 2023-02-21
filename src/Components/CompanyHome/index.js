import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent, Sec1, Sec2} from './CompanyHomeElements'
import { useNavigate } from 'react-router-dom';
import '../HeroSection/btn.css';
import send from '../../images/send.jpg'
import view2 from '../../images/view2.jpg'
import { useLocation } from 'react-router-dom';


const HeroSection = () => {
     const route = useNavigate()

    const location = useLocation();
    let comp_name = location.state;
    console.log(location.state)
    
    return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
          </HeroBg>
          <HeroContent>
              <Sec1>
                  <h1>Send Request</h1>
                  <img className='img' src={send} type='send.jpg'></img>
                  <button onClick={() => route('/AddRequest' , {state:{c_name:comp_name}})} className='btn companybtn'>Send</button>
              </Sec1>
              <Sec2>
                  <h1>View Your Requests</h1>
                  <img className='img' src={view2} type='view.jpg'></img>
                  <button onClick={() => route('/ViewData', {state:{c_name:comp_name}})} className='btn companybtn'>View</button>
              </Sec2>
          </HeroContent>
      </HeroContainer>
    );
  };
  
  export default HeroSection