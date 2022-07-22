function findMean(array){
    let sum = 0;
    for(let i=0; i<=array.length-1; i++){
        sum += array[i];
    }
    return (sum/array.length).toFixed(2);
}
export {findMean};






