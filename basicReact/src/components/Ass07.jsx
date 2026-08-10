import React, { useState } from 'react'
import Main from "./Main"
function Ass07() {
    const [status, setStatus] = useState(false);
    const [value, setValue] = useState("Click Me");
    const [i , setI] = useState(0);

    function handleStatus(){
        if (i === 3) setI(prev => prev - 4)
        switch (i){
            case 0:
                setValue("Pending...")
                break;
            case 1:
                setValue("Approved")
                break;
            case 2:
                setValue("Rejected")
                break
            default:
                setValue("Cancelled")
        }
        setI(prev => prev + 1);
        console.log(i)
    }
  return (
    <Main>
        <h1 className='text-5xl'>Ass 07</h1>
        <b className='border p-2 m-4' onClick={() => setStatus(prev => !prev)}>User Status: {status? "logged in" : "logged out"}</b>
        <span>Status: {!status && <b>Loading...</b>}</span>
        <span className='border m-5 p-1.5' onClick={handleStatus}>Status badge: {value}</span>
    </Main>
  )
}

export default Ass07