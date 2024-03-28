function Day({name, iconSrc}) {
    return(
        <>
            <div className="w-[67px] h-full flex flex-col gap-1 justify-center items-center">
                <p className="text-heading-xs text-gray-200">{name}</p>
                <div className="w-14 h-14 p-1.5 flex justify-center items-center overflow-hidden">
                    <img src={iconSrc} alt="icon"/>
                </div>
                <div>
                <p className="text-heading-xs text-gray-100">32 c</p>
                    <p className="text-heading-xs text-gray-400">26 c</p>
                </div>
            </div>
        </>
    )
}

export default Day