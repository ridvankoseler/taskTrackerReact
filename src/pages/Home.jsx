import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ShowTask from "../components/ShowTask";
// import data from '../helper/starterData'

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
//!burada tasks usestate in verileri nerden alacağını ayalıyoruz onu da localstrorage den alıyor. o yüzden yukarıdaki kodu yazıyoruz.

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
//!burada useEffect ile tasks her değiştiğinde sayfa render olur sayfaya veriyi yazar. Bunun için localStroge kullanıyoruz yukarıdaki kodu yazzıyoruz.


  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTask tasks={tasks}/>
    </div>
  );
};

export default Home;
