import gsap from "gsap";

gsap.to('.box' , {
rotate:360,
repeat:-1,
duration:5,
delay:0.1,
x:200,
boxShadow: "0 20px 80px rgba(234, 145, 12, 1)", //the glow
borderRadius:'50%', // the circle

})