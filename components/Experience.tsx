import React from 'react';
import { Server } from 'lucide-react';

const Experience = () => {
  return (
    <div className="md:col-span-2 md:row-span-1 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5">
       <div className="flex items-center gap-2 mb-6 text-green-500">
         <Server size={18} />
         <h3 className="font-bold text-white">Experience</h3>
       </div>
       
       <div className="space-y-6 relative">
         <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-gray-800"></div>
         
         {[
           { role: 'Senior Backend Engineer', company: 'TechCorp Inc', year: '2022 - Present', color: 'bg-green-500' },
           { role: 'Systems Administrator', company: 'DataFlow Systems', year: '2019 - 2022', color: 'bg-gray-600' },
           { role: 'DevOps Intern', company: 'StartUp XYZ', year: '2018 - 2019', color: 'bg-gray-600' }
         ].map((job, i) => (
           <div key={i} className="relative pl-6">
             <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0e0e0e] ${job.color}`}></div>
             <h4 className="text-sm font-bold text-gray-200">{job.role}</h4>
             <div className="flex justify-between items-center text-xs mt-1">
                <span className="text-green-400">{job.company}</span>
                <span className="text-gray-600">{job.year}</span>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
};

export default Experience;
