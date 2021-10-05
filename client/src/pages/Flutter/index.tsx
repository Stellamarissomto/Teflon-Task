import React from 'react';
import {images } from '../../image'
import Contain from '../../component/container';
import {Form, Input, Inner} from '../paystack/style';
import { Head, Button } from './style'

const Paystack: React.FC = () => {
    return (
        <Contain>
        <Head>
            <img src={images.flutter}  alt='pasystck'/>
            <p> NGN 10</p>
        </Head>

        <Form>
            <h4>Enter your card detail to pay</h4> 
            <form>
                <Input placeholder='CARD NUMBER'/>
                <Inner>
                <input placeholder='MM/YY' />
                <input placeholder='CVV' />

                </Inner>
               <Button>PAY</Button>
            </form>
        </Form>

    </Contain>

    )
}

export default Paystack
