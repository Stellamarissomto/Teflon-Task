import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Contain from '../../component/container';

const Bema : React.FC = () => {
    const [bank, setBank ] = useState();
    const [acc, setAcc ] = useState();
    useEffect(() => {
        axios.post("https://bemaswift.herokuapp.com/v1/pay/bemaswitch")
        .then((response) => {
          console.log(response.data)
          if (response.data.statusCode === "10000"){
            setBank(response.data.data.data.payment_bank_name);
            setAcc(response.data.data.data.payment_bank_account);
            }
          }
        )
    }, [])


    return (
        <div>
            <Contain>
                <h1> Make Payment Through Bemaswitch Wema Transfer </h1>
                <h2>Bank: {bank}</h2>
                <h2>Account: {acc} </h2>
            </Contain>
            
        </div>
    )
}

export default Bema 
