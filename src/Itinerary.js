import React, { Component } from 'react';
import './styles/Itinerary.css';
import chevronIcon from './icons/chevron_right.svg';


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

    this.showMainEvent = this.showMainEvent.bind(this);
  }

  showMainEvent(evt) {
    alert(evt.type);
  }

  formatItems() {
    return this.props.itinerary.map((event, idx) =>
      <ItineraryEvent
        key={idx}
        event={event}
        />
    );
  }

  render() {
    return (
      <ul className="japan__itinerary-list">
        {this.formatItems()}
      </ul>
    );
  }
}

export default Itinerary;
