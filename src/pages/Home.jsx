import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ShowTask from "../components/ShowTask";

// import data from '../helper/starterData'

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return JSON.parse(localStorage.getItem("list"));
//   } else {
//     return [];
//   }
// };

const Home = () => {

  const [task, setTask] = useState();
  const [day, setDay] = useState();
  // const [list, setList] = useState(getLocalStorage())
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  //!burada tasks usestate in verileri nerden alacağını ayalıyoruz onu da localstrorage den alıyor. o yüzden yukarıdaki kodu yazıyoruz.

  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //!burada useEffect ile tasks her değiştiğinde sayfa render olur sayfaya veriyi yazar. Bunun için localStroge kullanıyoruz yukarıdaki kodu yazzıyoruz.


  const handleDelete=(id)=>{
    const List = tasks.filter((item)=>item.id!==id)
    setTasks(List)
  }
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, day: day, isDone: false };
    // setList([...list,{id:new Date().getTime(),task:task,day:day}])
    setTasks([...tasks, newTask]);
    setTask("");
    setDay("");
  };
  console.log(tasks.id)
  console.log(tasks);
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} handleSubmit={handleSubmit} task={task} setTask={setTask} day={day} setDay={setDay} />
      <ShowTask tasks={tasks} setTasks={setTasks} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
