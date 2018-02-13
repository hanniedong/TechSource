import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { updateSearch, fetchEvents } from './actions';
import EventList from './components/Eventlist';

export class App extends Component{
  state = {
    eventsLoaded: false
  }

  componentWillMount(){
    this.props.fetchEvents(this.props.data.city);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({eventsLoaded:true})
  }

  render(){
    let { events } = this.props.data;
    console.log(this.props.data)
    return(
      <div className = 'website-container'>
        <Header />
        <EventList events={events} />
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