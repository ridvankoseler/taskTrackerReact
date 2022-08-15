import React from "react";

const AddTaskForm = ({ tasks, setTasks ,handleSubmit, task, setTask, day, setDay }) => {
  // const [task, setTask] = useState();
  // const [day, setDay] = useState();

  
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const id = new Date().getTime();
  //   const newTask = { id: id, task: task, day: day, isDone: false };
  //   setTasks([...tasks, newTask]);
  //   setTask("")
  //   setDay("")
  // };

  // const handleDelete = (id) => {
  //   tasks = tasks.fiter((item) => (item.id = !id));
  //   setTasks("");
  // };
  console.log(tasks)
  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='addTaskDiv d-flex flex-column col display-5'>
          <label className='' htmlFor=''>
            Task
          </label>
          <input
            className='addTaskInputDiv col-md-8 col-lg-10 col-sm-6 col-6 display-6 border border-2 border-danger text-bg-primary'
            type='text'
            name='tasks'
            id='tasks'
            value={task || []}
            onChange={(e) => setTask(e.target.value)}
            placeholder='Add Task'
            required
          />
        </div>
        <div className='addTaskDayDiv d-flex flex-column col-md-8 col-lg-10 col-sm-6 col-6 mt-3 display-6 '>
          <label htmlFor=''>Day & Time</label>
          <input
            className='border border-2 border-danger text-bg-primary'
            type='datetime-local'
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
