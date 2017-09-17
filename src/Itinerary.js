import React, { Component } from 'react';
import SubEvent from './SubEvent';
import {chevronIcon, locationIcon, timeIcon} from './icons/icons.js';
import './styles/Itinerary.css';

const ItineraryEvent = props => {
  const handleClick = () => {
    props.setActiveEvent(props.event);
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

const DayEvent = props => {

  const closeActiveEvent = ((props) => {
    let yTouchStart = 0;
    let yTouchMove = 0;
    const _closeActiveEvent = (evt) => {
      if (evt.type === "touchstart") {
        yTouchStart = evt.touches[0].clientY;
      }
      if (evt.type === "touchmove") {
        yTouchMove = evt.touches[0].clientY;
      }
      if (evt.type === "touchend") {
        let diff = (yTouchStart - yTouchMove);
        if (diff < -20) {
          props.closeActiveEvent();
        }
      }
    };
    return _closeActiveEvent;
  })(props);

  const forceCloseEvent = () => {
    props.closeActiveEvent();
  }

  return (
    <div className={props.activeEvent.eventClassName}>
      <div className="japan__content-wrap">
        <div className="japan__itinerary-event-hero" style={props.activeEvent.heroStyle} onTouchStart={closeActiveEvent} onTouchMove={closeActiveEvent} onTouchEnd={closeActiveEvent}>
          <div className="japan__itinerary-event-exit" onClick={forceCloseEvent}>&times;</div>
          <h2>{props.activeEvent.name}</h2>
          <div className="japan__itinerary-event-footer">
            <ul className="japan__itinerary-event-footer-opts">
              <li>
                <img src={timeIcon} alt="DateTime" className="japan__itinerary-event-footer-opts-icon japan__itinerary-event-footer-opts-icon--time" />
                {props.activeEvent.date.toLocaleDateString()}
              </li>
              <li>
                <img src={locationIcon} alt="Location" className="japan__itinerary-event-footer-opts-icon japan__itinerary-event-footer-opts-icon--location" />
                {props.activeEvent.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="japan__itinerary-event-list">
          {props.formatSubEvents()}
        </div>
      </div>
    </div>
  );
}

class Itinerary extends Component {

  constructor(props) {
    super(props);

    let activeEvent = props.itinerary[1];
    activeEvent.heroStyle = {backgroundImage: `url(${activeEvent.image})`};
    activeEvent.eventClassName = 'japan__itinerary-event';
    this.state = {
      activeEvent: activeEvent,
      subEventOpened: false
    }

    this.formatSubEvents = this.formatSubEvents.bind(this);
    this.closeActiveEvent = this.closeActiveEvent.bind(this);
  }

  setActiveEvent(event) {
    window.scrollTo(0, 0);
    event.heroStyle = {
      backgroundImage: `url(${event.image})`
    };
    event.eventClassName = 'japan__itinerary-event  japan__itinerary-event--open';
    this.setState({
      activeEvent: event,
      subEventOpened: true
    });
  }

  closeActiveEvent() {
    window.scrollTo(0, 0);
    let event = this.state.activeEvent;
    event.eventClassName = 'japan__itinerary-event  japan__itinerary-event--open japan__itinerary-event--close';
    this.setState({
      activeEvent: event,
      subEventOpened: false
    });

    setTimeout(() => {
      event.eventClassName = 'japan__itinerary-event';
      this.setState({
        activeEvent: event
      });
    }, 400);
  }

  formatEventList() {
    return this.props.itinerary.map((event, idx) =>
      <ItineraryEvent
        key={idx}
        setActiveEvent={this.setActiveEvent.bind(this)}
        event={event}
        />
    );
  }

  formatSubEvents() {
    return this.state.activeEvent.events.map((event, idx) =>
      (
        <SubEvent key={idx} event={event} />
      )
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="japan__screen__content">
          <h1 className="japan__heading">Japan</h1>
          <ul className={(this.state.subEventOpened) ? "japan__itinerary-list japan__hide" : "japan__itinerary-list"}>
            {this.formatEventList()}
          </ul>
          <DayEvent activeEvent={this.state.activeEvent} formatSubEvents={this.formatSubEvents} closeActiveEvent={this.closeActiveEvent} />
        </div>
      </div>
    );
  }
}

export default Itinerary;
