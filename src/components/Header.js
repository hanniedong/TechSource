import React, {Component} from 'react';
import SearchBar from './SearchBar';

export default class Header extends Component{
  render(){
    return(
      <div className = 'header'>
        <h1 className = 'header_font'> Hackathon Finder </h1>
        <SearchBar />
      </div>
    )
  }
}