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

        <div className="p-8
        bg-cover bg-center"
            style={{ backgroundImage: `url(${weather})`,borderRadius:"10px" }}>

            <h1 className="text-xl text-blue font-semibold  text-blue-950">Hello</h1>

            <h1 className="font-bold text-blue-950 text-4xl mt-2">Check the Weather <br /> of your city</h1>

            <p className="text- text-blue-950 mt-2">
                Get real-time Weather upadates,plan your day <br />
                with confidence

            </p>

            <div className=" w-full sm:w-1/2 border rounded-2xl bg-white shadow-sm p-2 mt-5 border-white flex justify-between">
                <div className="items-center flex flex-1 ">
                    <SearchIcon style={{ fontSize: 25 }} />

                    {/* ------------- */}

                    <input type="text" className="outline-none text-blue-900 w-full" placeholder="Enter city name (e.g.chennai) " 
                    
                   onChange={(event)=>{
                    handleSearch(event)

                   }}

                    />

                


                </div>
                <div>

                    <button className="border rounded-xl p-2 font-semibold w-25 bg-sky-500 text-white "
                    
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