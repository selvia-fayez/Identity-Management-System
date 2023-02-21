import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from './ViewDataDetailsElements'
import '../HeroSection/btn.css';
import { useState } from 'react';
import './ViewDataDetails.css';
import ShowData from './ShowData';
import { view_req_docs_comp } from '../../Web3Client';
import { view_req_docs_user } from '../../Web3Client';
import { get_user_docs_without_account } from '../../Web3Client';
import { useLocation } from 'react-router-dom';

var acc ;
export function get_acc(){
    return acc
}

 const UserViewDataDetails =()=>{
   
    const location = useLocation();
    console.log(location.state.id)

    const req_id = location.state.id;

    const [items , setItems] = useState([])
    const [disable , setDisable] = useState(false)
    let [account , setAccount] = useState("")


   const addtoState=()=>{
        let new_items = items;
        get_user_docs_without_account().then((docs)=>{
            console.log(docs)
            view_req_docs_user(req_id).then((docs_req)=>{
                console.log(docs_req);
                for(var i=0;i<docs_req.length;i++)
                {
                   if(docs_req[i]==2)
                   {
                       new_items.push({id:i , name:docs[i].name , status:"Approved" , hash:docs[i].ipfs_hash})
                   }
                   else if(docs_req[i]==3)
                   {
                    new_items.push({id:i , name:docs[i].name , status:"Rejected" , hash:docs[i].ipfs_hash})
                   }
                }
                console.log(new_items)
               // this.setState({items:items , disable:true})
               setItems(new_items)
               setDisable(true)
            })
        })
    }
        return (  
          <HeroContainer> 
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
                </HeroBg>
            <HeroContent> 
            <div className="App container">
              <h1 className='text-center'>Requested Data Details</h1>
              <ShowData items={items} account={acc}/>
              <button onClick={addtoState} className='btn companybtn btnn' disabled={disable}>Show Requested Data Details</button>
            </div>
            </HeroContent> 
        </HeroContainer>     
        );        
    
}  
export default UserViewDataDetails
