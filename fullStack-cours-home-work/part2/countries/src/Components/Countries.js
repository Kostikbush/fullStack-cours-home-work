import { Country } from "./Country";
import { ListCountry } from "./ListCountry";
export const Countries = ({countries}) => {
    if(countries.length > 10){
        return (
          <p>Too many matches, specify another filter</p>
        )
      }if(countries.length === 1){
        return (
          <div>
            {countries.map(country => (
              <Country key={country.name} country={country}/>
            ))}
          </div>
        )
      }
      if(countries.length === 0){
        return (
          <p>no countries</p>
        )
      }
      return (
        <ul className="App">
          {countries.map(country => (
            <ListCountry key={country.name} country={country}/>
          ))}
        </ul>
      );
}