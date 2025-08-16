import gsap from "gsap";

// gsap.fn(target, vars) ...general structure

// gsap.to(".box", {
//   x: 100,
//   duration: 1,
//   ease: "power1.out"
// });

gsap.to('.card', {
  scale:1,
  rotate:135,
  opacity:1,
  duration:4,
  onComplete: () => {
    // alert("animation completed your highness");
    gsap.to('.card' , {
     y: -20,
     repeat:-5,
     yoyo:true,
     duration: 0.5,

    });
  }
});

gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
      repeat: -1,
      yoyo: true,
      duration: 1,
    });