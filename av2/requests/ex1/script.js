const xhr = new XMLHttpRequest();
xhr.open("GET", "sample.json");
xhr.responseType = 'json'
xhr.send();

xhr.addEventListener("load", function () {
    const obxecto = xhr.response;
    let frase = "Os nomes das gatas son "
    let fraseInfo = "Hai "
    for (let index = 0; index < obxecto.length; index++) {
        const gata = obxecto[index];
        if ((index == obxecto.length - 2)) {
            frase += gata.name + " e ";

        } else if ((index == obxecto.length - 1)) {
            frase += gata.name + ".";
        } else {
            frase += gata.name + ", ";
        }
    }
    console.log(frase);

});
