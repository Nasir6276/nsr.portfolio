"use client";

import Image from "next/image";
import "./home.css";
import nasir from "@/app/image/nasir.svg";
import nasImage from "@/app/image/hero1.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const ekRef = useRef(null);
  const doRef = useRef(null);
  const tinRef = useRef(null);

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

    gsap.to(ekRef.current, {
      duration: 1,
      scrollTrigger: {
        trigger: ekRef.current,
        start: "top 10%",
        end: "bottom -27%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.to(doRef.current, {
      duration: 3,
      scrollTrigger: {
        trigger: doRef.current,
        start: "top 30%",
        end: "bottom 60%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.to(tinRef.current, {
      duration: 3,
      scrollTrigger: {
        trigger: tinRef.current,
        start: "top 45%",
        end: "bottom 100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  const ServiceData = [
    {
      ref: ekRef,
      title: "Web Application",
      desc: `A website developed to captivate and convert can elevate your
          brand to new heights. My custom-coded sites are meticulously
          crafted to reflect you unique identity, delivering seamless
          experience with a focus on animation-keeping your audience
          engage and returning.`,
      list: ["CMS Integration", "Motion & Animation", "3D Development"],
    },
    {
      ref: doRef,
      title: "Mobile Application",
      desc: `A website developed to captivate and convert can elevate your
          brand to new heights. My custom-coded sites are meticulously
          crafted to reflect you unique identity, delivering seamless
          experience with a focus on animation-keeping your audience
          engage and returning.`,
      list: ["CMS Integration", "Motion & Animation", "3D Development"],
    },
    {
      ref: tinRef,
      title: "seo",
      desc: `A website developed to captivate and convert can elevate your
          brand to new heights. My custom-coded sites are meticulously
          crafted to reflect you unique identity, delivering seamless
          experience with a focus on animation-keeping your audience
          engage and returning.`,
      list: ["CMS Integration", "Motion & Animation", "3D Development"],
    },
  ];

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
        <div>
          <h2
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <span>How </span>
            <span> Can </span>
            <span> i </span>
            <span> Help </span>
            <span> ?</span>
          </h2>
        </div>

        <div className="serviceText">
          <p className="para">Services</p>
          <div className="serviceText2">
            <p>
              Frustrated with websites that don&apos;t eflect your brand or
              drive growth? I craft premium web experience that captivate and
              help you focus on growing your business
            </p>
          </div>
        </div>

        <div className="services">
          {ServiceData.map((service, index) => (
            <div className="number borders" ref={service.ref} key={index}>
              <div className="numberL">
                <h2>{String(index + 1).padStart(2, "0")}</h2>
              </div>
              <div className="numberR">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="list">
                  {service.list.map((item, i) => (
                    <div
                      className={`listItem ${
                        i === service.list.length - 1 ? "bt" : ""
                      }`}
                      key={i}
                    >
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
