import React , {useEffect} from 'react'
import Login from '../Components/UserLogin'
import Navbar from '../Components/Navbar'
import {init} from '../Web3Client';

function UserLogin() {
  
  useEffect(()=>{
   init();
  },[]);

    return (
      <>
          <Navbar/>
          <Login/>
      </>
    )
  }
  
  export default UserLogin