import React, { Component } from 'react';
import './styles/Reminders.css';

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

const storage = {
  get: function(key = "reminders") {
    return this.convertJSONToObject(localStorage.getItem(key));
  },
  put: function(value, key = "reminders") {
    let string =  this.convertToJSONString(value);
    localStorage.setItem(key, string);
    return this.get();
  },
  convertToJSONString: function(object) {
    return JSON.stringify(object);
  },
  convertJSONToObject: function(string) {
    return JSON.parse(string);
  }
};

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
      reminderList: storage.get() || storage.put(defaultReminderList)
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
    storage.put(this.state.reminderList);
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
