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

const texts = document.querySelectorAll("#page2 h2 span");

texts.forEach((text) => {
  gsap.set(text, {
    y: "100%",
    opacity: 0,
  });
});

gsap.to(texts, {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: page2Ref.current,
    start: "top 100%",
    toggleActions: "play none none none",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const services = gsap.utils.toArray(".service");

  const observerOption = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const service = entry.target;
        const imgContainer = service.querySelector(".img");

        ScrollTrigger.create({
          trigger: service,
          start: "bottom bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let newWidth = 30 + 70 * progress;
            gsap.to(imgContainer, {
              width: newWidth + "%",
              duration: 0.1,
              ease: "none",
            });
          },
        });

        ScrollTrigger.create({
          trigger: service,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let newHeight = 150 + 300 * progress;
            gsap.to(service, {
              height: newHeight + "px",
              duration: 0.1,
              ease: "none",
            });
          },
        });
        observer.unobserve(service);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallBack, observerOption);

  services.forEach((service) => {
    observer.observe(service);
  });
});
