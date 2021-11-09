import React from "react"
import './App.css';
import axios from "axios";
import SearchMain from "./components/SearchMain"


const App = () => {
 
  const api = async () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=f2c9c7b28f2b9f4d1dd98ad1591ee56c`)
      .then(res => {
        const persons = res.data;
        console.log(persons)
      },(errormsg)=>{
        alert("err")
      })
  }
  api()

  
     return (
       <div className="App">
      <SearchMain />
       </div>
          );
      }
   

export default App;