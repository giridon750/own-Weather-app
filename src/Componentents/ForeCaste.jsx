
import { Sunrise, ArrowBigRight, Droplets } from "lucide-react"
function ForeCaste(props) {

    const forecast = props.Forecaste?.forecast?.forecastday;

    console.log(forecast)



    return (<>

        <div className="p-5 text-center">

            <div className="flex justify-between">

                <div className="flex justify-between">
                    <h1 className="text-blue-950 font-bold">5 Days ForeCaste</h1>

                </div>

                <div className="flex gap-2">

                    <p className="font-semibold  text-sky-500">view More</p>
                </div>
            </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                {forecast?.map((day) => {

                    return (<>


                        <div className="border w-40 p-4 m-2 flex-col  flex items-center shadow-xl bg-sky-50 rounded-2xl  border-sky-500">
                            <h1 className="font-bold text-blue-950">
                                {new Date(day.date).toLocaleDateString("en-US", {
                                    weekday: "short",
                                })}
                            </h1>
                          <p>
  {new Date(day.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  })}
</p>

                            <img
                                src={`https:${day.day.condition.icon}`}
                                alt={day.day.condition.text} className="w-24 h-24 object-contain
             animate-pulse
             hover:scale-110
             transition-transform duration-500 mt-2 mb-2" />


                            <p className="font-mono text-center">{day.day.condition.text}</p>
                            <h1 className=" text-2xl font-semibold mt-3 mb-2 text-blue-950">{Math.round(day.day.maxtemp_c)}° /
                                {Math.round(day.day.mintemp_c)}°</h1>


                            <span className="  flex text-center rounded-2xl  border text-sky-500  mt-2 font- bg-sky-100 border-sky-50 p-1 gap-2 font-mono items-center justify-center "><Droplets className="" size={20} />{day.day.daily_chance_of_rain}% rain</span>

                        </div>


                    </>)

                })}
            </div>

        </div>
    </>)





}
export default ForeCaste