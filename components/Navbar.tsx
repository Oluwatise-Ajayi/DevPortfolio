import React from 'react';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-8 px-2">
      <div className="flex items-center gap-2 text-green-400 font-mono text-lg font-bold">
        <Terminal size={20} />
        <span>&lt;DevPortfolio/&gt;</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">Projects</a>
        <a href="#" className="hover:text-white transition-colors">Stack</a>
      </div>

      <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)]">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
