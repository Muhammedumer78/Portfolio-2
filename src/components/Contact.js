import React from "react";

// motion
import { RevealWrapper } from "next-reveal";



const Contact = () => {
  return (
    <section className="py-16 lg:section mt-96" id="contact">
      <div className="container mx-auto">
      <RevealWrapper 
          origin='left' delay={200} duration={1000} distance='500px' reset={true}
         >
        <div className="flex flex-col lg:flex-row ">
          {/* text  */}
          <div className="flex-1 flex justify-start items-center">
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get In Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Let's work <br /> Together!
              </h2>
            </div>
          </div>
          {/* form  */}
        
          <form className="flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start">
            <input
              className=" bg-transparent  border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type={"text"}
              placeholder="Your E-mail "
            ></input>
              <input
              className=" bg-transparent  border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type={"text"}
              placeholder="Your Name "
            ></input>
            <textarea className=" resize-none mb-12  bg-transparent  border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all "
            placeholder="Your Message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </form>
       
        </div>
        </RevealWrapper>
      </div>

    </section>
  );
};

export default Contact;
