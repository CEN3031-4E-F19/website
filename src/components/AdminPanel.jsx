import React, { Component } from 'react';
import ClientList from './ClientList';
import axios from 'axios';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]}
    }
    componentDidMount(){
        axios.get('api/clients').then((req,res) => {
            this.setState({data:req.data})
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className='text-center'>Admin Panel</h2>
                    <table className='table table-striped table-hover'>
                    <ClientList data={this.state.data}/>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminPanel;