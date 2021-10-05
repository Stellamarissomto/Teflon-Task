import express, { Router } from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { SuccessResponse } from '../core/appResponse'

const router = express.Router();

     /* ---- bemaswitch ----*/
router.post('/bemaswitch', async(req, res) => {
    
    //initiate bank transfer 
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    const transaction_id = uuidv4();
    const body = {
        "public_key": process.env.KEY,
        "charge_type": "bank_transfer",
        "transaction_reference": transaction_id,
        "email": "stellamarissomto@gmail.com",
        "amount": 10,
        "currency": "NGN",
        "medium": "web"
    }
    try {
       const initiate = await axios.post(`${process.env.HOST}/v1/charges/initiate`, body, config);
       if(initiate.data.status === "success"){
           // authorize bank transfer
          const body = {
            "public_key": process.env.KEY,
            "charge_type": "bank_transfer",
            "uuid": initiate.data.data.uuid
          }
          const authorize = await axios.post(`${process.env.HOST}/v1/charges/authorize`, body, config);
          new SuccessResponse('sucessfully authorized', authorize.data).send(res)
       }
        
    } catch (err) {
        console.log(err);
    }
})



router.post('/paystack', async(req, res) => {
    
    //initiate bank transfer 
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.PKEY,
          'cache-control': 'no-cache'
        },
      };

    const transaction_id = uuidv4();
    const body = {
        "reference": transaction_id,
        "email": "stellamarissomto@gmail.com",
        "amount": 100,
        "currency": "NGN", 
    }
    try {
    const init = await axios.post(`${process.env.PAYSTACK}transaction/initialize`, body, config);
    new SuccessResponse('sucess', init.data).send(res)     

    } catch (err) {
      //console.log(err)
        res.redirect(307, 'https://bemaswift.herokuapp.com/v1/pay/bemaswitch');
    }
})


router.post('/flutter', async(req, res) => {
    
  //initiate bank transfer 
  const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.FLUKEY,
      },
    };

  const transaction_id = uuidv4();
  const body = {
      "tx_ref": transaction_id,
      "email": "stellamarissomto@gmail.com",
      "amount": 10,
      "currency": "NGN", 
  }
  try {
  await axios.post(`${process.env.FLU}v3/payments`, body, config);
      
  } catch (err) {
      res.redirect(307, 'https://bemaswift.herokuapp.com/v1/pay/bemaswitch');
  }
})







export default router;