const now = new Date();
var year = now.getFullYear();
document.getElementById("year").innerHTML = year;

function plays() {
    document.getElementById("play").play();
}

var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}