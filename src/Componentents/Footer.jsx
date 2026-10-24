
import { Leaf } from "lucide-react"

function Footer() {



    return (<>
        <div className="flex justify-between rounded-2xl m-4 p-3 bg-green-200 items-center ">
            <div className=" justify-between mt-2 p-2  ">
                <div className="flex items-center gap-2">
                    <span className="text-bule border bg-green-50 p-1 text-green-600 border-green-50 rounded-2xl "> <Leaf /></span>
                   <div>
                    <h1 className=" font-bold text-blue-950">Weather Tips</h1>
                     <p className="text-blue-950 font-mono mt-">stay hydrated and avoid direct sunlight during peak hour</p>
                   </div>
                </div>
                
                
            </div>

            <div className="hidden sm:block">
                    <h1 className="font-semibold  text-blue-800 font-mono">stay safe</h1>
                </div>
        </div>




    </>)
}
export default Footer