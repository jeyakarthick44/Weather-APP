import React, {useEffect,useState} from 'react'
import "../components/style.css";
import  WeatherDetails from "./WeatherDetails"

 function SearchMain() { 
     const [searchTerm,setSearchTerm]=useState("")
    return (
        <>
        <div className="wrap">
            <div className="search">
                <input onChange={(e) => {setSearchTerm(e.target.value)}} value={searchTerm}type="search" placeholder="Type City Name" id="search"/>
            </div>   
               <button onClick={(getWeatherInfo)} className="searchButton" > Search</button>
        </div>
        <WeatherDetails />
        </>
    )
}

export default SearchMain;