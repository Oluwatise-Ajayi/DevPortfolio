"use client";
import React, { useState } from 'react';
import { Mail, Code2, FileText, Info, Download } from 'lucide-react';

const HeroProfile = () => {


  return (
    <div className="md:col-span-3 md:row-span-2 bg-[#0e0e0e] rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
      {/* Toast Notification */}


      {/* Japanese Watermark Background */}
      <div className="absolute -top-4 right-10 text-[8rem] font-black text-white/[0.03] select-none pointer-events-none leading-none z-0 writing-vertical-rl">
        システム
      </div>
      <div className="absolute top-20 right-20 text-[6rem] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0">
        エンジニア
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full w-fit mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-green-400 uppercase tracking-wide">Open to Work</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover bg-gray-800"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Oluwatise Ajayi</span>
            </h1>
            <p className="text-xl text-white/90 font-medium mb-2">
                Systems Engineer & Backend Developer
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              I design systems that scale, APIs that last, and software that doesn’t fall apart at 2 a.m.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a href="mailto:oluwatiseajayi393@gmail.com" className="bg-white text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
                <Mail size={18} /> Contact Me
              </a>
              <a 
                href="/projects"
                className="bg-transparent border border-white/20 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Code2 size={18} /> View Projects
              </a>
              <a 
                href="/Ajayi Oluwatise Resume.pdf" 
                download
                className="bg-green-500/10 border border-green-500/20 text-green-400 font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-green-500/20 transition-colors"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
