import React from 'react'
import FilterByActions from '../FilterByActions/FilterByActions'
import FilterByColor from '../FilterByColor/FilterByColor'
import FilterByStatus from '../FilterByStatus/FilterByStatus'
import RemainingTodo from '../RemainingTodo/RemainingTodo'

const Filters = () => {
  return (
    <div className='flex items-center justify-between p-4 border-t border-gray-200'>
        <FilterByActions />
        <RemainingTodo />
        <FilterByStatus />
        <FilterByColor />

    </div>
  )
}

export default Filters