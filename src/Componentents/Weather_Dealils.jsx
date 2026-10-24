
import {
    Sun,
    Cloud,
    CloudSun,
    CloudRain,
    MapPin,
    Search,
    Thermometer,
    Sunrise,
    Sunset,
    Leaf,
    Droplets,
    Wind,
    Gauge,
    Eye,
    ArrowDown,
    ArrowUp,
    ArrowRight,


    Heart,

} from "lucide-react"

function Weather_Dealils(props) {

    return (<>

        <div className="sm:w-[30%]  border-4 border-white shadow-xl   p-4 rounded-2xl">

            <h1 className="text-2xl font-semibold text-blue-950">Weather Detalis</h1>

            <div className="flex flex-col gap-4 ">
                <div className="   flex justify-between mt-2 border p-4  shadow-sm border-white">
                    <div className="flex gap-2 items-center ">
                        <span className="text-bule border bg-fuchsia-50 p-1 text-fuchsia-600 border-yellow-50 rounded-2xl "> <Thermometer/></span> 
                        <h1 className=" font-semiblod">Fell Like</h1>
                    </div>
                    <div className="">
                        <h1 className="font-semibold  text-slate-900">{props.Fell_Like ? props.Fell_Like:"---"} c</h1>
                    </div>
                </div>

                <div className="flex justify-between mt-2 p-2 border border-white shadow-sm">

                    <div className="flex gap-2 items-center ">
                      <span className="text-bule border bg-yellow-100 p-1 text-yellow-400 border-yellow-50 rounded-2xl "><Sunrise   ></Sunrise></span> 
                        <h1 className=" font-semiblod">Sunrise</h1>
                    </div>
                    <div className="">
                        <h1 className="font-semibold  text-slate-900">{props.sunrise ? props.sunrise.replace(0," "):"---"}</h1>
                    </div>
                </div>

                
               



                <div className="flex justify-between mt-2 p-2 border border-white shadow-sm">
                    <div className="flex items-center gap-2">
                           <span className="text-bule border bg-red-50 p-1 text-red-600 border-red-50 rounded-2xl "> <Sunset/></span> 
                        <h1 className=" font-semiblod">Sunset</h1>
                    </div>
                    <div className="">
                        <h1 className="font-semibold text-slate-900">{props.sunset ? props.sunset.replace(0," "):"---"}</h1>
                    </div>
                </div>



                <div className="flex justify-between mt-2 p-2 border border-white shadow-sm">
                   <div className="flex items-center gap-2">
                           <span className="text-bule border bg-amber-50 p-1 text-amber-500 border-green-50 rounded-2xl "> <Sun/></span> 
                        <h1 className=" font-semiblod">UV</h1>
                    </div>
                    <div className="">
                        <h1 className="font-semibold">{props.airQuality ? props.airQuality:"(0–2 Low, 3–5	Moderate)"}</h1>
                    </div>



                </div>
            </div>

        </div>












    </>)

}

export default Weather_Dealils