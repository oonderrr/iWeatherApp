import Card from "./card/Card.jsx";
import WeatherDetail from "./weatherDetail/WeatherDetail.jsx";
import NextDays from "./nextDays/NextDays.jsx";
import {createContext} from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import ErrorPage from "../errorPage/ErrorPage.jsx";
import arrow from "/src/ui/icon/arrow-right-solid.svg"
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

    return(
        <>

            <MyContext.Provider value={state}>
                {
                    error ? <ErrorPage /> :

                        <div className="h-screen w-full overflow-auto bg-gray-900 p-5">
                            <button className="w-8 m-2 sm:mt-3 sm:ml-3 sm:absolute"
                                    onClick={() => {window.location.reload();}}>
                                <img className="rotate-180 hover:opacity-80 duration-300" src={arrow} alt="icon"/>
                            </button>
                            {isLoading ? (
                                <div className="flex flex-col justify-center items-center gap-2 h-full">
                                    <p className="text-white text-md">Hava durumu verileri yükleniyor...</p>
                                </div>) : (
                                <>
                                <div className="flex flex-col justify-center items-center gap-2 h-full p-5 md:p-0">
                                        <div className="lg:flex lg:gap-2">
                                            <Card/>
                                            <WeatherDetail/>
                                        </div>
                                        <NextDays/>
                                    </div>

                                </>)
                            }
                        </div>
                }
            </MyContext.Provider>
        </>
    )
}

export default Content