import { useEffect, useState } from 'react'
import axios from "axios";
import Navabar from './Componentents/Navabar'
import Herosection from './Componentents/Herosection'
import CurrentWeather from './Componentents/CurrentWeather'
import ForeCaste from './Componentents/ForeCaste'
import Footer from './Componentents/Footer'

function App() {

  const [city,setcity]=useState(" ")
  const [WeatherU,setWeatherU]=useState(null)

 

         
  

useEffect(()=>{

  const WeatherApi= axios.get(`https://api.weatherapi.com/v1/forecast.json?key=28f86e0b849140eabef123225261710&q=${city}&days=5&api=yes`)

  WeatherApi.then((response)=>{
    setWeatherU(response.data)




  })
},[city])

console.log(WeatherU)















  //  WeatherApi.then((response)=>{
  //   console.log(response.data)

  //   setweather(response.data)
    

  //  })




  

  return(<>
  
  <Navabar/>
  <Herosection setcity={setcity}/>
   <CurrentWeather WeatherU={WeatherU} />
  <ForeCaste Forecaste={WeatherU}/> 
  <Footer/>
  

       
  </>)
}

export default App
