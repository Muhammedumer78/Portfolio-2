import React from "react";
// motion
import { RevealWrapper } from "next-reveal";

//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/logo23.webp";
import Img4 from "../assets/meta.png";

const Work = () => {
  return (
    
    <section className="section" id="work">

      <div className="container mx-auto">
      < RevealWrapper   origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <div className="flex flex-col lg:flex-row gap-x-10 mt-24 ">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 mt-96 lg:mb-0">
            {/* text  */}
            <div>
              <h2 className="h2 leading-tight text-accent ">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16  ">
                Researching, designing, implementing, and managing software
                programs. Testing and evaluating new programs. Identifying areas
                for modification in existing programs and subsequently
                developing these modifications.
              </p>
              <button className="btn btn-sm ">View all Projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* IMG */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img1}
                alt="ume"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50  ">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50  ">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </div>
       
          <div className="flex-1 flex flex-col gap-y-10  ">
            <div className="mt-96 group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* IMG */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img2}
                alt="ume"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50  ">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50  ">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            <div className=" mt-16 group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* IMG */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img3}
                alt="ume"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50  ">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50  ">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            <div className=" mt-16 group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* IMG */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img4}
                alt="ume"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50  ">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50  ">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </div>
        </div>
        </RevealWrapper>
      </div>
  
    </section>
  );
};

export default Work;
