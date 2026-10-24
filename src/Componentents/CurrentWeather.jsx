import EyeOpenIcon from "@sanity/icons/EyeOpen"
import weather from "../assets/weather.png"
import Weather_Dealils from "./Weather_Dealils"
import { Sunrise, Droplets, Wind, Gauge, Eye, CalendarDays, } from "lucide-react"
import { useState } from "react"

function CurrentWeather(props) {


    console.log(props)


    const weatherData = props.WeatherU;

    const city = weatherData?.location?.name;

    const country = weatherData?.location?.region;
    const Humidity = weatherData?.current?.humidity;
    const Windspeed = weatherData?.current?.wind_kph;
    const pressure = weatherData?.current?.pressure_mb;
    const Temp = weatherData?.current?.temp_c;
    const visiblity = weatherData?.current?.vis_km;
    const condition = weatherData?.current?.condition?.text;
    const Wicon = weatherData?.current?.condition?.icon;
    const localtime = weatherData?.location?.localtime;
    const weatherDate = localtime
        ? new Date(localtime.replace(" ", "T")).toLocaleDateString("en-IN", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
        : "---";

    const FellLike = weatherData?.current?.feelslike_c;
    const sunrise = weatherData?.forecast?.forecastday?.[0]?.astro?.sunrise;
    const sunset = weatherData?.forecast?.forecastday?.[0]?.astro?.sunset;
    const airQuality = weatherData?.current?.uv;


console.log("Air Quality:", weatherData?.current?.air_quality);







    return (<>

        <div className="  sm:flex gap-4 mt-5 sm:p-6 ">

            <div className="  sm:w-[60%]  bg-sky-50  border-sky-100 border m-2 p-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${weather})`, borderRadius: "10px" }}>

                <div className="grid grid-cols-2 items-center ">

                    <div className="text-slate-900">
                        <div className="flex gap-2">
                            <span className=" text-2xl text-blue-950 font-semibold"><i class="fa-solid fa-location-dot"></i></span>
                            <div className="">

                                <h1 className="text-xl text-slate-900 font-semibold">{city ? city : "---"}</h1>


                                <p className="text-slate-900 font-semibold">{country ? country : "---"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <span className="border gap-2 items-center p-1 flex rounded-xl bg-blue-100 font-semibold border-green-50">
                            <CalendarDays size={20} className="text-blue-600" />
                            <p className="text-blue-900  "> {weatherDate}</p>
                        </span>

                    </div>

                </div>


                <div className=" text-slate-900 ml-4 mt-8">
                    <div className="">

                        <div className="">

                            <div className="flex items-center gap-4">

                                <img
                                    src={Wicon ? `https:${Wicon}` : " "}
                                    alt={condition || "Weather"}
                                    className="w-24 drop-shadow-lg animate-pulse transition-transform duration-300 hover:scale-110"
                                />



                                <div className="">
                                    <h1 className="text-6xl  font-bold">
                                        {Temp ? Temp : "--- "} c
                                    </h1>

                                    <p className="font-semibold">{condition ? condition : "---"}</p>

                                    
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


                <div className="     grid grid-cols-1 gap-4 sm:grid-cols-4     mt-8 border rounded-2xl border-sky-200 bg-sky-100 p-4 shadow-sm transition hover:shadow-md">

                    <div className="text-white">
                        <div className="flex gap-2">
                            <div className="flex h-12 w-12 items-center    justify-center rounded-full bg-bg-sky-100">
                                <Droplets size={26} className="text-sky-600" />
                            </div>

                            <div>
                                <div className="">
                                    <p className="text-sm text-slate-700">Humidity</p>
                                    <p className="font-bold text-slate-900">{Humidity ? Humidity : "---"}</p>
                                </div>


                            </div>

                        </div>
                    </div>

                    <div className="text-white">
                        <div className="flex gap-2">
                            <div className="flex items-center gap-3 rounded-3xl bg-green-100 p-2">
                                <Wind size={28} className="text-green-600" />
                            </div>

                            <div>
                                <div className="">
                                    <p className="text-sm text-slate-700">Wind</p>
                                    <p className="font-bold text-slate-900">{Windspeed ? Windspeed : "---"}</p>
                                </div>


                            </div>

                        </div>
                    </div>

                    <div className="text-white">
                        <div className="flex gap-2">
                            <div className="flex items-center gap-3 rounded-3xl bg-fuchsia-100 p-2">
                                <Gauge size={28} className="text-fuchsia-600" />
                            </div>

                            <div>
                                <div className="">
                                    <p className="text-sm text-slate-700">Pressure</p>
                                    <p className="font-bold text-slate-900">{pressure ? pressure : "---"}</p>
                                </div>


                            </div>

                        </div>
                    </div>

                    <div className="text-white">
                        <div className="flex gap-2">
                            <div className="flex items-center gap-3 rounded-3xl bg-blue-100 p-2">
                                <Eye size={28} className="text-blue-600" />
                            </div>

                            <div>
                                <div className="">
                                    <p className="text-sm text-slate-700">Visiblity</p>
                                    <p className="font-bold text-slate-900">{visiblity ? visiblity : "---"} Km</p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>








            </div>
            <Weather_Dealils Fell_Like={FellLike}  airQuality={airQuality} sunrise={sunrise} sunset={sunset} />



        </div>

    </>)

}

export default CurrentWeather