import logo from "/src/ui/logo/Logo.svg"
import background from "/src/ui/background/Background.svg"
import axios from "axios";
import {useEffect, useState} from "react";
import Content from "../content/Content.jsx";
import arrow from "/src/ui/icon/arrow-right-solid.svg"
import spin from "/src/ui/icon/spinner-solid.svg"

function Search() {
    const [name, setName] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(true);
    const [cityName, setCityName] = useState("");
    const [list, setList] = useState(true);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        axios.get('/cities.json')
            .then(response => {setName(response.data)})
    },[]);

    function handleCityClick(cityName, country) {
        const inputElement = document.getElementById("inputSearch");
        inputElement.value = `${cityName}, ${country}`;
        setCityName(cityName)
        setList(false)
    }

    useEffect(() => {
        const inputElement = document.getElementById("inputSearch");
        if (inputElement.value === "") {
            setList(true)
        }
    }, [search]);

    function handleSearch() {
        setSpinner(false)
        setTimeout(() => {
            setPage(false);
        }, 2000);
    }

    return(
        <>
            {page ?
            <div className="bg-cover" style={{backgroundImage: `url(${background})`}}>
                <div className="flex justify-center">
                    <div className="w-[186px] h-8 flex justify-center items-center mt-12">
                        <img className="h-full" src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="h-screen w-full flex flex-col items-center justify-center">
                    <div className="w-[311px] h-[140px] flex flex-col justify-between">
                        <div>
                            <p className="text-heading-md text-white text-center flex justify-center">Welcome to <p className="text-blue-light ml-1">TypeWeather</p> </p>
                            <p className="text-sm text-gray-200 text-center">Choose a location to see the weather forecast</p>
                        </div>
                        <div className="flex h-14 w-full rounded-lg bg-[#1E1E29]">
                            <input className="h-14 w-full rounded-lg bg-[#1E1E29] p-5 focus:outline-none text-md text-white
                                              placeholder:text-md placeholder:text-gray-400"
                                   placeholder="Serach loaction"
                                   type="text"
                                   id="inputSearch"
                                   onChange={(e) => setSearch(e.target.value)}/>
                            <button className="h-14 w-14 flex items-center justify-center" onClick={handleSearch}>
                                <img className={`h-6 ${spinner ? "" : "animate-spin"}`} src={spinner ? arrow : spin} alt="icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="w-[311px] h-[270px] rounded-lg overflow-auto mt-2">
                        {
                            list ?
                                search.length > 0 ?
                                    name.filter((item) => {
                                        if (search.length === ""){
                                            return item;
                                        }else if(item.name.toLowerCase().startsWith(search.toLowerCase())){
                                            return item;
                                        }
                                    })
                                        .map(res => {
                                            return (
                                                <button
                                                    onClick={() => handleCityClick(res.name, res.country)}
                                                    className="w-[311px] h-[54px] bg-gray-500 text-md hover:bg-gray-400 duration-300 text-white shadow-xl text-start pl-4 mb-[1px]"
                                                    key={res.name}
                                                    >
                                                        {res.name}, {res.country}
                                                </button>
                                            )
                                        })
                                    : <button className="w-[311px] h-[54px] rounded-lg bg-blue-light hover:bg-blue-400 active:bg-blue-500 duration-300 text-white">
                                        Konumunuzu kullanmak ister misin?
                                        </button>
                                : ""
                        }
                    </div>
                </div>
            </div> : <Content city={cityName}/>}
        </>
    )
}

export default Search