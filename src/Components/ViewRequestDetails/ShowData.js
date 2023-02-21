import React from "react";
import './ViewRequestDetails.css';

const ShowData = (props) =>
{
    const {items, handleselect} = props;
    
    let length = items.length;
    let count = 0;
    const ListItems = length? (
        items.map(item =>{
            return(
                <div key={count}>
                    <table>
                        <thead>
                        <tr>
                            <td>{item.name}</td>
                            <td className="checkbox"><input id={count} type='checkbox' onChange={handleselect}/> Select</td>
                        </tr>
                        </thead>
                    </table>
                    <div hidden={true}>
                    {count++}  
                    </div>  
                </div>
            )
        })
    ) : (
        <p>Your Documents are Sent</p>
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

 export default ShowData
