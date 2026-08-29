let usuarioValido = "admin";
let contrasenaValida = "admin";
let usuario = "";
let contrasena = "";
let intentos = 0;
let maxIntentos = 3;

do {
  usuario = console.log("Ingrese el usuario")
  contrasena = console.log("Ingrese la contraseña")
  intentos++

  if (usuario === usuarioValido && contrasena === contrasenaValida) {
      console.log("Inicio de sesión exitoso")
      break
  } 
}