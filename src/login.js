console.log('enlazado')

let url = '../usr/usr.js'; 
fetch(url) 
.then(response => response.json())       
.then(data => get(data)) 
.catch(error => console.log(error)) 

const get = (data) => { 
    
// RECUPERANDO DATOS DE LOS INPUT Y VALIDAMOS CON LOS INGRESADOS EN LA API

const INGRESAR = document.getElementById("ingresar");  

INGRESAR.addEventListener("click", validar); 
let encontrado = false; 


 function validar() { 


    const USUARIO = document.getElementById("usuario").value; 
    const CONTRASENA = document.getElementById("contraseña").value; 

    for(let i = 0; i< data.length ;i++){ 
        if(data[i].usuario === USUARIO && data[i].contrasena === CONTRASENA){ 
            encontrado=true; 

            window.sessionStorage.setItem(usuario, USUARIO); 
            
            location.href = "./user.html" 
            break 
            
        } else  {
            
            const usuarioAlert = document.getElementById("usuarioAlert")
            usuarioAlert.innerHTML = 
            `
            Usuario o contraseña incorrecto

            `;

            break   


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

