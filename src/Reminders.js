import React, { Component } from 'react';
import './styles/Reminders.css';
import Storage from './Storage';

const defaultReminderList = [
  {
    name: "Passport",
    icon: "🛂",
    done: false
  },
  {
    name: "JR Pass",
    done: false
  },
  {
    name: "Sunglasses",
    done: false
  },
  {
    name: "Kindle Charger + Kindle",
    done: false
  },
  {
    name: "Tums, Advil, Talc, Bandids, Hyrdocortizone",
    done: false
  },
  {
    name: "Deodorant",
    done: false
  },
  {
    name: "Toothbrush + paste",
    done: false
  },
  {
    name: "Hair stuff",
    done: false
  },
  {
    name: "Earpods, Apple Watch, Apple Chargers",
    done: false
  }
];

class Item extends Component {
  constructor(props) {
    super(props);
    this.toggleItemDone = this.toggleItemDone.bind(this);
  }
  toggleItemDone() {
    this.props.toggleItemDone(this.props.idx);
  }
  render() {
    return (
      <li className={this.props.item.done ? "japan__reminders-list-item japan__reminders-list-item--done" : "japan__reminders-list-item"} onClick={this.toggleItemDone}>{this.props.item.name}</li>
    );
  }
}

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminderList: Storage.get("reminders") || Storage.put(defaultReminderList, "reminders") || []
    };
    this.toggleItemDone = this.toggleItemDone.bind(this);
  }
  renderList() {
    return this.state.reminderList.map((item, idx) => {
      return (
        <Item key={idx} idx={idx} item={item} toggleItemDone={this.toggleItemDone} />
      );
    });
  }
  toggleItemDone(idx) {
    let _state = this.state.reminderList;
    _state[idx].done = !_state[idx].done;
    this.setState({
      reminderList: _state
    });
    Storage.put(this.state.reminderList, "reminders");
  }
  render() {
    return (
      <div className={this.props.className}>
        <div className="japan__screen__content">
          <h1 className="japan__heading">Reminders</h1>
          <ul className="japan__reminders-list">
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Reminders;
