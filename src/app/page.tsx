"use client";

import { MdOutlineWbSunny } from "react-icons/md";
import "./home.css";
import { IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import Case1 from "./image/case-1.png";
import Case2 from "./image/case-2.png";
import Case3 from "./image/case-3.png";
import project1 from "./image/project.png";
import Image from "next/image";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* header */}
      <header className="sticky h-[70px] top-0 z-30">
        <div className="container mx-auto flex items-center h-full justify-between">
          <h1 className="h2 font-bold">nsr.</h1>
          <ul className="hidden md:flex gap-[15px] ">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">cases</a>
            </li>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">about me</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>

          <nav className="flex items-right">
            <div className="theme-btn group hidden md:block">
              <MdOutlineWbSunny className="text-primary inline-block text-2xl cursor-pointer transform transition-transform duration-500 group-hover:rotate-[270deg]" />
            </div>
            <div
              className="cursor-pointer nav_list block md:hidden"
              id="nav_trigger_btn"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <IoClose className="text-2xl text-primary transition-all duration-500" />
              ) : (
                <CgMenuRight className="text-2xl text-primary transition-all duration-500" />
              )}
              {/* <CgMenuRight className="text-4xl text-primary" /> */}
            </div>
            <ul
              className={`fixed  ${
                isNavOpen ? "h-[300px] p-6 w-[250px]" : "h-0 p-0 w-0"
              } rounded overflow-hidden border top-[75px] block md:hidden  right-0 flex flex-col gap-4 transition-all duration-500`}
            >
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">cases</a>
              </li>
              <li>
                <a href="#">projects</a>
              </li>
              <li>
                <a href="#">about me</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <div className="theme-btn group">
                  <MdOutlineWbSunny className="text-primary inline-block text-2xl cursor-pointer transform transition-transform duration-500 group-hover:rotate-[270deg]" />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* wrapper */}
      <main className="max-w-[1920px] mx-auto z-20 overflow-hidden">
        {/* hero */}
        <section className="hero h-[640px] flex flex-1 items-center justify center border-b">
          <div className="container mx-auto">
            <h1 className="h1 text-center">front-end.web(developer)</h1>
          </div>
        </section>

        {/* cases */}
        <section className="cases mt-[80px] xl:mt-[200px] relative z-20 border-b">
          <div className="container mx-auto flex-col mb-[80px] xl:mb-[200px]">
            {/* cases header */}
            <div className="cases-header flex justify-center md:justify-start items-center mb-[60px]">
              <h3 className="h3 font-bold">amazing cases</h3>
            </div>

            {/* cases image */}
            <div className="cases-images gap-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              <div className="cases-image">
                <Image
                  src={Case1.src}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  unoptimized
                  alt="case-image"
                />
                <p className="text-center md:text-start">rebranding</p>
              </div>
              <div className="cases-image">
                <Image
                  src={Case2.src}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  unoptimized
                  alt="case-image"
                />
                <p className="text-center md:text-start">marketing</p>
              </div>
              <div className="cases-image">
                <Image
                  src={Case3.src}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  unoptimized
                  alt="case-image"
                />
                <p className="text-center md:text-start">lawyer</p>
              </div>
              <div className="cases-image">
                <Image
                  src={Case1.src}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  unoptimized
                  alt="case-image"
                />
                <p className="text-center md:text-start">startup</p>
              </div>
            </div>
          </div>
        </section>

        {/* projects */}
        <section className="projects mt-[80px] xl:mt-[200px] relative z-20 border-b">
          <div className="container mx-auto mb-[80px] xl:mb-[200px]">
            {/* project title */}
            <div className="cases-header flex justify-center md:justify-end items-center mb-[60px]">
              <h3 className="h3 font-bold">personal projects</h3>
            </div>

            {/* project grid */}
            <div className="project-grid grid grid-cols-1 md:grid-cols-2">
              {/* project 1 */}
              <div className="single-project w-full flex-col md:flex gap-[30px] items-center">
                {/* project image */}
                <div className="project-image w-full md:max-w-[300px]">
                  <Image
                    src={project1.src}
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "auto" }}
                    alt="projectImage"
                    unoptimized
                  />
                </div>

                {/* project text */}
                <div className="project-text flex-1 flex flex-col items-start"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[3000px]"></div>
      </main>
    </div>
  );
}
