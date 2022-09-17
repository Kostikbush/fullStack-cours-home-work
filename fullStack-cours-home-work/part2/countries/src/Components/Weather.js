import axios from "axios";
import { useEffect, useState } from 'react';

export const Weather = ({country, wheather,setWheather}) => {
    const [loader,setLoader]=useState(true);
    const api_key = process.env.REACT_APP_API_KEY;
    useEffect(()=> {
        setLoader(true);
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&APPID=${api_key}`)
            .then(response => {
            setWheather(response.data);
        })
        setLoader(false);
    },[]);
    return (
        <div>
            {loader ? (<p>Loading...</p>):(
            <>
                <h4>Weather in {country.capital}</h4>
                <p>temperature {wheather.wind.deg / 10}  Celcius</p>
                <p>{wheather.weather[0].description}</p>
                <img alt="img" src={`http://openweathermap.org/img/wn/${wheather.weather[0].icon}@2x.png`}/>
                <p>wind {wheather.wind.speed} m/s</p>
            </>)}
        </div>
    )
}