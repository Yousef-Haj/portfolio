import React from "react";
import { Skills } from "../../data/skills";
import * as Icons from 'lucide-react'
import Fadein from "../animations/Fadein";


const Skill =() => {
    // Categorize skills
        const SkillCategories = {
        'Frontend Development': [
        Skills.find(s => s.name === 'React.js'),
        Skills.find(s => s.name === 'JavaScript'),
        Skills.find(s => s.name === 'TypeScript'),
        Skills.find(s => s.name === 'Next.js'),
        Skills.find(s => s.name === 'Tailwind CSS'),
        Skills.find(s => s.name === 'Redux'),
        ].filter(Boolean),
        'BDackend & APIs': [
             Skills.find(s => s.name === 'Node.js'),
        Skills.find(s => s.name === 'REST APIs'),
        ].filter(Boolean),
        'Tools & others': [
         Skills.find(s => s.name === 'Git & GitHub'),
        Skills.find(s => s.name === 'Responsive Design'),
         Skills.find(s => s.name === 'Figma'),
        ].filter(Boolean),
    };
    // Get proficiency percentage
         const GetProficiencyLevel = (level) => {
         const levels = {
                'Expert': 95,
                'Advanced': 80,
                'Intermediate': 65,
                };
           return levels [level] || 50;
                };
                // Get level color
                const GetLevelColor = (level) =>{
                     const colors = {
                'Expert': 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
                'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
                'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/20 border-emerald-500/30 '
                };
                return colors [level] ||  'text-gray-100 bo-gray-500/20 border-gray-500/30 '

                }
               
    return<section id="skills" className="relative py-20 bg-black overflow-hidden">
     {/*animated backgroud */}
     <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"/>
               <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"/>
          
     </div>
     <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fadein delay={100}>
               <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                         <Icons.Sparkles className="w-4 h-4 text-primary"/>
                         <span className="text-sm text-primary font-medium">My Expertise</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                         Skills & Tecnologies

                    </h2>
                    <p className=" text-lg text-white/50 max-2xl mx-auto">
                       A comprehensive overviwe of my technical skills   
                    </p>

               </div>
          </Fadein>
         {/*skills categories */}
      <Fadein delay={500}>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    {Object.entries(SkillCategories).map(
      ([category, categorySkills], categoryIndex) => (

        <Fadein key={category} delay={categoryIndex * 100}>
          <div className="group relative bg-white/5 border border-white/10 rounded-xl p-6">

            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-1 h-8 bg-linear-to-b from-primary/30 to-primary"></div>
              <h3 className="text-xl font-medium text-white">
                {category}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-5">
              {categorySkills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                const proficiency = GetProficiencyLevel(skill.level);

                return (
                  <div key={skillIndex} className="space-y-2">

                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">

                        {/* Icon */}
                        <div className="p-2 bg-white/5 rounded-lg">
                          {IconComponent && (
                            <IconComponent className="w-4 h-4 text-primary" />
                          )}
                        </div>

                        {/* Skill Name */}
                        <div className="text-sm font-medium text-white">
                          {skill.name}
                        </div>
                      </div>

                      {/* Percentage */}
                      <span className="text-xs text-white/50">
                        {proficiency}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-1.5 bg-white/40 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${proficiency}%` }}
                      ></div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/40 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300 pointer-events-none"></div>

          </div>
        </Fadein>

      )
    )}

  </div>
</Fadein>
     </div>
    </section>

}
export default Skill