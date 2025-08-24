import gsap from "gsap";    

const wave = document.querySelectorAll(".wave-loader .bar");
wave.forEach((bar, i) => {
    gsap.fromTo(bar, {
        y: 0,
    }, {
        y: -20,
        duration: 0.5,
        delay: i *0.3,
        // ease: 'power2.out',
        ease: 'sine.out',
        opacity: 0.5,

        onComplete: () => {
            gsap.to(bar, {
                y: 0,
                duration: 0.75,
                // ease: 'power2.out',
                ease: 'sine.in',

                opacity: 1,
            });
        }
    });
});