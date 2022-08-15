import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const SingleTask = ({ item, handleDelete }) => {
  return (
    <div className='singleTaskDiv d-flex justify-content-between border border-4 border-info mt-4 overflow-scroll m-auto '>
      <div className='m-1 d-flex flex-column justify-content-around align-content-between '>
        <p className=''>{item.task}</p>
        <p className='m-1'>{item.day.split("T").join(" ")}</p>
      </div>

      <div className="d-flex">
        <span className='trash d-flex justify-content-center align-items-center' onClick={() => handleDelete(item.id)}>
          <FaTrashAlt />
        </span>
      </div>
    </div>
  );
};

export default SingleTask;
