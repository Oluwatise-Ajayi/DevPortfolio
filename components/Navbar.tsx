"use client";
import React, { useState } from 'react';
import { Terminal, Info, Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center mb-8 px-2 relative">
       {/* Toast Notification */}


      <div className="flex items-center gap-2 font-mono text-lg font-bold text-green-400">
        <span>&lt;DevPortfolio/&gt;</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="/" className="hover:text-white transition-colors">Home</a>
        <a href="/projects" className="hover:text-white transition-colors">Projects</a>
        <a href="/skills" className="hover:text-white transition-colors">Stack</a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-gray-300 hover:text-white z-50 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#050505]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-200">
            <a href="/" className="text-2xl font-bold text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/projects" className="text-2xl font-bold text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="/skills" className="text-2xl font-bold text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Stack</a>
            <a 
                href="/Ajayi Oluwatise Resume.pdf" 
                download
                className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full text-lg transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
            >
                <Download size={20} /> Resume
            </a>
        </div>
      )}

      <a 
        href="/Ajayi Oluwatise Resume.pdf" 
        download
        className="hidden md:flex bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)] items-center gap-2"
      >
        <Download size={16} /> Resume
      </a>
    </nav>
  );
};

export default Navbar;
