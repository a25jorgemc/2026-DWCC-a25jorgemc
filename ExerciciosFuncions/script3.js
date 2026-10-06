const sumarTodos = (...valores) => {
    let suma = 0;
    for (const element of valores) {
        suma +=element;
    }
    return suma;
}

console.log(sumarTodos(1,2,3,5));