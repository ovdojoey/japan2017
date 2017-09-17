import React, { Component } from 'react';
import './styles/Menu.css';
import {itenaryIcon, starIcon, menuIcon, importantIcon, memoriesIcon} from './icons/icons.js';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScreenOpen: null
    };
    this.toggleScreen = this.toggleScreen.bind(this);
    this.openItinerary = this.openItinerary.bind(this);
    this.openMemories = this.openMemories.bind(this);
    this.openHighlights = this.openHighlights.bind(this);
    this.openReminders = this.openReminders.bind(this);
  }

  toggleScreen() {
    this.setState(prevState => ({
      isScreenOpen: !!(!prevState.isScreenOpen)
    }));
  }

  openItinerary(evt) {
    this.toggleScreen();
    this.props.screenHandlers.itinerary(evt);
  }
  openMemories(evt) {
    this.toggleScreen();
    this.props.screenHandlers.memories(evt);
  }
  openHighlights(evt) {
    this.toggleScreen();
    this.props.screenHandlers.highlights(evt);
  }
  openReminders(evt) {
    this.toggleScreen();
    this.props.screenHandlers.reminders(evt);
  }

  screenClass() {
    let screenClass = " japan__menu-screen ";
    if (this.state.isScreenOpen !== null) {
      screenClass += (this.state.isScreenOpen === false) ? "japan__menu-screen--close" : "japan__menu-screen--open";
    }
    return screenClass;
  }

  render() {
    return (
      <div>
        <div className={this.state.isScreenOpen ? 'japan__menu-sheen japan__menu-sheen--show' : 'japan__menu-sheen'}></div>
        <a className={this.state.isScreenOpen ? 'japan__menu-toggle japan__menu-toggle--hide' : 'japan__menu-toggle'} onClick={this.toggleScreen}>
          <img className="japan__menu-toggle-icon" src={menuIcon} alt="Menu" />
        </a>
        <div className={this.screenClass()}>
          <span onClick={this.toggleScreen} className="japan__menu-exit">&times;</span>
          <ul className="japan__menu">
            <li className="japan__menu-item">
              <a onClick={this.openItinerary}>
                <img className="japan__menu-item-icon" src={itenaryIcon} alt="Itinerary" />
                <span className="japan__menu-item-label">
                  Itinerary
                </span>
              </a>
            </li>
            <li className="japan__menu-item">
              <a onClick={this.openHighlights}>
                <img className="japan__menu-item-icon" src={starIcon} alt="Highlights" />
                <span className="japan__menu-item-label">
                  Highlights
                </span>
              </a>
            </li>
            <li className="japan__menu-item">
              <a onClick={this.openReminders}>
                <img className="japan__menu-item-icon" src={importantIcon} alt="Importants" />
                <span className="japan__menu-item-label">
                  Reminders
                </span>
              </a>
            </li>
            <li className="japan__menu-item">
              <a onClick={this.openMemories}>
                <img className="japan__menu-item-icon" src={memoriesIcon} alt="Memories" />
                <span className="japan__menu-item-label">
                  Memories
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
