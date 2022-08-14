import React, { useState } from "react";

const AddTaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState();
  const [day, setDay] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, day: day, isDone: false };
    setTasks([...tasks, newTask]);
    setTask("")
    setDay("")
  };
  console.log(tasks)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column'>
          <label className='' htmlFor=''>
            Task
          </label>
          <input
            className=''
            type='text'
            name='tasks'
            id='tasks'
            value={task || []}
            onChange={(e) => setTask(e.target.value)}
            placeholder='Add Task'
            required
          />
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor=''>Day & Time</label>
          <input
            type='date'
            name='day'
            id='day'
            value={day || []}
            onChange={(e) => setDay(e.target.value)}
            required
          />
        </div>
        <div className='mt-5'>
          <button type='submit'>Save Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
