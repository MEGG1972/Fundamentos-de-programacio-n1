/*Escribe un programa que pida dos números al usuario, los compare y
devuelva por consola el mayor de ellos.
Ni en este programa, ni en los siguientes tienes que comprobar que lo que
introduce el usuario efectivamente son números, confiaremos en que sí, pero sí
que debes recordar que cuando se introducen datos por el prompt se
consideran texto siempre*/

let number1 = parseInt(prompt("dame el primer numero"));
let number2 = parseInt(prompt("dame el segundo numero"));
let equals;
if (number1 > number2 ) {
console.log(`Tu primer numero es el mayor ${number1}`);
} 
if (number2 > number1) {
    console.log(`Tu segundo numero es el mayor ${number2}`);
} 
if (number2 == number1) {
console.log(`Solo queremos los numeros mayores ${equals}`);
} 

