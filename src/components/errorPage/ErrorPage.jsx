import logo from "/src/ui/logo/Logo.svg"
import background from "/src/ui/background/Background.svg"
import Search from "../search/Search.jsx";
import {useState} from "react";

function ErrorPage() {
    const [state, setState] = useState(true)

    return(
        <>
            {state ?
            <div className="bg-cover" style={{backgroundImage: `url(${background})`}}>
                <div className="flex justify-center">
                    <div className="w-[186px] h-8 flex justify-center items-center mt-12">
                        <img className="h-full" src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="h-screen w-full flex flex-col items-center justify-center text-white">
                    <p>Eksik veya hatalı tuşladınız.</p>
                    <button className="w-20 h-10 hover:w-24 hover:h-12 hover:text-lg bg-blue-light rounded-lg duration-500"
                            onClick={() => {setState(false)}}>
                        Home
                    </button>
                </div>
            </div> : <Search /> }
        </>
    )
}

export default ErrorPage