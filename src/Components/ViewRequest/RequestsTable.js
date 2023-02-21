import React from "react";
import { useNavigate } from 'react-router-dom';
import './ViewRequest.css';

const CompaniesTable = (props) =>
{
    const {items, changeStatus} = props;
    const route = useNavigate();
    let length = items.length;
    const ListItems = length? (
        items.map(item =>{
            if (item.status==='Responded'){
                return(
                    <div key={item.id}>
                        <table className="RequestsTable">
                            <tbody>
                            <tr>
                                <td>{item.name}</td>     
                                <td>{item.status}</td>
                                <td><button className="bbtn" onClick={() => route('/ViewDataDetailsUser' , {state:{id:item.id}})}>View Respond Details</button></td>
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
                                <td><button className="bbtn" onClick={() => route('/ViewRequestDetails' , {state:{id:item.id , comp_name:item.name}})}>View Details</button></td>
                            </tr>
                            </tbody>
                        </table>    
                    </div>
                )
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
                    <th>Company Name</th>
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

 export default CompaniesTable
