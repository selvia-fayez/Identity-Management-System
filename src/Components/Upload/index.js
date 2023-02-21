import video from '../../videos/video.mp4'
import { HeroBg, VideoBg} from '../HeroSection/HeroElements'
import { HeroContainer, HeroContent} from './UploadElements'
import { useNavigate } from 'react-router-dom';
import '../HeroSection/btn.css';
import AddItem from './AddItem';
import { Component } from 'react';
import Todoitem from './Todoitem';
import './AddItem.css';
import { get_user_docs_without_account } from '../../Web3Client';

class UserUpload extends Component{

    state = {
        items:[
            /*{id:1, name: 'Passport', img:''},
            {id:2, name: 'National ID', img:''},
            {id:3, name: 'National ID', img:''},
            {id:4, name: 'National ID', img:''},
            {id:5, name: 'National ID', img:''},
            {id:6, name: 'National ID', img:''}
            */
        ],
        switch: false,
        hidden: false
    }

    addItem = (item) =>{
      let items = this.state.items;
      
      item.id = items.length+1;//change id 
      if (item.id > 10){
        return <p>You Can't add more Documents</p>
      }
      else {
        items.push(item);
        this.setState({ items });
      }
    }

   addtoState=()=>{
      let new_items = this.state.items;
      this.setState({hidden:true , switch:true})
      get_user_docs_without_account().then((docs)=>{
          console.log(docs)
          for(var i=0;i<docs.length;i++)
          { 
            if(docs[i].name !=="")
            {
              new_items.push({id:new_items.length+1 , name:docs[i].name , img:docs[i].ipfs_hash})
            }
          }
          this.setState({items:new_items})
          console.log(this.state.items)
      })
  }
    
    render() {
        return (  
          
          <HeroContainer onLoad={this.refreshPage}> 
                 <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
                 </HeroBg>
            <HeroContent>
              <div className="App container">
              <h1 className='text-center'>Upload Documents</h1>
              <Todoitem items={this.state.items} deleteItem={this.deleteItem}/>
              {this.state.switch?<AddItem addItem={this.addItem}/>:<button onClick={this.addtoState} className='btn companybtn btnn' hidden={this.state.hidden}>Show My Documents</button>}
              </div>  
            </HeroContent> 
        </HeroContainer>     
        );        
    }
}
  
  export default UserUpload
