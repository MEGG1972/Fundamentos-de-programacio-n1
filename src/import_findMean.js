function findMean(array){
    let measuringArray = 0;
    for(let i=0; i<=array.lengh-1; i++){
        array += array[i];
    }
    return (measuringArray/array.lengh).toFixed(2);
}
export {findMean};






