import React from "react";
// images
import Image from "../assets/img.jpg";
//icons
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto"> 
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">    
          {/* text */}
          <div>
          <div className="flex-1  text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden "
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Muhammed <span>Umer</span>
            </motion.h1>
          </div>
          <motion.div
           
           variants={fadeIn("up", 0.4)}
           initial="hidden "
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className=" text-white mr-4">I am a </span>
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Software Engineer",
                2000,
              ]}
              speed={50}
              className="text-accent "
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <p className="mb-8 max-w-lg mx-auto lg:mx-0 ">
            Programmers write code for computer programs and mobile
            applications. They also are involved in maintaining, debugging and
            troubleshooting systems
          </p>
          <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 ">
            <button className="btn btn-lg ">Contact me</button>
            <a href="#" className="text-gradient btn-link">
              My Portfolio
            </a>
          </div>
          {/* socials */}
          <div
            className="flex text-[20px] gap-x-6 maxw-w-max mx-auto lg
        :mx-0 "
          >
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
          </div>
          <div className="hidden mt-5 lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="um" className="rounded-full"></img>
          </div>
       
       
       
       </div>
    </div>
  
    </section>
  );
};

export default Banner;
