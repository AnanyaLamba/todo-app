import React from "react";
import { useDispatch } from "react-redux";
import {
  markAllCompleted,
  clearAllCompleted,
} from "../../features/todo/todoSlice";

const FilterByActions = () => {
  const dispatch = useDispatch();
  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };
  const handleClearAllCompleted = () => {
    dispatch(clearAllCompleted());
  };

  return (
    <div className="flex flex-col items-center justify-start space-y-4 min-h-32">
      <h2 className="text-lg font-semibold">Actions</h2>
      <div className="flex flex-col space-y-3">
        <button
          className="text-base rounded-md font-semibold bg-sky-600 text-white px-2 py-1"
          onClick={handleMarkAllCompleted}
        >
          Mark All Completed
        </button>
        <button
          className="text-base rounded-md font-semibold bg-sky-600 text-white px-2 py-1"
          onClick={handleClearAllCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default FilterByActions;
