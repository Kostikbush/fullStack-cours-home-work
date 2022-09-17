import { useState } from 'react';
import { Languages } from "./Languages";
import { Weather } from "./Weather";

export const Country = ({country, handleClick}) => {
    const [wheather, setWheather]= useState({});
    return (
        <>
            <h1>{country.name}</h1>
            <p><span>capital: {country.capital}</span></p>
            <p><span>area: {country.area}</span></p>
            <h3>languages</h3>
            <ul>
                {country.languages.map(languag => (
                    <Languages key={languag.name} languag={languag}/>
                ))}
            </ul> 
            <img alt="img" src={country.flags.png}/>
            <Weather wheather={wheather} country={country} setWheather={setWheather}/>
            <button onClick={handleClick}>hide</button>
        </>
    )
}

