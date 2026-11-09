const ul = document.getElementById("ul");
const todosLi = document.querySelectorAll("li");
const arrayLi = Array.from(todosLi);

function claseSelected(e) {
    for (const element of arrayLi) {
        if (element.classList == "selected") {
            element.classList.toggle("selected");
        }
    }
    e.target.classList.toggle("selected");
}

ul.addEventListener("click", claseSelected)