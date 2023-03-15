/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona { //Clase Persona
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio) { //Constructor de la clase Persona
         this.nombre = nombre;
         this.apellido = apellido;
         this.edad = edad;
         this.domicilio = domicilio;
         this.detalle = function() { //Metodo Detalle
            return { nombre: this.nombre, apellido: this.apellido, edad: this.edad, domicilio: this.domicilio // Objeto
         } // Cierre Objeto
      } //Cierre Metodo Detalle
   } //Cierre Constructor de la clase Persona
} //Cierre Clase Persona

function crearInstanciaPersona(nombre, apellido, edad, domicilio) { //Funcion crearInstanciaPersona
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   var persona = new Persona (nombre, apellido, edad, domicilio); //Instancia Persona
   return persona;
} //Cierre Funcion crearInstanciaPersona

function agregarMetodo() { //Funcion
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   Persona.prototype.datos = function() {
      return this.nombre + ', ' + this.edad + ' años';
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
