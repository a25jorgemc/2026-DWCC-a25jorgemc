const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

let numFillos = 0;

for (const element of arrayLi) {
    const tenUl = element.querySelector("ul");

    if (tenUl) {
        numFillos = tenUl.children.length;
        tenUl.before("[" + numFillos + "]")
    }
}