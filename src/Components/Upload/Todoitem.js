import React, { useState } from "react";
import AddItem from "./AddItem";
import './AddItem.css';
import  DialogComponent from './Dialog'

const Todoitem = (props) =>
{
    const {items, deleteItem} = props;

    var [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");

    const handleToClose = () => {
    setOpen(false);
    console.log(items)
    };
    const get_url = (id) => {
        for(var i=0;i<items.length;i++)
        {
            if(items[i].id == id)
            {
              console.log(items[i].img);
              setUrl(items[i].img);
              break;
            }
        }    
        setOpen(true);
       }
    
   




    let length = items.length;
    const ListItems = length? (
        items.map(item =>{
            return(
                <div key={item.id}>
                    <table>
                        <thead>
                        <tr>
                            <td>{item.name}</td>
                            <td>                   
                     <button
                      id={item.id}
                      variant="outlined"
                      color="primary"
                      className="bbtn"
                      onClick={(e) => {
                          console.log(items)
                        console.log(e.target.id)
                        get_url(e.target.id);
                      }}
                    >
                      View Image
                    </button>

                    <DialogComponent
                      url={url}
                      isopen={open}
                      ID={item.id}
                      handleToClose={handleToClose}
                    /></td>
                        </tr>
                        </thead>
                    </table>    
                </div>
            )
        })
    ) : (
        <p>There is no item to show!</p>
    )

    return (
        <div className="Listitems">
            <div>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </tbody>
            </table>
            </div>
            {ListItems}
        </div>
    )
 }

 export default Todoitem
