const minMax = (array) => {
    let minimo = array[0];
    let maximo = array[0];

    for (const element of array) {
        if(element>maximo){
            maximo = element;
        }
        if(element<minimo){
            minimo = element;
        }
    }
    return {min:minimo,max:maximo}
};

console.log(minMax([1,0,3,4,5]));