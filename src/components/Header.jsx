import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({ tasks, setTasks ,handleSubmit ,task, setTask,day, setDay}) => {
  const [show, setShow] = useState(true);
  const [btnStyle, setBtnStyle] = useState({ name: "Show", bgColor: "coral" });

  const handleClick = () => {
    if (show) {
      setBtnStyle({
        name: "Show",
        bgColor: "lightblue",
      });
    } else {
      setBtnStyle({
        name: "Close",
        bgColor: "red",
      });
    }
    setShow(!show);
  };
  return (
    <div className='text-center m-auto'>
      <h1>Task Tracker</h1>
      <button
        onClick={handleClick}
        type='submit'
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show ? (
        <AddTaskForm
          tasks={tasks}
          setTasks={setTasks}
          task={task}
          setTask={setTask}
          day={day}
          setDay={setDay}
          handleSubmit={handleSubmit}
        />
      ) : (
        <h5>No Tasks To Show</h5>
      )}
    </div>
  );
};

export default Header;
