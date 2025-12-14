import React from 'react';
import { Cpu } from 'lucide-react';

const TechStack = () => {
  return (
    <div className="md:col-span-1 md:row-span-2 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5 flex flex-col">
       <div className="flex items-center gap-2 mb-6">
         <Cpu size={18} className="text-green-500" />
         <h3 className="font-bold text-white">Tech Stack</h3>
       </div>
       
       <div className="grid grid-cols-2 gap-3 h-full">
         {['Python', 'Docker', 'AWS', 'Rust'].map((tech) => (
           <div key={tech} className="bg-white/5 rounded-2xl flex flex-col items-center justify-center p-4 hover:bg-white/10 hover:scale-105 transition-all cursor-default border border-transparent hover:border-green-500/30">
             <div className="w-8 h-8 bg-gray-700 rounded mb-2"></div>
             <span className="text-xs font-medium text-gray-300">{tech}</span>
           </div>
         ))}
       </div>
    </div>
  );
};

export default TechStack;
