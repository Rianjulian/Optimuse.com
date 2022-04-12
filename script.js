// @ts-nocheck
const hamburger = document.getElementById("hamburgerButton");
const menu = document.getElementById("tabs");

hamburger.addEventListener("click", function () {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});