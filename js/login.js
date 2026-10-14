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
  } else {
      console.log(`Usuario o contrasena incorrectos. Intento ${intentos} de ${maxIntentos}.`)
  }
} while (intentos < maxIntentos)

if (intentos === maxIntentos && !(usuario === usuarioValido && contrasena === contrasenaValida)) {
    console.log("Ha excedido el número de intentos. Cuenta bloqueada.")
}