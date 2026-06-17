import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, Calendar, ChevronRight } from 'lucide-react';

export default function About() {
  const leadership = [
    { name: 'Dr. Sarah Vance', role: 'Chief Executive Officer', initials: 'SV', desc: 'Former Engineering Director at AWS.' },
    { name: 'Marcus Sterling', role: 'Chief Technology Officer', initials: 'MS', desc: 'SaaS architect with 15+ years experience.' },
    { name: 'Ananya Nair', role: 'Head of Product Design', initials: 'AN', desc: 'Ex-Stripe UI specialist and typography advocate.' }
  ];

  const milestones = [
    { year: '2022', title: 'Company Founded', desc: 'Beta Softnet was established with a small team of 5 engineers.' },
    { year: '2023', title: 'BNX Mail Launch', desc: 'Collaborative inbox concept delivered, securing our first 100 enterprise clients.' },
    { year: '2024', title: 'Series A Funding', desc: 'Secured $12M in funding to expand our security-first auth frameworks.' },
    { year: '2026', title: 'Global Footprint', desc: 'Now powering 1.2M+ active connections globally across 500+ major organizations.' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-tr from-[#004AAD] to-[#0066f2] py-20 text-white text-center hero-blue-banner">
        {/* Glow grid mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-blue-400/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-indigo-400/20 blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-widest text-black select-none"
          >
            <Compass className="h-3.5 w-3.5 text-black" />
            <span>About Beta Softnet</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight select-none"
          >
            We Build Software for the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-sm md:text-base max-w-xl mx-auto font-medium select-none"
          >
            Beta Softnet designs integrated platforms that simplify and secure how modern corporate teams work.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

        {/* Company Story & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Our Journey</h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Founded on the belief that enterprise tools shouldn't be slow or overly complex, Beta Softnet has pioneered unified workflows. We bridge the gap between secure communication and real-time collaboration.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              By combining modular components like BNX Mail and B2 Auth Security, we give enterprises the power to self-host or scale in the cloud securely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4">
              <div className="p-3 bg-blue-500/15 rounded-xl border border-blue-500/10">
                <Compass className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Our Mission</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  To provide secure, beautiful, and unified SaaS products that enable teams to interact without boundaries.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4">
              <div className="p-3 bg-cyan-500/15 rounded-xl border border-cyan-500/10">
                <Target className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Our Vision</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  To establish the global standard for next-generation workspace communications, protected by bulletproof auth protocols.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Leadership Team</h2>
            <p className="text-slate-400 text-sm">Meet the innovators guiding our design, technology, and business vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center border border-slate-800 space-y-4"
              >
                <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-500/20">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{member.name}</h3>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">{member.role}</p>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Our Timeline</h2>
            <p className="text-slate-400 text-sm">Key moments that defined our trajectory as an enterprise ecosystem.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-200 hidden md:block" />

            <div className="space-y-8 md:space-y-16">
              {milestones.map((milestone, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center justify-between ${
                      isLeft ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className="w-full md:w-[45%] glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                          {milestone.year}
                        </span>
                        <Calendar className="h-4 w-4 text-slate-600" />
                      </div>
                      <h3 className="text-lg font-extrabold text-white">{milestone.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{milestone.desc}</p>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex h-8 w-8 rounded-full bg-white border-2 border-[#004AAD] items-center justify-center z-10">
                      <ChevronRight className="h-3 w-3 text-blue-400 rotate-90" />
                    </div>

                    {/* Placeholder space */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
