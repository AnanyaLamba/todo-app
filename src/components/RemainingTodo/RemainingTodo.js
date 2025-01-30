import React from 'react'
import { useSelector } from 'react-redux'
import {selectPendingTodosCount} from '../../features/todo/todoSlice'

const RemainingTodo = () => {
    const incompleteTodosLength = useSelector(selectPendingTodosCount)

    return (
        <div className="flex flex-col items-center justify-start space-y-2 min-h-32">
            <h2 className="text-lg font-semibold">Remaining Todos</h2>
            <p className="text-lg">{incompleteTodosLength} items left</p>
        </div>
    )
}

export default RemainingTodo;
