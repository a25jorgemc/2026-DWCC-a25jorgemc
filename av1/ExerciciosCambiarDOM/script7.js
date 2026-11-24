let arbore = {
    Fish: {
        trout: {},
        salmon: {},
    },
    Tree: {
        Huge: {
            sequoia: {},
            oak: {},
        },
        Flowering: {
            'apple tree': {},
            magnolia: {},
        },
    },
};
function createTree(data) {
    const ul = document.createElement("ul");

    for (const element of Object.keys(data)) {
        const li = document.createElement("li");
        const texto = document.createTextNode(element);

        li.append(texto);

        if (Object.keys(data[element]).length != 0) {
            li.append(createTree(data[element]))
        }

        ul.append(li);

    }

    return ul;
}

const ulMeter = createTree(arbore);

const body = document.querySelector("body");
body.append(ulMeter);