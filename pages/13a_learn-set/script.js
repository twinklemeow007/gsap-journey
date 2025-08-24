import gsap from "gsap";

gsap.set('.gsap-box' , { x:500 , opacity:0 , scale:0});

gsap.to('.gsap-box' , {
    x:0,
    opacity:1,
    scale:1,
    // ease:"bounce.in",
    duration:2,
    repeat:-1,
    delay:0.5
}); 
