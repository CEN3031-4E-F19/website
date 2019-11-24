import React, { Component } from 'react';
import Article from './Article';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                <h2 className='text-center'>News</h2>
                </div>
                <Article/>
            </div>
            );
    }
}
 
export default News;
