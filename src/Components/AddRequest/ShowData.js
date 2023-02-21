import React from "react";
import './AddRequest.css';

const ShowData = (props) =>
{
    const {items, handleselect} = props;
    
    let length = items.length;
    const ListItems = length? (
        items.map(item =>{
            return(
                <div key={item.id}>
                    <table>
                        <thead>
                        <tr>
                            <td>{item.name}</td>
                            <td className="checkbox"><input id={item.id} type='checkbox' onChange={handleselect}/> Select</td>
                        </tr>
                        </thead>
                    </table>    
                </div>
            )
        })
    ) : (
        <p>To Request Documents from User, Enter User ID</p>
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
