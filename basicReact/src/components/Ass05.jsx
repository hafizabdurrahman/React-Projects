import { useState } from "react"
import Main from "./Main"

function Ass05(){
    const [like, setLike] = useState(true);
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("white");
    function likeClicked(){
        setLike((prev) => !prev);
        setCount(count + 1)
        setColor(like ? "red" : "white")
    }
    return(
        <Main>
            <h1>No : 5</h1>
            <button className="border-2 px-5" style={{ borderColor:color}} onClick={likeClicked}>Liked {count}</button>
            <h3>Pehle hi challenge wala bna chuka hu chai aur code vala course jb dekha tha jo ab out dated he</h3>
        </Main>
    )
}

export default Ass05