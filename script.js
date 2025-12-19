// Scroll reveal animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach((element) => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            element.classList.add('active');
        }
    });
});

// Loaded confirmation
console.log("Portfolio Website Loaded ✔");
