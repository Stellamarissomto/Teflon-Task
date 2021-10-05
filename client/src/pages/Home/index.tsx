import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {images } from '../../image';
import {Hero, Himage, Whole, Box, Pay} from './style';
import Modal from './../../component/Modal';



const Home: React.FC = () => {
  
  const [isOpen, setIsOpen ] = useState(false);
 
  const history = useHistory();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


    return (
      <Whole>
        <Hero>
          <h1> Best Sound Stero for your home</h1>
          <p> Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound, O
            utdoor Speakers with Bluetooth 5.0, 30H Playtime,66ft Bluetooth Range, Dual Pairing for Home
            </p>
            <button onClick={togglePopup}>Buy Now</button>
            {
              isOpen && (
                <Modal  handleClose={togglePopup}>
                <Box>
                <h2>Choose payment method</h2>
                <Pay>
                  <button onClick={()=> history.push('/paystack')}>paystack</button>
                  <button onClick={()=> history.push('/flutter')}>flutter</button>
                  <button onClick={()=> history.push('/bemaswitch')}>Bemaswitch</button>
                </Pay>
                </Box>
             </Modal>

              )
            
            }
         
        </Hero>

        <Himage>
          <img src={images.speaker} alt='spaker'/>
        </Himage>

      </Whole>

      
      
      );
}

export default Home
