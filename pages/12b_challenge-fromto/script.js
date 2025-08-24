import gsap from "gsap";

const reactions = document.querySelectorAll(".reactions button");

reactions.forEach(btn => {
btn.addEventListener('click' , () => {
gsap.fromTo(btn, {
    y: 0,
    opacity: 1,
    scale: 0,
}, {
    y: -120,
    opacity: 0,
    duration: 2,
    scale: 1,
    
    // rotate: 180, for rotation
    // yoyo: true,
    // repeat: -1,
    onComplete: () => {
        gsap.to(btn, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 2,
            // rotate: 0, for rotation back to og
            ease: "power4.inOut"
        });
    }
});
}
);
});
