function ProfileCard({name= "AbdurRahman", url, role="CEO"}){
    return(
        <>
            <div className="w-[200px] h-[200px]">
                <img src={url} width="200px" />
                <h2>{name}</h2>
                <p>{role}</p>
            </div>
        </>
    )
}

export default ProfileCard