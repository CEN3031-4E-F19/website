import React, { Component } from 'react';
import Article from './Article';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination'
import Search from './Search'
import '../news.css'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],indexStart:1,filter:''}
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    filterUpdate(value){
        this.setState({filter:value});
    }
    handlePageChange(event){
        console.log(event.target.text);
        this.setState({indexStart:event.target.text});

    }
    componentDidMount(){
        axios.get('api/getArticles').then((req,res)=>{
            this.setState({data:req.data});
        });
    }


    render() {
        let items = [];
        for (let number = 1; number <= Math.ceil(this.state.data.length/10); number++) {
          items.push(
            <Pagination.Item key={number}>
              {number}
            </Pagination.Item>,
          );
        }
        return ( 
            <div>
                <div>
                <h2 className='text-center'>News</h2>
                </div>
                    <Search filterUpdate={this.filterUpdate.bind(this)}/>
                    <Article data={this.state.data} indexStart={this.state.indexStart} filterText={this.state.filter}/>
                    <Pagination onClick={this.handlePageChange}>{items}</Pagination>
            </div>
            );
    }
}
 
export default News;
