import React from 'react'
import InputTodo from '../InputTodo/InputTodo'
import DisplayTodos from '../DisplayTodos/DisplayTodos'
import Filters from '../Filters/Filters'

const MainDisplay = () => {
  return (
    <div className='py-3 w-3/4 m-auto my-4 text-xl shadow-md rounded-md shadow-gray-500/50 border-t'>
      <InputTodo />
      <DisplayTodos />
      <Filters />
    </div>
  )
}

export default MainDisplay