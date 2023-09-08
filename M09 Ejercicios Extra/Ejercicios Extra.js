/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  
   /*let objeto ={
  d: 1,
  b: 2,
  c: 3,
  } *///el objeto va por fuera de  funcion,sino no va a funcionar.
   let arregloGrande = [];
   for (let prop in objeto ) {
      let arreglosPequeños = [prop,objeto [prop]];
      arregloGrande.push(arreglosPequeños);
   }
   return arregloGrande;
}
/*console.log(deObjetoAarray(objeto));*/

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   let objetoContador = {}
  for (let i = 0; i < string.length; i++) {
     let letra = string[i];//craer variable para gaurdar los string q luego sera usado como propiedad.

     if (objetoContador[letra]) {//verifica si la letra se repite.
        objetoContador[letra]++;//si se repite incrementamos su conteo.
     }
     else {
        objetoContador[letra] = 1// si no se repite solo la inicializamos en 1.
     }
  }
//creo un objeto vacio para el string ordenado.
  let objetoOrdenado = {};

  let arregloOrdenado = Object.keys(objetoContador).sort();//keys devuelve un arreglo con todas las propiedades del arreglo.
  //sort ordena alfabeticamente todas las letras de dicho arreglo.

  for(let letra of arregloOrdenado){            //itera sobre el arrglo y luego asigna las letras como propiedades al objeto creado.
    objetoOrdenado[letra] = objetoContador[letra];//objetoContador[letra] entra al valor
  }                                                //objetoOrdenado[letra] entra a la propiedad
  return objetoOrdenado;
}

console.log(numberOfCharacters("quieroserhenry"))

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   let mayusculas = "";
   let minusculas = "";
   for (let i = 0; i < string.length; i++) {// recorre el string
       
   if(string[i]===string[i].toUpperCase()){
      mayusculas += string[i]; //si es verdadero, se agregran las mayusculas a la variable ' mayusculas
   } else {
      minusculas += string[i];// si es falso se agregan las minusculas a la variable 'minusculas'
   }
    suma = mayusculas + minusculas;// sae concatenan las variables.
   }
   return suma;
}
console.log(capToFront("soyHENRY"));

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   let palabras = frase.split(' ');// divide en palabras

   let resultado = palabras.map( palabra => {   //toma cada palabra dividida, la divide en caracteres, las invierte
      return palabra.split('').reverse().join('');// usando 'reverse()'y luego las une en palabras usando 'join()'
   }).join(' ');                       //y luego vuelve a unir las palabras para formar la frase.
   return resultado;
} 
   console.log(asAmirror("tengo que pasear en auto"));

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
      let numeroComoTexto = numero.toString(); // Convierte el número en una cadena de texto
      let numeroReverso = numeroComoTexto.split('').reverse().join(''); // Invierte la cadena
    
      if(numeroComoTexto === numeroReverso){
         return "es capicua";
      } else {
         return "no es capicua";
      }
}
      console.log(capicua(151));

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   const resultado = string.replace(/[abc]/g, '');

  return resultado;
}
console.log(deleteAbc("abcdefg"))

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   
      // Utiliza el método sort() con una función de comparación personalizada
      const resultado = arrayOfStrings.sort((a, b) => a.length - b.length);
    
      return resultado;
   }
    console.log(sortArray(["pasado", "fue", "mascota", "challeng"])); 
    


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   
      // Crea un conjunto (Set) a partir de array1 para buscar elementos en común
      const conjunto1 = new Set(array1);
    
      // Utiliza filter() para verificar si los elementos de array2 están en conjunto1
      const interseccion = array2.filter(elemento => conjunto1.has(elemento));
    
      return interseccion;
    
}
console.log(buscoInterseccion([4,2,3], [1,3,4]));

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
