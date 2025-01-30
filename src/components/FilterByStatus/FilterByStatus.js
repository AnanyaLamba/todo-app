import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStatusFilter,
  selectCurrentSelectedFilter,
  StatusFilterKeys,
} from "../../features/filter/filterSlice";

const FilterByStatus = () => {
  const dispatch = useDispatch();
  const currentActiveFilterStatus = useSelector(selectCurrentSelectedFilter);

  const handleFilterSelect = (status) => {
    dispatch(setStatusFilter(status));
  };

  const isSelected = (status) => currentActiveFilterStatus === status;

  return (
    <div className="flex flex-col  justify-start space-y-2 min-h-32">
      <h2 className="text-lg font-semibold">Filter By Status</h2>
      <ul className="text-lg cursor-pointer text-left">
        {StatusFilterKeys.map((key, idx) => (
          <li
            key={idx}
            onClick={()=>handleFilterSelect(key)}
            className={`py-1 px-2 rounded-md ${
              isSelected(key) ? "bg-sky-600 text-white" : "hover:bg-gray-200"
            }`}
          >
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByStatus;
