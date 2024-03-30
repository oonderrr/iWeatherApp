import Card from "./card/Card.jsx";
import WeatherDetail from "./weatherDetail/WeatherDetail.jsx";
import NextDays from "./nextDays/NextDays.jsx";
import {createContext} from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import ErrorPage from "../errorPage/ErrorPage.jsx";

export const MyContext = createContext(null);

function Content({ city }) {
    const [state, setState] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=beb4bd85adc9b37186a43c4ed2699687`)
                    .then(res => {setState(res.data)})
            } catch (error){
                setError(true)
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    },[]);

    console.log(state)

    return(
        <>

            <MyContext.Provider value={state}>
                {
                    error ? <ErrorPage /> :

                <div className="h-screen w-full bg-gray-900 p-5 flex flex-col justify-center items-center gap-2">
                    {isLoading ? (<p className="text-white text-md">Hava durumu verileri yükleniyor...</p>) : (
                        <>
                            <Card/>
                            <WeatherDetail/>
                            <NextDays/>
                        </>
                        )
                    }
                </div>}
            </MyContext.Provider>
        </>
    )
}

export default Content