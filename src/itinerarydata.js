import Event from './Event';

let dayOne = new Event({
  day: "1",
  name: "Land in Tokyo",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 19)
}).addEvent(new Event({
  day: "1",
  name: "Land at Narita -  3:45",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 19, 15, 45),
  description: "Land at Airport.  Activate SIM card.  Look for train to Akasaka-Mitsuke"
})).addEvent(new Event({
  day: "1",
  name: "Check in to b tokyo akasaka-mitsuke",
  location: "Tokyo, Minato Ward",
  date: new Date(2017, 8, 19, 19, 0),
  description: "Check in at the b tokyo akasaka-mitsuke.  Address: Minato-ku, Akasaka 3-21-7 Tokyo, Minato Ward 107-0052"
})).addEvent(new Event({
  day: "1",
  name: "Sleep with baby",
  location: "b tokyo akasaka-mitsuke",
  date: new Date(2017, 8, 19, 20, 30),
  description: "🤗"
}));


let dayTwo = new Event({
  day: "2",
  name: "Fishmarket, Imperial Palace, Ginza, and Shinjuku",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 20)
});

const itinerary = [
  dayOne,
  dayTwo
]



export default itinerary;
