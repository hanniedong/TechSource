import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';
import { updateSearch, fetchEvents } from './actions';

export class App extends Component{
  state = {
    eventsLoaded: false
  }

  componentWillMount(){
    this.props.fetchEvents(this.props.data.city);
  }

  componentWillReceiveProps(){
    this.setState({eventsLoaded: true})
  }

  render(){
    let{events} = this.props.data;
    return(
      <SearchBar />

    )
  }
}
  function mapStateToProps(state){
    const { data } = state;
      return { data };
  }

  export default connect(
    mapStateToProps,{
      updateSearch,
      fetchEvents
    }
  )(App);