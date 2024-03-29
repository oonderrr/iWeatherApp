import weatherImage from '/src/ui/images/Weather=Rain, Moment=Day.png'
import icon from "/src/ui/weather-icons/moon and rain.png"
import {useContext} from "react";
import { MyContext } from "../Content.jsx";

function Content() {
    const cityData = useContext(MyContext);

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return(
        <>
            <div className="w-[359px] h-[328px] bg-gray-800 p-3 rounded-xl">
                <div className="w-full h-full rounded-lg bg-cover flex flex-col justify-between"
                     style={{backgroundImage: `url(${weatherImage})`}}>
                    <div className="mt-5 ml-5 text-gray-100">
                        <p className="text-heading-sm">{cityData.name}, {cityData.sys.country}</p>
                        <p className="text-xs">{formattedDate}</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-white w-[105px] h-[116px] ml-4 mt-7 p-1 flex flex-col justify-between">
                            <div>
                                <p className="text-heading-xl">{parseInt(cityData.main.temp)}°c</p>
                            </div>
                            <div>
                                <p className="text-heading-sm">{parseInt(cityData.main.temp_min)}°c / {parseInt(cityData.main.temp_max)}°c</p>
                                <p className="text-sm">{cityData.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="w-40 h-40 p-3 flex justify-center items-center overflow-hidden">
                            <img className="w-40 h-40" src={icon} alt="ixon"/>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Content