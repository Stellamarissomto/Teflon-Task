import React, { useState } from 'react';
import {images } from '../../image';
import {Hero, Himage, Whole, Box} from './style';
import Modal from './../../component/Modal';
import axios from 'axios';


const Home: React.FC = () => {
  
  const [isOpen, setIsOpen ] = useState(false);
  const [open, setOpen ] = useState(false);
  const [bank, setBank ] = useState();
  const [acc, setAcc ] = useState();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const bemaswitch = () => {
    axios.post("http://localhost:5002/v1/pay/bemaswitch")
      .then((response) => {
        console.log(response.data)
        if (response.data.statusCode === "10000"){
          setBank(response.data.data.data.payment_bank_name);
          setAcc(response.data.data.data.payment_bank_account);
          setOpen(!open);
          }
        }
      )}

      const paystack = () => {
        axios.post("http://localhost:5002/v1/pay/paystack")
          .then((response) => {
            console.log(response.data)
          })
      }
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
                <h3>Choose payment method</h3>
                <div>
                  <button onClick={paystack}>paystack</button>
                  <button>flutter</button>
                  <button onClick={bemaswitch}>Bemaswitch</button>
                </div>
                </Box>
             </Modal>

              )
            
            }
            {
              open && (
                <Modal  handleClose={togglePopup}>
                <Box>
                <h3>Make Payment Through Bemaswotch Wema Transfer</h3>
                <h3>{bank}</h3>
                <h3>{acc}</h3>
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
