import React, { Component } from 'react';
import './ViewClient.css'
class ViewClient extends Component{
    render(){
        const {data, selectedClient } = this.props;
        let display = (
            <div>
                <p>
                    {' '}
                    <i>Click on a name to view more information</i>
                </p>
            </div>
        );

        let client = data.find((x) => x._id == selectedClient);
        
        if(client){
            display = (
                <div>
                    <h2>Client Information</h2>
                    <h3 class = "please">Name: {client.clientName} </h3>
                    <h3 className="please">Email: {client.clientEmail}</h3>
                    <h3 className="please">House age: {client.clientHouseAge}</h3>
                    <h3 className="please">Address: {client.clientAddress}</h3>
                    <h3 className="please">Question: {client.clientQuestion}</h3>
                    <h3 className="please">How much they care about their water (1-5): {client.clientCare}</h3>
                    <h3 className="please">How much they would be willing to pay: ${client.clientPay}</h3>
                    <h3 className="please">Are they interested in having their water tested: {client.waterTesting}</h3>
                </div>
            )
        }

        return display;
    }
}
export default ViewClient;