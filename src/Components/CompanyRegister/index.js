import React, {Component} from 'react'
import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from '../CompanyHome/CompanyHomeElements'
import '../HeroSection/btn.css';
import './Login.css'
import {Link} from 'react-router-dom'
import {register_comp} from '../../Web3Client';

class Register extends Component{
   
  nextPath(path) {
    this.props.history.push(path);
  }

    constructor() {
        super();
        this.state = {
          input: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
           
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }

      validate(){
        let input = this.state.input;
        let isValid = true;
        if (typeof input['companypass'] !== "undefined" && typeof input['companyconpass'] !== "undefined") 
            if (input['companypass'] !== input['companyconpass']) 
                    isValid = false;
          return isValid;
        }

      handleSubmit = (e) => {
        let errors = {};  
        e.preventDefault();
        
        console.log(this.validate())
        console.log(this.state);
        register_comp(this.state.input['companyname'],
        this.state.input['companypass'],
        this.state.input['companyemail'],
        this.state.input['commericalname'])
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
                     <div className="form-box-register">
                         <h2 className='header'>REGISTER</h2>
                         <p className='title'>Please Fill The Form to Regist Successfully</p>
                        <form id='login' className='input-group-login' onSubmit={this.handleSubmit}>
                            <input type='text'className='input-field' name='companyname' placeholder='Company Name' required onChange={this.handleChange}/>
                            <input type='text'className='input-field' name='commericalname' placeholder='Commercial Registration number' required onChange={this.handleChange}/>
                            <input type='email'className='input-field' name='companyemail' placeholder='Email' required onChange={this.handleChange}/>
                            <input type='tel'className='input-field' name='companyphone' placeholder='Phone ' required onChange={this.handleChange}/>
                            <input type='password'className='input-field' name='companypass' placeholder='Enter Password' required onChange={this.handleChange}/>
                            <input type='password'className='input-field' name='companyconpass' placeholder='Confirm Password'  required onChange={this.handleChange}/>
                            <button type='submit'className='submit-btn'>Register</button>
                            <Link  to="/CompanyLogin" className='reg-btn' >Already Have An Account?</Link>

                        </form>
                    </div>
                 </div>
           </div>
           </HeroContent>
           </HeroContainer>
        );
    }
}
export default Register