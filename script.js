document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const typingElement = document.getElementById('typing');
    const words = ["Student", "Programmer", "Tech Enthusiast"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let currentLetters = '';
    let isDeleting = false;
    function type() {
        if (isDeleting) {
            currentLetters = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentLetters = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typingElement.innerHTML = currentLetters;

        let typeSpeed = 200;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }
            currentWord = words[wordIndex];
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    currentWord = words[wordIndex];
    type();

    // Add this for the Anshika typing effect
    const anshikaSpan = document.querySelector('.typing-effect');
    if (anshikaSpan) {
        anshikaSpan.addEventListener('animationend', function(e) {
            if (e.animationName === 'typing') {
                anshikaSpan.classList.add('typed-done');
            }
        });
    }
});
