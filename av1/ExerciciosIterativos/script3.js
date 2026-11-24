// 1. Suma os valores da propiedade price do seguinte array de obxectos:

const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

function reducer(accumulator, currentValue) {
    const returns = accumulator + currentValue.price;
    return returns;
}

let resultado = objects.reduce(reducer, 0);
console.log(resultado);