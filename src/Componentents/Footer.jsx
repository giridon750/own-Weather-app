
import { Leaf } from "lucide-react"

function Footer() {



    return (<>
        <div className="flex justify-between gap-3 rounded-2xl m-3 sm:m-4 p-4 sm:p-5 bg-green-200 items-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="min-w-0">
                <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-100 bg-green-50 text-green-600"> <Leaf size={20} /></span>
                   <div>
                    <h1 className="font-bold text-blue-950 tracking-tight">Weather Tips</h1>
                     <p className="mt-1 text-sm sm:text-base leading-relaxed text-blue-950">stay hydrated and avoid direct sunlight during peak hour</p>
                   </div>
                </div>
                
                
            </div>

            <div className="hidden shrink-0 sm:block">
                    <h1 className="font-semibold text-blue-800 font-mono">stay safe</h1>
                </div>
        </div>




    </>)
}
export default Footer