import React, { Component } from 'react';

class Search extends Component {
   filterUpdate(){
       this.props.filterUpdate(this.refs.searchValue.value);
   }
    
    render() { 
        return ( <form>
            <input type="text" ref="searchValue" 
            placeHolder="Search Artilces..."
            onChange={this.filterUpdate.bind(this)}>
            </input>
        </form>  );
    }
}
 
export default Search;