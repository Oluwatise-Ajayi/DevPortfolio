import React from 'react';
import Navbar from '../components/Navbar';
import HeroProfile from '../components/HeroProfile';
import MusicPlayer from '../components/MusicPlayer';
import TechStack from '../components/TechStack';
import GithubGraph from '../components/GithubGraph';
import ProjectCard from '../components/ProjectCard';
import CodeSnippet from '../components/CodeSnippet';
import Experience from '../components/Experience';
import Connect from '../components/Connect';
import Education from '../components/Education';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-green-500/30 selection:text-green-200 p-4 md:p-8">
      
      <Navbar />

      {/* Main Grid Layout (Bento Box) */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 max-w-7xl mx-auto">

        <HeroProfile />

        <MusicPlayer />

        <TechStack />

        <GithubGraph />

        <ProjectCard />

        <CodeSnippet />

        <Experience />

        <Connect />
        
        <Education />

      </div>
    </div>
  );
}
