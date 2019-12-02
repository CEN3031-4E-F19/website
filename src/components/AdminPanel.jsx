import React, { Component } from 'react';
import ClientList from './ClientList';
import Search from './Search';
import axios from 'axios';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[], filterText: ''}
    }
    componentDidMount(){
        axios.get('api/clients').then((req,res) => {
            this.setState({data:req.data})
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
            if (dat.id == itemId) {
                objIdToDelete = dat._id;
            }
        });
        axios.delete("/api/clients/" + itemId, {
            data: {
                id: objIdToDelete,
            },
        });
        this.setState({
            data:data.filter(i => i._id !== itemId)
        })
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Admin Panel</h2>
                <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)}/>
                <div>
                    <table className='table table-striped table-hover'>
                        <tbody>
                            <ClientList data={this.state.data} filterText={this.state.filterText} deleteHandler={this.deleteHandler.bind(this)}/>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminPanel;