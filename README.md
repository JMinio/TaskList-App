# APLICACION DE LISTA DE TAREAS CON REACT JS | TAKSLIST APLICATION REACT JS

## INTRODUCCION

La presente es una aplicacion creada con REACT JS para el enlistado de tareas por hacer en el dia a dia o a largo plazo ¿Por que?

La aplicacion cuenta con LocalStorage para mantener guardada la información incluso si el navegador se cierra.

## HOOKS

### Se utilizaron los hooks:
• useState para guardar el enlistado de tareas ingresadas mediante el input principal.
• useEffect para el renderizado de la aplicacion sin ninguna dependencia.

## EXPLICACION DE COMPONENTES

### App
Engloba toda la aplicacion, por ende es donde mas logica se encuentra con la utilizacion del localStorage.
• Funciones:
  ♦ createNewTask: Como lo dice el nombre, crea la tarea solo si no se encuentra la misma (no permite duplicados)
  En caso de no estar, la agrega con setTaskItems y le agrega el valor "done: false" por defecto.
  ♦ toggleTask: Funcion utilizada para cambiar el valor true / false, es decir, si esta sin hacer(false) pasa a estar hecha (true), y viceversa. 
  ♦ handleDeleteTask: con el metodo filter crea una nueva lista eliminando a todas las tareas que ya esten hechas.

### TaskTable 
Es el componente presentacional donde van a estar pintadas las tareas.
El mismo es llamado 2 veces y utilizado para mostrar las tareas hechas y no hechas.
Se hace una validacion para corroborar que tareas estan hechas y cuales no.

### TaskRow
Es un componente presentacional que pinta las tareas en filas dentro de la tabla mencionada anteriormente.
Tiene una fila y una columna donde se pinta del lado izquierdo el nombre de la tarea (task.name) y del lado derecho el checkbox que al ser cambiado llama a la funcion toggleTask para dar aviso de que la tarea ya esta hecha.

### TaskCreator
Es el componente donde se encuentra el imput para ingresar las tareas por hacer.
Se utiliza el useState para guardar las nuevas tareas.

• Funciones:
  ♦ handleSubmit: utilizamos preventDefault para que no reinicie la pagina al presionar enter.
  Se guarda la tarea y se limpia el input para el ingreso de una nueva tarea.

### HideControl
Es el componente que se utiliza para ocultar las tareas hechas y eliminarlas.

• Funciones: 
  ♦ handleDelete: hace el llamado a handleDeleteTask proveniente de props desde App.jsx para eliminar las tareas (Ventana de confirmacion para eliminarlas)
  


