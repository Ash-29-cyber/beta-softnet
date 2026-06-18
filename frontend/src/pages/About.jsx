import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, Calendar, ChevronRight, Shield, Zap, Activity, Users, Clock, Quote, Cpu, Database, Layers, Globe, MapPin } from 'lucide-react';

export default function About() {
  const leadership = [
    { name: 'Balaji', role: 'Chief Executive Officer', initials: 'B', desc: 'Former Engineering Director at AWS.' },
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
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="flex items-center justify-center"
            >
              <Compass className="h-3.5 w-3.5 text-black" />
            </motion.span>
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
            className="text-blue-100 text-sm md:text-base max-w-xl mx-auto font-medium select-none animate-pulse-slow"
          >
            Beta Softnet designs integrated platforms that simplify and secure how modern corporate teams work.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

        {/* Impact Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              value: "1.2M+",
              label: "Active Connections",
              desc: "Real-time communication channels securely routed daily.",
              icon: <Activity className="h-6 w-6 text-blue-500" />,
              glow: "from-blue-500/10 to-indigo-500/10"
            },
            {
              value: "99.99%",
              label: "Core Uptime",
              desc: "High-availability clustering guarantees service stability.",
              icon: <Shield className="h-6 w-6 text-emerald-500" />,
              glow: "from-emerald-500/10 to-teal-500/10"
            },
            {
              value: "500+",
              label: "Enterprise Clients",
              desc: "Leading organizations trust us with corporate operations.",
              icon: <Users className="h-6 w-6 text-cyan-500" />,
              glow: "from-cyan-500/10 to-blue-500/10"
            },
            {
              value: "15 min",
              label: "Support SLA",
              desc: "Dedicated response protocols for priority infrastructure.",
              icon: <Clock className="h-6 w-6 text-purple-500" />,
              glow: "from-purple-500/10 to-pink-500/10"
            }
          ].map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-4 relative overflow-hidden group shadow-sm"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                  {metric.icon}
                </div>
                <span className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-[#004AAD] transition-colors duration-300">
                  {metric.value}
                </span>
              </div>
              <div className="space-y-1 relative z-10">
                <h4 className="text-sm font-bold text-slate-900">{metric.label}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{metric.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Story & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Journey</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Founded on the belief that enterprise tools shouldn't be slow or overly complex, Beta Softnet has pioneered unified workflows. We bridge the gap between secure communication and real-time collaboration.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              By combining modular components like BNX Mail and B2 Auth Security, we give enterprises the power to self-host or scale in the cloud securely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-[#004AAD]">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide secure, beautiful, and unified SaaS products that enable teams to interact without boundaries.
                </p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 flex items-start space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-[#004AAD]">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To establish the global standard for next-generation workspace communications, protected by bulletproof auth protocols.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CEO Quote & Spotlight */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 border border-slate-800 hero-blue-banner">
          {/* Subtle design elements */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[40%] h-[100%] rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-semibold text-blue-300">
                <Quote className="h-3.5 w-3.5 text-blue-300" />
                <span>Executive Perspective</span>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-slate-100 italic">
                "At Beta Softnet, we believe enterprise software should respect the user's focus and cognitive flow. We design secure, lightweight systems to remove productivity bottlenecks, allowing organizations to collaborate seamlessly without sacrificing data privacy."
              </blockquote>
              <div className="border-t border-slate-800/80 pt-4 flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-black text-sm text-white shadow-md">
                  B
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Balaji</h4>
                  <p className="text-xs text-blue-400 font-medium">Founder & Chief Executive Officer</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex w-72 h-48 rounded-2xl bg-gradient-to-tr from-blue-950/40 to-slate-900 border border-blue-500/20 items-center justify-center relative overflow-hidden group shadow-inner">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />
              <div className="text-center p-6 space-y-2 relative z-10">
                <Award className="h-8 w-8 mx-auto text-blue-400 mb-2 animate-bounce" />
                <span className="text-xs uppercase tracking-widest text-blue-300 font-bold block">Engineering Excellence</span>
                <p className="text-[10px] text-slate-400">Pioneering security architecture & real-time messaging</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-12 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Core Values</h2>
            <p className="text-slate-500 text-sm">The operating principles that guide our product engineering and team culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-4">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-[#004AAD]">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Security-First</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Security is not an afterthought. We build isolation, encryption, and strict auth gates into the core of every module.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-4">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-600">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Simplicity & Clarity</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Work software shouldn't be confusing. We design unified, clean, and intuitive interfaces that simplify complexity.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-4">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-[#004AAD]">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Constant Iteration</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                We continuously refine our codebases, actively shipping upgrades and incorporating real-world client feedback.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-4">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-600">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Asynchronous Power</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                We empower distributed, remote teams with collaboration tools that minimize synchronization blockers.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Ecosystem Section */}
        <div className="space-y-12 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Technology Ecosystem</h2>
            <p className="text-slate-500 text-sm">
              We leverage modern, reliable engineering frameworks to power our real-time messaging and authentication systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Java & Spring Boot",
                desc: "Powers our high-performance B2 Auth Security architecture. Delivers robust role isolation and multi-threading.",
                icon: <Cpu className="h-5 w-5 text-blue-600" />,
                badge: "Core Service Backend"
              },
              {
                title: "React & Tailwind",
                desc: "Powers the BNX Mail app and admin panels. Optimized for zero layout shift and sub-100ms render speeds.",
                icon: <Layers className="h-5 w-5 text-[#004AAD]" />,
                badge: "Interface Layer"
              },
              {
                title: "WebSockets & STOMP",
                desc: "Maintains responsive real-time synchronization channels across client dashboards without polling overhead.",
                icon: <Globe className="h-5 w-5 text-indigo-500" />,
                badge: "Messaging Pipeline"
              },
              {
                title: "PostgreSQL & Redis",
                desc: "Combines absolute transactional data integrity with rapid memory caching for lightning-fast lookups.",
                icon: <Database className="h-5 w-5 text-emerald-500" />,
                badge: "Data Strategy"
              }
            ].map((tech, idx) => (
              <div
                key={tech.title}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm text-slate-800">
                    {tech.icon}
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[#004AAD] text-[9px] font-bold uppercase tracking-wider mb-2">
                      {tech.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{tech.title}</h3>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Leadership Team</h2>
            <p className="text-slate-500 text-sm">Meet the innovators guiding our design, technology, and business vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl text-center border border-slate-200 space-y-4"
              >
                <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-500/20">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest">{member.role}</p>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Timeline</h2>
            <p className="text-slate-500 text-sm">Key moments that defined our trajectory as an enterprise ecosystem.</p>
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
                    <div className="w-full md:w-[45%] glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#004AAD] uppercase tracking-widest">
                          {milestone.year}
                        </span>
                        <Calendar className="h-4 w-4 text-slate-400" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900">{milestone.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{milestone.desc}</p>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex h-8 w-8 rounded-full bg-white border-2 border-[#004AAD] items-center justify-center z-10 shadow-sm">
                      <ChevronRight className="h-3 w-3 text-blue-500 rotate-90" />
                    </div>

                    {/* Placeholder space */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Global Locations */}
        <div className="space-y-12 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Offices</h2>
            <p className="text-slate-500 text-sm">Where we design, develop, and support the Beta Ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-500 animate-pulse" />
                <span className="inline-block px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[#004AAD] text-[10px] font-bold uppercase tracking-wider">
                  Headquarters
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Tiruvallur, India</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Main Campus, Tiruvallur District.<br />
                Focuses on corporate management, core business development, and public relations.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                  R&D Center
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Bangalore, India</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Outer Ring Road Tech Park.<br />
                Home to our core platform engineers, web developers, and cloud database specialists.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-500" />
                <span className="inline-block px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-600 text-[10px] font-bold uppercase tracking-wider">
                  Support Offices
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">London & SF</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                London (UK) & San Francisco (USA).<br />
                Providing 24/7 global support coverage and local accounts management.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-200 mt-10 max-w-3xl mx-auto relative overflow-hidden shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-500" />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed tracking-wide font-medium italic relative z-10">
              "Nestled in the historic region of Tiruvallur, our main campus is designed to inspire engineering excellence and foster open-source innovation. By establishing our roots here, we blend local community engagement with state-of-the-art software development practices, driving the vision of a unified enterprise ecosystem globally."
            </p>
            <div className="mt-4 flex items-center space-x-2 text-xs font-bold text-[#004AAD] uppercase tracking-widest justify-end">
              <MapPin className="h-3 w-3" />
              <span>Tiruvallur HQ Statement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
