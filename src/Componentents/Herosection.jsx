import { SearchIcon } from "@sanity/icons/Search";
import { PinIcon } from "@sanity/icons/Pin";
import weather from "../assets/weather.png"
import { useState } from "react";


function Herosection(props) {
console.log(props)

 const [searchCity, setSearchCity] = useState("");


// hero search
function handleSearch(event){
    setSearchCity(event.target.value)


}
console.log(searchCity)


function handleButton(){
    props.setcity(searchCity)
}









    return (<>

        <div className="p-5 sm:p-6 md:p-8
        bg-cover bg-center"
            style={{ backgroundImage: `url(${weather})`,borderRadius:"10px" }}>

            <h1 className="text-lg sm:text-xl text-blue font-semibold text-blue-950 tracking-wide">Hello</h1>

            <h1 className="font-bold text-blue-950 text-3xl sm:text-4xl mt-2 leading-tight tracking-tight">Check the Weather <br /> of your city</h1>

            <p className="text-blue-950 mt-3 leading-relaxed"> Get real-time Weather upadates,plan your day  with confidence

            </p>

            <div className="w-full sm:w-1/2 border rounded-xl sm:rounded-2xl bg-white shadow-sm p-2 mt-5 border-sky-100 flex justify-between gap-2 transition-all duration-300 hover:border-sky-200 focus-within:border-sky-300 focus-within:shadow-md focus-within:ring-2 focus-within:ring-sky-200">
                <div className="items-center flex flex-1 min-w-0 gap-2">
                    <SearchIcon className="shrink-0 text-sky-600 transition-all duration-200 hover:scale-110 hover:text-sky-700" style={{ fontSize: 25 }} />

                    {/* ------------- */}

                    <input type="text" className="outline-none text-blue-900 w-full min-w-0 " placeholder="Enter city name"
                    
                   onChange={(event)=>{
                    handleSearch(event)

                   }}

                    />

                


                </div>
                <div>

                    <button className="border rounded-xl p-2 font-semibold w-25 shrink-0 whitespace-nowrap bg-sky-500 text-white "
                    
                    onClick={()=>{
                        handleButton()

                    }}
                    
                    >Search</button>
                
                
                
                </div>





            </div>

        </div>

    </>)
}

export default Herosection