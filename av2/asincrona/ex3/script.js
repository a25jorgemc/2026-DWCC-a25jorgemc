function loadImg(src, callback) {
    let img = document.getElementById('imaxe');
    img.src = src;
    img.addEventListener('load', callback);
}
loadImg('leon.jpeg', () => {
    console.log("Imaxe cargada");
});