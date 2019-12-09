import React, { Component } from 'react';

class Search extends Component {

   filterUpdate(){
       this.props.filterUpdate(this.refs.searchValue.value);
   }
    
    render() { 
        return ( <form className ="text-center">
            <input type="text" ref="searchValue" 
            placeHolder="Search Clients..." className='search-bar'
            onChange={this.filterUpdate.bind(this)}>
            </input>
        </form>  );
    }
}
 

export default Search;