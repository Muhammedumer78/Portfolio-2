import React from "react";

// icons
import { BsArrowUpRight } from "react-icons/bs";



//services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "A UI developer is a tech professional who carries out the process of conceiving, designing, and coding a user interface.",
    link: "Learn More",
  },
  {
    name: "Development",
    description:
      "A UI developer is a tech professional who carries out the process of conceiving, designing, and coding a user interface. ",
    link: "Learn More",
  },
  {
    name: "Digital Marketing",
    description:
      "A UI developer is a tech professional who carries out the process of conceiving, designing, and coding a user interface. ",
    link: "Learn More",
  },
  {
    name: "Product Branding",
    description:
      "A UI developer is a tech professional who carries out the process of conceiving, designing, and coding a user interface. ",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto sm: mt-[600px]">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <div className="flex-1  lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            <h2 className="h2 text-accent mb-8 mt-8"> What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </div>
          {/* services */}
          <div>
            {/* services list */}
            <div className="">
              {services.map((service, index) => {
                // destructure services
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6  ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                      <a href="#" className="text-gradient text-sm ">{link}
                      
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
