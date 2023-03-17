/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return (Object.entries(objeto))
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   // let objeto = {}
   // for(i in string){
   //    objeto[string[i].toLowerCase()] = (objeto[string[i]] || 0) + 1 //Tome el valor de la clave del objeto o 0 en caso de que no exista y le sume 1
   // }
   // return objeto

   var objeto = {};
   for(let i = 0; i < string.length; i++) {
      objeto[string[i]] = objeto[string[i]] + 1 || 1; //si la propiedad (letra) ya existia incrementaba el valor en 1 si no existia creaba la propiedad con valor 1
}
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   // var stringADevolver = [];
   let uppercase = '';
   let lowercase = '';
   string.split('').map(e => e == e.toUpperCase()? uppercase += e : lowercase += e);
   return uppercase + lowercase;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arrayFrase = frase.split(' ')
   let arrayPalabras = arrayFrase.map(e => e.split('').reverse().join(''))
   let resultado = arrayPalabras.join(' ');
   return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let array = String(numero).split('');
   let right = null;
   let left = null;
   if (array.length % 2 === 0) {
      left = array.slice(0, array.length / 2);
      right = array.slice(array.length / 2);
   }
   if (array.length % 2 === 1) {
      left = array.slice(0, (array.length - 1) / 2);
      right = array.slice((array.length + 1) / 2)
   }
   for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[array.length - 1 - i]) {
         return 'No es capicua';
      }
   }
   return 'Es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   // let nuevoString = "";
   // for(let i = 0; i < string.length; i++) {
   //    if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c") { 
   //       nuevoString += string[i];
   //    }
   // }
   //  return nuevoString;
   //__________________________________________________________________________________________________
   var Str = "";
   for(let i = 0; i < string.length; i++) {
      if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c") { 
         Str += string[i];
      }
   }
   return Str;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:}
   let nuevo = arrayOfStrings.sort((a, b) => {
		return a.length - b.length;
});
 return nuevo;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.                                                                    // 1
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.   // 2
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArray = array1.filter(x => array2.indexOf(x) !== -1)
      return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
