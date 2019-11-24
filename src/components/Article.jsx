import React, { Component } from 'react';
import axios from 'axios';


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] }
        this.getData = this.getData.bind(this);
    }
    getData(){
        axios.get('api/articleScrape').then((req,res)=>{
            this.setState({data:req.data});
        });
        console.log(this.state);
    }
    render() { 
        return ( <h1>news article</h1> );
    }
}
 
export default Article;
