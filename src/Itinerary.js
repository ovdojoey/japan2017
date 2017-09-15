import React, { Component } from 'react';
import './styles/Itinerary.css';
import chevronIcon from './icons/chevron_right.svg';
import locationIcon from './icons/location.svg';
import timeIcon from './icons/time.svg';


const ItineraryEvent = props => {
  const handleClick = () => {
    console.log(props.event);
  }
  return (
    <li className="japan__itinerary-list-item" onClick={handleClick}>
      <span className="japan__itinerary-list-item-date">{props.event.date.toLocaleDateString()}</span>
      <span className="japan__itinerary-list-item-day">Day {props.event.day}:</span>
      {props.event.name}
      <img className="japan__itinerary-list-item-icon" src={chevronIcon} aria-hidden="true" alt="" />
    </li>
  );
};

class Itinerary extends Component {

  constructor(props) {
    super(props);

    this.activeEvent = props.itinerary[1];
    this.activeEvent.style = {
      backgroundImage: `url(${this.activeEvent.image})`
    };
  }

  formatEventList() {
    return this.props.itinerary.map((event, idx) =>
      <ItineraryEvent
        key={idx}
        event={event}
        />
    );
  }

  formatDayEvents() {
    return this.activeEvent.events.map((event, idx) =>
      (
        <div className="japan__itinerary-event-list-item">
          <h4 className="japan__itinerary-event-list-title">{event.name}</h4>
          <p className="japan__itinerary-event-list-description">{event.description}</p>
          <div className="japan__itinerary-event-footer japan__itinerary-event-list-item-footer">
            <ul className="japan__itinerary-event-footer-opts">
              <li>
                <img src={timeIcon} alt="DateTime" className="japan__itinerary-event-footer-opts-icon japan__itinerary-event-footer-opts-icon--time" />
                {event.date.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}
              </li>
              <li>
                <img src={locationIcon} alt="Location" className="japan__itinerary-event-footer-opts-icon japan__itinerary-event-footer-opts-icon--location" />
                {event.location}
              </li>
            </ul>
          </div>
        </div>
      )
    );
  }

  render() {
    return (
      <div>
        <ul className="japan__itinerary-list">
          {this.formatEventList()}
        </ul>
        <div className="japan__itinerary-event">
          <div className="japan__itinerary-event-hero" style={this.activeEvent.style}>
            <h2>{this.activeEvent.name}</h2>
            <div className="japan__itinerary-event-footer">
              <ul className="japan__itinerary-event-footer-opts">
                <li>
                  <img src={timeIcon} alt="DateTime" className="japan__itinerary-event-footer-opts-icon japan__itinerary-event-footer-opts-icon--time" />
                  {this.activeEvent.date.toLocaleDateString()}
                </li>
                <li>
                  <img src={locationIcon} alt="Location" className="japan__itinerary-event-footer-opts-icon japan__itinerary-event-footer-opts-icon--location" />
                  {this.activeEvent.location}
                </li>
              </ul>
            </div>
          </div>

          <div className="japan__itinerary-event-list">
            {this.formatDayEvents()}
          </div>
        </div>
      </div>
    );
  }
}

export default Itinerary;
