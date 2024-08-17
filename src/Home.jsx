import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import {BsTrashFill,BsCircleFill,BsCheckCircleFill} from 'react-icons/bs'


const Home = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/'+id)
    .then(result => {
     window.location.reload()
    })
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result => {
     window.location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='flex flex-col items-center h-screen justify-center'>
      <h2 className='text-xl font-bold'>Todo List</h2>
      <Create />
      {todos.length === 0 ? <div><h2 className='pt-10'>No Records</h2></div> :
        todos.map(todo => (
          <div className='task'>
            <div className='checkbox flex items-center' onClick={() =>  handleEdit(todo._id)}>
              {todo.done ? <BsCheckCircleFill className='icon'/> :
              <BsCircleFill className='icon'/>
              }
              <p className={todo.done ? 'line_through': ''}>{todo.task}</p>
          </div>
          <div>
            <span><BsTrashFill className='icon' onClick={() =>  handleDelete(todo._id)}/></span>
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home