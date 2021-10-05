import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {images } from '../../image';
import {Hero, Himage, Whole, Box, Pay} from './style';
import Modal from './../../component/Modal';
import axios from 'axios';


const Home: React.FC = () => {
  
  const [isOpen, setIsOpen ] = useState(false);
  const [open, setOpen ] = useState(false);
  const [bank, setBank ] = useState();
  const [acc, setAcc ] = useState();

  const history = useHistory();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const bemaswitch = () => {
    axios.post("https://bemaswift.herokuapp.com/v1/pay/bemaswitch")
      .then((response) => {
        console.log(response.data)
        if (response.data.statusCode === "10000"){
          setBank(response.data.data.data.payment_bank_name);
          setAcc(response.data.data.data.payment_bank_account);
          setOpen(!open);
          }
        }
      )}

     /* const paystack = () => {
        axios.post("https://bemaswift.herokuapp.com/v1/pay/paystack")
          .then((response) => {
            console.log(response.data)
            if (response.data.statusCode === "10000"){
              setBank(response.data.data.data.payment_bank_name);
              setAcc(response.data.data.data.payment_bank_account);
              setOpen(!open);
              }
          }) */

      /* const flutter = () => {
        axios.post("https://bemaswift.herokuapp.com/v1/pay/flutter")
          .then((response) => {
            console.log(response.data)
            if (response.data.statusCode === "10000"){
              setBank(response.data.data.data.payment_bank_name);
              setAcc(response.data.data.data.payment_bank_account);
              setOpen(!open);
              }
          })
      } */
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
                  <button onClick={bemaswitch}>Bemaswitch</button>
                </Pay>
                </Box>
             </Modal>

              )
            
            }
            {
              open && (
                <Modal  handleClose={togglePopup}>
                <Box>
                <h2>Make Payment Through Bemaswitch Wema Transfer</h2>
                <h2>Bank: {bank}</h2>
                <h2>Account: {acc}</h2>
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
