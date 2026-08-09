import { useState } from "react"
import Main from "./Main"

function Ass05(){
    const [like, setLike] = useState(true);
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("white");
    const [bugCount, setBugCount] = useState(0);
    
    function bugCountFn(){
        setBugCount(prev => prev + 1)
        setBugCount(prev => prev + 1)
        setBugCount(prev => prev + 1)
    }

    function likeClicked(){
        setLike((prev) => !prev);
        setCount(count + 1)
        setColor(like ? "red" : "white")
    }
    return(
        <Main>
            <h1 className="text-5xl">No : 5</h1>
            <br /><br />
            <button className="border-2 px-5" style={{ borderColor:color}} onClick={likeClicked}>Liked {count}</button>
            <br /><br />
            <h3 onClick={bugCountFn}>Count: {bugCount}</h3>
        </Main>
    )
}

export default Ass05