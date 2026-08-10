import React, { useState, useRef } from 'react'
import Main from "./Main"
function Ass06() {
    const searchRef = useRef(null)
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [event, setEvent] = useState("Do Something");
    function handleSubmit(e){
        e.preventDefault()
        setValue(searchRef.current.value)
    }
  return (
        <Main>
            <h1 className='text-3xl'>Ass 06</h1>

            <input type="text" className='border' value={name} id='textInput' onChange={(e) => setName(e.target.value)} />
            <label htmlFor="textInput">{name}</label>

            <button className='border p-1 px-2 m-5' id='checkBtn' onMouseEnter={() => setEvent("Hovered")} onClick={() => setEvent("Clicked")} onDoubleClick={() => setEvent("Double Clicked")}>{event}</button>

            <form onSubmit={handleSubmit}>
                <input type="search" id="searchInput" className='border' ref={searchRef} />
                <label htmlFor="searchInput">{value}</label>
            </form>
        </Main>
  )
}

export default Ass06