import React, { Component } from 'react';
import './AdminPanel.css';
import ClientList from './ClientList';
import ViewClient from './ViewClient';
import Search from './AdminSearch';
import axios from 'axios';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[], filterText: '', selectedClient: 0}
    }
    componentDidMount(){
        axios.get('api/clients').then((req,res) => {
            this.setState({data:req.data})
        });
    }
    
    selectedUpdate(id){
        this.setState({
            selectedClient: id
        });
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        });
    }

    deleteHandler(itemId) {
        let data = this.state.data;
        parseInt(itemId);
        let objIdToDelete = null;
        this.state.data.forEach((dat) => {
            if (dat.id === itemId) {
                objIdToDelete = dat._id;
            }
        });
        axios.delete("/api/clients/" + itemId, {
            data: {
                id: objIdToDelete,
            },
        });
        this.setState({
            data: data.filter(i => i._id !== itemId)
        })
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Admin Panel</h2>
                <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)}/>
                <div>
                    <table className='table table-striped table-hover'>
                        <thead>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Has Water Problem</th>
                            <th>Interested in testing</th>
                        </thead>
                        
                        <ClientList data={this.state.data} filterText={this.state.filterText} deleteHandler={this.deleteHandler.bind(this)} selectedUpdate={this.selectedUpdate.bind(this)}/>
                        
                    </table>
                    <div>
                            <ViewClient selectedClient = {this.state.selectedClient} data = {this.state.data}/>      
                    </div>
                </div>

            </div>
        );
    }
}

export default AdminPanel;