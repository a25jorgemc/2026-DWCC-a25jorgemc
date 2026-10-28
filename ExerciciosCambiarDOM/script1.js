// Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é
// unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos
// seguintes comandos farán exactamente o mesmo?:
// a. elemento.append(document.createTextNode(text));
// b. elemento.innerHTML = text;
// c. elemento.textContent = text;

//O a e o c, xa que ambos traballan con texto, sin preocuparse polas etiquetas HTMl. 