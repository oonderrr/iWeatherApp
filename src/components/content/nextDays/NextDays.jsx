import Day from "./Day.jsx";
import icon1 from "/src/ui/weather-icons/Moon.png"
import icon2 from "/src/ui/weather-icons/sun clouds-1.png"
import icon3 from "/src/ui/weather-icons/Moon,stars and cloud.png"
import icon4 from "/src/ui/weather-icons/sun rain.png"
import icon5 from "/src/ui/weather-icons/Thunder.png"
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