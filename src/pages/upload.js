import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import UserUpload from '../Components/Upload'

function Upload(){
  function refreshPage(){ 
    window.location.reload(); 
  }
  document.addEventListener("load",refreshPage);
  return(
      <>
        <Navbar/>
        <UserUpload/>
      </>
  )
}  
export default Upload