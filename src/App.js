import TaskList from './components/TaskList';
import Taskinput from './components/TaskInput';
import './css/style.css'


function App() {
  return (
    <div className='main'>
      <div className="heading d-flex align-items-center justify-content-center ">
        <span className='child-1'>T</span>
        <span className='child-2'>O</span>
        <span className='child-3'>D</span>
        <span className='child-4'>O</span>
      </div>
      <div className="box">
      <Taskinput/>
      <TaskList/>
      </div>
    </div>
  );
}

export default App;
