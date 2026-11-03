const pai = document.getElementById("container")

function borrarDiv(e) {
    if (e.target.tagName == "BUTTON") {
        e.target.parentElement.style.display = "none";
    }
}

pai.addEventListener("click", borrarDiv)
