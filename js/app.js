const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const sm = document.querySelector(".nav-sm");

toggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
    sm.classList.toggle("show-links");
})