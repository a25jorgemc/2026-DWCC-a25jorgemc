const impares = (array) =>{
    arrayImpares =[];
    for (const element of array) {
        if (element%2!=0) {
            arrayImpares.push(element);
        }
    }
    return arrayImpares;
} 
console.log(impares([1,2,3,6,8]));
