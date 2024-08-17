import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [task,setTask] = useState([])
  const handleAdd = () => {
    axios.post('http://localhost:3001/add',{task : task})
    .then(result => {
      window.location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
        <input className='border-2 p-2 w-75 border-black' type="text" name='' id='' placeholder='Enter text here' onChange={(e) => setTask(e.target.value)}/>
        <button className='bg-black text-white p-2' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create