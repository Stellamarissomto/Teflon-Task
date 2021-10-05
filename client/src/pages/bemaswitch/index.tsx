import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Contain from '../../component/container';
import Spinner from '../../component/spinner'
import { Card} from './style'

const Bema : React.FC = () => {
    const [bank, setBank ] = useState();
    const [acc, setAcc ] = useState();
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.post("https://bemaswift.herokuapp.com/v1/pay/bemaswitch")
        .then((response) => {
          console.log(response.data)
          if (response.data.statusCode === "10000"){
            setBank(response.data.data.data.payment_bank_name);
            setAcc(response.data.data.data.payment_bank_account);
            setLoaded(true)
            }
          }
        )
    }, [])


    return (
        <div>
            <Contain>
                {
                    !loaded ? <Spinner/> : 
                <Card>
                <p> Make Payment Through Bemaswitch Wema Transfer </p>
                <p>Bank: {bank}</p>
                <p>Account: {acc} </p>
                </Card>
                }
               </Contain>            
        </div>
    )
}

export default Bema 
