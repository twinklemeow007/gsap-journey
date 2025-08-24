import gsap from "gsap";

const card = document.getElementById("card");

card.addEventListener('mouseenter' , () => {

gsap.from(card , {
    // x:0,
    opacity:1,
    scale:0,
    duration:6,
    rotateY:180,
    // repeat:-1,



    });
});
    card.addEventListener('mouseleave' , () => {

        gsap.to(card , {
            rotateY:0,
            y: 20,
            opacity:0,
            duration:0.1,
            scale: 2,
            ease: "power2.in",
            opacity:1,
            duration: 5,
            repeat:-1,


        });

        });
    



