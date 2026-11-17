"use client";
import React, { useState } from 'react';
import { Server, Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  color: string;
  badgeColor: string;
  highlights: string[];
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Backend Developer',
    company: 'Boolbyte Technologies',
    type: 'Paid startup engagement',
    location: 'Remote, Nigeria',
    period: 'Jan 2025 – Jan 2026',
    color: 'bg-green-500',
    badgeColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    highlights: [
      'Developed backend APIs for interactive storytelling features using Node.js and TypeScript.',
      'Implemented authentication and payment workflows supporting premium user experiences.',
      "Contributed to backend functionality and API development within the startup's engineering team."
    ],
    tags: ['Node.js', 'TypeScript', 'REST APIs', 'Auth & Payments']
  },
  {
    role: 'Backend Developer',
    company: 'OunjeFood',
    type: 'Paid startup engagement',
    location: 'Remote, Nigeria',
    period: 'Jan 2026 – Apr 2026',
    color: 'bg-emerald-500',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    highlights: [
      'Developed REST APIs using Node.js and TypeScript, organising backend functionality into controllers, services and data models.',
      'Designed MongoDB schemas to support application data management and efficient queries.',
      'Implemented JWT authentication and role-based access control (RBAC).',
      'Standardised error handling and backend development conventions to improve maintainability.'
    ],
    tags: ['Node.js', 'TypeScript', 'MongoDB', 'JWT', 'RBAC']
  },
  {
    role: 'Volunteer Backend Developer',
    company: 'Emerj LLC',
    type: 'Volunteer product development',
    location: 'Remote',
    period: 'Nov 2025 – May 2026',
    color: 'bg-blue-500',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    highlights: [
      'Contributed to backend development for Storytime4kids: Books, Quizzes, a digital storytelling and learning application developed by Emerj.',
      "Collaborated with the development team on backend functionality for a children's storytelling platform featuring interactive reading experiences and AI-powered narration.",
      'Supported the development of a product made available through the Google Play Store and the official Storytime website.',
      'Contributed to continued product development following the HNG internship, as the team worked to extend its internship-originated projects.'
    ],
    tags: ['Backend Development', 'AI Narration', 'Storytime4kids', 'Production App']
  },
  {
    role: 'IT Support & Systems Intern (SIWES)',
    company: 'Parallex Bank',
    type: 'Enterprise IT & Banking Systems',
    location: 'Lagos, Nigeria',
    period: 'Apr 2026 – Oct 2026',
    color: 'bg-amber-500',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    highlights: [
      'Diagnosed and resolved end-user technical issues involving enterprise applications, systems and network infrastructure.',
      'Documented technical issues and coordinated with relevant teams to support troubleshooting and resolution.',
      'Gained practical exposure to enterprise banking infrastructure, endpoint management, identity management and information security.',
      'Assisted with application monitoring, system health checks and technical support across enterprise environments.'
    ],
    tags: ['Enterprise Systems', 'Identity Management', 'InfoSec', 'System Monitoring']
  },
  {
    role: 'Backend Developer Intern',
    company: 'HNG',
    type: 'Internship',
    location: 'Remote',
    period: 'Oct 2025 – Dec 2025',
    color: 'bg-purple-500',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    highlights: [
      'Developed backend services in a collaborative, deadline-driven engineering environment.',
      'Worked on practical backend development tasks, debugging and API implementation.',
      'Strengthened experience with team collaboration, code delivery and software development workflows.'
    ],
    tags: ['Backend Services', 'API Implementation', 'Debugging', 'Agile Delivery']
  }
];

const Experience = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const allExpanded = expandedIndices.length === experiences.length;

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIndices([]);
    } else {
      setExpandedIndices(experiences.map((_, i) => i));
    }
  };

  return (
    <div className="md:col-span-4 bg-[#0e0e0e] rounded-3xl p-6 md:p-8 border border-white/5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-green-500 mb-1">
            <Briefcase size={20} />
            <h3 className="text-xl font-bold text-white">Work Experience</h3>
          </div>
          <p className="text-sm text-gray-400">
            Roles, responsibilities, and key accomplishments across startups and enterprise teams
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleAll}
            className="text-xs font-mono text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-colors"
          >
            {allExpanded ? 'Collapse All' : 'Expand All'}
          </button>
          <a
            href="/experience"
            className="text-xs font-medium text-green-400 hover:text-green-300 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 px-3.5 py-1.5 rounded-full flex items-center gap-1 transition-colors"
          >
            Full Timeline <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="relative space-y-4">
        {/* Vertical timeline line */}
        <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-green-500/50 via-gray-800 to-gray-800 hidden sm:block"></div>

        {experiences.map((job, i) => {
          const isExpanded = expandedIndices.includes(i);
          return (
            <div
              key={i}
              className="relative sm:pl-9 group"
            >
              {/* Timeline node */}
              <div
                className={`hidden sm:block absolute left-1 top-6 w-3.5 h-3.5 rounded-full border-2 border-[#0e0e0e] ${job.color} shadow-[0_0_10px_rgba(34,197,94,0.3)]`}
              ></div>

              <div className="bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-white/10 rounded-2xl p-5 transition-all">
                <div
                  className="flex flex-col md:flex-row md:items-center justify-between gap-2 cursor-pointer select-none"
                  onClick={() => toggleExpand(i)}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="text-base md:text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                        {job.role}
                      </h4>
                      <span className="text-gray-600">•</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${job.badgeColor}`}>
                        {job.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 mt-1.5">
                      <span>{job.type}</span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <MapPin size={12} /> {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 mt-2 md:mt-0">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <Calendar size={12} className="text-green-400" />
                      {job.period}
                    </span>
                    <button
                      type="button"
                      aria-label={isExpanded ? 'Collapse role details' : 'Expand role details'}
                      className="text-gray-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <ul className="space-y-2 text-sm text-gray-300">
                      {job.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="text-green-400 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
