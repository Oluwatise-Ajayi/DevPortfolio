import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = () => {
  return (
    <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] rounded-3xl p-0 border border-white/5 relative overflow-hidden group">
       <div className="absolute inset-0 bg-[url('https://placehold.co/400x200/0f172a/1e293b?text=Notification+System')] opacity-20 mix-blend-overlay"></div>
       <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-end">
         <div className="flex items-center gap-2 mb-2">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
           <span className="text-xs font-mono text-green-500">MICROSERVICES</span>
         </div>
         <h3 className="text-xl font-bold text-white mb-2">Distributed Notification System</h3>
         <p className="text-sm text-gray-400 mb-4 max-w-sm">
            Microservices platform for email & push notifications with async RabbitMQ workflows, service discovery, retries & monitoring.
         </p>
         
         <div className="flex flex-wrap gap-2 mb-1">
           {['FastAPI', 'NestJS', 'RabbitMQ', 'Redis'].map(tag => (
             <span key={tag} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-medium text-gray-300 border border-white/10">
               {tag}
             </span>
           ))}
         </div>
         
         <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
            <a 
                href="https://github.com/Oluwatise-Ajayi/Distributed-notification-service" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform flex items-center justify-center"
            >
              <ExternalLink size={20} />
            </a>
         </div>
       </div>
    </div>
  );
};

export default ProjectCard;
