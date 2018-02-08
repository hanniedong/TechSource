import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  render(){
  return (
    <div>
      <SearchBar /> 
   </div>
  )
}
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);