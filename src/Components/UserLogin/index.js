import React, {Component} from 'react'
import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from '../CompanyHome/CompanyHomeElements'
import './Login.css'
import { Route, Router, withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {login} from '../../Web3Client';
import { user_is_admin } from '../../Web3Client';
import { Navigate } from 'react-router-dom';


class Login extends Component{

    state = {
        username: '', 
        userpass: '',
        redirect: false,
        is_admin: false
      }
   
     handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    
    login(this.state.username,this.state.userpass).then((res)=>{
      console.log(res)
    //  user_is_admin().then((r)=>(console.log(r)))
      if(res == true)
       { 
         user_is_admin().then((res2)=>{
           if(res2 != true)
           {
            this.setState({ redirect: true }) 
           }
           else{this.setState({is_admin: true})}

         })
          
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
                            <p className='title'>Enter Your Email and Password Here</p>
                        <form id='login' className='input-group-login' onSubmit={this.handleSubmit}>
                            <input type='text' className='input-field'placeholder='User Name' required id='username' onChange={this.handleChange}/>
                            <input type='password'className='input-field'placeholder='Enter Password' required id='userpass' onChange={this.handleChange}/>
                            <button type='submit' className='submit-btn'>Log in</button>
                            <Link  to="/UserRegister" className='reg-btn' >Don't Have An Account?</Link>
                        </form>
                        { this.state.redirect ? (<Navigate push to="/UserHome"/>) : null }
                        { this.state.is_admin ? (<Navigate push to="/Admin"/>) : null }

                    </div>
                 </div>
           </div>
           </HeroContent>
      </HeroContainer>
        );
    }
}
export default Login

