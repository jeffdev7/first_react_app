import React, {useState, useRef,useEffect} from 'react'
import Modallike from './Modallike'
import {v4 as uuidv4} from 'uuid'
import './App.css';

const tasksControl = 'taskApp.tasks'

function App() {
const [tasks, setTasks] = useState([])
  const taskName = useRef()


useEffect(()=>{
  const storedTasks = JSON.parse(localStorage.getItem(tasksControl))
  if(storedTasks) setTasks(storedTasks)
}, [])

useEffect(()=>{
  localStorage.setItem(tasksControl, JSON.stringify(tasks))
}, [tasks])

function toggleTasks (id){
  const newTasks = [...tasks]
  const task = newTasks.find(task => task.id === id)
  task.complete = !task.complete
  setTasks(newTasks)
}

  function handleAddCar(e){
       const name = taskName.current.value
    if(name === '') return
    setTasks(prevTasks =>{
      return[...prevTasks, {id: uuidv4(), name: name, complete: false}]
    })
    taskName.current.value = null
    
  }  
    function handleClearCar(){
      const newTasks = tasks.filter(task => !task.complete)
      setTasks(newTasks)
    }

  return (
    <>
    <div className="title"><h2>Whatcha gonna do?</h2></div>
    <div className="App">
      <div className="box">
    <Modallike tasks={tasks} toggleTasks={toggleTasks}/>

<select>
  <option value="Read">Read</option>
  <option value="Errands">Errands</option>
  
</select>
    {<input ref={taskName} type="text"/> }
    <button onClick={handleAddCar}>Add</button>
    <button onClick={handleClearCar}>Delete</button>
    <div> {tasks.filter(task => !task.complete).length} left to finish</div>
    </div>
    </div>
    </>
  );
}

export default App;
