"use client";

import { MdOutlineWbSunny } from "react-icons/md";
import "./home.css";
import { IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { RiPagesLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import Case1 from "./image/case-1.png";
import Case2 from "./image/case-2.png";
import Case3 from "./image/case-3.png";
import project1 from "./image/project.png";
import profile from "./image/profile.png";
import hero from "./image/hero.jpg";
import Image from "next/image";
import Link from "next/link";

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
            <li className="links">
              <a href="#">home</a>
            </li>
            <li className="links">
              <a href="#">cases</a>
            </li>
            <li className="links">
              <a href="#">projects</a>
            </li>
            <li className="links">
              <a href="#">about me</a>
            </li>
            <li className="links">
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
        <section className="hero h-[640px] xl:h-[840] border-b">
          <div className="container mx-auto flex flex-col items-center md:flex-row h-full gap-[50px]">
            {/* hero text */}
            <div className="hero-text flex-1 flex flex-col items-center justify-center md:items-start">
              <p className="text-center md:text-start mb-[30px]">
                Ismail Nasiru
              </p>
              <h1 className="h1 font-black text-center md:text-start">the</h1>
              <p className="text-center md:text-start">
                frontend.(
                <span className="font-black">
                  <Typewriter
                    words={["web", "mobile"]}
                    loop={false}
                    cursor
                    // cursorStyle=""
                    cursorBlinking={true}
                    typeSpeed={150}
                    deleteSpeed={130}
                    // delaySpeed={1000}
                  />
                </span>
                )developer <br /> Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Enim delectus.
              </p>
            </div>
            <div className="hero-image flex-1 flex items-center justify-center p-[0] md:p-[30px]">
              <Image
                src={hero.src}
                width={0}
                height={0}
                // style={{ width: "350px", height: "350" }}
                className="w-full rounded-2xl"
                unoptimized
                alt="nasir"
              />
            </div>
          </div>
        </section>

        {/* cases */}
        <section className="cases mt-[60px] xl:mt-[150px] relative z-20 border-b">
          <div className="container mx-auto flex-col mb-[60px] xl:mb-[150px]">
            {/* cases header */}
            <div className="cases-header flex justify-center md:justify-start items-center mb-[60px]">
              <h3 className="h3 font-bold">amazing cases</h3>
            </div>

            {/* cases image */}
            <div className="cases-images gap-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              <div className="cases-image flex flex-col gap-[15px]">
                <Image
                  src={Case1.src}
                  width={0}
                  height={0}
                  className="border"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  unoptimized
                  alt="case-image"
                />
                <p className="text-center md:text-start">rebranding</p>
              </div>
              <div className="cases-image flex flex-col gap-[15px]">
                <Image
                  src={Case2.src}
                  width={0}
                  height={0}
                  className="border"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  unoptimized
                  alt="case-image"
                />
                <p className="text-center md:text-start">marketing</p>
              </div>
              <div className="cases-image flex flex-col gap-[15px]">
                <Image
                  src={Case3.src}
                  width={0}
                  height={0}
                  className="border"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  unoptimized
                  alt="case-image"
                />
                <p className="text-center md:text-start">lawyer</p>
              </div>
              <div className="cases-image flex flex-col gap-[15px]">
                <Image
                  src={Case1.src}
                  width={0}
                  height={0}
                  className="border"
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
        <section className="projects mt-[60px] xl:mt-[150px] relative z-20 border-b">
          <div className="container mx-auto mb-[60px] xl:mb-[150px]">
            {/* project title */}
            <div className="cases-header flex justify-center md:justify-end items-center mb-[60px]">
              <h3 className="h3 font-bold">personal projects</h3>
            </div>

            {/* project grid */}
            <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-[50px]">
              {/* project 1 */}
              <div className="single-project w-full md:flex gap-[30px] items-center">
                {/* project image */}
                <div className="project-image flex-1 border mb-[15px] md:mb-[0px]">
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
                <div className="project-text flex-1 flex flex-col justify-center gap-[15px] items-start">
                  <h4 className="h4 font-bold">Be Digital</h4>
                  <p className="text-[12px] text-[#808080] leading-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium asperiores aut error ratione! Magni blanditiis,
                  </p>
                  <a href="#" className="links">
                    see project
                  </a>
                </div>
              </div>

              {/* project 1 */}
              <div className="single-project w-full md:flex gap-[30px] items-center">
                {/* project image */}
                <div className="project-image flex-1 border mb-[15px] md:mb-[0px]">
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
                <div className="project-text flex-1 flex flex-col justify-center gap-[15px] items-start">
                  <h4 className="h4 font-bold">Be Digital</h4>
                  <p className="text-[12px] text-[#808080] leading-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium asperiores aut error ratione! Magni blanditiis,
                  </p>
                  <a href="#" className="links">
                    see project
                  </a>
                </div>
              </div>
              {/* project 1 */}
              <div className="single-project w-full md:flex gap-[30px] items-center">
                {/* project image */}
                <div className="project-image flex-1 border mb-[15px] md:mb-[0px]">
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
                <div className="project-text flex-1 flex flex-col justify-center gap-[15px] items-start">
                  <h4 className="h4 font-bold">Be Digital</h4>
                  <p className="text-[12px] text-[#808080] leading-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium asperiores aut error ratione! Magni blanditiis,
                  </p>
                  <a href="#" className="links">
                    see project
                  </a>
                </div>
              </div>
              {/* project 1 */}
              <div className="single-project w-full md:flex gap-[30px] items-center">
                {/* project image */}
                <div className="project-image flex-1 border mb-[15px] md:mb-[0px]">
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
                <div className="project-text flex-1 flex flex-col justify-center gap-[15px] items-start">
                  <h4 className="h4 font-bold">Be Digital</h4>
                  <p className="text-[12px] text-[#808080] leading-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium asperiores aut error ratione! Magni blanditiis,
                  </p>
                  <a href="#" className="links">
                    see project
                  </a>
                </div>
              </div>
            </div>

            <div className="case-footer flex justify-center item-center mt-[60px]">
              <h3 className="h3 font-bold">show more project</h3>
            </div>
          </div>
        </section>

        {/* about */}
        <section className="about relative mt-[60px] xl:mt-[150px] z-20 border-b">
          <div className="container mx-auto mb-[60px] xl:mb-[150px]">
            {/* about header */}
            <div className="cases-header flex justify-center md:justify-start items-center mb-[60px]">
              <h3 className="h3 font-bold">about me</h3>
            </div>
            {/* about me */}
            <div className="about-me flex flex-col md:flex-row items-center gap-[50px] p-[0] md:p-[70px] mb-[50px] md:mb-[0] ">
              {/* about me image */}
              <div className="about-image flex items-center justify-center max-w-[200px]">
                <Image
                  src={profile.src}
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  unoptimized
                  alt="profile"
                />
              </div>

              {/* about me text */}
              <div className="about-text flex flex-col justify-between items-center md:items-start gap-[15px]">
                <h2 className="h2 text-center ">Ismail Nasiru</h2>
                <p className="text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  perspiciatis doloribus dicta! Nulla vel, distinctio
                  doloremque, voluptates excepturi illo provident sapiente eius
                  explicabo id corporis asperiores. Cumque, maxime veritatis,
                  voluptatum repudiandae veniam inventore.
                </p>
                <a href="./Ismail_Nasiru_Resume.pdf" download>
                  <button className="resume-button">
                    <span>download resume</span>
                  </button>
                </a>
              </div>
            </div>
            {/* stacks */}
            <div className="about-stacks grid grid-cols-1 md:grid-cols-4 gap-[20px] mb-[70px] md:mb-[50px]">
              <div className="flex items-center p-[10px] border w-full rounded-xl">
                <div className="icon pr-[10px] border-r ">
                  <RiPagesLine size={40} className="text-primary" />
                </div>
                <div className="stack-text pl-[10px] flex flex-col">
                  <p className="font-black text-[12px]">HTML, CSS & JS</p>
                  <p className="text-[10px]">Fast responsive websites</p>
                </div>
              </div>
              <div className="flex items-center p-[10px] border w-full rounded-xl">
                <div className="icon pr-[10px] border-r ">
                  <RiReactjsFill
                    size={40}
                    className="text-primary font-black"
                  />
                </div>
                <div className="stack-text pl-[10px] flex flex-col">
                  <p className="font-black text-[12px]">React.js</p>
                  <p className="text-[10px]">Build your system with node</p>
                </div>
              </div>
              <div className="flex items-center p-[10px] border w-full rounded-xl">
                <div className="icon pr-[10px] border-r ">
                  <TbBrandReactNative size={40} className="text-primary" />
                </div>
                <div className="stack-text pl-[10px] flex flex-col">
                  <p className="font-black text-[12px]">React Native</p>
                  <p className="text-[10px]">Build your mobile app</p>
                </div>
              </div>
              <div className="flex items-center p-[10px] border w-full rounded-xl">
                <div className="icon pr-[10px] border-r ">
                  <FaWordpressSimple size={40} className="text-primary" />
                </div>
                <div className="stack-text pl-[10px] flex flex-col">
                  <p className="font-black text-[12px]">Wordpress</p>
                  <p className="text-[10px]">Create your eCommerce with PHP</p>
                </div>
              </div>
            </div>

            {/* experience */}
            <div className="experience grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              {/* experiene 1 */}
              <div className="border p-[20px] rounded-md">
                <div className="border-l pl-[20px]">
                  <p className="header font-black">
                    I&apos;ve had experiences with{" "}
                  </p>
                  <ul>
                    <li>
                      <p className="text-[14px]">Firebase Database</p>
                    </li>
                    <li>
                      <p className="text-[14px]">MySQL Database</p>
                    </li>
                    <li>
                      <p className="text-[14px]">GIT, GitHub, Bitbucket</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Coding PHP</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Figma, Adobe XD, Sketch</p>
                    </li>
                    <li>
                      <p className="text-[14px]">CSS Preprocessors</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Digital Marketing</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Coding Python (Django)</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* experiene 1 */}
              <div className="border p-[20px] rounded-md">
                <div className="border-l pl-[20px]">
                  <p className="header font-black">
                    I&apos;ve had experiences with{" "}
                  </p>
                  <ul>
                    <li>
                      <p className="text-[14px]">Firebase Database</p>
                    </li>
                    <li>
                      <p className="text-[14px]">MySQL Database</p>
                    </li>
                    <li>
                      <p className="text-[14px]">GIT, GitHub, Bitbucket</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Coding PHP</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Figma, Adobe XD, Sketch</p>
                    </li>
                    <li>
                      <p className="text-[14px]">CSS Preprocessors</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Digital Marketing</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Coding Python (Django)</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* experiene 1 */}
              <div className="border p-[20px] rounded-md">
                <div className="border-l pl-[20px]">
                  <p className="header font-black">
                    I&apos;ve had experiences with{" "}
                  </p>
                  <ul>
                    <li>
                      <p className="text-[14px]">Firebase Database</p>
                    </li>
                    <li>
                      <p className="text-[14px]">MySQL Database</p>
                    </li>
                    <li>
                      <p className="text-[14px]">GIT, GitHub, Bitbucket</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Coding PHP</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Figma, Adobe XD, Sketch</p>
                    </li>
                    <li>
                      <p className="text-[14px]">CSS Preprocessors</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Digital Marketing</p>
                    </li>
                    <li>
                      <p className="text-[14px]">Coding Python (Django)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className="project relative z-20 mt-[60px] xl:mt-[150px]">
          <div className="container mx-auto mb-[60px] md:mb-[150px]">
            {/* contact header */}
            <div className="cases-header flex justify-center items-center mb-[60px]">
              <h3 className="h3 font-bold">contact me</h3>
            </div>

            {/* socials */}
            <div className="contact-socials flex items-center justify-center gap-[25px] md:gap-[75px] mb-[40px]">
              <Link href="https://wa.link/2cyz1z">
                <IoLogoWhatsapp
                  size={30}
                  className="text-primary hover:text-[#25D366] cursor-pointer transition-text-color duration-500 ease-in-out"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/nasiru-ismail-ab8a5520b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin
                  size={30}
                  className="text-primary hover:text-[#0077B5] cursor-pointer transition-text-color duration-500 ease-in-out"
                />
              </Link>
              <Link href="https://www.instagram.com/ismailnasiru_/profilecard/?igsh=bTFwanJtamI4Z3Nu">
                <FaInstagram
                  size={30}
                  className="text-primary hover:text-[#e1306c] cursor-pointer transition-text-color duration-500 ease-in-out"
                />
              </Link>
              <Link href="https://github.com/Nasir6276">
                <FaGithub
                  size={30}
                  className="text-primary hover:text-[#171515] cursor-pointer transition-text-color duration-500 ease-in-out"
                />
              </Link>
              <Link href="mailto:ni3262019@gmail.com">
                <SiGmail
                  size={30}
                  className="text-primary hover:text-[#EA4335] cursor-pointer transition-text-color duration-500 ease-in-out"
                />
              </Link>
              <Link href="https://x.com/ismailnasiru_?t=NxqfPFYhc0nhTlNUDW4rrg&s=09">
                <FaXTwitter
                  size={30}
                  className="text-primary hover:text-[#171515] cursor-pointer transition-text-color duration-500 ease-in-out"
                />
              </Link>
            </div>

            {/* order */}
            <div className="cases-header flex justify-center items-center">
              <p>order of service</p>
            </div>
          </div>
        </section>

        {/* footer */}
        <section className="relative z-20 mb-[30px]">
          <div className="container mx-auto flex items-center justify-between">
            <h2 className="h2 font-black">nsr.</h2>
            <p>coded by me</p>
          </div>
        </section>
      </main>
    </div>
  );
}
