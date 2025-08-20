import gsap from "gsap";

const toast = document.querySelectorAll(".toast");

toast.forEach((toast, i) => {
    
 gsap.to(toast , {
    x:300,
  y: -120,
  opacity: 1,
  scale: 1,
  duration: 4,
  ease: "power2.out",
  delay: i * 1,

  onComplete: () => {
    gsap.to(toast, {
      y: 120,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.in",
    });
  },

 });
});