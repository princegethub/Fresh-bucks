import '../styles/globalCss.css'; 
import _BOTTLE_BG from  '../assets/images/Juice circle.png';
import _LIME_EFFECT from  '../assets/images/lime effect.png'; 
import _ORANGE_EFFECT from  '../assets/images/orange effect.png'; 
import _BLACKBERRY_EFFECT from  '../assets/images/blackberry effect.png'; 
import _STRAWBERRY_EFFECT from  '../assets/images/strawberry effect.png'; 
import _LIME_BOTTLE from '../assets/images/cheekyBottle.png';
import _STRAWBERRY_BOTTLE from '../assets/images/strawberryBootle.png';
import _BLACKBERRY_BOTTLE from '../assets/images/blackberryBottel.png';
import _ORANGE_BOTTLE from '../assets/images/orangeBottle.png';

import _STRAW from '../assets/images/straw.png';
import _BLACK from '../assets/images/black.png';
import _LIME from '../assets/images/lime.png';
import _ORANGE from '../assets/images/orange.png';
import _STRAWBERRY from '../assets/images/straw.png';

const juiceThemes = {
    lime: {
      bg: '--color-lime',
      text: 'Lime',
      circle: `${_BOTTLE_BG}`,
      effect: `${_LIME_EFFECT}`,
      bottle: `${_LIME_BOTTLE}`, // New field
      png: `${_LIME }`, // New field
    },
    str: {
      bg: '--color-strawberry',
      text: 'Straw',
      circle: `${_BOTTLE_BG}`,
      effect: `${_STRAWBERRY_EFFECT}`,
      bottle: `${_STRAWBERRY_BOTTLE}`, // New field
      png: `${_STRAW}`, // New field

    },
    blk: {
      bg: '--color-blackberry',
      text: 'Black',
      circle: `${_BOTTLE_BG}`,
      effect: `${_BLACKBERRY_EFFECT}`,
      bottle: `${_BLACKBERRY_BOTTLE}`, // New field
      png: `${_BLACK}`, // New field

    },
    org: {
      bg: '--color-orange',
      text: 'Orange',
      circle: `${_BOTTLE_BG}`,
      effect: `${_ORANGE_EFFECT}`,
      bottle: `${_ORANGE_BOTTLE}`, // New field
      png: `${_ORANGE}`, // New field

    },
};

export default juiceThemes;