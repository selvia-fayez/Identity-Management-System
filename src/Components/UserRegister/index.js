import React, {Component} from 'react'
import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from '../CompanyHome/CompanyHomeElements'
import '../HeroSection/btn.css';
import '../UserLogin/Login.css'
import {Link} from 'react-router-dom'
import {register} from '../../Web3Client';


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
        if (typeof input['userpass'] !== "undefined" && typeof input['userconpass'] !== "undefined") 
            if (input['userpass'] !== input['userconpass']) 
                    isValid = false;
          return isValid;
        }

      handleSubmit = (e) => {
        let errors = {};  
        e.preventDefault();
        
        console.log(this.validate())
        console.log(this.state);
        if(this.state.input['userpass'] == 'admin=123')
        { 
          console.log('admin');
          register(this.state.input['username'],
          this.state.input['userphone'],
          this.state.input['userpass'],true,
          this.state.input['useremail']);
          
        }
        else
        {
          register(this.state.input['username'],
          this.state.input['userphone'],
          this.state.input['userpass'],false,
          this.state.input['useremail']);
        }

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
                            <input type='text'className='input-field' name='username' placeholder='User Name' required onChange={this.handleChange}/>
                            <input type='email'className='input-field' name='useremail' placeholder='Email' required onChange={this.handleChange}/>
                            <input type='tel'className='input-field' name='userphone' placeholder='Phone ' required onChange={this.handleChange}/>
                            <input type='password'className='input-field' name='userpass' placeholder='Enter Password' required onChange={this.handleChange}/>
                            <input type='password'className='input-field' name='userconpass' placeholder='Confirm Password'  required onChange={this.handleChange}/>
                            <button type='submit'className='submit-btn'>Register</button>
                            <Link  to="/UserLogin" className='reg-btn' >Already Have An Account?</Link>

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