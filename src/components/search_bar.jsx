import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search" placeholder="Search your favorite GIFs"
        onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
