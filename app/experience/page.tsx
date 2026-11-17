"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import { experiences } from '../../components/Experience';
import {
  Briefcase,
  MapPin,
  Calendar,
  Award,
  Users,
  GraduationCap,
  Download,
  CheckCircle2
} from 'lucide-react';

const volunteering = [
  {
    role: 'Learning & Development Member',
    organization: 'Cowrywise UNILAG Ambassadors',
    period: '2025 – 2026',
    highlights: [
      'Curated slides and learning content for ambassador sessions and internal learning drives.',
      'Found guest speakers for learning sessions and department-wide initiatives.',
      'Created learning drives for multiple departments and participated in community events and ambassador activities.'
    ]
  },
  {
    role: 'Hackathon Volunteer',
    organization: 'Techstars UNILAG',
    period: '2025',
    highlights: [
      'Supported event operations, participant coordination, and technical logistics during the Techstars UNILAG Hackathon.'
    ]
  }
];

const certifications = [
  { title: 'Learning Basic ABAP Programming', issuer: 'SAP', year: '2026' },
  { title: 'Cowrywise Ambassador', issuer: 'Cowrywise', year: '2026' },
  { title: 'AI Literacy & Career Management Essentials', issuer: 'IBM', year: '2026' },
  { title: 'Backend Developer Certification', issuer: 'HNG Tech', year: '2025' },
  { title: 'Fullstack Web Development', issuer: 'Techstudio Academy', year: '2022' }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-green-500/30 selection:text-green-200 p-4 md:p-8">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-8 mb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-green-400">Experience</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
              Backend Developer specialising in Node.js, TypeScript and NestJS, with experience building REST APIs, distributed services, payment integrations, and asynchronous processing systems across startups and enterprise environments.
            </p>
          </div>

          <a
            href="/Ajayi Oluwatise CV.pdf"
            download
            className="bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-colors w-fit shrink-0"
          >
            <Download size={18} /> Download CV
          </a>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-green-400 mb-6">
            <Briefcase size={20} />
            <h2 className="text-2xl font-bold text-white">Professional Roles</h2>
          </div>

          <div className="relative space-y-6">
            <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gradient-to-b from-green-500 via-gray-800 to-gray-900 hidden sm:block"></div>

            {experiences.map((job, idx) => (
              <div key={idx} className="relative sm:pl-10">
                <div
                  className={`hidden sm:block absolute left-1.5 top-7 w-3.5 h-3.5 rounded-full border-2 border-[#050505] ${job.color} shadow-[0_0_12px_rgba(34,197,94,0.4)]`}
                ></div>

                <div className="bg-[#0e0e0e] border border-white/5 hover:border-green-500/20 rounded-3xl p-6 md:p-8 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${job.badgeColor}`}>
                          {job.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
                        <span>{job.type}</span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <MapPin size={13} /> {job.location}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 w-fit">
                      <Calendar size={13} className="text-green-400" />
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-sm md:text-base text-gray-300 mt-4 pt-4 border-t border-white/5">
                    {job.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 leading-relaxed">
                        <span className="text-green-400 mt-2 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Volunteering + Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Leadership & Volunteering */}
          <div className="bg-[#0e0e0e] border border-white/5 rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-2 text-blue-400 mb-6">
              <Users size={20} />
              <h2 className="text-xl font-bold text-white">Leadership & Volunteering</h2>
            </div>

            <div className="space-y-6">
              {volunteering.map((item, idx) => (
                <div key={idx} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-bold text-white text-base">{item.role}</h3>
                    <span className="text-xs font-mono text-gray-500 shrink-0">{item.period}</span>
                  </div>
                  <p className="text-xs font-medium text-blue-400 mb-3">{item.organization}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="space-y-6">
            <div className="bg-[#0e0e0e] border border-white/5 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-amber-400 mb-6">
                <Award size={20} />
                <h2 className="text-xl font-bold text-white">Certifications</h2>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">{cert.title}</p>
                        <p className="text-xs text-gray-500">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0e0e0e] border border-white/5 rounded-3xl p-6">
              <div className="flex items-center gap-2 text-blue-400 mb-3">
                <GraduationCap size={20} />
                <h2 className="text-lg font-bold text-white">Education</h2>
              </div>
              <h3 className="text-base font-bold text-white">University of Lagos (UNILAG)</h3>
              <p className="text-sm text-gray-400">B.Sc. in Systems Engineering</p>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5 text-xs font-mono text-gray-400">
                <span>Oct 2021 – Aug 2027 (Expected)</span>
                <span className="text-green-400 font-semibold">CGPA: 3.67 / 5.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
