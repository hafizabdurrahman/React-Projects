import React, { useState } from 'react'
import Main from './Main'

function Ass08() {
    const [searchValue, setSearchValue] = useState("");
    const [searchedList, setSearchedList] = useState([]);
    const [list, setList] = useState([
        {id: 123, name: "Typing", priority: "high"},
        {id: 231, name: "Exercise", priority: "low"},
        {id: 312, name: "Coding", priority: "normal"},
    ]);
    function deleteFn(id){
        const idToDel = id;
        const newList = list.filter(item => item.id !== idToDel)
        setList(newList) 
    }
    function search(e){
        setSearchValue(e.target.value);
        const newList = list.filter(item => item.name.toLowerCase().trim() == searchValue.toLowerCase().trim())
        setSearchedList(newList)
    }
  return (
    <Main>
        <h1 className='text-4xl'>Ass08</h1>
        <ul>{
            list.map(item => (
                <>
                    <li key={item.id}>{item.name} having {item.priority}</li>
                    <button className='border p-1' onClick={() => deleteFn(item.id)}>Delete</button>
                </>
            ))
            }</ul>
            <h3 className='text-2xl'>New List</h3>
            <input type="text" className='border' onChange={search} value={searchValue}  />
             <ul>{
            searchedList.map(item => (
                <>
                    <li key={item.id}>{item.name} having {item.priority}</li>
                    <button className='border p-1' onClick={() => deleteFn(item.id)}>Delete</button>
                </>
            ))
            }</ul>
    </Main>
  )
}

export default Ass08