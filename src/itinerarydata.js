import Event from './Event';
import tokyoImg from './images/tokyo.jpg';
import fishMarketImg from './images/fishMarket.jpg';
import shibuyaImg from './images/shibuya.jpg';

let dayOne = new Event({
  day: "1",
  name: "Land in Tokyo",
  location: "Tokyo, Japan",
  image: tokyoImg,
  date: new Date(2017, 8, 19)
}).addEvent(new Event({
  day: "1",
  name: "Land at Narita",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 19, 15, 45),
  description: "Land at Airport.  Activate SIM card.  Look for train to Akasaka-Mitsuke"
})).addEvent(new Event({
  day: "1",
  name: "Check in: b tokyo akasaka-mitsuke",
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
  image: fishMarketImg,
  date: new Date(2017, 8, 20)
}).addEvent({
  day: "2",
  name: "Tsukiji Market",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 20, 7, 0),
  description: "Sushi breakfast (chu toro). Explore the outdoor market"
}).addEvent({
  day: "2",
  name: "Imperial Palace",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 20, 11, 0),
  description: "Visit the East Garden and Outer Garden"
}).addEvent({
  day: "2",
  name: "Ginza",
  location: "Ginza, Japan",
  date: new Date(2017, 8, 20, 13, 0),
  description: "Walk and shop.  Visit Uniglow for baby"
}).addEvent({
  day: "2",
  name: "Shinjuku",
  location: "Shinjuku, Japan",
  date: new Date(2017, 8, 20, 17, 0),
  description: "See the Metropolitan Gov't Building. Visit Golden Gai (restaurants) and Kabukichu (neon lights).  Explore Omoide Yokochu (alleys and eateries).  Nightlife is on the East Side"
}).addEvent({
  day: "2",
  name: "Train to akasaka-mitsuke",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 20, 23, 0),
  description: "Last train leaves at 11:30"
});

let dayThree = new Event({
  day: "3",
  name: "Shibuya & Asakusa",
  location: "Shibuya, Tokyo",
  image: shibuyaImg,
  date: new Date(2017, 8, 21)
}).addEvent({
  day: "2",
  name: "Meiji Shrine",
  location: "Shibuya, Tokyo",
  date: new Date(2017, 8, 21, 7, 0),
  description: "Relax at the Meiji Shrine and Imperial Garden"
}).addEvent({
  day: "2",
  name: "Yoyogi Park",
  location: "Shibuya, Tokyo",
  date: new Date(2017, 8, 21, 10, 0),
  description: "Explore the ginko tree forest, which turns intensely golden in autumn"
}).addEvent({
  day: "2",
  name: "Koen Dori & Spain Slope",
  location: "Shibuya, Tokyo",
  date: new Date(2017, 8, 21, 13, 0),
  description: "Shop on Park Street and visit Spain Slope"
});

const itinerary = [
  dayOne,
  dayTwo,
  dayThree
]



export default itinerary;
