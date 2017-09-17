import React, { Component } from 'react';
import './styles/Memories.css';


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


class Memories extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   reminderList: storage.get() || storage.put(defaultReminderList)
    // };
    // this.toggleItemDone = this.toggleItemDone.bind(this);
  }
  render() {
    return (
      <div className={this.props.className}>
        <div className="japan__screen__content">
          
          {/* <ul className="japan__reminders-list">
            {this.renderList()}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default Memories;
