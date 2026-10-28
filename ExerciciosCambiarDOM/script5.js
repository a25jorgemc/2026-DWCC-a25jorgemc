const un = document.getElementById("one");
const catro = document.getElementById("two");

const li2 = document.createElement("li");
const li3 = document.createElement("li");

const texto2 = document.createTextNode("2");
const texto3 = document.createTextNode("3");

li2.append(texto2);
un.after(li2);

li3.append(texto3);
catro.before(li3)