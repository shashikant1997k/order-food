import React, { useState } from 'react'
import '../css/Login.css';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useStateValue } from '../StateProvider';

function Otp() {

    const [{phone}, dispatch] = useStateValue();
    const [otp, setOtp] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setOtp(e.target.value);
        document.querySelector(".errorMsg").style.opacity = '0'
    }

    const verifyOtp = (e) => {
        e.preventDefault();

        const data = {
            phone: phone,
            dial_code: '+91',
            otp: otp
        }

        Axios.post("https://staging.fastor.in:8090/v1/pwa/user/login", data).then(res => {
            console.log(res)
            if(res?.data?.status_code === 200){
                localStorage.setItem("auth_token", res?.data?.data?.token);
                dispatch({
                    type: "OTP_SUMBITTED",
                    token: res?.data?.data?.token
                })
                history.push("/");
            }else{
                document.querySelector(".errorMsg").style.opacity = '1'
            }
        }, (error) => {
            console.log(error);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <h4>Verify OTP</h4>
                <form action="" style={{marginTop:'20px'}}>
                    <input type="number" placeholder="Enter the OTP" name="otp" value={otp} onChange={handleChange} />
                    <p className="errorMsg">Wrong otp</p>

                    <button type="submit" onClick={verifyOtp} className="login__signInButton">Verify</button>
                </form>
            </div>
        </div>
    )
}

export default Otp
