import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';

// here i create redux store by configureStore
const store = configureStore({
  // here i create reducer for prtforming action 
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
