"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import { 
  Code2, 
  Database, 
  Server, 
  Layout, 
  Cloud, 
  Terminal, 
  Brain, 
  CreditCard, 
  Settings, 
  PenTool,
  Network
} from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills }: { title: string, icon: any, skills: string[] }) => (
  <div className="bg-[#0e0e0e] border border-white/5 rounded-3xl p-6 hover:border-green-500/20 transition-all group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-white/5 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-bold text-gray-200">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-400 font-mono hover:bg-white/10 hover:text-white transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-green-500/30 selection:text-green-200 p-4 md:p-8">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-8 mb-20">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl font-bold text-white mb-6">High-Impact <span className="text-green-400">Skills</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            A curated collection of technologies, tools, and practices that I use to deliver clean, reliable, and innovative software. 
            I build the invisible systems that make modern products work.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <SkillCategory 
            title="Programming Languages" 
            icon={Code2}
            skills={['TypeScript', 'JavaScript', 'Python', 'SQL']} 
          />

          <SkillCategory 
            title="Libraries & Frameworks" 
            icon={Layout}
            skills={['React.js', 'Next.js', 'NestJS', 'FastAPI', 'Express.js', 'Prisma', 'TypeORM', 'Tailwind CSS', 'NextAuth.js']} 
          />

           <SkillCategory 
            title="Databases & Data Tools" 
            icon={Database}
            skills={['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase']} 
          />

          <SkillCategory 
            title="DevOps & Cloud" 
            icon={Cloud}
            skills={['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Vercel', 'Nginx', 'GitHub Actions', 'CI/CD', 'Linux', 'Kafka']} 
          />

          <SkillCategory 
            title="AI & Machine Learning" 
            icon={Brain}
            skills={['OpenAI API', 'Vercel AI SDK', 'Mastra AI', 'Deep Learning']} 
          />
          
          <SkillCategory 
            title="Architecture & Security" 
            icon={Network}
            skills={['RESTful APIs', 'Microservices', 'Clean Architecture', 'JWT Authentication', 'RBAC', 'System Design']} 
          />

           <SkillCategory 
            title="Tools & Environment" 
            icon={Terminal}
            skills={['Git', 'VS Code', 'Cursor', 'Nx Monorepos', 'ESLint', 'Webpack', 'Antigravity']} 
          />

          <SkillCategory 
            title="Payments & Integrations" 
            icon={CreditCard}
            skills={['Paystack', 'Webhooks', 'Third-party APIs']} 
          />

        </div>

        {/* Visualization Section at the Bottom */}
        <div className="mt-24 pt-16 border-t border-white/5">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-white mb-2">My Engineering Workflow</h2>
                <p className="text-gray-500">How I approach building scalable systems</p>
            </div>

            <div className="relative max-w-3xl mx-auto h-[400px] bg-[#0e0e0e] rounded-3xl border border-white/5 p-8 flex flex-col items-center justify-center overflow-hidden">
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                {/* API Methods */}
                <div className="flex gap-4 md:gap-8 mb-12 z-10">
                    {['GET', 'POST', 'PUT', 'DELETE'].map(method => (
                        <div key={method} className="bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-full text-xs font-mono font-bold text-gray-400 shadow-lg">
                            {method}
                        </div>
                    ))}
                </div>

                {/* Connection Lines (Simulated with absolute divs) */}
                <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-[60%] h-[40px] border-t border-x border-blue-500/30 rounded-t-3xl"></div>
                <div className="absolute top-[170px] left-1/2 -translate-x-1/2 h-[40px] w-[1px] bg-gradient-to-b from-blue-500/30 to-blue-500"></div>

                {/* Central Hub */}
                <div className="relative z-10 mb-12">
                     <div className="bg-[#0e0e0e] border border-blue-500/30 px-6 py-4 rounded-xl flex items-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                        <Settings className="text-blue-400 animate-spin-slow" size={24} />
                        <span className="text-white font-mono text-sm">Customized REST API Gateway</span>
                     </div>
                </div>

                {/* Connection to You */}
                 <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 h-[60px] w-[200px] overflow-hidden">
                    <div className="w-full h-full rounded-full border-t border-white/10 opacity-50"></div>
                 </div>

                {/* YOU Node */}
                <div className="relative z-10 mt-auto">
                    <div className="w-16 h-16 bg-[#1a1a1a] rounded-full border-4 border-[#0e0e0e] shadow-2xl flex items-center justify-center relative">
                         <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                         <div className="font-bold text-white text-xs">YOU</div>
                    </div>
                </div>

            </div>
        </div>

        <div className="text-center mt-12 text-gray-600 font-mono text-sm">
            <p>Always learning, always leveling up ⬆️</p>
        </div>

      </div>
    </div>
  );
};

export default SkillsPage;
