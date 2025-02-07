// ✅ LOCOMOTIVE SCROLL SETUP
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

// ✅ RIGHT IMAGE ANIMATION
// gsap.from("#right img", {
//     opacity: 0,       // Starts fully invisible
//     duration: 1.5,    // Animation lasts 1.5 seconds
//     scale: 0.1,       // Starts at 10% of its size
//     delay: 1,         // Starts after 1 second
//     rotation: 360,    // Rotates a full circle
//     x: 100,          // Moves 100px right
//     ease: "elastic.out(1, 0.3)", // Bouncy effect
// });
// gsap.from("#right img", {
//     opacity: 0,     // Starts fully transparent
//     duration: 1.5,  // Animation lasts 1.5 seconds
//     scale: 0.1,     // Starts very small
//     delay: 1,       // Waits 1 second before starting
//     rotate: 360,    // Spins 360 degrees
//     ease: "bounce.out", // Bouncy effect
// });
gsap.from("#right img", {
    opacity: 0,       // Fade-in effect
    duration: 1.5,    // Slow and smooth
    scale: 0.8,       // Slight zoom-in effect
    delay: 0.5,       // Small delay
    y: 50,            // Moves up smoothly
    ease: "power2.out" // Soft and natural movement
});



// ✅ NAVIGATION ANIMATION
function navGsap() {
  var tl = gsap.timeline();
  tl.from("#nav h1", {
    opacity: 0,
    y: -10,
    duration: 0.5,
    delay: 0.5,
  });

  tl.from("#nav-part2 a", {
    opacity: 0,
    y: -10,
    duration: 0.2,
    stagger: 0.2,
  });

  tl.from("#nav-part2 button", {
    opacity: 0,
    y: -10,
    duration: 0.1,
  });
}
navGsap();

// ✅ ABOUT PAGE IMAGE ANIMATION
gsap.from("#about img", {
  duration: 0.5,
  opacity: 0,
  scale: 0.2,
  scrollTrigger: {
    trigger: "#about img",
    scroller: "#main",
    scrub: 2,
  },
});

// ✅ SKILL PAGE ANIMATION
gsap.to("#page2 #skills", {
  x: "-100%",
  duration : 2,
  ease: "none",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    scrub: 2,
    pin: true,
  },
});

// ✅ CUSTOM CURSOR
var main = document.querySelector("#main");
var crsr = document.querySelector("#cursur");

// Make cursor follow mouse properly across all pages
main.addEventListener("mousemove", (e) => {
  gsap.to(crsr, {
    x: e.pageX,
    y: e.pageY,
    ease: "none",
  });
});

// Fix: Ensure the `#right` element exists before adding event listeners
var img = document.querySelector("#right");

if (img) {
  img.addEventListener("mouseenter", () => {
    crsr.innerHTML = "View More";
    gsap.to(crsr, {
      scale: 4,
    });
  });

  img.addEventListener("mouseleave", () => {
    crsr.innerHTML = "";
    gsap.to(crsr, {
      scale: 1,
    });
  });
}


// ✅ FORM ANIMATION
function formAnimation() {
  gsap.from("#form", {
    opacity: 0,
    y: 150,
    x: -100,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#form",
      scroller: "#main",
      scrub: 1,
      start: "top 40%",
      end: "top 20%",
    },
  });

  gsap.from("#info", {
    opacity: 0,
    y: 150,
    x: 100,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#info",
      scroller: "#main",
      scrub: 1,
      start: "top 40%",
      end: "top 20%",
    },
  });
}
formAnimation();

// ✅ SPLIT TEXT ANIMATION
function splitedText() {
  var h1 = document.querySelector(".h1");
  var textH1 = h1.textContent;
  var splitH1 = textH1.split("");
  var clutter = "";

  splitH1.forEach((elem) => {
    clutter += `<span>${elem}</span>`;
  });

  h1.innerHTML = clutter;
}
splitedText();

gsap.from(".h1 span", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.15,
});

gsap.from("#name",{
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
})
