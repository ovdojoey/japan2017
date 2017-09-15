class Event {
  constructor(params) {
    this.day = params.day;
    this.name = params.name;
    this.location = params.location || "Japan";
    this.date = params.date;
    this.description = params.description || null;
    this.events = [];
    this.image = params.image || null;
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
