import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { updateSearch, fetchEvents } from './actions';
import EventList from './components/Eventlist';
import './css/App.css';

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
    let { events } = this.props.data;
    return(
      <div className = 'container'>
        <Header />
        <EventList events={events}/>
      </div>

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