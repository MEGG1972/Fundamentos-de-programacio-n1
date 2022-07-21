/*Modifica el anterior script de manera que si los números que se proporcionan
son iguales deberá pedir de nuevo el segundo hasta que el usuario introduzca
uno diferente al primero.*/
let number1 = parseInt(prompt("dame el primer numero"));
let number2 = parseInt(prompt("dame el segundo numero"));
while (number2 == number1) {
  number2 = prompt("dame otro numero");
} 
if (number1 > number2 ) {
  console.log(`Tu primer numero es el mayor ${number1}`);
  } 
if (number2 > number1) {
      console.log(`Tu segundo numero es el mayor ${number2}`);
}