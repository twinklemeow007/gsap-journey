import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");


 

window.addEventListener("scroll", () => {

    let isFloating = false;

   

    if(window.scrollY > 500) {
        button.classList.add('show');


        if(!isFloating) {
            gsap.to(button, {
                y:-10,
                ease:'sine.out',
                yoyo:true,
                repeat:-1,
                duration:1.5,
            });
            isFloating = true;
        }
        else{
            button.classList.remove('show');
        }
    }


})

button.addEventListener("mouseenter", () => {
    gsap.to(button, { scale:1.1, duration:0.2 });
});
button.addEventListener("mouseleave", () => {
    gsap.to(button, { scale:1, duration:0.2 });
});

button.addEventListener("click", () => {
     window.scrollTo(0, 0);
})



/* import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");
const button2 = document.querySelector(".scroll-to-top-2");

let isFloating = false;
let isFloating2 = false;

window.addEventListener("scroll", () => {
    if(window.scrollY > 500) {
        button.classList.add('show');
        button2.classList.add('show');

        if(!isFloating) {
            gsap.to(button, {
                y:-200,
                ease:'sine.out',
                yoyo:true,
                repeat:-1,
                duration:0.5,
            });
            isFloating = true;
        }
        if(!isFloating2) {
            gsap.to(button2, {
                y:-100,
                ease:'sine.out',
                yoyo:true,
                repeat:-1,
                duration:1,
            });
            isFloating2 = true;
        }
    } else {
        button.classList.remove('show');
        button2.classList.remove('show');
        isFloating = false;
        isFloating2 = false;
        gsap.to(button, { y: 0, clearProps: "all" });
        gsap.to(button2, { y: 0, clearProps: "all" });
    }
}); */   //for two buttons competing like basketball
