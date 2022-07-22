/* Escribe un script que simule el lanzamiento de dos dados. Haz uso de la
función Math.Random para obtener números aleatorios entre 1 y 6 para cada
uno de los lanzamientos de los dados. Suma el resultado de lanzar dos dados
y añade en un array dicha suma, repitiendo 6.000 veces todo este proceso. A
continuación, calcula la media de todos los valores que se han añadido al
vector y muéstrala por consola.
Puedes importar la función de calcular media de un vector numérico que
hemos hecho en clase y reutilizarla en este proyecto. De hecho se valorará
mejor si lo haces así.*/
import {findMean} from './import_findMean.js';
const MAX_NUMBER_OF_GAME = 6;
const MIN_NUMBER_OF_GAME = 1;
//let dataManagement = 0;
//let arraySumManagement = [];
let rollDice1 = 0
let rollDice2 = 0
//let array = arraySumManagement;
//let measuringArray = 0;
let array = [];
for ( let i=0; i<=6000; i++){
    rollDice1 = Math.floor((Math.random() * MAX_NUMBER_OF_GAME - MIN_NUMBER_OF_GAME + 1) + MIN_NUMBER_OF_GAME);
    rollDice2 = Math.floor((Math.random() * MAX_NUMBER_OF_GAME - MIN_NUMBER_OF_GAME + 1) + MIN_NUMBER_OF_GAME);

   // dataManagement = rollDice1 + rollDice2
   // array.push(dataManagement);
    array.push(rollDice1+rollDice2);
}
console.log(`Suma de los totales en array ${array}`);
console.log(findMean(array));

