
// Archivo scripts.js con funciones de validacion en los formularios del sistema



/* funcion de validación de ingreso al sistema o login
Desarrollador: Juan Jose Murillo
Email: juanofilth@gmail.com
fecha: 8 julio 2025 */

function login() {
  // Datos simulados como si vinieran de una base de datos
  //credenciales administrador
  const usuarioGuardado = "admin";
  const contrasenaGuardada = "123adm";
  //credenciales usuario sin privilegios
    const usuarioGuardadou = "user";
  const contrasenaGuardadau = "123usr";


  // Lo que escribe el usuario
  const usuarioIngresado = document.getElementById("usuario").value.trim();
  const contrasenaIngresada = document.getElementById("password").value.trim();

  // Validar campos vacíos
  if (usuarioIngresado === "" || contrasenaIngresada === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Verificar credenciales
  if (usuarioIngresado === usuarioGuardado && contrasenaIngresada === contrasenaGuardada  ) {
     localStorage.setItem("usuario", "admin");
     localStorage.setItem("typouser", "1");
     localStorage.setItem("nombre", "Juan Jose Murillo");
     localStorage.setItem("telefono", "3008178898");
    window.location.href = "dashboard.html";

  } else if (usuarioIngresado === usuarioGuardadou && contrasenaIngresada === contrasenaGuardadau){
     localStorage.setItem("usuario", "user");
    window.location.href = "dashboarduser.html";

  }
  else if (usuarioIngresado !== usuarioGuardado && contrasenaIngresada === contrasenaGuardada) {
    alert("El usuario es incorrecto.");
  } else if (usuarioIngresado === usuarioGuardado && contrasenaIngresada !== contrasenaGuardada) {
    alert("La contraseña es incorrecta.");
  } else {
    alert("Usuario y contraseña incorrectos.");
  }
}

// funcion de seguridad para las paginas de admin
function securePage() {
  const user = localStorage.getItem("usuario");
  if (user !== "admin") {
    alert("No tienes permisos para acceder a esta página.");
    window.location.href = "index.html";
  }
}

// metodo que se carga al inicio de las paginas para consultar el user y los datos de la sesión de usuario
document.addEventListener("DOMContentLoaded", function () {
  const usuario = localStorage.getItem("usuario");
  const nombre = localStorage.getItem("nombre");
  if (usuario) {
    document.getElementById("nombreUsuario").textContent = usuario;
    document.getElementById("nombrecompleto").textContent = nombre;
  }

   
});



// funcion para menu hamburguesa
    document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.getElementById("toggleMenu");
      const nav = document.querySelector("nav");
      const main = document.querySelector("main");
      const topbar = document.querySelector(".topbar");

      toggleButton.addEventListener("click", function () {
        nav.classList.toggle("oculto");
        main.classList.toggle("fullwidth");
        topbar.classList.toggle("fullwidth");
      });
    });


 // funcion para validaciones de formulario registrar libro
  function validarFormulario() {
    const titulo = document.getElementById('titulo').value.trim();
    const autor = document.getElementById('autor').value.trim();
    const genero = document.getElementById('genero').value.trim();
    const anio = document.getElementById('anio').value.trim();
    const portada = document.getElementById('portada').files[0];
    if (!titulo) {
      alert('El campo "Título" es obligatorio.');
      return false;
    }
    if (!autor) {
      alert('El campo "Autor" es obligatorio.');
      return false;
    }
    if (!genero) {
      alert('El campo "Género" es obligatorio.');
      return false;
    }
    if (!anio) {
      alert('El campo "Año" es obligatorio.');
      return false;
    }
    if (!portada) {
      alert('El campo portada es obligatorio.');
      return false;
    }

   alert("Formulario válido. Registrando datos...");
  
   
    return true;
  }
  
// sesión 29 julio 2025

 // Función que retorna un saludo según la hora local
    function obtenerSaludoSegunHora() {
      var fecha = new Date();
      var hora = fecha.getHours();
      var saludo = "";

      if (hora >= 6 && hora < 12) {
        saludo = "Buenos días!";
      } else if (hora >= 12 && hora < 18) {
        saludo = "Buenas tardes!";
      } else {
        saludo = "Buenas noches!";
      }

      return saludo;
    }

 document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("saludo").textContent = obtenerSaludoSegunHora();
});
 


// Función que activa el buscador por título en la tabla
function activarBuscadorDeLibros() {
  var input = document.getElementById("buscador");

  if (!input) return; // Si no existe el input, salimos

  input.addEventListener("keyup", function () {
    var texto = input.value.toLowerCase();
    var filas = document.querySelectorAll("table tbody tr");

    filas.forEach(function (fila) {
      var titulo = fila.cells[1].textContent.toLowerCase();
      if (titulo.includes(texto)) {
        fila.style.display = "";
      } else {
        fila.style.display = "none";
      }
    });
  });
}

 
document.addEventListener("DOMContentLoaded", function () {

  activarBuscadorDeLibros();
});

// Datos de ejemplo para modal notificaciones
const notificaciones = [
  { titulo: "Nueva actualización disponible", fecha: "12/08/2025" },
  { titulo: "Tu reporte mensual está listo", fecha: "10/08/2025" },
  { titulo: "Recordatorio de reunión", fecha: "08/08/2025" },
  { titulo: "Nueva actualización disponible", fecha: "12/08/2025" },
  { titulo: "Tu reporte mensual está listo", fecha: "10/08/2025" },
  { titulo: "Recordatorio de reunión", fecha: "08/08/2025" }
];

document.addEventListener("DOMContentLoaded", function () {

  const btnNotificaciones = document.getElementById("btnNotificaciones");
  const btnperfil = document.getElementById("btnperfil");
  const modal = document.getElementById("modalNotificaciones");
  const modaluser = document.getElementById("modaluserinfo");

  const cerrar = document.getElementById("cerrarModal");

  const cerraruser = document.getElementById("cerrarModaluser");

  const lista = document.getElementById("listaNotificaciones");

 const badge = document.getElementById("badge");
 badge.textContent = notificaciones.length;

  // Llenar lista de notificaciones
  notificaciones.forEach(n => {
    const li = document.createElement("li");
    li.textContent = `${n.titulo} - ${n.fecha}`;
    lista.appendChild(li);
  });

  // Abrir modal notifica
  btnNotificaciones.addEventListener("click", () => {
    modal.style.display = "block";

  });

    // Abrir modal usuario 
  btnperfil.addEventListener("click", () => {
    modaluser.style.display = "block";

  });

 

  // Cerrar modal notifica
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
     
  });

    // Cerrar modal usuario
  cerraruser.addEventListener("click", () => {
    modaluser.style.display = "none";
     
  });

  // Cerrar si se hace clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

// cerrar modal con tecla escape de teclado

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal.style.display === "block") {
        modal.style.display = "none";
      }
      if (modaluser.style.display === "block") {
        modaluser.style.display = "none";
      }
    }
  });



});

  // Simular carga de datos (2 segundos) para skeleton
   setTimeout(() => {
    document.getElementById("skeleton-resumen").style.display = "none";
    document.getElementById("resumen").style.display = "block";
  }, 4000);

document.addEventListener("DOMContentLoaded", function () {


  
  // Validación inmediata  
    document.getElementById("usuario").addEventListener("input", () => {
      const usuario = document.getElementById("usuario");
      const errorUsuario = document.getElementById("errorUsuario");
      const vacio = usuario.value.trim() === "";
      errorUsuario.style.display = vacio ? "inline" : "none";
      usuario.classList.toggle("error-input", vacio);
    });

      document.getElementById("usuario").addEventListener("blur", () => {
      const usuario = document.getElementById("usuario");
      const errorUsuario = document.getElementById("errorUsuario");
      const vacio = usuario.value.trim() === "";
      errorUsuario.style.display = vacio ? "inline" : "none";
      usuario.classList.toggle("error-input", vacio);
    });


    document.getElementById("password").addEventListener("input", () => {
      const password = document.getElementById("password");
      const errorPassword = document.getElementById("errorPassword");
      const vacio = password.value.trim() === "";
      errorPassword.style.display = vacio ? "inline" : "none";
      password.classList.toggle("error-input", vacio);
    });



   const togglePassword = document.getElementById("togglePassword");
   const passwordInput = document.getElementById("password");

  togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.textContent = isPassword ? "👁️‍🗨️" : "👁️"; // cambia icono
  });


 




});



 



