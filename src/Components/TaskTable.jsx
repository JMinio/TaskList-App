import { TaskRow } from "./TaskRow";

//showCompleted se establece false desde 0 para que se muestren inicialmente en "no hechas"
const TaskTable = ({title, tasks, toggleTask, showCompleted = false}) => {
    
    const toggleTaskValidation = (doneValue) =>{
        return(
            tasks
            //utilizamos el metodo filter para la tabla de tareas realizadas.
            .filter(task =>  task.done === doneValue )
            .map(task => ( //recorremos la tabla para mostrar los distintos valores.
                <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
            )) 
        )}
    
    return(
        <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th>{title}</th>
          </tr>
        </thead>
        <tbody>
          {
            toggleTaskValidation(showCompleted) //las tablas 
          }
        </tbody>
      </table>

    )
}

export default TaskTable;