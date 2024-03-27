import weatherImage from '/src/ui/images/Weather=Rain, Moment=Day.png'
import icon from "/src/components/icon.svg"
import Card from "./Card.jsx";

function Content() {
    return(
        <>
            <div className="h-screen w-full bg-gray-900 p-5 flex justify-center">
                <Card />
            </div>
        </>
    )
}

export default Content