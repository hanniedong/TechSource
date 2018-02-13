import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateCity, fetchEvents} from '../actions';

export class SearchBar extends Component {

  handleSubmit(event){
    const { fetchEvents, city } = this.props;
    event.preventDefault();
    fetchEvents(city);
  }

  handleInputChange(event){
    const value = event.target.value;
    const { updateCity } = this.props;
    updateCity(value)
  }

  render(){
    return(
      <div > 
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input
            className = "form-control"
            name = "city"
            type = "search"
            placeholder = "Search by City"
            onChange = {this.handleInputChange.bind(this)}
          />
          <button 
            className = "btn" 
            type= "submit"> Submit
          </button>
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
    updateCity,
    fetchEvents
  }
)(SearchBar)