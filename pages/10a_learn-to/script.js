import gsap from "gsap";

const showToastLoop = () => {

    gsap.to(".toast", {
        y:-120,
        opacity:1,
        scale:1,
        duration: 0.65,
        ease: "power2.out",

        onComplete: () => { // a callback
            gsap.to(".toast", {
                delay: 2,
                y:120,
                scale:0.8,
                duration: 0.8,
                ease: "power2.in"
            });
        }
    });
}
showToastLoop();

// a callback is used to know the start of an animation or run a js code afteer an animation has ended
//* callbacks can be NESTED