import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Connect = () => {
  return (
    <div className="md:col-span-2 md:row-span-1 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5">
       <div className="flex items-center gap-2 mb-4 text-white">
         <Github size={18} />
         <h3 className="font-bold">Connect</h3>
       </div>
       
       <div className="grid grid-cols-2 gap-3">
         {[
           { icon: Github, label: 'GitHub', handle: '@alexc_dev' },
           { icon: Linkedin, label: 'LinkedIn', handle: '/in/alexchen' },
           { icon: Twitter, label: 'Twitter / X', handle: '@alex_syseng' },
           { icon: Mail, label: 'Email', handle: 'alex@dev.co' },
         ].map((social, i) => (
           <a key={i} href="#" className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors group">
             <div className="bg-black/50 p-2 rounded-lg text-gray-400 group-hover:text-green-400 transition-colors">
               <social.icon size={16} />
             </div>
             <div className="flex flex-col">
               <span className="text-xs text-gray-400 font-medium">{social.label}</span>
               <span className="text-xs text-gray-500">{social.handle}</span>
             </div>
             <ExternalLink size={12} className="ml-auto text-gray-700 group-hover:text-gray-400" />
           </a>
         ))}
       </div>
    </div>
  );
};

export default Connect;
