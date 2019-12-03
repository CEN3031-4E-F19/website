import React, { Component } from 'react';

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
                    <h3>Name: {client.clientName} </h3>
                    <h3>Email: {client.clientEmail}</h3>
                    <h3>House age: {client.clientHouseAge}</h3>
                    <h3>Address: {client.clientAddress}</h3>
                    <h3>Question: {client.clientQuestion}</h3>
                    <h3>How much they care about their water (1-5): {client.clientCare}</h3>
                    <h3>How much they would be willing to pay: {client.clientPay}</h3>
                    <h3>Are they interested in having their water tested: {client.waterTesting}</h3>
                </div>
            )
        }

        return display;
    }
}
export default ViewClient;