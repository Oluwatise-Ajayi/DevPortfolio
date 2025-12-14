import { Cpu, CreditCard, Cloud } from 'lucide-react';

const TechStack = () => {
  const stack = [
    { name: 'TypeScript', slug: 'typescript', hex: '3178C6', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    { name: 'NestJS', slug: 'nestjs', hex: 'E0234E', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { name: 'FastAPI', slug: 'fastapi', hex: '009688', color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
    { name: 'Node.js', slug: 'nodedotjs', hex: '339933', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
    { name: 'PostgreSQL', slug: 'postgresql', hex: '4169E1', color: 'text-blue-300', bg: 'bg-blue-300/10', border: 'border-blue-300/20' },
    { name: 'Prisma', slug: 'prisma', hex: '2D3748', color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20' },
    { name: 'Redis', slug: 'redis', hex: 'DC382D', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { name: 'Docker', slug: 'docker', hex: '2496ED', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { name: 'AWS', icon: Cloud, hex: 'FF9900', color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
    { name: 'Nginx', slug: 'nginx', hex: '009639', color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    { name: 'Linux', slug: 'linux', hex: 'FCC624', color: 'text-yellow-200', bg: 'bg-yellow-200/10', border: 'border-yellow-200/20' },
    { name: 'React', slug: 'react', hex: '61DAFB', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
    { name: 'Next.js', slug: 'nextdotjs', hex: '000000', color: 'text-white', bg: 'bg-white/10', border: 'border-white/20' },
    { name: 'Tailwind', slug: 'tailwindcss', hex: '06B6D4', color: 'text-cyan-300', bg: 'bg-cyan-300/10', border: 'border-cyan-300/20' },
    { name: 'Git', slug: 'git', hex: 'F05032', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
     // Filling remaining space with emerging tech or tooling
    { name: 'Paystack', icon: CreditCard, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  ];

  return (
    <div className="md:col-span-1 md:row-span-2 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5 flex flex-col">
       <div className="flex items-center gap-2 mb-6">
         <Cpu size={18} className="text-green-500" />
         <h3 className="font-bold text-white">Tech Stack</h3>
       </div>
       
       <div className="flex flex-wrap content-start gap-4 h-full">
         {stack.map((tech: any) => (
           <div 
             key={tech.name} 
             className={`px-4 py-2 rounded-xl flex items-center justify-center gap-2 
                         ${tech.bg} border ${tech.border} hover:scale-105 transition-transform cursor-default`}
           >
             {tech.icon ? (
                 <tech.icon size={16} className={tech.color} />
             ) : (
                 <img 
                   src={`https://cdn.simpleicons.org/${tech.slug}/${tech.hex}`}
                   alt={tech.name}
                   className="w-4 h-4"
                   title={tech.name}
                 />
             )}
             <span className={`text-xs font-bold ${tech.color}`}>{tech.name}</span>
           </div>
         ))}
       </div>
    </div>
  );
};

export default TechStack;
