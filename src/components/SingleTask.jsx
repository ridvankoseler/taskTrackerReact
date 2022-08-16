import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const SingleTask = ({ item, handleDelete }) => {
  const [lineThrough, setLineThrough] = useState(true);
  return (
    <div
      className={lineThrough ? "task" : "line"}
      onClick={() => setLineThrough(!lineThrough)}
    >
      <div
        className={
          "singleTaskDiv d-flex justify-content-between border border-4 border-primary mt-4 overflow-scroll m-auto "
        }
      >
        <div className='m-1 d-flex flex-column justify-content-around align-content-between '>
          <p className='fs-4'>{item.task}</p>
          <p className='m-1 fs-5'>{item.day.split("T").join(" ")}</p>
        </div>

        <div className='d-flex m-2'>
          <span
            className='trash d-flex justify-content-center align-items-center text-danger fw-bold'
            onClick={() => handleDelete(item.id)}
          >
            <FaTrashAlt />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
