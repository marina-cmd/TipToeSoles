function onLoad() {
    const navButton = document.querySelector("#nav-button");
    const navMenu = document.querySelector("#main-nav");
    navButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}
window.addEventListener("load", onLoad);
