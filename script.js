// Reveal function
function revealOnLoad() {
    document.querySelectorAll('.reveal').forEach((element) => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Run animation on load + scroll
window.addEventListener('load', revealOnLoad);
window.addEventListener('scroll', revealOnLoad);

// Loaded confirmation
console.log("Portfolio Website Loaded ✔");

