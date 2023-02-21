import React from "react";
import './ViewDataDetails.css';
import { useState } from "react";
import  DialogComponent from './Dialog'

const ShowData = (props) =>
{
    const {items} = props;
    var [open, setOpen] = useState(false);
    const handleToClose = () => {
    setOpen(false);
    console.log(items)
    };

    const [url, setUrl] = useState("");

    const get_url = (id) => {
      for(var i=0;i<items.length;i++)
      {
          if(items[i].id == id)
          {
            console.log(items[i].hash);
            setUrl(items[i].hash);
            break;
          }
      }    
      setOpen(true);
     }

     // var ipfs_link;
    // var arr = [0,0,0,0,0,0,0,0,0,0];
    // let temp = '';
    // const get_url=(acc,id)=>{
    //     console.log(acc);
    //      console.log(get_acc())
    //      console.log(items)
    //   console.log(id);
    //   console.log(acc);
    // setOpen(true); 
    // console.log(open)
    // }


    let length = items.length;
    const ListItems = length? (
        items.map(item =>{
            if (item.status==='Approved')
            { 
                return(
                    <div key={item.id}>
                        
                        <table>
                            <thead>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>
                    <button
                      id={item.id}
                      variant="outlined"
                      color="primary"
                      className="bbtn"
                      onClick={(e) => {
                        console.log(e.target.id)
                        get_url(e.target.id);
                      }}
                    >
                      View Document
                    </button>

                    <DialogComponent
                      url={url}
                      isopen={open}
                      ID={item.id}
                      handleToClose={handleToClose}
                    />
                  </td>                           
                                 </tr>
                            </thead>
                        </table>    
                    </div>
                )
            }
            else if (item.status==='Rejected')
            {
                return(
                    <div key={item.id}>
                        <table>
                            <thead>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td></td>
                            </tr>
                            </thead>
                        </table>    
                    </div>
                )
            }
        })
    ) : (
        <p>There is no Docs to show!</p>
    )

    return (
        <div className="Listitems">
            <div>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </tbody>
            </table>
            </div>
            {ListItems}
        </div>
    )
 }

 export default ShowData
