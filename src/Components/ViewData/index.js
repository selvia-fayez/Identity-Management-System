import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from './ViewDataElements'
import '../HeroSection/btn.css';
import { Component, useState } from 'react';
import './ViewData.css';
import ViewDataTable from './ViewDataTable'
import { get_comp_requests } from '../../Web3Client';
import { useLocation } from 'react-router-dom';


const CompanyViewData=()=>{

    const [items , setItems] = useState([])
    const [disable , setDisable] = useState(false)
    const location = useLocation()
    const comp_name = location.state.c_name
    //3aiza a3mlha call awl ma y3ml load ll saf7a
   const addtoState=()=>{
        let newitems = items;
        let stat;
        get_comp_requests(comp_name).then((requests)=>{
            console.log(requests)
            for(var i=0;i<requests.length;i++)
            {   
                if(requests[i].overall_status == 1)
                {
                    stat = "Pending"
                }
                else if(requests[i].overall_status == 2)
                {
                    stat  = "Responded"
                }

                newitems.push({ id:requests[i].req_id , name:requests[i].requested_to , status:stat , requested_docs:requests[i].requested_docs , expiring_date:requests[i].expiring_date});
            }
            // console.log(compy);
             setItems(newitems)
             setDisable(true)
            // console.log(this.state.items);
        })
    }
    //a3mlha call lma yd5ol l page bta3t l details
   const changeStatus=(id)=>{
        let state = items;
        state[id-1].status = 'Responding';
        setItems({state});
        console.log(items);
    }
        return (  
          <HeroContainer> 
                 <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
                 </HeroBg>
            <HeroContent> 
            <div className="App container">
              <h1 className='text-center'>Requested Data</h1>
              <ViewDataTable items={items} comp_name={comp_name} />
              <button onClick={addtoState} className='btn companybtn btnn' disabled={disable}>Show Requests</button>
            </div>
            </HeroContent> 
        </HeroContainer>     
        );        
    
}
  
  export default CompanyViewData
