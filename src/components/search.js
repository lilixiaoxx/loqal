import React from 'react';


class Search extends React.Component {

  constructor(props){
    super(props);
  }

  _handleSearch(event) {
    event.preventDefault();
    this.props.search(this.refs.loqalSearch.value);
    console.log(this.props.display);
    this.props.clear();
  }
  render(){
    return(
      <form onSubmit={this._handleSearch.bind(this)}>
        <input type="search" ref="loqalSearch" placeholder="Search for a city"/>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}


export default Search;
