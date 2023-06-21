import './App.css';
import { TaskCreator } from './Components/TaskCreator';
import { useState, useEffect } from 'react';
import TaskTable from './Components/TaskTable';
import { HideControl } from './Components/HideControl';

function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(newTaskName) {
    if (!taskItems.find(task => task.name === newTaskName)) {
      setTaskItems([...taskItems, { name: newTaskName, done: false }])
      console.log("tarea agregada exitosamente!!")
    }
    else {
      console.log("tarea ya ingresada, por favor reintente.")
    }
  }

  const toggleTask = task => {  //ToogleDone, recibe una tarea y establece true o false.
    setTaskItems(
      taskItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    );
  }

  useEffect(() => { //se inicia cuando arranca el codigo, no depende de un arreglo.
    let info = localStorage.getItem('tasks');
    if (info) {  //Consulta si tiene informacion, caso positivo lo convierte en JS. 
      setTaskItems(JSON.parse(info));
    }
  }, [])

  useEffect(() => {  //CUANDO SE ACTUALICE taskItems, se guarda en el local storage
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const handleDeleteTask = () => { //crea un nuevo listado con las tareas que no estan hechas (!t.done)
    setTaskItems(taskItems.filter(t => !t.done))
    setShowCompleted(false)//una vez eliminadas las tareas, dejar de ocultar las tareas hechas.
  }

  return (
    <main className="bg-dark vh-100 text-white">
        <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
      <TaskTable title="Tareas por hacer" tasks={taskItems} toggleTask={toggleTask} /> {/* primera tabla: tareas no realizadas */}
      <HideControl 
        isChecked={showCompleted}
        setShowCompleted={(checked)=>setShowCompleted(checked)}
        handleDeleteTask={handleDeleteTask}
      />
      {
        showCompleted === true && (
          <TaskTable title="Tareas realizadas" tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />
        )
      }

        </div>
    </main>
  );
}

export default App;
