import React, { Component } from 'react';
import './styles/App.css';
import Menu from './Menu';
import Itinerary from './Itinerary';
import itineraryData from './itinerarydata';
// import DontForget from './DontForget';

class App extends Component {
  render() {
    return (
      <div className="japan__app">
        <h1 className="japan__heading">Japan</h1>
        <Menu />
        <Itinerary itinerary={itineraryData} />
      </div>
    );
  }
}



export default App;
