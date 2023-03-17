/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() { //Funcion Usuario crearUsuario
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
   function Usuario(usuario, nombre, email, password) { //Funcion Constructora
      this.usuario = usuario;
      this.nombre = nombre; 
      this.email = email; 
      this.password = password;
   } //Cierre Funcion Constructora
   
   Usuario.prototype.saludar = function() { //Metodo Prototype Saludar
      return 'Hola, mi nombre es ' + this.nombre;
   }; //Cierre Metodo Prototype Saludar
   return Usuario; //Retornar Clase
   } //Cierre Funcion 

function agregarMetodoPrototype(Usuario) { //Funcion Usuario
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:

   Usuario.prototype.saludar = function() { //Metodo Prototype Saludar
      return 'Hello World!';
   } //Cierre Metodo Prototype
} //Cierre Funcion Usuario crearUsuario

function agregarStringInvertida() { //Funcion agregarStringInvertida
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   
   String.prototype.reverse = function() { //Metodo Prototype String
   var stringInvertida = '';
for(var i = this.length - 1; i>=0; i--) { //Iteracion
   stringInvertida = stringInvertida + this.charAt(i);
   }
   return stringInvertida;
  } //Cierre //Metodo Prototype String
} //Cierre Funcion agregarStringInvertida

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
