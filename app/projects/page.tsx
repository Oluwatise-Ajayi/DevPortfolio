"use client";
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { ExternalLink, Github, Video, MessageSquare, BookOpen, Server } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "KazeWallet",
      description: "Digital wallet application for secure transactions and asset management.",
      tags: ["Digital Wallet", "Frontend", "Secure"],
      icon: <ExternalLink size={24} className="text-teal-400" />,
      color: "from-teal-500/20 to-green-500/5",
      border: "border-teal-500/20",
      demoLink: "https://kazewallet.onrender.com/docs",
      githubLink: "https://github.com/Oluwatise-Ajayi/KazeWallet"
    },
    {
      title: "WalletService",
      description: "Robust backend service handling wallet operations, transactions, and security protocols.",
      tags: ["Backend", "Wallet", "Transactions"],
      icon: <Server size={24} className="text-gray-400" />,
      color: "from-gray-500/20 to-slate-500/5",
      border: "border-gray-500/20",
      demoLink: "https://wallet-service-jade.vercel.app/",
      githubLink: "https://github.com/Oluwatise-Ajayi/WalletService"
    },
    {
      title: "AI Chatbot",
      description: "Tested with Ollama on local machine. Trained with FHIR API to get and retrieve health related data. Designed a user-friendly frontpage for easy readability of conversations.",
      tags: ["Ollama", "FHIR API", "MERN Stack", "EJS"],
      icon: <MessageSquare size={24} className="text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/5",
      border: "border-purple-500/20",
      demoLink: "https://health-chatbot-byteengine.onrender.com/#",
      githubLink: "https://github.com/Oluwatise-Ajayi/health-chatbot-byteengine"
    },
    {
      title: "Blog Site",
      description: "Practiced all basic Backend functionality using the MERN stack. Used EJS for rendering dynamic pages on the front end.",
      tags: ["MERN Stack", "EJS", "Backend", "Dynamic Rendering"],
      icon: <BookOpen size={24} className="text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/5",
      border: "border-yellow-500/20",
      demoLink: "https://blogsite-demo.onrender.com/",
      githubLink: "https://github.com/Oluwatise-Ajayi/Blog-Site"
    },
    {
      title: "Distributed Notification Service (Team Project)",
      description: "Microservices platform for email & push notifications with async RabbitMQ workflows, service discovery, retries & monitoring. Designed and implemented user CRUD logic with NestJS + TypeScript.",
      tags: ["FastAPI", "NestJS", "RabbitMQ", "Redis"],
      icon: <Server size={24} className="text-green-400" />,
      color: "from-green-500/20 to-emerald-500/5",
      border: "border-green-500/20",
      demoLink: null,
      githubLink: "https://github.com/Oluwatise-Ajayi/Distributed-notification-service"
    },
    {
      title: "HNG13 Currency Exchange",
      description: "Built a REST API that converts currencies using real-time or mock FX data. Implemented error handling, query validation, and clean controller/service separation.",
      tags: ["REST API", "FX Data", "Backend"],
      icon: <Server size={24} className="text-indigo-400" />,
      color: "from-indigo-500/20 to-blue-500/5",
      border: "border-indigo-500/20",
      demoLink: null,
      githubLink: "https://github.com/Oluwatise-Ajayi/hng13-currency-exchange"
    },
    {
      title: "String Analyzer API",
      description: "Developed endpoints that analyze strings (length, word count, character properties, etc.). Wrote clean, testable logic with proper DTOs.",
      tags: ["String Analysis", "API", "Backend"],
      icon: <Server size={24} className="text-orange-400" />,
      color: "from-orange-500/20 to-red-500/5",
      border: "border-orange-500/20",
      demoLink: null,
      githubLink: "https://github.com/Oluwatise-Ajayi/string_analyzer"
    },
    {
      title: "SummaryDoc",
      description: "Intelligent document summarization tool for quick insights and efficient information processing.",
      tags: ["AI", "Document Processing", "Summarization"],
      icon: <BookOpen size={24} className="text-pink-400" />,
      color: "from-pink-500/20 to-rose-500/5",
      border: "border-pink-500/20",
      demoLink: null,
      githubLink: "https://github.com/Oluwatise-Ajayi/SummaryDoc"
    },
    {
      title: "StudentHub",
      description: "Comprehensive educational platform for student management and learning resources.",
      tags: ["Education", "Platform", "Management"],
      icon: <BookOpen size={24} className="text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/5",
      border: "border-cyan-500/20",
      demoLink: null,
      githubLink: "https://github.com/Oluwatise-Ajayi/StudentHub"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-green-500/30 selection:text-green-200 p-4 md:p-8">
      <Navbar />
      
      <div className="max-w-7xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Projects</h1>
         <p className="text-gray-400 mb-12 max-w-2xl text-lg">
          A showcase of technical projects demonstrating expertise in backend systems, AI integration, and frontend development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`group relative rounded-3xl bg-[#0e0e0e] border ${project.border} p-8 overflow-hidden hover:bg-[#151515] transition-all duration-300`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                     {project.githubLink && (
                       <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                          <Github size={20} />
                       </a>
                     )}
                     {project.demoLink ? (
                       <a href={project.demoLink} target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                          <ExternalLink size={20} />
                       </a>
                     ) : (
                      <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white cursor-not-allowed opacity-50">
                        <ExternalLink size={20} />
                     </button>
                     )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


