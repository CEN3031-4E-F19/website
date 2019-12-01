import React, { Component } from 'react';
import Article from './Article';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],indexStart:1}
        this.handlePageChange=this.handlePageChange.bind(this);
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
                 <Article data={this.state.data} indexStart={this.state.indexStart}/>
                 <Pagination onClick={this.handlePageChange}>{items}</Pagination>
            </div>
            );
    }
}
 
export default News;
