import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { updateSearch, fetchEvents } from './actions';
import EventList from './components/EventList';

export class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      loaded: false
    } 
  }

  componentWillMount(){
    this.props.fetchEvents(this.props.data.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loaded !== this.state.loaded) {
      this.setState({ loaded: true });
    }
  }


  render(){
    let { events } = this.props.data;

    return(
      <div className = 'website-container'>
        <Header />
        {this.state.loaded ? <EventList events={events} /> : null}
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