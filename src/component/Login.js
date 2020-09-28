import React, { useState } from 'react'
import '../css/Login.css';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useStateValue } from '../StateProvider';

function Login() {

    const [{phone}, dispatch] = useStateValue();
    const [mobile, setMobile] = useState('');
    const history = useHistory();


    const signIn = (e) => {
        e.preventDefault();
        const data = {
            phone: mobile,
            dial_code: '+91'
        }

        Axios.post("https://staging.fastor.in:8090/v1/pwa/user/register", data).then(res => {
            console.log(res)
            if(res?.data?.status_code === 200){
                dispatch({
                    type: "LOGIN",
                    phone: mobile
                })
                history.push("/otp");
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="login">
            
            <div className="login__container">
                <h4>Sign-in</h4>

                <form action="" style={{marginTop:'20px'}}>
                    <h6>Mobile</h6>
                    <input type="number" placeholder="Enter your mobile no." name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                    
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
