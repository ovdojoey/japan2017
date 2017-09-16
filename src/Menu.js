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
  }

  toggleScreen() {
    this.setState(prevState => ({
      isScreenOpen: !!(!prevState.isScreenOpen)
    }));
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
        <a className="japan__menu-toggle" onClick={this.toggleScreen}>
          <img className="japan__menu-toggle-icon" src={menuIcon} alt="Menu" />
        </a>
        <div className={this.screenClass()}>
          <span onClick={this.toggleScreen} className="japan__menu-exit">&times;</span>
          <ul className="japan__menu">
            <li className="japan__menu-item">
              <a>
                <img className="japan__menu-item-icon" src={itenaryIcon} alt="Itinerary" />
                <span className="japan__menu-item-label">
                  Itinerary
                </span>
              </a>
            </li>
            <li className="japan__menu-item">
              <a>
                <img className="japan__menu-item-icon" src={starIcon} alt="Highlights" />
                <span className="japan__menu-item-label">
                  Highlights
                </span>
              </a>
            </li>
            <li className="japan__menu-item">
              <a>
                <img className="japan__menu-item-icon" src={importantIcon} alt="Importants" />
                <span className="japan__menu-item-label">
                  Don&rsquo;t Forget
                </span>
              </a>
            </li>
            <li className="japan__menu-item">
              <a>
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
