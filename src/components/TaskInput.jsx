// src/components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch  } from 'react-redux';
import { addTask  } from '../redux/slices/tasksSlice';
import { FaPlusSquare } from "react-icons/fa";

const TaskInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue('');
    }
  };

  return (
    <>
    <h2 className='text-center fs-5 my-2'>Create Task</h2>
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        className='input-fields'
      />
      
      <button className='task-button' type="submit"><FaPlusSquare /></button>
    </form>
    
    </>
  );
};

export default TaskInput;
