function Card (prop){
    return(
        <div className="bg-red-400">
            {prop.children}
        </div>
    )
}

export default Card