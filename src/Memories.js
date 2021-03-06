import React, { Component } from 'react';
import './styles/Memories.css';
import Storage from './Storage';



class Memories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memories: Storage.get("memories") || []
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="japan__screen__content">
          {
            (this.state.memories.length === 0) &&
            <p className="japan__memories__none">You haven't added any memories yet</p>
          }
        </div>
      </div>
    );
  }
}

export default Memories;
