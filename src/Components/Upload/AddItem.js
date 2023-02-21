import React, { Component } from 'react'
import './AddItem.css';
import ipfs from '../../ipfs';
import {upload_documents} from '../../Web3Client';
import { get_user_docs_without_account } from '../../Web3Client';

class AddItem extends Component{
  
  state = {
    name: '', 
    img: '',
    buffer: null,
    ipfsHash: ''
  }
 
 captureFile = (event)=>{
   event.preventDefault();
   const file = event.target.files[0];
   const reader = new window.FileReader();
   reader.readAsArrayBuffer(file);
   reader.onloadend = ()=>{
     this.setState({buffer: Buffer(reader.result)});
     console.log('buffer' , this.state.buffer);
   }
   this.handleChange(event);
 }
 
 onSubmit = async(event)=>{
   event.preventDefault();
   console.log("on submit....");

   try{
     let results = await ipfs.add(this.state.buffer);
     this.setState({ipfsHash: results[0].hash});
     console.log(this.state.ipfsHash);
     this.handleSubmit(event);
   }catch(error)
   {
     console.error(error);
   }
 }


  handleChange = (e) =>{
    //var s;
    //s=e.target.id; lma aktb fe l name hitl3 'name'
    //s=e.target.value; //lma aktb fe l name hitl3 ally ktbto
    //console.log(e.target.value); 
   
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    if (e.target.name.value === ''|| e.target.img.value === '' || e.target.name.value === 'Select'){
      return false
    }
    else{
      // let options = this.state.options;
      // let i = options.findIndex(this.state.name);
      // options.splice(i,1);
      // this.setState({options:options});

      this.props.addItem(this.state)
      console.log(this.state.id);
      console.log(this.state);
      var found = false;
      get_user_docs_without_account().then((docs)=>{
        console.log(docs)
        for(var i = 0;i<docs.length;i++)
        {   
            console.log(docs[i].name)
            if(docs[i].name == this.state.name)
            { 
              found = true;
              console.log(this.state.name);
              console.log("foundddddddddd")
              console.log(i)
              upload_documents(this.state.name,this.state.ipfsHash,i)
              break;
            }
        }
        if(!found)
        {
          upload_documents(this.state.name,this.state.ipfsHash,this.state.id - 1)
        }
        this.setState({
          name: '',
          img: '',
          buffer: null,
          ipfsHash: ''
        })
      })

   // console.log(this.state);
  }
  }
  render(){
    return(
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Choose a Name:</label>
            <select id="name" onChange={this.handleChange} className='selectname' value={this.state.name}>
              <option value="Select">Select</option>
              <option value="National ID">National ID</option>
              <option value="Passport">Passport</option>
              <option value="Military Certificate">Military Cert</option>
              <option value="Graduation Certificate">Graduation Cert</option>
              <option value="CV">CV</option>
              <option value="Vaccine Certificate">Vaccine Cert</option>
              <option value="Birth Certificate">Birth Cert</option>
              <option value="fesh w tshbeh">fesh w tshbeh</option>
              <option value="ka3b 3amal">ka3b 3amal</option>
              <option value="mofrdat mortb">mofrdat mortb</option>

            </select>

            <input type="file" placeholder="Upload Document" id="img" onChange={this.captureFile} value={this.state.img}/>
            <input type="submit" value="Add"/>
          </form>
        </div>
    )
  }
}
  
export default AddItem
