import React, { Component } from 'react';

export default class SearchBar extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      city: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.address)
  }

  handleInputChange(event){
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
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