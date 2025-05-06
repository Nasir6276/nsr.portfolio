"use client";

import Image from "next/image";
import "./home.css";
import nasir from "@/app/image/nasir.svg";
import nasImage from "@/app/image/hero.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const preloaderRef = useRef(null);
  const navbarRef = useRef(null);
  const svgRef = useRef(null);
  const leftRefP = useRef(null);
  const leftRefBtn = useRef(null);
  const imageRef = useRef(null);
  const rightRefp = useRef(null);
  const rightRefH2 = useRef(null);

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

      <div id="page">
        <div className="details">
          <div className="left">
            <p ref={leftRefP}>
              I help growing brands and startups gain unfair advantage through
              premium, results driven websites
            </p>
            <button className="rightbtn" ref={leftRefBtn}>
              Book a call
            </button>
          </div>{" "}
          <div className="middle" ref={imageRef}>
            <div className="nas-image">
              <img className="nas-img" src={nasImage.src} alt="nas" />
            </div>
          </div>
          <div className="right">
            <p ref={rightRefp}>Available for freelance work</p>
            <h2 ref={rightRefH2}>Jun &apos;12</h2>
          </div>
        </div>
        <div className="nasir">
          <Image className="nasirSvg" src={nasir} alt="nasir" ref={svgRef} />
          {/* <h1>{"<NASIR --/>"}</h1> */}
        </div>
      </div>
    </>
  );
}
