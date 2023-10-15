import james from './assets/james.png'
import wint3 from './assets/wint3.png'
import whiteDoor1 from './assets/whiteDoor1.jpg'
import museum from './assets/museum.jpg'
import lighthouse from './assets/redlighthouse.png'
import match_gamealt3 from './assets/match_gamealt3.jpg'



const data = [
  {
    img: `${lighthouse}`,
    title: 'outdoorsclub',
    link: 'https://outdoors.rest',
    copy: [
      "the Outdoors Club ",
      "is the app for the nyc walking group. Presently in testing state.",
      [
        'Built with the MERN stack, being responsive.',
        'User can sign up for membership with payment through Stripe, edit their information and reset their password if they forgot it.',
        'Has three User roles: Member, Leader, and Admin. Admin has the ability to edit Member information through Admin table. Leader can view Members contact information through Leader table',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/the_outdoors_club',
    backendLink: null,
  },
  {
    img: `${james}`,
    title: 'worldfood',
    link: 'https://jamesoseland.com',
    copy: [
      "James Oseland's World Food ",
      "is James' website for his new book series.",
      [
        'Incorporates Mailchimp for newsletter signup.',
        'Renders two Carousels: one built from scratch, the other using a library.',
        'Displays a React frontend with CSS grid and flexbox, being responsive.',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/jim-wf',
    backendLink: null,
  },
  {
    img: `${museum}`,
    title: 'brooklynmuseumproject',
    link: 'https://brooklyn-museum.herokuapp.com',
    copy: [
      'The Brooklyn Museum Project ',
      "is an app where you can search the museum's vast collection by the artist's name.",
      [
        'Built with React Hooks and Express.',
        "Chains 3 HTTP requests to fetch data from the Brooklyn Museum's API.",
        'Incorporates a Masonry Grid library to mimic how traditional museums display their art.',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/brooklyn-art',
    backendLink: null,
  },
  {
    img: `${wint3}`,
    title: 'earthpaints',
    link: 'https://earth-paints.netlify.app',
    copy: [
      'Earth Paints ',
      'is an app to discover images that Google Earth takes from afar.',
      [
        'Implements Lazyload for faster rendering in mobile.',
        'Incorporates a searchbar where users can search by Country.',
        'React frontend styled with CSS and Semantic-ui-React.',
        'Fetches data from the Rails API.',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/google-earth-client',
    backendLink: 'https://github.com/cynthiaeddy/earth-api',
  },

  {
    img: `${whiteDoor1}`,
    title: 'whitedoorescape',
    link: 'https://white-door-escape.netlify.app',
    copy: [
      'The White Door Escape ',
      'is a simple escape game.',
      ['Built with React Hooks and CSS.'],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/room_escape',
    backendLink: null,
  },
  {
    img: `${match_gamealt3}`,
    title: 'matchgame',
    link: 'https://match-car-game.netlify.app',
    copy: [
      'Match Game ',
      'is a memory game.',
      [
        'Click on one card, then another. If cars match, the cards stay revealed.',
        ' You can reset game at anytime by clicking the little car at bottom. Cards will be shuffled.',
        'Built with CSS, HTML, Javascript and CSS Flexbox.',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/match-game',
    backendLink: null,
  },

]
export default data
