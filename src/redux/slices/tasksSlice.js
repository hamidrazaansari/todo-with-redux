import { createSlice } from '@reduxjs/toolkit';
// here i create slice were all reducers functon weitten
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (state ,action)=>{
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      
      if (todo) {
        todo.text = text;
        }
    }
  },
});

export const { addTask, toggleTask, deleteTask , editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
