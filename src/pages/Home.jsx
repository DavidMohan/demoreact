import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [data, setData] = useState({
    name: '',
    age: ''
  })

  return (
    <div className="container d-flex justify-content-center my-5">
      <form className='col-5 my-5 text-center'>
        <input 
          type="text" 
          className='form-control col-12'
          onChange={(e) => setData({...data, name: e.target.name})} 
          // value={data} 
          placeholder='Enter String' 
        />
        <br /> <br />
        <span className='h4'> {data} </span> <br /> <br />
      </form>
    </div>
  )
}

export default Home