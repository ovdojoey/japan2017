import React, { Component } from 'react';
import './styles/App.css';
import './styles/Screens.css';
import Menu from './Menu';
import Itinerary from './Itinerary';
import Reminders from './Reminders';
import Memories from './Memories';
import itineraryData from './itinerarydata';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeScreen: "itinerary"
    };

    this.screenHandlers = {
      itinerary: (evt) => {
        // evt.stopPropagation();
        this.changeScreen("itinerary");
      },
      memories: (evt) => {
        // evt.stopPropagation();
        this.changeScreen("memories");
      },
      reminders: (evt) => {
        // evt.stopPropagation();
        this.changeScreen("reminders");
      },
      highlights: (evt) => {
        // evt.stopPropagation();
        this.changeScreen("highlights");
      }
    };

    this.classes = {
      screens: {
          itinerary: "japan__screen japan__screen__itinerary",
          memories: "japan__screen japan__screen__memories",
          highlights: "japan__screen japan__screen__highlights",
          reminders: "japan__screen japan__screen__reminders",
          active: "japan__screen--active"
      }
    }
  }

  changeScreen(screen) {
    this.setState({
      activeScreen: screen
    });
  }

  getScreenClass(screen) {
    let className = this.classes.screens[screen];
    if (this.state.activeScreen === screen) {
      className += " " + this.classes.screens.active;
    }
    return className;
  }

  render() {
    return (
      <div className="japan__app"  onClick={this.activateMemoriesScreen}>
        <Itinerary itinerary={itineraryData} className={this.getScreenClass("itinerary")} />
        <Reminders className={this.getScreenClass("reminders")} />
        <Memories className={this.getScreenClass("memories")} />
        <Menu screenHandlers={this.screenHandlers} />
      </div>
    );
  }
}



export default App;
