import React from "react";
import { UseState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { SiReact,SiNextdotjs,SiTailwindcss,SiNodedotjs,SiMongodb } from "react-icons/si";
import { PERSONAL_INFO,STATS } from "../../utils/constans";
import { scrollToSection} from "../../hooks/useScrollSpy";
import Fadein from "../animations/Fadein";
import RadialGradientBackground from "../background/RadialGradientBackground";



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
     <RadialGradientBackground variant="hero"/>
      {/*content container*/}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/*left text*/}
          <div className="text-left">
            <Fadein delay={0}>
              <div className="inline-flex items-center gap-2 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title}| based in {PERSONAL_INFO.location}
                </span>
              </div>
            </Fadein>

            <Fadein delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
               full stack developer  Portfolio
              </h1>
            </Fadein>
            <Fadein delay={200}>
              <p className="text-lg text-white/70 max-w-137.5 mb-8">
              I'm a passionate full stack developer with expertise in React, Next.js, Tailwind CSS, Node.js, and MongoDB. I create dynamic and responsive web applications that deliver exceptional user experiences. With a strong focus on clean code and best practices, I strive to build scalable and efficient solutions that meet client needs. Explore my portfolio to see my projects and skills in action.
              </p>
           </Fadein>
            <Fadein delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-0 mb-12 group "
              >
                <div className="realtive z-10 bg-white text-[#212121] rounded-[17px] px-6,5 py-3.25 text-base font-medium border border-white ">
                get in touch
                </div>
              </button>
           </Fadein>

            <Fadein delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat,index) => (
                  <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0 ">
                    <div className="text-2xl font-normal text-primary mb-2 font-mono">
                      {stat.value}
                      </div>
                      <p className="text-sm text-white leading-snug">
                        {stat.label}

                      </p>
  
                  </div>  
                ))}
              </div>
           </Fadein> 

          </div>
        
        {/*right image */}
        <Fadein delay={200}>
        <div className="relative ">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl">  </div>

            </div>
             {/*image container */}
            <div className="relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]">
              <img
              src="\mecode.jpg"
                alt="developer working"
                className="w-full h-full object-cover"
              />
            </div>
              {/*TEC LOGO  */}
              <div className="absolute bottom-6 left-6 z-20">
                <Fadein delay={500}>
                  <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">

                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <SiReact className="w-full h-full text-primary"/>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <SiNextdotjs className="w-full h-full text-primary"/>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <SiNodedotjs className="w-full h-full text-primary"/>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <SiTailwindcss className="w-full h-full text-primary"/>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <SiMongodb className="w-full h-full text-primary"/>
                    </div>
                 </div>
               </Fadein>

            </div>
        </div>
       </div>  

     </Fadein>
     </div>
</div>
<button
  onClick={() => scrollToSection('about')}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
>
  <ChevronDown className="w-8 h-8 text-primary" />
</button>

 </section>
  );
} 
export default Hero;

