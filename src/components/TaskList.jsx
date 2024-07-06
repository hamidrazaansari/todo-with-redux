// src/components/TaskList.js
import React , {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask  } from '../redux/slices/tasksSlice';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { SiTicktick } from "react-icons/si";    
import EditTodoModal from './EditTodoModa';

const TaskList = () => {
  // select state from reducer function
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // define EDITASK function where set the editing task value into a state and open modal 
  const editTask = (task) => {
    if(task.completed){
      alert("your Task is completed you can not edit")
    }
    else{
      setSelectedTask(task);
      setShowModal(true);
    }

  };

  return (
    <ul>
      {/* amap all task list  */}
      {tasks.map((task) => (
        <li key={task.id}>
          <div>
            {/* changestyle after completed task */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          </div>
          <div className='d-flex  position-relative'>
            <button className='task-button text-info me-2' onClick={()=> editTask(task)}><MdEditSquare /></button>
            {/* dispatch function to the reducer with id  for delete task */}
            <button className='task-button text-danger' onClick={() => dispatch(deleteTask(task.id))}><MdDelete /></button>
            {/* create icon of complete task and dispatch the funtion to perform action of toggle completion  */}
            <span className={task.completed ? 'task-button task-chekar text-success' : 'task-button task-chekar' }  onClick={() => dispatch(toggleTask(task.id))}><SiTicktick /></span>
          </div>
        </li>
      ))}
      {/* call EditModal Component */}
            {selectedTask && (
        <EditTodoModal
        setShowModal={setShowModal}
          show={showModal}
          task={selectedTask}
        />
      )}
    </ul>
  );
};

export default TaskList;
