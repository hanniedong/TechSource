import React, {Component} from 'react';
import SearchBar from './SearchBar';

export default class Header extends Component{
  render(){
    return(
      <div className = 'navbar-fixed-top jumbotron'>
        <h1> Hackathon Finder </h1>
        <SearchBar />
      </div>
    )
  }
}