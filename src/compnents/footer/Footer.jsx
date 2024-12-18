import { useDispatch, useSelector } from "react-redux";
import { markAllCompleted } from "../../slices/todoslice";
import { clearCompleted } from "../../slices/todoslice";
import { setFilter , setFilterByColor } from "../../slices/filterSlice";
import "./Footer.css";

const Footer = ({ tasklist }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);
  const uncompletedCount = tasklist.filter((task) => !task.completed).length;

  function handleMarkedAllCompleted() {
    dispatch(markAllCompleted());
  }

  function handleClearCompleted() {
    dispatch(clearCompleted());
  }

  const handleFilterChange = (filterOption) => {
    dispatch(setFilter(filterOption));
  };

  // con
  return (
    <div className="footer-container">
      <h3>Actions</h3>
      <div className="button-group">
      <button onClick={handleMarkedAllCompleted}>Mark All completed</button>
      <br />
      <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <div>
        <h3>Remaining Todos</h3>
        <div >
          {uncompletedCount > 0 ? (
            <p>{uncompletedCount} items left</p>
          ) : (
            <p>All task completed</p>
          )}
        </div>
      </div>
      <div>
        <h3>Filter By status</h3>
        <div>
          <button onClick={()=>handleFilterChange("all")} className={filter ==="all" ? "active" : ""}>All</button>
          <button onClick={()=>handleFilterChange("active")} className={filter ==="active" ? "active" : ""}>Active</button>
          <button onClick={()=>handleFilterChange("completed")} className={filter ==="completed" ? "active" : ""}>Completed</button>
        </div>
      </div>
      <div>
        <h3>Filter By Color</h3>
        <div>
          <label htmlFor="color">
            <input type="checkbox" />
          green
          </label>
          <label htmlFor="color">
            <input type="checkbox" />
          blue</label>
          <label htmlFor="color">
            <input type="checkbox" />Orange
          </label>
          <label htmlFor="color">
            <input type="checkbox" />
          Purple</label>
          <label htmlFor="color">
            <input type="checkbox" />
          red</label>
        </div>
      </div>
    </div>
  );
};

export default Footer;
