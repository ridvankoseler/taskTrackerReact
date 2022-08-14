import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ShowTask = ({tasks}) => {
    
    
  return (
    <div>
        <ul>
            { tasks.map((item)=>{
                return (
                  <li>
                    <p>{item.task}</p>
                    <p>{item.day}</p>
                    <span><FaTrashAlt/></span>
                  </li>
                );
            })
                }
        </ul>
    </div>
  )
}

export default ShowTask