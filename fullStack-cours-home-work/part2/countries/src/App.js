import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from './Components/Countries';

function App() {
  const [countries, setCountrys] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState([]);
  useEffect(()=> {
    axios
    .get('https://restcountries.com/v2/all')
    .then(response => {
      setCountrys(response.data);
    })
  },[])
  const handleChange = (e) => {  
    if(e.target.value.trim().length > 0){
      if(countries.find(country => {
      return country.name.toLowerCase().trim().slice(0, e.target.value.length) === e.target.value.toLowerCase().trim();
    })){
      setCountriesFilter(countries.filter(country =>  country.name.toLowerCase().trim().slice(0, e.target.value.length) === e.target.value.toLowerCase().trim()))
    }else{
      setCountriesFilter([])
    }
    }else{
      setCountriesFilter([])
        }
    }
  return (
    <div className="App">
      <span>find countries</span>
      <input onChange={handleChange}/>
      <Countries countries={countriesFilter}/>
    </div>
  );
}
export default App;
