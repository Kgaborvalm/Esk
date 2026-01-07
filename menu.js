function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const burger = document.querySelector(".hamburger");

    menu.classList.toggle("open");
    overlay.classList.toggle("show");
    burger.classList.toggle("active");
}
