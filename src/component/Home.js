import React, { useEffect, useState } from 'react'
import '../css/Home.css';
import Offers from './Offers'
import ItemsRow from './ItemsRow';
import ItemsColumn from './ItemsColumn';
import Carousel from './Carousel';
import Axios from 'axios';
import { useStateValue } from '../StateProvider';

function Home() {

    const [{token}, dispatch] = useStateValue();
    const [data, setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://staging.fastor.in:8090/v1/m/restaurant?city_id=118", { headers: {"Authorization" : `Bearer ${token}`} }).then(res => {
            console.log(res?.data)
            setData(res?.data);
        }, (error) => {
            console.log(error);
        })
    }, []);

    let allItem = data;
    return (
        <div className="Home">
            <Offers /> 
            <ItemsRow item={allItem} />  
            <Carousel />
            <ItemsColumn item={allItem} />
        </div>
    )
}

export default Home
