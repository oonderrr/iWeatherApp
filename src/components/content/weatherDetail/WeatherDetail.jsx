import icon1 from "/src/ui/phosphor-icon/Type=thermometer-simple-light.svg"
import icon2 from "/src/ui/phosphor-icon/Type=cloud-rain-light.svg"
import icon3 from "/src/ui/phosphor-icon/Type=wind-light.svg"
import icon4 from "/src/ui/phosphor-icon/Type=spinner-gap-regular.svg"
import icon5 from "/src/ui/phosphor-icon/Type=sun-dim-light.svg"

import ListItem from "./ListItem.jsx";

import {useContext} from "react";
import {MyContext} from "../Content.jsx";

function WeatherDetail() {
    const cityData = useContext(MyContext);
    return(
        <>
            <div className="w-[359px] h-[292px] lg:w-[400px] lg:h-[328px] bg-gray-800 px-4 py-1 rounded-xl">
                <ListItem
                    icon={icon1}
                    title="Thermal sensation"
                    details={`${parseInt(cityData.main.feels_like)}°c`}
                    border="border-b-gray-700"/>
                <ListItem
                    icon={icon2}
                    title="Probability of rain"
                    details="0%"
                    border="border-b-gray-700"/>
                <ListItem
                    icon={icon3}
                    title="Wind speed"
                    details={`${parseInt(cityData.wind.speed)} km/h`}
                    border="border-b-gray-700"/>
                <ListItem
                    icon={icon4}
                    title="Air humidity"
                    details={`${parseInt(cityData.main.humidity)}%`}
                    border="border-b-gray-700"/>
                <ListItem
                    icon={icon5}
                    title="UV Index"
                    details="5"
                    border="border-none"/>

            </div>
        </>
    )
}

export default WeatherDetail;