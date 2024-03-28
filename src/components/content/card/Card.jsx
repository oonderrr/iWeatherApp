import weatherImage from '/src/ui/images/Weather=Rain, Moment=Day.png'
import icon from "/src/components/icon.svg"

function Content() {
    return(
        <>
            <div className="w-[359px] h-[328px] bg-gray-800 p-3 rounded-xl">
                <div className="w-full h-full rounded-lg bg-cover flex flex-col justify-between"
                     style={{backgroundImage: `url(${weatherImage})`}}>
                    <div className="mt-5 ml-5 text-gray-100">
                        <p className="text-heading-sm">Istanbul, TR</p>
                        <p className="text-xs">Monday, May 15, 2023</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-white w-[105px] h-[116px] ml-4 mt-7 p-1 flex flex-col justify-between">
                            <div>
                                <p className="text-heading-xl">26 c</p>
                            </div>
                            <div>
                                <p className="text-heading-sm">25c / 27c</p>
                                <p className="text-sm">few cloud</p>
                            </div>
                        </div>
                        <div className="w-40 h-40 p-5">
                            <img src={icon} alt="ixon"/>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Content