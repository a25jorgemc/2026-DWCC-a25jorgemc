const mediaTodos = (...valores) => {
    let suma = 0;
    for (const element of valores) {
        suma +=element;
    }
    return suma/valores.length;
}
console.log(mediaTodos(3,3,3,5));
