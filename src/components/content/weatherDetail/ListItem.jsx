function ListItem({icon, title, details, border}) {
    return(
        <>
            <div className={`w-full h-14 border-b ${border} flex justify-between items-center`}>
                <div className="h-6 flex items-center gap-3">
                    <img className="w-6 h-6" src={icon} alt="iss"/>
                    <p className="text-heading-xs text-gray-200">{title}</p>
                </div>
                <div>
                    <p className="text-heading-sm text-gray-100">{details}</p>
                </div>
            </div>
        </>
    )
}

export default ListItem;