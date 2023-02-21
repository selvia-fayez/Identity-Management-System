import React , {useEffect} from 'react'
import Login from '../Components/CompanyLogin'
import Navbar from '../Components/Navbar'
import {init} from '../Web3Client';

function CompanyLogin() {
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
  
  export default CompanyLogin