import React, {useState} from 'react'
import Main from './Main'

function Ass09() {
    const [data, setData] = useState({name: '', email: '', password: ''});
    const [show, setShow] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        setShow(prev => !prev)
    }
    function handleChange(e){
        const name = e.target.id;
        const value = e.target.value;
        setData({...data, [name]: value});
    }
  return (
    <Main>
        <h1 className='text-4xl'>Ass09</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

            <input type="text" id="name" className='border' onChange={handleChange} value={data.name} />
            <label htmlFor="name">Enter name</label>
            
            <input type="email" id="email" className='border' onChange={handleChange} value={data.email} />
            <label htmlFor="email">Enter email</label>
            
            <input type="password" id="password" className='border' onChange={handleChange} value={data.password} />
            <label htmlFor="password">Enter password</label>

            
            {show? <input type="submit" value="Submit Form" className='border' /> : ""}
        </form>
        {show? <p>You are {data.name}, having email: {data.email} with password: {data.password}</p>: ""}
    </Main>
  )
}

export default Ass09