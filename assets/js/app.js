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


    //
    listaTareas.addEventListener('click', hechoTarea);


    //*-Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);

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

    //Boton Hecho
    const botonHecho = document.createElement('a');
    botonHecho.classList = 'hecho-tarea';
    botonHecho.innerText = 'O';
    

    //*--Crear elemento y añadir tarea en una lista
    const li = document.createElement('li');
    li.innerText= tarea;
    //*--Boton borrar tarea
    li.appendChild(botonBorrar);
    //*Boton hecho
    li.appendChild(botonHecho);

    //*-Insertar la tarea en una lista
    listaTareas.appendChild(li);


    //Añadir al local storage
   agregarTareaLocalStorage(tarea);
}


//Mostrar datos de localStorage guardados 
function localStorageListo(){
    let tareas;

    tareas = obtenerTareasLocalStorage();
    console.log(tareas);

     tareas.forEach(function(tarea){
           //*--Crear boton de eliminar
          //*--Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tarea';
    botonBorrar.innerText = 'X';

    //Boton Hecho
    const botonHecho = document.createElement('a');
    botonHecho.classList = 'hecho-tarea';
    botonHecho.innerText = 'O';
    

    //*--Crear elemento y añadir tarea en una lista
    const li = document.createElement('li');
    li.innerText= tarea;
    //*--Boton borrar tarea
    li.appendChild(botonBorrar);
    //*Boton hecho
    li.appendChild(botonHecho);

    //*-Insertar la tarea en una lista
    listaTareas.appendChild(li);
   });
}


//eliminar tarea del DOM
function borrarTarea(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tarea'){
        e.target.parentElement.remove();
        borrarTareaLocalStorage(e.target.parentElement.innerText);
            
    }
}

//Colorear hecho tarea del DOM
function hechoTarea(e){
    e.preventDefault();
    if(e.target.className === 'hecho-tarea'){
        e.target.parentElement.style.backgroundColor="greenyellow";
                   
    }
}

//Agregar tarea al local storage
function agregarTareaLocalStorage(tarea){
    let tareas;
    tareas= obtenerTareasLocalStorage();

    //Añadir la nueva tarea en el arreglo
    tareas.push(tarea);
    //convertir de arreglo a String para local storage
    localStorage.setItem('tareas',JSON.stringify(tareas));
    //Agregar al local
    //localStorage.setItem('tareas',tarea);
}


//Comprobar si existen elementos en localstorage, retorna un arreglo
function obtenerTareasLocalStorage(){
    let tareas;
    //Revisar valores de local storage
    if(localStorage.getItem('tareas') === null){
        tareas = [];
    }else{
        tareas= JSON.parse(localStorage.getItem('tareas') );
    }
    return tareas;
}


//Eliminar Tarea de local storage

function borrarTareaLocalStorage(tarea){
    
    let tareas, tareaBorrar2;
    
    //Elimina la X del texto
    tareaBorrar = tarea.substring(0,tarea.length-2);
    

    tareas=  obtenerTareasLocalStorage();

    tareas.forEach(function(tarea, index){
        if(tareaBorrar === tarea){
            tareas.splice(index,2);
        }
    });

    localStorage.setItem('tareas',JSON.stringify(tareas) );


}


