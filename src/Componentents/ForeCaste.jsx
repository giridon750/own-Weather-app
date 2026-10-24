
import { Sunrise, ArrowBigRight, Droplets } from "lucide-react"
function ForeCaste(props) {

    const forecast = props.Forecaste?.forecast?.forecastday;

    console.log(forecast)



    return (<>

        <div className="p-3 sm:p-5 text-center">

            <div className="flex justify-between items-center gap-2 m-3">

                <div className="flex justify-between">
                    <h1 className="text-blue-950 font-bold text-left text-base sm:text-lg tracking-tight">5 Days ForeCaste</h1>

                </div>

                <div className="flex gap-2">

                    <p className="font-semibold text-sm text-sky-500 whitespace-nowrap">view More</p>
                </div>
            </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-stretch gap-3 sm:gap-4 pt-2 mt-4 w-full">
                {forecast?.map((day) => {

                    return (<>


                        <div className="forecast-card border w-full min-w-0 h-full p-3 sm:p-4 flex-col flex items-center shadow-md bg-sky-50 rounded-2xl border-sky-200">
                            <h1 className="font-bold text-sm uppercase tracking-wide text-blue-950">
                                {new Date(day.date).toLocaleDateString("en-US", {
                                    weekday: "short",
                                })}
                            </h1>
                          <p className="text-sm text-slate-500">
  {new Date(day.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  })}
</p>

                            <img
                                src={`https:${day.day.condition.icon}`}
                                alt={day.day.condition.text} className="weather-icon-float w-20 h-20 sm:w-24 sm:h-24 object-contain mt-2 mb-2" />


                            <p className="min-h-10 flex items-center justify-center text-sm font-medium text-center text-slate-700">{day.day.condition.text}</p>
                            <h1 className="text-xl sm:text-2xl font-bold tracking-tight mt-2 mb-2 text-blue-950">{Math.round(day.day.maxtemp_c)}° /
                                {Math.round(day.day.mintemp_c)}°</h1>


                            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 mt-2 text-xs sm:text-sm font-semibold text-sky-700"><Droplets size={16} />{day.day.daily_chance_of_rain}% rain</span>

                        </div>


                    </>)

                })}
            </div>

        </div>
    </>)





}
export default ForeCaste