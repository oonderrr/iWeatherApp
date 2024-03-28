import Card from "./card/Card.jsx";
import WeatherDetail from "./weatherDetail/WeatherDetail.jsx";
import NextDays from "./nextDays/NextDays.jsx";

function Content() {
    return(
        <>
            <div className="h-screen w-full bg-gray-900 p-5 flex flex-col justify-center items-center gap-2">
                <Card />
                <WeatherDetail />
                <NextDays />
            </div>
        </>
    )
}

export default Content