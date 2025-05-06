let tl = gsap.timeline();

tl.to("preloader", {
  y: "-100%",
  borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%",
})
  .add(() => {
    document.querySelector(("preloader".style.display = "none"));
  })
  .from(".navbar .base", {
    duration: 1,
    y: "-100%",
  });

tl.from(
  ".left h4",
  {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  },
  "-=0.4"
);
