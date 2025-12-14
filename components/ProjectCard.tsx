import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = () => {
  return (
    <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] rounded-3xl p-0 border border-white/5 relative overflow-hidden group">
       <div className="absolute inset-0 bg-[url('https://placehold.co/400x200/0f172a/1e293b?text=Project')] opacity-20 mix-blend-overlay"></div>
       <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-end">
         <div className="flex items-center gap-2 mb-2">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
           <span className="text-xs font-mono text-green-500">MICROSERVICES</span>
         </div>
         <h3 className="text-xl font-bold text-white mb-2">Distributed Order System</h3>
         <p className="text-sm text-gray-400 mb-4 max-w-sm">Event-driven architecture handling 10k+ requests/sec. Built with Go, Kafka, and Kubernetes.</p>
         
         <div className="flex gap-2">
           {['Golang', 'Kafka', 'K8s'].map(tag => (
             <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-gray-300 border border-white/10">
               {tag}
             </span>
           ))}
         </div>
         
         <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
            <button className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform">
              <ExternalLink size={20} />
            </button>
         </div>
       </div>
    </div>
  );
};

export default ProjectCard;
