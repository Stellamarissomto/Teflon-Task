import React from 'react';
import Contain from '../../component/container';
import {images } from '../../image'
import {Head, Form, Input, Inner, Button} from './style'

const Paystack: React.FC = () => {
    return (
        <div>
            <Contain>
                <Head>
                    <img src={images.plogo}  alt='pasystck'/>
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
        </div>
    )
}

export default Paystack
