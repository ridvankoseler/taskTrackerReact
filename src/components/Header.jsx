import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({
  tasks,
  setTasks,
  handleSubmit,
  task,
  setTask,
  day,
  setDay,
}) => {
  const [show, setShow] = useState(true);
  const [btnStyle, setBtnStyle] = useState({
    name: "Close Add Task Bar",
    bgColor: "gray",
    padding: "8px",
    rounded: "20px",
    textColor: "white",
  });

  const handleClick = () => {
    if (show) {
      setBtnStyle({
        name: "Show Add Task Bar",
        bgColor: "lightblue",
        padding: "8px",
        rounded: "20px",
      });
    } else {
      setBtnStyle({
        name: "Close Add Task Bar",
        bgColor: "red",
        padding: "8px",
        rounded: "20px",
        textColor: "white",
      });
    }
    setShow(!show);
  };
  return (
    <div className='text-center m-auto'>
      <h1 className='fw-bold'>Task Tracker</h1>
      <button
        onClick={handleClick}
        type='submit'
        style={{
          backgroundColor: btnStyle.bgColor,
          padding: btnStyle.padding,
          borderRadius: btnStyle.rounded,
          color: btnStyle.textColor,
        }}
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
        <h5 className='mt-2 text-danger'>
          You can't enter Task now. Please click the button to enter.
        </h5>
      )}
    </div>
  );
};

export default Header;
