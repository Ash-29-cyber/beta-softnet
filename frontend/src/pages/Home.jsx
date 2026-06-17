import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Activity, Users, Globe, Zap, Sparkles, Terminal, Mail, Briefcase, UserCheck } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const stats = [
    { label: 'Active Users', value: '1.2M+', icon: Users, color: 'text-blue-400' },
    { label: 'Uptime SLA', value: '99.99%', icon: Activity, color: 'text-emerald-400' },
    { label: 'Enterprise Clients', value: '500+', icon: Globe, color: 'text-indigo-400' },
    { label: 'Data Protected', value: '25 PB', icon: Shield, color: 'text-cyan-400' },
  ];

  const valueProps = [
    {
      title: 'Security-First Protocol',
      desc: 'All communications and assets are shielded with modern AES-256 and JWT-based cryptographical structures.',
      icon: Shield,
    },
    {
      title: 'Instant WebSocket Sync',
      desc: 'Real-time state updates across devices with low latency. Zero manual reloading required.',
      icon: Zap,
    },
    {
      title: 'Unified Ecosystem',
      desc: 'Seamlessly shift databases, workflows, and messages from mail conversations to project sprints.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Mesh Glow Background */}
      <div className="absolute inset-0 bg-glow-gradient pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          {/* Tagline Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-900/50 text-blue-400 text-xs font-semibold tracking-wide">
            <Terminal className="h-3.5 w-3.5" />
            <span>V1.0.0 RELEASED</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Unified Software for a
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent mt-2">
              Connected Generation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Beta Softnet builds secure, real-time corporate applications. From collaborative email to enterprise workflows, stay connected effortlessly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group hover:scale-[1.02]"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center border border-violet-500/10"
            >
              Talk to Sales
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating UI Dashboard Mockup */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative glass-card rounded-2xl p-2 border border-slate-800 shadow-2xl shadow-blue-500/5"
        >
          <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-900 aspect-video md:aspect-[2.1/1] relative flex items-center justify-center">
            {/* Design Grid Background */}
            <div className="absolute inset-0 bg-mesh-pattern bg-mesh opacity-40" />
            
            {/* Simulated UI Cards inside Showcase */}
            <div className="relative z-10 w-[90%] grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-500">BNX MAIL</span>
                </div>
                <div className="text-sm font-bold text-white">#Shared Conversation: V2 Pitch</div>
                <p className="text-xs text-slate-500">SMTP Server online. WebSocket connection active.</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs text-slate-500">B2 AUTH SECURITY</span>
                </div>
                <div className="text-sm font-bold text-white">SSO Authorized</div>
                <p className="text-xs text-slate-500">JWT Token refreshed successfully. Role: ADMIN.</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  <span className="text-xs text-slate-500">CLIKS BUSINESS</span>
                </div>
                <div className="text-sm font-bold text-white">Project Sprint Progress</div>
                <p className="text-xs text-slate-500">92% Tasks complete. Sprint delivery on track.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-slate-900 bg-slate-950/40 py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="inline-flex p-2.5 bg-slate-900 rounded-lg mb-2">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Beta Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Beta Ecosystem</h2>
          <p className="text-slate-400">
            A comprehensive network built for companies requiring high performance, bulletproof security, and team collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col items-start text-left border border-slate-800"
              >
                <div className="p-3 bg-blue-600/10 rounded-xl mb-6 border border-blue-500/20">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prop.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Trusted by Innovation Leaders</h2>
          <p className="text-slate-400">Hear from CTOs and engineering teams running critical systems on Beta Softnet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-4">
            <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">
              "Switching our corporate authentication to B2 Auth Security was the best engineering decision we made this year. We achieved SSO with MFA compatibility within days, and the security audit was seamless."
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white">
                JS
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Jonathan Sterling</h4>
                <p className="text-xs text-slate-500">VP of Security, CloudSphere Inc.</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-4">
            <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">
              "BNX Mail's collaborative workspace allowed our support agents to respond to high-priority client mail threads simultaneously. The shared conversations layout has reduced our resolution times by 40%."
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-violet-400 to-indigo-600 flex items-center justify-center font-bold text-white">
                MR
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Miranda Rodes</h4>
                <p className="text-xs text-slate-500">Operations Director, ApexLogistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative glass-card rounded-3xl p-8 md:p-16 border border-slate-800 overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-cyan-950/20 to-indigo-950/20 pointer-events-none" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Upgrade Your Corporate Software?
            </h2>
            <p className="text-slate-400">
              Unify your group mailbox, auth logs, dashboard notes, and project backlogs under one centralized portal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold glass-card text-white hover:bg-slate-800 border border-slate-800 transition"
              >
                Browse Product Suites
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
