import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/myImage.png";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
         <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/shrikant-paringe",
      style: "rounded-2xl",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Shrikant2603",
      style: "rounded-2xl",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shrikantparinge@gmail.com",
      style: "rounded-2xl",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-2xl",
      download: true,
    },
  ];


  return (
      <div
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a frontend developer with a passion for web development. I
            specialize in React, Bootstrap, and Tailwind CSS. My portfolio
            website showcases my skills and dedication to the field. Always
            eager for new challenges.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>

      <div className="lg:hidden flex w-full justify-center py-10 px-4 bg-gray-800">
        <ul className="flex justify-center gap-4">
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-center items-center w-14 h-14 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-center items-center w-full h-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
};

export default Home;
