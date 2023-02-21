import React from "react";
import { useNavigate } from 'react-router-dom';
import './ViewData.css';

const UsersTable = (props) =>
{
    const {items , comp_name} = props;
    
    var current = new Date(); 
    var current_date = Date.parse(current.toDateString());
    console.log(items)
    const route = useNavigate();
    let length = items.length;
    const ListItems = length? (
        items.map(item =>{
            if (item.status==='Pending'){
                return(
                    <div key={item.id}>
                        <table className="RequestsTable">
                            <tbody>
                            <tr>
                                <td>{item.name}</td>     
                                <td>{item.status}</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>    
                    </div>
                )
            }
            else{
                var expiring_date = Date.parse(item.expiring_date);
                console.log("Current " + current_date)
                console.log("Expiring " + expiring_date)
                if(current_date >= expiring_date)
                {   
                    return(
                        <div key={item.id}>
                            <table className="RequestsTable">
                                <tbody>
                                <tr>
                                    <td>{item.name}</td>     
                                    <td>{item.status}</td>
                                    <td> Request has been expired</td>
                                </tr>
                                </tbody>
                            </table>    
                        </div>
                    )
                } 
                else{
                    return(
                        <div key={item.id}>
                            <table className="RequestsTable">
                                <tbody>
                                <tr>
                                    <td>{item.name}</td>     
                                    <td>{item.status}</td>
                                    {console.log(item.id)}
                                    <td><button onClick={() => route('/ViewDataDetails' , {state:{id:item.id , name:comp_name , user_name:item.name}})} className="bbtn">View Details</button></td>
                                </tr>
                                </tbody>
                            </table>    
                        </div>
                    )
                } 
                }
   
        })
    ) : (
        <p>There is no Requests to show!</p>
    )
    return (
        <div className="Listitems">
            <div>
            <table className="RequestsTable">
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>Status</th>
                    <th>View</th>
                </tr>
                </thead>
            </table>
            </div>
            
            {ListItems}
        </div>
    )
 }

 export default UsersTable
