import React, { Component } from 'react';
import {memoriesIcon, starIcon, timeIcon, locationIcon} from './icons/icons.js';
import './styles/SubEvent.css';

class SubEvent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemClass: "japan__itinerary-event-list-item"
    };

    this.touches = {
      xTouchStart: 0,
      xTouchMove: 0
    };
    this.openSidebar = this.openSidebar.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  handleTouchMove(evt) {
    if (evt.type === "touchstart") {
      this.touches.xTouchStart = evt.touches[0].clientX;
    }
    if (evt.type === "touchmove") {
      this.touches.xTouchMove = evt.touches[0].clientX;
    }
    if (evt.type === "touchend") {
      let diff = (this.touches.xTouchStart - this.touches.xTouchMove);

      if (diff < -40 && (this.touches.xTouchMove > 0)) {
        this.closeSidebar();
      } else if (diff > 40 && (this.touches.xTouchMove > 0)) {
        this.openSidebar();
      }
    }
  }

  openSidebar() {
    let sidebarClass = 'japan__itinerary-event-list-item';
    let newClass = `${sidebarClass} japan__itinerary-event-sidebar--open`;
    this.setState({
      itemClass: newClass
    });
  }

  closeSidebar() {
    let sidebarClass = 'japan__itinerary-event-list-item';
    this.setState({
      itemClass: sidebarClass
    });
  }

  render() {
    return (
      <div className={this.state.itemClass} onTouchStart={this.handleTouchMove} onTouchEnd={this.handleTouchMove} onTouchMove={this.handleTouchMove}>
        <div className="japan__itinerary-event-list-item-container">
          <h4 className="japan__itinerary-event-list-title">{this.props.event.name}</h4>
          <p className="japan__itinerary-event-list-description">{this.props.event.description}</p>
          <div className="japan__itinerary-event-footer japan__itinerary-event-list-item-footer">
            <ul className="japan__itinerary-event-footer-opts">
              <li>
                <img src={timeIcon} alt="DateTime" className="japan__itinerary-event-footer-opts-icon japan__itinerary-event-footer-opts-icon--time" />
                {this.props.event.date.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}
              </li>
              <li>
                <img src={locationIcon} alt="Location" className="japan__itinerary-event-footer-opts-icon japan__itinerary-event-footer-opts-icon--location" />
                {this.props.event.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="japan__itinerary-event-sidebar">
          <div className="japan__itinerary-event-sidebar-menu" onClick={this.openSidebar}>
            <span className="japan__itinerary-event-sidebar-menu-dots"></span>
          </div>
          <ul className="japan__itinerary-event-sidebar-items">
            <li className="japan__itinerary-event-sidebar-item japan__itinerary-event-sidebar-item--highlight" onClick={()=>alert('t')}>
              <div>
                <img src={starIcon} alt="Highlight" />
                <span>Highlight</span>
              </div>
            </li>
            <li className="japan__itinerary-event-sidebar-item japan__itinerary-event-sidebar-item--memory" onClick={()=>alert('y')}>
              <div>
                <img src={memoriesIcon} alt="Add Memory" />
                <span>Add Memory</span>
              </div>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default SubEvent;
