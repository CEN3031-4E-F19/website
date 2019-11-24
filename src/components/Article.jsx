import React, { Component } from 'react';
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
                <a href={article.link}>
                <td>{article.title}</td>
                <td>{article.desc}</td>
                </a>
            </tr>
            );
        });
        return ( <div>{articleList}</div>);
    }
}
 
export default Article;
