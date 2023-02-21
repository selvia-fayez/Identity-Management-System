import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from './ViewDataDetailsElements'
import '../HeroSection/btn.css';
import { useState } from 'react';
import './ViewDataDetails.css';
import ShowData from './ShowData';
import { view_req_docs_comp } from '../../Web3Client';
import { get_user_docs } from '../../Web3Client';
import { useLocation } from 'react-router-dom';
import { get_username } from '../../Web3Client';

var acc ;
export function get_acc(){
    return acc
}

 const CompanyViewDataDetails =()=>{
   
    const location = useLocation();
    console.log(location.state.id)

    const req_id = location.state.id;
    const comp_name = location.state.name
    console.log(comp_name)
    const user_name = location.state.user_name;
    console.log(user_name)
    const [items , setItems] = useState([])
    const [disable , setDisable] = useState(false)
    let [account , setAccount] = useState("")

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (e.target.idd.value === ''){
          console.log('empty');
          return false
        }
        else
        {   
            console.log(e.target.idd.value)
            acc = e.target.idd.value
            console.log(acc)
            console.log(account)
            addtoState(e) 
        }
    }

   const addtoState=(e)=>{
        let new_items = items;
        console.log(acc)
        setAccount("acc")
        console.log(account)
        get_username(acc).then((name)=>{
            if(name == user_name)
            {
                get_user_docs(acc).then((docs)=>{
                    console.log(docs)
                    view_req_docs_comp(comp_name,req_id).then((docs_req)=>{
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
                       e.target.idd.value = '';
                    })
                })
            }
            else
            {
                alert("Wrong address for selected Request")
            }
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
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder='Enter User Address' id='idd'/>
                  <input type='submit' value='Get Documents' disabled={disable}></input>
              </form>
              <ShowData items={items} account={acc}/>
            </div>
            </HeroContent> 
        </HeroContainer>     
        );        
    
}  
export default CompanyViewDataDetails
