import React from 'react';
import {images } from '../../image'
import {Hero, Himage, Whole} from './style'

const Home: React.FC = () => {
    return (
      <Whole>
        <Hero>
          <h1> Best Sound Stero for your home</h1>
          <p> Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound, O
            utdoor Speakers with Bluetooth 5.0, 30H Playtime,66ft Bluetooth Range, Dual Pairing for Home
            </p>
            <button>Buy Now</button>
        </Hero>

        <Himage>
          <img src={images.speaker} alt='spaker'/>
        </Himage>

      </Whole>
      
      
      );
}

export default Home
