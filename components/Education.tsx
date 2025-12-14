"use client";
import React, { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Timeline: Jan 2021 - July 2027
        const startDate = new Date('2021-01-01').getTime();
        const endDate = new Date('2027-07-01').getTime();
        const now = new Date().getTime();

        const totalDuration = endDate - startDate;
        const elapsed = now - startDate;

        // Calculate percentage (clamped 0-100)
        const percent = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);
        
        // Small delay for animation on mount
        setTimeout(() => setProgress(percent), 100);
    }, []);

  return (
    <div className="md:col-span-2 md:row-span-1 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5 flex flex-col justify-between">
       <div className="flex items-center gap-2 mb-2 text-blue-400">
         <GraduationCap size={20} />
         <h3 className="font-bold text-white">Education</h3>
       </div>

       <div>
           <h4 className="text-xl font-bold text-white">University of Lagos</h4>
           <p className="text-gray-400 text-sm">B.Sc. Systems Engineering</p>
       </div>
       
       <div className="mt-6">
           <div className="flex justify-between text-xs text-gray-500 font-mono mb-2">
               <span>2021</span>
               <span>July 2027</span>
           </div>
           
           {/* Progress Line */}
           <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
               <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
               >
                   {/* Glowing tip */}
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
               </div>
           </div>
           
           <div className="text-right mt-1">
               <span className="text-[10px] text-blue-400/80 font-mono">
                   {Math.floor(progress)}% Complete
               </span>
           </div>
       </div>
    </div>
  );
};

export default Education;
