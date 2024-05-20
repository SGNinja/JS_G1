function validarFormulario(event) {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var propiedad = document.getElementById("propiedad").value;
  var detalles = document.getElementById("detalles").value;
  var errores = {};

  // Validar nombre
  if (nombre.trim() === "") {
    errores.nombre = "El nombre es obligatorio";
    mostrarError("nombre", "El nombre es obligatorio");
  } else {
    ocultarError("nombre");
  }

  // Validar apellido
  if (apellido.trim() === "") {
    errores.apellido = "El apellido es obligatorio";
    mostrarError("apellido", "El apellido es obligatorio");
  } else {
    ocultarError("apellido");
  }

  // Validar email
  if (email.trim() === "") {
    errores.email = "El correo electrónico es obligatorio";
    mostrarError("email", "El correo electrónico es obligatorio");
  } else if (!validarEmail(email)) {
    errores.email = "Formato de correo electrónico inválido";
    mostrarError("email", "Formato de correo electrónico inválido");
  } else {
    ocultarError("email");
  }

  // Validar tipo de propiedad
  if (propiedad.trim() === "") {
    errores.propiedad = "Debe seleccionar tipo de propiedad";
    mostrarError("propiedad", "Debe seleccionar tipo de propiedad");
  } else {
    ocultarError("propiedad");
  }

  if (Object.keys(errores).length > 0) {
    return false;
  }

  // Si el formulario es válido, mostrar el alert simulando envio
  alert("¡Su consulta fue enviada con éxito! Nos contactaremos pronto, muchas gracias.");
  return true;
}

function validarEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(email);
}

function mostrarError(campo, mensaje) {
  var errorDiv = document.getElementById(campo + "Error");
  errorDiv.textContent = mensaje;
  errorDiv.style.display = "block";
}

function ocultarError(campo) {
  var errorDiv = document.getElementById(campo + "Error");
  errorDiv.textContent = "";
  errorDiv.style.display = "none";
}

function mostrarMensajeSuscripcion() {
  var mensajeDiv = document.getElementById("mensajeSuscripcion");
  mensajeDiv.textContent = "Gracias por suscribirse a nuestro newsletter";
  mensajeDiv.style.display = "block";
}

function ocultarMensajeSuscripcion() {
  var mensajeDiv = document.getElementById("mensajeSuscripcion");
  mensajeDiv.style.display = "none";
}

var checkboxSuscripcion = document.getElementById("suscripcion");
checkboxSuscripcion.addEventListener("change", function() {
  if (this.checked) {
    mostrarMensajeSuscripcion();
  } else {
    ocultarMensajeSuscripcion();
  }
});