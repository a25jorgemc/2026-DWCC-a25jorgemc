const ul = document.querySelector("ul");

for (let index = 0; index < 4; index++) {
    const li = document.createElement("li");
    li.append(index);
    ul.append(li);
}