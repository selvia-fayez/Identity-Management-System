import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from './ViewRequestElements'
import { useNavigate } from 'react-router-dom';
import '../HeroSection/btn.css';
import { Component } from 'react';
import './ViewRequest.css';
import RequestTable from './RequestsTable'
import { get_user_requests } from '../../Web3Client';

class UserViewRequest extends Component{
    state = {
        items:[
            // {id:1, name:'Company 1',status:'Not Responding'},
            // {id:2, name:'Company 2',status:'Not Responding'},
            
        ],
        disable:false
    }
    //3aiza a3mlha call awl ma y3ml load ll saf7a
    addtoState=()=>{
        let items = this.state.items;
        let stat;
        get_user_requests().then((requests)=>{
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

                items.push({ id:requests[i].req_id , name:requests[i].requested_by , status:stat , requested_docs:requests[i].requested_docs });
            }
            // console.log(compy);
             this.setState({items:items , disable:true})
             console.log(this.state.items);
        })
    }
    //a3mlha call lma yd5ol l page bta3t l details
    changeStatus=(id)=>{
        let state = this.state;
        state.items[id-1].status = 'Responding';
        this.setState({state});
        console.log(this.state.items);
    }
    render() {
        return (  
          <HeroContainer onLoad={this.refreshPage}> 
                 <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
                 </HeroBg>
            <HeroContent> 
            <div className="App container">
              <h1 className='text-center'>View Requests</h1>
              <RequestTable items={this.state.items} changeStatus={this.changeStatus}/>
              <button onClick={this.addtoState} className='btn companybtn btnn' disabled={this.state.disable}>Show Requests</button>
            </div>
            </HeroContent> 
        </HeroContainer>     
        );        
    }
}
  
  export default UserViewRequest
