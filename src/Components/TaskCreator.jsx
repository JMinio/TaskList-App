import { useState } from 'react';

export const TaskCreator = ({ createNewTask }) => {

    const [newTasking, setNewTasking] = useState('')

    const handleSubmit = (e) => { /* funcion para capturar los datos */
        e.preventDefault();
        createNewTask(newTasking);
        /* localStorage.setItem('task', newTasking) //localstorage para guardar "clave"=task y lo que el usuario escribe */
        setNewTasking(''); //sirve para limpiar el input una vez guardado.  
    }

    return (

        <form onSubmit={handleSubmit} className='my-2 row'> {/* Usar para capturar los datos antes de que se envien */}
            <div className="col-9">
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTasking}
                onChange={(e) => setNewTasking(e.target.value)} 
                className="form-control"
                /> {/* guardamos el valor que el user ingreso en el input */}
            </div>
            <div className="col-3">
            <button className="btn btn-warning btn-sm">Save Task</button> {/* Queremos ver que valor ingreso en el input */}            
            </div>                
        </form>
    )
}