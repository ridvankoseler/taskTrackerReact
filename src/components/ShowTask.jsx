import React from "react";

import SingleTask from "./SingleTask";

const ShowTask = ({ tasks, setTasks, handleDelete }) => {
  console.log(tasks);

  return (
    <div className=''>
      <ul className=''>
        {
          tasks.length>0 ?
          tasks.map((item) => {
            return (
              <li className='list-unstyled'>
                <SingleTask
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </li>
          );
        }): <p className="text-center mt-5 fw-bold fs-3 text-success">No Tasks To Show</p>
      }
      </ul>
    </div>
  );
};

export default ShowTask;
