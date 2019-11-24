import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import axios from 'axios';


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] }
    }    
    componentDidMount(){
        axios.get('api/articleScrape').then((req,res)=>{
            this.setState({data:req.data});
        });
    }
    render() { 
        console.log(this.state);
        const articleList = this.state.data.map((article,i)=>{
            return(
            <tr key={i}>
                <Card style = {{width: '25rem'}} className="shadow-sm p-3 mb-2 bg-white rounded" >
                <a target='_blank' href={article.link}>
                <Card.Title>{article.title}</Card.Title>
                <Card.Body>{article.desc}</Card.Body>
                </a>
                </Card>
            </tr>
            );
        });
        return ( <div>{articleList}</div>);
    }
}
 
export default Article;
