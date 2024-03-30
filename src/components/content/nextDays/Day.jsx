import {useContext} from "react";
import {MyContext} from "../Content.jsx";

function Day({name, iconSrc}) {
    const cityData = useContext(MyContext);
    return(
        <>
            <div className="w-1/5 h-full flex flex-col gap-1 justify-center items-center">
                <p className="text-heading-xs text-gray-200">{name}</p>
                <div className="w-14 h-14 p-1.5 flex justify-center items-center overflow-hidden">
                    <img src={iconSrc} alt="icon"/>
                </div>
                <div>
                <p className="text-heading-xs text-gray-100">{parseInt(cityData.main.temp_max)}°c</p>
                    <p className="text-heading-xs text-gray-400">{parseInt(cityData.main.temp_min)}°c</p>
                </div>
            </div>
        </>
    )
}

export default Day