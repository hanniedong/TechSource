import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateSearch, fetchEvents} from '../actions';

export class SearchBar extends Component {

  handleSubmit(event){
    const { fetchEvents, city } = this.props;
    event.preventDefault();
    fetchEvents(city);
  }

  handleInputChange(event){
    const value = event.target.value;
    const { updateSearch } = this.props;
  }

  render(){
    return(
      <div> 
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input
            name = "city"
            type = "search"
            placeholder = "Search by City"
            onChange = {this.handleInputChange.bind(this)}
          />
          <button type= "submit"> Submit </button>
        </form>
      </div>
      )
  }
}

function mapStateToProps(state){
  const { city } = state.data
    return { city }
}

export default connect(
  mapStateToProps,{
    updateSearch,
    fetchEvents
  }
)(SearchBar)