import logo from "/src/ui/logo/Logo.svg"
import background from "/src/ui/background/Background.svg"
import axios from "axios";
import {useEffect, useState} from "react";

function Search() {
    const [name, setName] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('/cities.json')
            .then(response => {setName(response.data)})
    },[]);



    return(
        <>
            <div className="bg-cover" style={{backgroundImage: `url(${background})`}}>
                <div className="flex justify-center">
                    <div className="w-[186px] h-8 flex justify-center items-center mt-12">
                        <img className="h-full" src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="h-screen w-full flex flex-col items-center justify-center">
                    <div className="w-[311px] h-[140px] flex flex-col justify-between">
                        <div>
                            <p className="text-heading-md text-white text-center">Welcome to TypeWeather</p>
                            <p className="text-sm text-gray-200 text-center">Choose a location to see the weather forecast</p>
                        </div>
                        <div>
                            <input className="h-14 w-full rounded-lg bg-[#1E1E29] p-5 focus:outline-none text-md text-white
                                              placeholder:text-md placeholder:text-gray-400"
                                   placeholder="Serach loaction"
                                   type="text"
                                   onChange={(e) => setSearch(e.target.value)}/>
                        </div>
                    </div>
                    <div className="w-[311px] h-[270px] rounded-lg overflow-auto mt-2">
                        {
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
                                            className="w-full h-[54px] bg-gray-500 text-md text-white hover:bg-gray-400 text-start pl-4 mb-[1px]"
                                            key={res.name}>{res.name}, {res.country}
                                            </button>
                                        )
                                    }) : ""
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Search