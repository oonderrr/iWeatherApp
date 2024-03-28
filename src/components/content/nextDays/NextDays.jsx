import Day from "./Day.jsx";
import icon1 from "/src/ui/weather-icons/Weather=Rain, Moment=Night.svg"
import icon2 from "/src/ui/weather-icons//Weather=Cloudy, Moment=Day.svg"
import icon3 from "/src/ui/weather-icons/Weather=Rain, Moment=Day.svg"
import icon4 from "/src/ui/weather-icons/Weather=Few clouds, Moment=Day.svg"
import icon5 from "/src/ui/weather-icons/Weather=Storm, Moment=Day.svg"
function NextDays() {
    return(
        <>
            <div className="w-[359px] h-[176px] bg-gray-800 rounded-xl flex">
                <Day name="Mon" iconSrc={icon1}/>
                <Day name="Tue" iconSrc={icon2}/>
                <Day name="Wed" iconSrc={icon3}/>
                <Day name="Thu" iconSrc={icon4}/>
                <Day name="Fri" iconSrc={icon5}/>
            </div>
        </>
    )
}

export default NextDays