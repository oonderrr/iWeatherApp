import {useContext, useEffect, useState} from "react";
import { MyContext } from "../Content.jsx";

import dayClear from "/src/ui/images/Weather=Clear, Moment=Day.png"
import dayCloud from "/src/ui/images/Weather=Cloudy, Moment=Day.png"
import dayRain from "/src/ui/images/Weather=Rain, Moment=Day.png"
import dayStorm from "/src/ui/images/Weather=Storm, Moment=Day.png"
import dayDefault from "/src/ui/images/Weather=Few Clouds, Moment=Day.png"

import nightClear from "/src/ui/images/Weather=Clear, Moment=Night.png"
import nightCloud from "/src/ui/images/Weather=Cloudy, Moment=Night.png"
import nightRain from "/src/ui/images/Weather=Rain, Moment=Night.png"
import nightStorm from "/src/ui/images/Weather=Storm, Moment=Night.png"
import nightDefault from "/src/ui/images/Weather=Few Clouds, Moment=Night.png"

import sunClear from "/src/ui/weather-icons/Sun.png"
import sunCloud from "/src/ui/weather-icons/sun clouds.png"
import sunRain from "/src/ui/weather-icons/sun rain.png"

import moonClear from "/src/ui/weather-icons/Moon.png"
import moonCloud from "/src/ui/weather-icons/Moon,stars and cloud.png"
import moonRain from "/src/ui/weather-icons/moon and rain.png"

import thunder from "/src/ui/weather-icons/Thunder.png"
import snow from "/src/ui/weather-icons/rain.png"

function Content() {
    const cityData = useContext(MyContext);
    const [background, setBackground] = useState(null)
    const [icon, setIcon] = useState(null)

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    useEffect(() => {
        if ((cityData.dt >= cityData.sys.sunrise) && (cityData.sys.sunset >= cityData.dt)){
            switch (cityData.weather[0].main) {
                case "Clear":
                    setBackground(dayClear);
                    setIcon(sunClear)
                    break;
                case "Clouds":
                    setBackground(dayCloud);
                    setIcon(sunCloud)
                    break;
                case "Rain":
                    setBackground(dayRain);
                    setIcon(sunRain)
                    break;
                case "Thunderstorm":
                    setBackground(dayStorm);
                    setIcon(thunder)
                    break;
                case "Snow":
                    setBackground(dayRain);
                    setIcon(snow)
                    break
                default:
                    setBackground(dayDefault);
                    setIcon(sunClear)
                    break;
            }
        } else {
            switch (cityData.weather[0].main) {
                case "Clear":
                    setBackground(nightClear);
                    setIcon(moonClear)
                    break;
                case "Clouds":
                    setBackground(nightCloud);
                    setIcon(moonCloud)
                    break;
                case "Rain":
                    setBackground(nightRain);
                    setIcon(moonRain)
                    break;
                case "Thunderstorm":
                    setBackground(nightStorm);
                    setIcon(thunder)
                    break;
                case "Snow":
                    setBackground(nightRain);
                    setIcon(snow)
                    break;
                default:
                    setBackground(nightDefault);
                    setIcon(moonClear)
                    break;
            }
        }
    }, []);

    return(
        <>
            <div className="w-[359px] h-[328px] bg-gray-800 p-3 rounded-xl">
                <div className="w-full h-full rounded-lg bg-cover flex flex-col justify-between"
                     style={{backgroundImage: `url(${background})`}}>
                    <div className="mt-5 ml-5 text-gray-100">
                        <p className="text-heading-sm">{cityData.name}, {cityData.sys.country}</p>
                        <p className="text-xs">{formattedDate}</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-white w-[115px] h-[116px] ml-4 mt-7 p-1 flex flex-col justify-between">
                            <div>
                                <p className="text-heading-xl">{parseInt(cityData.main.temp)}°c</p>
                            </div>
                            <div>
                                <p className="text-heading-sm">{parseInt(cityData.main.temp_min)}°c / {parseInt(cityData.main.temp_max)}°c</p>
                                <p className="text-sm">{cityData.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="w-40 h-40 md:p-3 flex justify-center items-center overflow-hidden">
                            <img className="w-36 h-36 md:w-40 md:h-40 object-cover md:absolute" src={icon} alt="ixon"/>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Content