import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from './ViewRequestDetailsElements'
import { useLocation } from 'react-router-dom';
import '../HeroSection/btn.css';
import { Component, useState } from 'react';
import './ViewRequestDetails.css';
import ShowData from './ShowData';
import { view_req_docs_user } from '../../Web3Client';
import { get_user_docs_without_account } from '../../Web3Client';
import { respond_comp_request } from '../../Web3Client';
import { get_comp_requests } from '../../Web3Client';
import { get_user_requests } from '../../Web3Client';

const UserViewRequestDetails =()=>{
    

    const location = useLocation();
    console.log(location.state.id)
    console.log(location.state.comp_name)
    const req_id = location.state.id;
    const comp_name = location.state.comp_name;

    const [items , setItems] = useState([])
    const [disable , setDisable] = useState(false)
    const [switchh , setSwitch] = useState(false)
    
    
    const current = new Date();
  // it adds 20 days to a current date
    console.log(current.toDateString());
    current.setDate(current.getDate()+20);
    var expiring_date = current.toDateString()
    console.log("Expiring Date: "+expiring_date);





   const addtoState=()=>{
        let new_items = items;
        get_user_docs_without_account().then((docs)=>{
            console.log(docs)
            view_req_docs_user(req_id).then((docs_req)=>{
                console.log(docs_req);
                for(var i=0;i<docs_req.length;i++)
                {
                   if(docs_req[i]==1)
                   {
                       console.log(i)
                    new_items.push({id:i , name:docs[i].name , status:3})
                   }
                }
                console.log(new_items)
                setItems(new_items)
                setSwitch(true)
            })
        })
    }

    //newwwwwwwwwwwwwwwwwwww
  const  handleselect = event =>{
        let state = items;
        if (event.target.checked===false)
        {   
            // state.forEach(item=>{
            //     if(item.id === event.target.id)
            //     {   
            //         item.status = 3
            //         console.log(false)

            //     }
            // })
            console.log(event.target.id)
            state[event.target.id].status = 3
            setItems(state)
        }
        else if (event.target.checked===true)
        {   
            console.log(event.target.id)
            state[event.target.id].status = 2
            // state.forEach(item=>{
            //     console.log(item.id)
            //     if(item.id === event.target.id)
            //     {  
            //         item.status = 2
            //         console.log(true)

            //     }
            // })
            setItems(state)
        }
        console.log(items);
      }
      //newwwwwwwwwwwww
     const handleRequest =()=>{
          // create array of 10 elements if status false -> 0, true->1
          console.log(items)
          let itemss = items;
          let count = 0;
          var arr =[0,0,0,0,0,0,0,0,0,0];
        //   itemss.forEach(item=>{
        //       for(var i=0;i<item.id;i++)
        //       {
        //             count++;
        //       }
        //       arr[count] = item.status;
        //   }) 
          for(var i=0;i<items.length;i++)
          {
              arr[items[i].id] = items[i].status    
          }
          
          get_comp_requests(comp_name).then((comp_requests)=>{
              get_user_requests().then((user_requests)=>{
                var request = user_requests[req_id-1];
                console.log(comp_requests)
                console.log(user_requests)
                var count = 0;
                for(var i=0;i<comp_requests.length;i++)
                {
                  if(comp_requests[i].requested_by == request.requested_by&&comp_requests[i].requested_to == request.requested_to&&comp_requests[i].overall_status == request.overall_status)
                  { 
                    for(var j=0;j<10;j++)
                    {
                      if(comp_requests[i].requested_docs[j] == request.requested_docs[j])
                      {
                          count++;
                      }
                    }
                    if(count===10)
                    {
                      respond_comp_request(comp_name,req_id,i,arr,expiring_date)
                    }
                  }
                }
              })
          })
          
          setDisable(true)
          //delete docs and send to company          
        //   itemss.forEach(item=>{
        //   itemss.splice(item,itemss.length)
        //   setItems(itemss)
        //   })

      }
        return (  
          <HeroContainer > 
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
                </HeroBg>
            <HeroContent> 
            <div className="App container">
              <h1 className='text-center'>Request Details</h1>
              <ShowData items={items} handleselect ={handleselect}/>
              {switchh?<button type='submit' className='btn text-center btnn' onClick={handleRequest} disabled={disable}>Save</button>:<button onClick={addtoState} className='btn companybtn btnn'>Show Requested docs</button>}

            </div>
            </HeroContent> 
        </HeroContainer>     
        );        
    
}  
export default UserViewRequestDetails
