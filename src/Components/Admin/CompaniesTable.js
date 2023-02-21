import React from "react";

import './Admin.css';

const CompaniesTable = (props) =>
{
    const {items, Approve, Reject , deleteItem} = props;
    
    let length = items.length;
    const ListItems = length? (
        items.map(item =>{
            return(
                <div key={item.id}>
                    <table className="companiesTable">
                        <tbody>
                        <tr>
                            <td>{item.name}</td>     
                            <td>{item.CRN}</td>
                            <td ><a className="approve" onClick={() => Approve(item.id)}>Approve</a><a> OR </a><a className="reject" onClick={() => Reject(item.id)}>Reject</a></td>
                        </tr>
                        </tbody>
                    </table>    
                </div>
            )
        })
    ) : (
        <p>There is no item to show!</p>
    )
//onClick={() => handlechange(item.id)}
    return (
        <div className="Listitems">
            <div>
            <table className="companiesTable">
                <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Commercial Registration Number</th>
                    <th>Action</th>
                </tr>
                </thead>
            </table>
            </div>
            {ListItems}
        </div>
    )
 }

 export default CompaniesTable
