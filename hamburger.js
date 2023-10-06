document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    setTimeout(() => {
        navLinks.classList.remove('show');
    }, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").style.opacity = "1";
    document.querySelector("h1").style.transform = "translateY(0)";
    document.querySelector("p").style.opacity = "4";
    document.querySelector("p").style.transform = "translateY(0)";
});
