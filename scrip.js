function enviarFormulario(event) {
  event.preventDefault();
  
  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var sede = document.getElementById("sede").value;
  var captcha = document.getElementById("captcha").value;
  
  // Realizar las acciones deseadas, como enviar los datos a un servidor
  
  // Limpiar el formulario
  document.getElementById("contactForm").reset();
}
function verificarCaptcha() {
var inputCaptcha = document.getElementById("captchaInput").value;

if (inputCaptcha === codigoCaptcha) {
  alert("¡Código CAPTCHA válido!");
} else {
  alert("Código CAPTCHA inválido.");
}
}