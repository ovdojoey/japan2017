import React, { Component } from 'react';
import './styles/Highlights.css';
import Storage from './Storage';


class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlights: Storage.get("highlights") || []
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="japan__screen__content">
          {
            (this.state.highlights.length === 0) &&
            <p className="japan__memories__none">You haven't added any highlights yet.</p>
          }
        </div>
      </div>
    );
  }
}

export default Highlights;
