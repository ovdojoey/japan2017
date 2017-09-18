import Event from './Event';
import tokyoImg from './images/tokyo.jpg';
import fishMarketImg from './images/fishMarket.jpg';
import shibuyaImg from './images/shibuya.jpg';
import fushimiImg from './images/Fushimi.jpg';
import goldenTempleImg from './images/golden_temp.jpg';
import takayamaImg from './images/takayama.jpg';
import osakaImg from './images/osaka.jpeg';
import hidaImg from './images/hida.jpg';
import skyImg from './images/sky.jpg';

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
  name: "Sleep",
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
  description: "Walk and shop.  Visit Uniqlo"
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
  name: "National Museum, Electric Town and Shrines",
  location: "Shibuya, Tokyo",
  image: shibuyaImg,
  date: new Date(2017, 8, 21)
}).addEvent({
  day: "3",
  name: "Tokyo National Museum",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 21, 7, 0),
  description: "One of Tokyo's oldest and largest museums"
}).addEvent({
  day: "3",
  name: "Electric Town or Asakusa",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 21, 10, 0),
  description: "Find an abundance of video games, anime, manga and electronics in Electric Town or see the famous Buddhist temples of traditional Asakusa"
}).addEvent({
  day: "3",
  name: "Meiji Shrine",
  location: "Shibuya, Tokyo",
  date: new Date(2017, 8, 21, 12, 30),
  description: "Relax at the Meiji Shrine and Imperial Garden"
}).addEvent({
  day: "3",
  name: "Yoyogi Park",
  location: "Shibuya, Tokyo",
  date: new Date(2017, 8, 21, 14, 0),
  description: "Explore the ginko tree forest, which turns intensely golden in autumn"
}).addEvent({
  day: "3",
  name: "Koen Dori & Spain Slope",
  location: "Shibuya, Tokyo",
  date: new Date(2017, 8, 21, 15, 30),
  description: "Shop on Park Street and visit Spain Slope"
});

let dayFour = new Event({
  day: "4",
  name: "Travel to Kyoto",
  location: "Kyoto, Tokyo",
  image: fushimiImg,
  date: new Date(2017, 8, 22)
}).addEvent({
  day: "4",
  name: "Bullet train to Kyoto",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 22, 7, 0),
  description: "Hop on the Tokaido Shinkanse, the fastest and most comfortable route to Kyoto. Store luggage at hotel"
}).addEvent({
  day: "4",
  name: "Fushimi Inari Taisha Shrine",
  location: "South Kyoto, Japan",
  date: new Date(2017, 8, 22, 11, 30),
  description: "Hike the mountainous shrine of Inari"
}).addEvent({
  day: "4",
  name: "Check in at Houze 1st Gojo Omiya",
  location: "Kyoto, Japan",
  date: new Date(2017, 8, 22, 16, 0),
  description: "Check in after 4PM. Don't forget your secret code"
}).addEvent({
  day: "4",
  name: "Celebrate with a Kaiseki Cuisine",
  location: "Kyoto, Japan",
  date: new Date(2017, 8, 22, 18, 0),
  description: "Feast on a sequence of dishes, each often small and artistically arranged"
});

let dayFive = new Event({
  day: "5",
  name: "Golden Temples and Bamboo Groves of Arashiyma",
  location: "Kyoto, Tokyo",
  image: goldenTempleImg,
  date: new Date(2017, 8, 23)
}).addEvent({
  day: "5",
  name: "Kinkakuji (Golden Temple)",
  location: "North Kyoto, Japan",
  date: new Date(2017, 8, 23, 7, 0),
  description: "Explore the Zen temple of northern Kyoto whose top two floors are completely covered in gold leaf"
}).addEvent({
  day: "5",
  name: "Bamboo Grooves of Arashiyama",
  location: "West Kyoto, Japan",
  date: new Date(2017, 8, 23, 11, 0),
  description: "Bike through fall colors, cherry blossoms, and bamboo groves of this western Kyoto town"
}).addEvent({
  day: "5",
  name: "Kiyomizudera Temple",
  location: "East Kyoto, Japan",
  date: new Date(2017, 8, 23, 14, 30),
  description: "The Pure Water Temple is one of the most celebrated temples of Japan. See the three streams of the Otowa Waterfall"
});



let daySix = new Event({
  day: "6",
  name: "Osaka Castle, Aquarium and Shinsekai",
  location: "Osaka, Japan",
  image: osakaImg,
  date: new Date(2017, 8, 24)
}).addEvent({
  day: "8",
  name: "Train to Osaka",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 24, 7, 0),
  description: "Take the high speed shinkansen service to Shin-Osaka Station. Store luggage at Hotel or in lockers"
}).addEvent({
  day: "8",
  name: "Osaka Castle",
  location: "Osaka, Japan",
  date: new Date(2017, 8, 24, 10, 0),
  description: "Visit one of Japan's most famous landmark which played a major role in the unification of Japan during the sixteenth century"
}).addEvent({
  day: "8",
  name: "Osaka Aquarium",
  location: "Osaka, Japan",
  date: new Date(2017, 8, 24, 13, 0),
  description: "See one of Japan's most impressive aquariums"
}).addEvent({
  day: "8",
  name: "Check in at Premier Hotel -CABIN- Osaka",
  location: "Osaka, Japan",
  date: new Date(2017, 8, 24, 16, 0),
  description: "Check in after 3PM"
}).addEvent({
  day: "8",
  name: "Visit Shinsekai",
  location: "Osaka, Japan",
  date: new Date(2017, 8, 24, 18, 0),
  description: "Explore the 'new world,' a district that was developed before the war and then neglected in the decades afterwards"
});

let daySeven = new Event({
  day: "7",
  name: "Day trip to Nara",
  location: "Osaka, Japan",
  image: osakaImg,
  date: new Date(2017, 8, 25)
}).addEvent({
  day: "7",
  name: "Train to Nara",
  location: "Osaka, Japan",
  date: new Date(2017, 8, 25, 7, 0),
  description: "Take the JR Yamatoji Line to Nara"
}).addEvent({
  day: "7",
  name: "Todaji Temple",
  location: "Nara, Japan",
  date: new Date(2017, 8, 25, 10, 0),
  description: "See the Giant Buddah at the Todaji Temple"
}).addEvent({
  day: "7",
  name: "Horyuji Temple",
  location: "Nara, Japan",
  date: new Date(2017, 8, 25, 14, 0),
  description: "Visit some of the oldest wooden buildings and the Buddhist temple that was once one of the powerful Seven Great Temples"
}).addEvent({
  day: "7",
  name: "Dotonbori",
  location: "Osaka, Japan",
  date: new Date(2017, 8, 25, 17, 0),
  description: "Explore the restaurants and nightlife of Dotonobori"
});

let dayEight = new Event({
  day: "8",
  name: "Travel to Takayama",
  location: "Takayama, Japan",
  image: takayamaImg,
  date: new Date(2017, 8, 26)
}).addEvent({
  day: "8",
  name: "Bullet train to Takayama",
  location: "Osaka, Japan",
  date: new Date(2017, 8, 26, 7, 0),
  description: "Hop on the Tokaido Shinkanse to Takayama"
}).addEvent({
  day: "8",
  name: "Temple Walk",
  location: "Temple Path, Takayama",
  date: new Date(2017, 8, 26, 19, 0),
  description: "Take a walk along the historic temple path"
}).addEvent({
  day: "8",
  name: "Relax in Hot Spring",
  location: "Takayama, Japan",
  date: new Date(2017, 8, 26, 20, 0),
  description: "Relax and rejuvenate in Onsen Hot Springs"
});

let dayNine = new Event({
  day: "9",
  name: "Hida Folk Village, Sake, and Historic Takayma",
  location: "Takayama, Japan",
  image: hidaImg,
  date: new Date(2017, 8, 27, 8, 0),
  description: "Wander around Folk Village"
}).addEvent({
  day: "9",
  name: "Explore the Hida Village Museum",
  location: "Hida Folk Village",
  date:  new Date(2017, 8, 27, 8, 0),
  description: "See houses that were built during the Edo Period (1603 - 1867)"
}).addEvent({
  day: "9",
  name: "Tour Sake Brewery",
  location: "Takayama",
  date: new Date(2017, 8, 27, 14, 0),
  description: "Take a tour of the Sake breweries and sample Sake"
}).addEvent({
  day: "9",
  name: "Walk through historic part of town and go to museums",
  location: "Takayma",
  date: new Date(2017, 8, 27, 16, 0),
  description: "Take a look at the historic shops and museums"
});

let dayTen = new Event({
  day: "10",
  name: "Fly ✈ Home",
  location: "Narita, Japan",
  image: skyImg,
  date: new Date(2017, 8, 28, 6, 0),
  description: "Take Hida widebody back to Tokyo"
}).addEvent({
  day: "10",
  name: "Bullet train to Tokyo",
  location: "Tokyo, Japan",
  date: new Date(2017, 8, 22, 7, 0),
  description: "Travel on the bullet train back to Narita"
}).addEvent({
  day: "10",
  name: "Fly Home",
  location: "Narita, Japan",
  date: new Date(2017, 8, 22, 17, 5),
  description: "Flight leaves at 6:05P"
});



const itinerary = [
  dayOne,
  dayTwo,
  dayThree,
  dayFour,
  dayFive,
  daySix,
  daySeven,
  dayEight,
  dayNine,
  dayTen
]



export default itinerary;
