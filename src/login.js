console.log('enlazado')

let url = '../usr/usr.js'; // ruta del API en una variable
fetch(url) // realizamos peticiones con fetch a la url
.then(response => response.json()) // se resuelve la promesa y la pasamos a json
.then(data => get(data)) // leemos data y creamos una funcion para mostrar la data (para corroborar por consola la data, podemos cambiar show por console.log)
.catch(error => console.log(error)) // manejamos los errores con catch

const get = (data) => { //generamos una funcion flecha para  obtener el dato que nos interesa de la data y anidamos las funciones onclick
    
// RECUPERANDO DATOS DE LOS INPUT Y VALIDAMOS CON LOS INGRESADOS EN LA API

const INGRESAR = document.getElementById("ingresar"); // recuperamos el boton por su ID
INGRESAR.addEventListener("click", validar); // escuchamos el evento clic y ejecutamos la funcion validar
let encontrado = false; // se crea la variable encontrado en false, para detener la ejecucion del bucle if una vez encontrado el usuario y contrasena

 function validar() { // funcion validar, esta busca el usuario y contrasena en la data de la API

    const USUARIO = document.getElementById("usuario").value; // recuperamos el valor del input usuario
    const CONTRASENA = document.getElementById("contraseña").value; // recuperamos el valor del input contrasena

    for(let i = 0; i< data.length ;i++){ // iteramos sobre  cada elemento del array de datos de la API
        if(data[i].usuario === USUARIO && data[i].contrasena === CONTRASENA){ // generamos una condicional If para evaluar los datos ingresados en los input vs los recuperados de la API
            console.log(`Se ha encontrado al usuario ${data[i].nombre}`) // Si coinciden, imprimimos en consola.
            encontrado=true; // Cambiamos  el estado de encontrado a verdadero para que sea valido al principio
            
            window.sessionStorage.setItem(usuario, USUARIO); // guardamos el dato completo en session storage, este debe recibir 2 parametros, la key y el valor a guardar.
            
            location.href = "./user.html" // redireccionamos al nuevo sitio de usuario logeado
            break // incorporamos un break para que la condicional no siga ejecutando hacia el final del bucle
            
        } else {
            console.log('Usuario o contrasena incorrectos') // imprimimos en consola en caso de no encontrar  al usuario
        }
    }
} ;


}



//BOTON MOSTRAR CONTRASENA (no existe otra forma como el classList que se usa para modificar CSS)

const mostrarContrasena = document.getElementById("mostrar");
mostrarContrasena.addEventListener("click", function(){
    const CONTRASENA = document.getElementById("contraseña");

    if(CONTRASENA.type === "password"){
        CONTRASENA.type = "text";
        mostrarContrasena.innerHTML = `
        Ocultar contraseña

        `;
    }else{
        CONTRASENA.type = "password"
        mostrarContrasena.innerHTML = `
        Mostrar contraseña    
`;

    }
});




//OLVIDE MI CONTRASENA

const recuperar = document.getElementById("recuperar");
recuperar.addEventListener("click", recuperando);

function recuperando() {
    const USUARIO = document.getElementById("usuario").value;
    encontrado = false
    if(recuperar && USUARIO){

        recuperar.classList.remove('hover:underline');
        recuperar.classList.add('bg-green-200', 'rounded-sm')
        recuperar.innerHTML = `
        Te enviamos un email de recuperación
        `;
        encontrado = true


    } else {
        
        recuperar.classList.remove('hover:underline');
        recuperar.classList.add('bg-red-200', 'rounded-sm')
        recuperar.innerHTML = `Debes llenar el campo usuario
        
        <a href="login.html" class="hover:underline font-normal" >Volver</a>
            
        `;
    }



}

