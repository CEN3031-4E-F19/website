import React, { Component } from 'react';

class ClientList extends Component {

    render() {
        const {data,deleteHandler} = this.props;
        const clientList = data
        .map(client => {
            return(
                <tr key = {client.id}>
                    <td>{client.clientName}</td>
                    <td>{client.clientEmail}</td>
                    <td>{client.clientAddress}</td>
                    <button onClick={() => deleteHandler(client.id)}>Delete</button>
                </tr>    
            );
        }); 
        return <div>{clientList}</div>      
    }
}

export default ClientList;
