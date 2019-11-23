import React, { Component } from 'react';
import axios from 'axios';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        axios.get('api/articleScrape');
        return ( <h1>News Site</h1>  );
    }
}
 
export default News;
