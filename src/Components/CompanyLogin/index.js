import React, {Component} from 'react'
import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from '../CompanyHome/CompanyHomeElements'
import '../UserLogin/Login.css'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import {login_comp} from '../../Web3Client';


class Login extends Component{

    state = { 
        userpass: '',
        redirect: false,
      }
     handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state); 
    login_comp(this.state.CompanyName,this.state.userpass).then((res)=>{
      console.log(res)
      if(res==true)
      {
        this.setState({redirect:true});
      }
    });
    }   
    
    render(){  

        return( 
            <HeroContainer> 
                 <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
                 </HeroBg>
            <HeroContent>
            <div className="full-page">
                <div id='login-form'className='login-page'>
                     <div className="form-box">
                            <h2 className='header'>LOGIN</h2>
                            <p className='title'>Enter Company Name and Password Here</p>
                        <form id='login' className='input-group-login' onSubmit={this.handleSubmit}>
                            <input type='text' className='input-field'placeholder='Company Name' required id='CompanyName' onChange={this.handleChange}/>
                            <input type='password'className='input-field'placeholder='Enter Password' required id='userpass' onChange={this.handleChange}/>
                            <button type='submit' className='submit-btn'>Log in</button>
                            <Link  to="/CompanyRegister" className='reg-btn' >Don't Have An Account?</Link>

                        </form>
                        { this.state.redirect ? (<Navigate to="/CompanyHome"  state={this.state.CompanyName}/>) : null }
                    </div>
                 </div>
           </div>
           </HeroContent>
      </HeroContainer>
        );
    }
}
export default Login

