document.addEventListener("DOMContentLoaded", function () {
  // GSAP animations
  gsap.from(".logo", {
    x: "-100%",
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.from(".menue ul li", {
    y: "-100%",
    opacity: 0,
    duration: 1,
    delay: 1.5,
    ease: "power2.out",
    stagger: 0.2,
  });

  gsap.registerPlugin(ScrollTrigger);

  const commonScrollTriggerSettings = {
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  };

  gsap.from(".hero-text", {
    y: "100%",
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
      ...commonScrollTriggerSettings,
    },
  });

  gsap.from(".tab-img", {
    y: "100%",
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
      ...commonScrollTriggerSettings,
    },
  });

  gsap.from(".about-text", {
    x: "100%",
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 90%",
      ...commonScrollTriggerSettings,
    },
  });

  gsap.from(".about-img", {
    x: "-100%",
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 90%",
      ...commonScrollTriggerSettings,
    },
  });

  gsap.from(".headline", {
    y: "-100%",
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      ...commonScrollTriggerSettings,
    },
  });

  gsap.from(".card", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top 80%",
      ...commonScrollTriggerSettings,
    },
  });

  gsap.from(".portfolio-header ul li", {
    y: "-100%",
    opacity: 0,
    duration: 1,
    delay: 3.2,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      ...commonScrollTriggerSettings,
    },
  });

  gsap.from(".profile .cards", {
    y: "20%",
    opacity: 0,
    duration: 1,
    delay: 2.5,
    ease: "power2.out",
    stagger: 1.2,
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      ...commonScrollTriggerSettings,
    },
  });

  gsap.from(".scroller", {
    y: "-100%",
    opacity: 0,
    duration: 1,
    delay: 2.5,
    ease: "power2.out",
    stagger: 1.2,
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      ...commonScrollTriggerSettings,
    },
  });
});

// Hamburger menu functionality
const Hamburger = document.getElementById("hamburger");
const Sliders = document.getElementsByClassName("slider")[0];
const Cross = document.getElementById("cross");

Hamburger.addEventListener("click", function () {
  Sliders.classList.toggle("active");
});

Cross.addEventListener("click", function () {
  Sliders.classList.toggle("active");
});

// Scroller functionality
document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("scroller");
  const images = scroller.children;
  for (let i = 0; i < images.length; i++) {
    const clone = images[i].cloneNode(true);
    scroller.appendChild(clone);
  }
});
