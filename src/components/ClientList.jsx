import React, { Component } from 'react';

class ClientList extends Component {

    render() {
        const {data,filterText,deleteHandler} = this.props;
        const clientList = data
        .filter(client => {
            return client.clientName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map(client => {
            return(
                <tr key = {client.id}>
                    <td>{client.clientName}</td>
                    <td>{client.clientEmail}</td>
                    <td>{client.clientAddress}</td>
                    <button onClick={() => deleteHandler(client._id)}>Delete</button>
                </tr>    
            );
        }); 
        return <div>{clientList}</div>      
    }
}

export default ClientList;
