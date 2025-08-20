import gsap from "gsap";

const meow = document.querySelector('.repeat');


const animation =gsap.from('.card', {
    y: 100,
    opacity: 0,
    scale: 0.5,
    stagger: 0.2,
    delay:0.4,
    ease: 'expo.out(0.5)',
});


meow.addEventListener('click', () => {
    animation.restart();
});

