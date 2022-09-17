import { useState } from 'react';
import { Country } from './Country';

export const ListCountry = ({country}) => {

    const [showCountry, setShowCountry] = useState(false);

    const handleClick = () => {
        setShowCountry(!showCountry)
    }
    return (
        <>
        {showCountry ? (<Country handleClick={handleClick} country={country} />) : (<li key={country.name}>{country.name}<button onClick={handleClick}>show</button></li>)}
        </>
    )
}