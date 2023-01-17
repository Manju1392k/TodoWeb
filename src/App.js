
import './App.css';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // useState for Taskinputtag
  const [Taskinputag, setTaskinputag] = useState('');
  // useState for saving task in array
  const [Tasks, setTasks] = useState([]);

  // function for adding task
  const AddTask = () => {
    if (!Taskinputag) {
      toast.error("Fill the Field....!")
    } else {
      setTasks([...Tasks, Taskinputag])
      setTaskinputag('')
      toast.success("Task is Added!")
    }
  }

  // function for deleting task
  const removetask = (uniqueid) => {
    const RemovedTask = Tasks.filter((task, Keys) => {
      return Keys !== uniqueid;
    });
    setTasks(RemovedTask)
    toast.info('Task has been deleted')
  }

  // function for deleting all tasks
  const Deleteall = () => {
    window.location.reload();
  }

  return (
    <>
      <div>
        {/* Div for navbar */}
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 w-[100vw] h-[5rem] flex items-center justify-around">
          <h1 className='text-3xl font-bold text-white'>Todoweb</h1>
        </div>

        {/* Div for inputform */}
        <div className="inputform w-[55vw] mx-auto md:w-[80vw] lg:w-[80vw]">
          <h1 className='font-semibold mt-2 mb-1'>Task</h1>
          <textarea type='text' className='border-2 p-5 border-slate-500 rounded-md w-[55vw] focus:border-indigo-700 focus:outline-none focus:shadow-sm  focus:shadow-indigo-700 md:w-[80vw] lg:w-[80vw]' name='description' placeholder='Task Description' value={Taskinputag} onChange={(e) => setTaskinputag(e.target.value)} required></textarea>
          <br />
          <div className='flex'>
            <button tyep='submit' className='border-none bg-indigo-500 my-2 p-3 rounded-md flex items-center text-white font-semibold hover:bg-indigo-400 active:bg-indigo-900 mr-6' onClick={AddTask}><i className="bi bi-plus-circle-fill text-xl mx-2"></i>Addtask</button>
            <button tyep='submit' className='border-none bg-red-500 my-2 p-3 rounded-md flex items-center text-white font-semibold hover:bg-red-400 active:bg-red-900 ' onClick={Deleteall}><i className="bi bi-trash text-xl mx-2"></i>Delete all</button>
          </div>

          {/* Div for borderline */}
          <div className="borderline h-[2px] w-[55vw] bg-green-500 mb-6 md:w-[80vw] lg:w-[80vw]"> </div>

          {/* Div for tasks */}

          {/* looping the tasks */}
          {
            Tasks.map((task, Keys) => {
              return (
                <div key={Keys} className="taskbox w-[55vw] border-2 border-green-500 my-2 rounded-sm md:w-[80vw] lg:w-[80vw]">
                  <h3 className='text-xl font-light mx-4 my-2'>Task:<span className='font-bold mr-2 mx-2' id='Undertask'>{task}</span></h3>
                  <div className="flex">
                    <button onClick={() => removetask(Keys)} tyep='submit' className='border-none bg-indigo-500 my-2 p-3 rounded-md flex items-center text-white font-semibold hover:bg-red-400 active:bg-red-900 mx-3'><i className="bi bi-trash3-fill text-xl mx-2"></i>Delete</button>
                  </div>
                </div>
              )
            })
          }

        </div>
        <ToastContainer />
      </div>

    </>

  );
}

export default App;
