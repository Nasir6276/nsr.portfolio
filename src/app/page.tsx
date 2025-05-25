/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import "./home.css";
import nasir from "@/app/image/nasir.svg";
import nasImage from "@/app/image/hero1.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "@/app/image/project1.png";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const preloaderRef = useRef(null);
  const navbarRef = useRef(null);
  const svgRef = useRef(null);
  const leftRefP = useRef(null);
  const leftRefBtn = useRef(null);
  const imageRef = useRef(null);
  const rightRefp = useRef(null);
  const rightRefH2 = useRef(null);
  const pageRef = useRef(null);
  const page2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(preloaderRef.current, {
      y: "-100%",
      borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%",
      duration: 1,
      ease: "power2.out",
    })
      .add(() => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
      })
      .from(navbarRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power2.out",
      });

    tl.to(svgRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });

    tl.from(
      leftRefP.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
      .from(
        leftRefBtn.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        imageRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        rightRefp.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        rightRefH2.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

    gsap.set(pageRef.current, {
      opacity: 0.873618,
      transform: "translateY(5.05529px) scale(0.993681) translateZ(0px)",
    });

    const spanText = page2Ref.current!.querySelectorAll("h2 span");

    gsap.set(spanText, {
      y: "100%",
      opacity: 0,
    });

    gsap.to(spanText, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#page2",
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });

    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const projects = gsap.utils.toArray<HTMLElement>(".project");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallBack = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target as HTMLElement;
          const imgContainer = service.querySelector(
            ".image"
          ) as HTMLElement | null;

          if (!imgContainer) return;

          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: `${newWidth}%`,
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
              const progress = self.progress;
              const newHeight = 150 + 300 * progress;
              gsap.to(service, {
                height: `${newHeight}px`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallBack,
      observerOptions
    );
    projects.forEach((service) => observer.observe(service));

    return () => {
      gsap.ticker.remove(tick);
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="preloader" ref={preloaderRef}></div>

      <div id="main">
        <header
          className="navbar flex items-center justify-center"
          ref={navbarRef}
        >
          <div className="menu w-full bg-[#fff] max-w-[700px] p-[1">
            <div className="menu-line">
              <a href="#" className="nav-link top-1" data-replace="About">
                <span>About</span>
              </a>
            </div>
            <div className="menu-line">
              <a href="#" className="nav-link top-1" data-replace="Project">
                <span>Project</span>
              </a>
            </div>
            <div className="menu-line">
              <a href="#" className="nav-link top-1" data-replace="Contact">
                <span>Contact</span>
              </a>
            </div>
            <div className="logo">
              <h2 className="logoTag">n!</h2>
            </div>
            <div className="menu-line">
              <a href="#" className="nav-link top-1" data-replace="Twitter">
                <span>Twitter</span>
              </a>
            </div>
            <div className="menu-line">
              <a href="#" className="nav-link top-1" data-replace="LinkedIn">
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="menu-line">
              <a href="#" className="nav-link top-1" data-replace="Github">
                <span>Github</span>
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* hero */}
      <div id="page" ref={pageRef}>
        <div className="details">
          <div className="left">
            <p ref={leftRefP}>
              Boosting brand dominance with high-impact web and mobile apps,
              driving business growth through innovative, results-driven
              solutions that leave the competition behind.
            </p>
            <button className="rightbtn" ref={leftRefBtn}>
              Get free quote
            </button>
          </div>{" "}
          <div className="middle" ref={imageRef}>
            <div className="nas-image">
              <img className="nas-img" src={nasImage.src} alt="nas" />
            </div>
          </div>
          <div className="right">
            <p ref={rightRefp}>Available for freelance work</p>
            <h2 ref={rightRefH2}>may &apos;06</h2>
          </div>
        </div>
        <div className="nasir">
          <Image className="nasirSvg" src={nasir} alt="nasir" ref={svgRef} />
          {/* <h1>{"<NASIR --/>"}</h1> */}
        </div>
      </div>

      {/* Recent Project */}
      <div id="page2" ref={page2Ref}>
        <h2>
          <span>Selected </span>
          <span> Projects </span>
        </h2>

        <div className="projects py-6">
          <div className="project py-4">
            <div className="project-info">
              <h1>loerm ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                dolorum.
              </p>
            </div>
            <div className="project-img">
              <div className="image">
                <img src={project1.src} alt="project" />
              </div>
            </div>
          </div>

          <div className="project py-4">
            <div className="project-info">
              <h1>loerm ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                dolorum.
              </p>
            </div>
            <div className="project-img">
              <div className="image">
                <img src={project1.src} alt="project" />
              </div>
            </div>
          </div>

          <div className="project py-4">
            <div className="project-info">
              <h1>loerm ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                dolorum.
              </p>
            </div>
            <div className="project-img">
              <div className="image">
                <img src={project1.src} alt="project" />
              </div>
            </div>
          </div>

          <div className="project py-4">
            <div className="project-info">
              <h1>loerm ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                dolorum.
              </p>
            </div>
            <div className="project-img">
              <div className="image">
                <img src={project1.src} alt="project" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="service" style={{ height: "500px" }}></div>
    </>
  );
}
