import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from './AddRequestElements'
import '../HeroSection/btn.css';
import { Component , useState } from 'react';
import './AddRequest.css';
import ShowData from './ShowData'
import { get_user_docs } from '../../Web3Client';
import { add_request } from '../../Web3Client';
import { useLocation } from 'react-router-dom';

const AddRequest =()=>{  
  
  const [docs , setDocs] = useState([])
  const [disable , setDisable] = useState(false);
  const [user_account , setUserAccount] = useState();

  const location = useLocation()
  let comp_name = location.state.c_name
   
  // var today = new Date(),
  // date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
  
  // var today2 = new Date(),
  // date2 = today2.getFullYear() + '-' + (today2.getMonth()+1) + '-' + (today2.getDate());



    // var d1 = Date.parse(old_date);
    // var d2 = Date.parse(current.toDateString());
    // if (d1 <= d2) {
    //   console.log("Date is expired")
    //  }

 const handleSubmit = (e) =>{
    e.preventDefault();
    if (e.target.idd.value === ''){
      console.log('empty');
      return false
    }
    else{
     //add data to state in docs 
      let items = docs;
      setUserAccount(e.target.idd.value);
      
      get_user_docs(e.target.idd.value).then((docs)=>{
        console.log(docs[0]);
        for(var i=0;i<docs.length;i++)
        {
          if(docs[i].name !=="")
          {
            items.push({id:items.length+1, name:docs[i].name, val:0});
          }
        }
        setDocs(items)
        setDisable(true)
      });
        console.log(docs);
        e.target.idd.value = '';
  }
}
//newwwwwwwww
const handleselect = event =>{
  let state = docs;
  if (event.target.checked===false)
  {
      state[event.target.id-1].val = 0;
      setDocs(state)
  }
  else if (event.target.checked===true)
  {
      state[event.target.id-1].val = 1;
      setDocs(state)
  }
  console.log(docs);
}
//newwwwwwwwwwww
const handleRequest = () =>{
  //hna mario hia5od l data mn l state w b3den afdeha 
  let items = docs;
  var arr =[0,0,0,0,0,0,0,0,0,0];
  items.forEach(item=>{
      arr[item.id-1] = item.val;
  })
  console.log(arr)
  
  console.log(user_account)
  console.log(comp_name)
  add_request(user_account,comp_name,arr)
  items.forEach(item=>{
    items.splice(item,items.length)
    setDocs(items)
  })
}
      return (  
        <HeroContainer> 
            <HeroBg>
              <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
              <div className="App container">
                <h1 className='text-center'>Add Request</h1>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder='Enter User Address' id='idd'/>
                  <input type='submit' value='Get Documents' disabled={disable}></input>
                </form>
                <ShowData items={docs} handleselect ={handleselect}/>
                <button type='submit' className='btn text-center btnn' onClick={handleRequest}>Request</button>
              </div>  
              
            </HeroContent> 
        </HeroContainer>     
      );        
    
  }
export default AddRequest
  