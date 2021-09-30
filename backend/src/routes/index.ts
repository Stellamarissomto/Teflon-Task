import express from 'express';
import payment from './payment'


const router = express.Router();

// The router. include the routes below.

router.use('/pay', payment);


export default router;
