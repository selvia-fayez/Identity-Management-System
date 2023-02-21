import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from './AdminElements'
import './Admin.css'
import { Component } from 'react';
import CompaniesTable from './CompaniesTable';
import {get_companies} from '../../Web3Client';
import {respond_comp_register} from '../../Web3Client';

class AdminPage extends Component{
    state = {
        items:[
            // {id:1, name: 'Mario Company', CRN:123456789123456789,val:1},
            // {id:2, name: 'Mario Company', CRN:123456789123456789,val:1},
            
        ],
        disable:false

    }

    Fill_state_data =()=>{
        let compy = this.state.items;
        get_companies().then((companies)=>{
            console.log(companies);
            for(var i=0;i<companies.length;i++)
            {
               if(companies[i].comp_status==1)
               {
                compy.push({id: compy.length+1, name: companies[i].comp_name, CRN: companies[i].comm_registeration_no, val:companies[i].comp_status});
               }
            }
            console.log(compy);
            this.setState({items:compy , disable:true})
            console.log(this.state.items);

        })      
    }
   

    Approve = (id) =>{
        let state = this.state;
        console.log(id);
        // state.items[id-1].val = 2;
        // this.setState({state});
        console.log(this.state.items);
        for(var i=0;i<this.state.items.length;i++)
        {
            if(this.state.items[i].id == id)
            {
                respond_comp_register(this.state.items[i].name , 2).then(()=>{
                    this.deleteItem(id);
                    
                })
                break;
            }
        }
       // console.log(this.state.items);

    }
    Reject = (id) =>{
        let state = this.state;
        console.log(id);
        // state.items[id-1].val = 3;
        // this.setState({state});
        console.log(this.state.items);
        for(var i=0;i<this.state.items.length;i++)
        {
            if(this.state.items[i].id == id)
            {
                respond_comp_register(this.state.items[i].name , 3).then(()=>{
                    this.deleteItem(id);
                    
                })
                break;
            }
        }

    }
    
    deleteItem = (id)=>{
        let items = this.state.items;
        let i = items.findIndex(item=>item.id===id)
        items.splice(i,1)
        this.setState({items})
    }
    render(){
        return (
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                  <div className='adminContent'>
                      <h2 className='pageTitle'>Manage Companies</h2>
                      <CompaniesTable items={this.state.items} Approve={this.Approve} Reject={this.Reject} deleteItem={this.deleteItem}/>
                      <button onClick={this.Fill_state_data} className='btn userbtn' disabled={this.state.disable}>Show Companies</button>
                  </div>
                </HeroContent>
            </HeroContainer>
          );
    }
    
  };
  
  export default AdminPage