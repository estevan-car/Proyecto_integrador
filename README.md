Sistema Gestion Escolar — Proyecto Integrador

## Descripcion
Este script en JavaScript simula el proceso de inicio de sesion de un sistema de gestion de notas y asistencia. Utiliza estructuras de control (`do...while`, `if/else`), variables y comparaciones para validar las credenciales de un usuario.

## Logica del programa
1. Se definen las credenciales validas del sistema:
   - Usuario: `admin`
   - Contraseña: `admin`
2. El programa entra en un ciclo `do...while` que se repite mientras no se hayan superado los intentos permitidos (`maxIntentos = 3`).

3. En cada intento:
   - Se muestra un mensaje solicitando el usuario y la contrasena.
   - Se compara lo ingresado contra las credenciales validas.
   - Si coinciden, se imprime `"Inicio de sesion exitoso"` y el ciclo se detiene (`break`).
   - Si no coinciden, se imprime un mensaje de error indicando el número de intento actual.
