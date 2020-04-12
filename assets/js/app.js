// Se puede llamar un ID del form con cualquiera
// document.querySelector('#formulario')
// document.getElementById('tarea')

//*--Variables
const listaTareas =  document.getElementById('lista-tareas');

//*--Events Listeners
eventListeners();

function eventListeners(){
    //*--cuando se envian tareas en el form
    document.querySelector('#formulario').addEventListener('submit',agregarTarea);

    //*-Borrar tareas
    listaTareas.addEventListener('click', borrarTarea);

}

//Functions


//*--Añadir tarea del formulario
function agregarTarea(e){
    e.preventDefault();
    //console.log('enviado')

    //Leer el valor del text area
    const tarea = document.getElementById('tarea').value;
    //console.log(tarea)
    //*--Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tarea';
    botonBorrar.innerText = 'X';


    //*--Crear elemento y añadir tarea en una lista
    const li = document.createElement('li');
    li.innerText= tarea;
    //*--Boton borrar tarea
    li.appendChild(botonBorrar);
    //*-Insertar la tarea en una lista
    listaTareas.appendChild(li);
  
}

function borrarTarea(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tarea'){
        console.log(e.target.parentElement.remove());
        
    }
}