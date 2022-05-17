
// // Esto es un comentario de una sola línea

// /* Esto es un comentario
//     que me permite escribir
//         en varias líneas...
// */

//  let variable1 = 100;

//  console.log("Hola, empezamos... en este caso... variable1 vale.... : ",variable1);

//  variable1 = 50;

//  console.log("ahora vale.... ",variable1);

//  let alumno1 = "Marc";  //En este caso, alumno1 es un string que tiene como valor Marc

//  let precio = 557;     //La variable precio contiene un número entero (integer)


// function Resta (numero1,numero2) {

//     //Dentro de las llaves, es donde hacemos la función
//     let resultado = numero1 - numero2;

//     return resultado;

// };

// function Suma (numero1, numero2) {

//     let resultado = numero1 + numero2;

//     return resultado;

// }

// let muestra = Resta(100,49);

// console.log(muestra);

// let variableLionel = 5;

// variableLionel++;

// console.log(variableLionel);

// variableLionel--;

// let numeroFavoritoLionel = 5;
// let numeroFavoritoSanti = 13;

// let resultadoModulo = numeroFavoritoSanti % numeroFavoritoLionel;

// console.log(resultadoModulo);

// if(resultadoModulo !== 0){
//     console.log("Era impar");
// }else{
//     console.log("Es par");
// }


// let variable = 3;

// variable = variable**3;

// console.log(variable);

// let variable = 1;

// variable += 2;
// variable -= 1;
// variable *= 5;
// variable /= 3;
// variable = "6";

// let variable2 = 6;

// console.log(variable);

// if(variable === variable2){
//     console.log("son iguales");
// };


//EJEMPLO CASTILLO ELSE IF

// let marc = "A coruña";

// if (marc === "cule"){

//     console.log("Marc es blaugrana");

// } else if (marc === "perico"){

//     console.log("Marc es perico");

// } else if (marc === "vikingo") {

//     console.log("Marc es del Real Madrid");

// } else {

//     console.log("Marc no es de ningún equipo");
// }


//ANIDAR IF

// let edad = 43;
// let equipo = "Valencia";

// if(edad == 43){

//     if(equipo == "Real Madrid"){

//         console.log("Se trata de Ibra");
//     }
// }


// //OPERADORES LÓGICOS... && || !

// if((edad == 43) && (equipo == "Real Madrid")){

//     console.log("Se trata de Ibra de nuevo");

// }

// if((edad <= 18) || (equipo == "Real Madrid")){

//     console.log("Ibraaaaaaaaaaaaaaa");

// }


// //COMBINAMOS.....

// if(((edad >= 18) || (equipo == "Real Madrid")) && (equipo !== "Valencia")){

//     /*
    
//         En este caso, compara primero las dos cláusulas del OR (||), si ese or diese true,
//         es la primera parte que tiene que dar true, para que se cumpla el AND (&&), si luego
//         se cumple también la parte a la derecha del AND, entra entonces en el IF porque se ha cumplido
//         todo.
    
//     */

//     console.log("Sigue funcionando...");

// }


// //USO DE SWITCH

// let Lionel = "LOL";

// switch(Lionel){

//     case "Diablo II":
//         console.log("Lionel juega a juegos antiguos");
//     break;

//     case "Fortnite":
//         console.log("Lionel no tiene buen gusto");
//     break;

//     case "LOL":
//         console.log("Lionel sueña con streamear en Twitch");
//     break;

//     case "Tekken 7":
//         console.log("Lionel machaca el botón");
//     break;

//     case "Bet365":
//         console.log("Lionel necesita ayuda profesional");
//     break;

//     default:
//         console.log("Lionel esta en un bootcamp, no tiene tiempo para esas movidas");
//     break;

// };


//OPERADOR TERNARIO

let edad = 18;

let verPeliculaTerror;

// Opción 1 SIN OPERADOR TERNARIO
// if (edad >= 18){
//     verPeliculaTerror = 'SI';
// }else {
//     verPeliculaTerror = 'NO';
// }


// // Opción 2
verPeliculaTerror = (edad >= 18) ? 'SI' : 'NO';
/* 
    En este caso, si se cumple la condicion entre paréntesis,
    asignaremos a la variable verPeliculaTerror , el valor que 
    viene dado despúes del interrogante, si por el contrario la condición
    diese false, daremos el valor que viene tras los dos puntos.
*/

let Ivan = 26;

let ligue;

ligue = (Ivan >= 22) ? 'Si, ven conmigo' : 'Nooo, llamo a los Mossos';

console.log(ligue);