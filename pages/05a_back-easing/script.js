import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const tabRow = document.querySelector(".tab-row");
const Indicator = document.querySelectorAll(".indicator");


const updateIndicator = (target) => {
    const tabBounds = target.getBoundingClientRect();
    const rowBounds = tabRow.getBoundingClientRect();

    const width = tabBounds.width;
    const offset = tabBounds.left - rowBounds.left;

    gsap.to(Indicator , {
      x: offset,
      width : width,
      duration:0.4,
      ease: 'back.out(1.7)',
    });
};

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active")); // for resetting aftr each click , otherwise all clciked tabs would be highlighted
        tab.classList.add("active");  // only highlights active tabs
        updateIndicator(tab); // tells indiator to slide under the active tab
    });
});

updateIndicator(document.querySelector(".tab.active"));//makes sure when the page first loads, the underline starts under the default active tab