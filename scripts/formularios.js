function passVisible() {
    var passwordField = document.getElementById("id_password");
    var toggleIcon = document.getElementById("togglePassword");
    
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
}

function passRepetidoVisible() {
  var passwordField = document.getElementById("id_passwordRepetido");
  var toggleIcon = document.getElementById("togglePasswordRepetido");
  
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

function cambiarImagen(){
  
}