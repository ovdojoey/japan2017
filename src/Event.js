class Event {
  // constructor(name, location = "Japan", date, description = null) {
  //   this.name = name;
  //   this.location = location;
  //   this.date = date;
  //   this.description = description;
  //   this.events = [];
  // }
  constructor(params) {
    this.day = params.day;
    this.name = params.name;
    this.location = params.location || "Japan";
    this.date = params.date;
    this.description = params.description || null;
    this.events = [];
    return this;
  }
  setDate(date) {
    this.date = date;
    return this;
  }
  addEvent(event) {
    this.events.push(event);
    return this;
  }
};

export default Event;
