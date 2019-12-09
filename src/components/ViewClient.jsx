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
            console.log(client);
            display = (
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="row">Client information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{client.clientName}</td>
                        </tr>
                        <tr>
                            <th scope="row">Type</th>
                            <td>{client.clientType}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>{client.clientEmail}</td>
                        </tr>
                        <tr>
                            <th scope="row">House age</th>
                            <td>{client.clientHouseAge}</td>
                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td>{client.clientAddress}</td>
                        </tr>
                        <tr>
                            <th scope="row">Question</th>
                            <td>{client.clientQuestion}</td>
                        </tr>
                        <tr>
                            <th scope="row">How much they care about their water (1-5)</th>
                            <td>{client.clientCare}</td>
                        </tr>
                        <tr>
                            <th scope="row">How much they would be willing to pay</th>
                            <td>{client.clientPay}</td>
                        </tr>
                        <tr>
                            <th scope="row">Are they interested in having their water tested</th>
                            <td>{client.waterTesting}</td>
                        </tr>
                    </tbody>

                </table>
            )
        }

        return display;
    }
}
export default ViewClient;