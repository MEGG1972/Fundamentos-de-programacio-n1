/*Dado un vector de números, escribe un programa que te devuelva por
consola el total de números impares y el total de números mayores que 100.*/

let arrayNumbers = [25,4,170,283,17];
let numberOdd = 0;
let numberMajor = 0;
for ( let i=0; i<=arrayNumbers.length-1; i++){
if (arrayNumbers[i] %2!=0) {
numberOdd++;}
if (arrayNumbers[i] > 100) {
numberMajor++;
}
}
console.log(` nùmeros impares son ${numberOdd}`);
console.log(` nùmero mayores a 100 son  ${numberMajor}`);