import React from "react";
import { colorOptions } from "../../utils/dropdownOptions";
import {
  addColorFilter,
  removeColorFilter,
} from "../../features/filter/filterSlice";
import { useDispatch } from "react-redux";

const FilterByColor = () => {
  const dispatch = useDispatch();
  const handleColorChange = (color, isChecked) => {
    if (isChecked) {
      dispatch(addColorFilter(color));
    } else {
      dispatch(removeColorFilter(color));
    }
  };

  return (
    <div className="flex flex-col  justify-start space-y-2 min-h-32">
      <h2 className="text-lg font-semibold">Filter By Color</h2>
      <div>
        {colorOptions.map((color) => (
          <div key={color} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={color.value}
              name={color.value}
              value={color.value}
              onChange={(e) => handleColorChange(color.value, e.target.checked)}
            />
            <label
              htmlFor={color.value}
              className="flex justify-center items-center gap-2"
            >
              <div
                className="w-6 h-3 rounded"
                style={{ backgroundColor: color.value }}
              ></div>
              <span className="text-base">{color.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByColor;
