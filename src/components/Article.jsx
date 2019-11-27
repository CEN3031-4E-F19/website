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
            <div className="row" key={i}>
                <Card style = {{width: '85rem'}} className="mx-auto shadow-sm p-3 mb-2 bg-white rounded " >
                <Card.Title>{article.title}</Card.Title>
                <Card.Body>{article.desc}</Card.Body>
                <a target='_blank' href={article.link} className="stretched-link"/>
                </Card>
            </div>
            );
        });


        return ( <div>{articleList}</div>);
    }
}
 
export default Article;
