import React, { Component } from 'react';
import './ClientList.css'
class ClientList extends Component {

    render() {

        const {data,filterText,selectedUpdate,deleteHandler} = this.props;
        const clientList = data
        .filter(client => {
            return client.clientName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })

        .map(client => {
            if(client.anotherProb == "Yes")
                var boolProb = "hasProb";
            else
                boolProb = "noProb";
            if(client.waterTesting == "Yes")
                var boolTest = "hasaProb";
            else
                boolTest = "notaProb";

            return(
                <tr key = {client._id} onClick={() => selectedUpdate(client._id)}>
                    <td class = "Name">{client.clientName}</td>
                    <td class = "Email">{client.clientEmail}</td>
                    <td class = "Address">{client.clientAddress}</td>
                    <td class = {boolProb}>{client.anotherProb}</td>
                    <td class = {boolTest}>{client.waterTesting}</td>
                    <button onClick={() => deleteHandler(client._id)}>Delete</button>
                </tr>
            );
        }); 
        return <tbody>{clientList}</tbody>
    }
}

export default ClientList;
