import React, { useState } from 'react';
import Contain from '../../component/container';
import {images } from '../../image';
import {Head, Form, Input, Inner, Button, Pay} from './style';
import Modal from './../../component/Modal';
import { Box } from '../Home/style';

const Paystack: React.FC = () => {
    const [isOpen, setIsOpen ] = useState(false);
    const [formData, setFormData] = useState({
        cardnum: "",
        date: "",
        cvv: ""
      });

    const { cardnum, date, cvv } = formData;
    const togglePopup = () => {
        setIsOpen(!isOpen);
     };

     const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


    
    return (
        <div>
            <Contain>
                <Head>
                    <img src={images.plogo}  alt='pasystck'/>
                    <p> NGN 10</p>
                </Head>

                <Form>
                    <h4>Enter your card detail to pay</h4> 
                    <div>
                        <Input 
                        placeholder='CARD NUMBER'
                        name="cardnum"
                        value={cardnum}
                        onChange={(e) => onChange(e)}
                        />
                        <Inner>
                        <input 
                        placeholder='MM/YY'
                        name="date"
                        value={date}
                        onChange={(e) => onChange(e)}
                         />
                        <input 
                        placeholder='CVV'
                        name="cvv"
                        value={cvv}
                        onChange={(e) => onChange(e)}
                         />
                        </Inner>
                       <Button disabled={ cardnum === ""} onClick={togglePopup}>PAY</Button>
                    </div>
                </Form>

            </Contain>

            {
              isOpen && (
             <Modal  handleClose={togglePopup}>
                <Box>
                <Pay>
                  <p>Transaction failed. Please make payment with bemaswitch wema Transfer</p>
                  <button>Bemaswitch</button>
                </Pay>
                </Box>
             </Modal>

              )
            
            }
        </div>
    )
}

export default Paystack
