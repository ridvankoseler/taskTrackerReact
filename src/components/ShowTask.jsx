import React from 'react'

import SingleTask from './SingleTask';

const ShowTask = ({tasks ,setTasks ,handleDelete }) => {

    console.log(tasks);
    
  return (
    <div className=''>
        <ul className=''>
            { tasks.map((item)=>{
             
                return (
                  <li className='list-unstyled'>
                    <SingleTask key={item.id} item={item} handleDelete={handleDelete} />
                  </li>
                );
            })
                }
        </ul>
        
    </div>
  )
}

export default ShowTask