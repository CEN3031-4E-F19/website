import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }    
    
    render() { 
        var endIndex = this.props.indexStart*10-1>this.props.data.length?this.props.data.length:this.props.indexStart*10;
        var indexbegin = this.props.indexStart==1?0:this.props.indexStart*10-10;
        const articleList = this.props.data.filter(articles=>{
            return articles.title.toLowerCase().indexOf(this.props.filterText.toLowerCase())>=0;
        }).slice(indexbegin,endIndex).map((article,i)=>{
            return(
            <div className="row" key={i}>
                <Card style = {{width: '85rem'}} className="mx-auto p-3 mb-2 bg-white rounded article-card" >
                <Card.Title><u>{article.title}</u></Card.Title>
                <Card.Body>{article.description}</Card.Body>
                <p>Click To Read More...</p>
                <a target='_blank' href={article.link} className="stretched-link"/>
                </Card>
            </div>
            );
        });


        return ( <div>{articleList}</div>);
    }
}
 
export default Article;
