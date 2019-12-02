import React, { Component } from 'react';
import './ClientList.css'
class ClientList extends Component {

    render() {
        const {data,filterText,deleteHandler} = this.props;
        const clientList = data
        .filter(client => {
            return client.clientName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })

        .map(client => {
            return(
                <tr key = {client.id} onClick={() => this.props.selectedUpdate(client._id)}>
                    <td class = "Name">{client.clientName}</td>
                    <td class = "Email">{client.clientEmail}</td>
                    <td class = "Address">{client.clientAddress}</td>
                    <td class = "Questions">{client.clientQuestion}</td>
                    <button onClick={() => deleteHandler(client._id)}>Delete</button>
                </tr>
            );
        }); 
        return <div>{clientList}</div>      
    }
}

export default ClientList;
