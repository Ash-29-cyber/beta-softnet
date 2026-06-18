import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Activity, 
  Users, 
  Globe, 
  Zap, 
  Sparkles, 
  Terminal, 
  Mail, 
  Briefcase, 
  UserCheck, 
  ChevronRight, 
  User, 
  Star 
} from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const products = [
    {
      name: 'BNX MAIL',
      description: 'WhatsApp-style collaborative email platform. Unify SMTP/IMAP boxes and resolve client threads together in real-time.',
      icon: Mail,
      color: 'bg-blue-500/10 border-blue-500/20 text-[#004AAD]',
      features: ['SMTP & IMAP', 'Shared Threads', 'Live WebSockets', 'Group Inbox'],
      link: '/bnx-mail/dashboard'
    },
    {
      name: 'B2AUTH SECURITY',
      description: 'Unified authentication and security platform. Shield applications with role management and active token validations.',
      icon: Shield,
      color: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600',
      features: ['SSO Integration', 'Multi-Factor Auth', 'JWT Verification', 'Admin Console'],
      link: '/products#b2auth-security'
    },
    {
      name: 'CLIKS PERSONAL',
      description: 'Personal productivity and organization suite. Keep notes, schedules, and milestones structured in one unified interface.',
      icon: User,
      color: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600',
      features: ['Task Milestones', 'Google Calendar', 'Markdown Notes', 'Personal Widgets'],
      link: '/products#cliks'
    },
    {
      name: 'CLIKS BUSINESS',
      description: 'Enterprise collaboration and sprint workflow engine. Fuel project releases, live group chat, and shared files.',
      icon: Briefcase,
      color: 'bg-violet-500/10 border-violet-500/20 text-violet-600',
      features: ['Agile Sprints', 'Workspace Chat', 'Analytical Reports', 'Doc Collaborator'],
      link: '/cliks-business'
    }
  ];

  const features = [
    {
      title: 'Security-First Architecture',
      description: 'All interactions, mailboxes, and databases are encrypted with AES-256 and verified through JWT claims.',
      icon: Shield,
      bg: 'bg-blue-50 text-[#004AAD] border-blue-100'
    },
    {
      title: 'Instant WebSocket Sync',
      description: 'Real-time state sharing across devices. Experience 0ms manual reloads when emails arrive or boards update.',
      icon: Zap,
      bg: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      title: 'Unified Database Layer',
      description: 'A centralized data ecosystem. Shift mail threads directly into sprint tasks or team discussion boards.',
      icon: Sparkles,
      bg: 'bg-purple-50 text-purple-600 border-purple-100'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '1.2M+', icon: Users, color: 'text-blue-600' },
    { label: 'Uptime SLA', value: '99.99%', icon: Activity, color: 'text-emerald-600' },
    { label: 'Enterprise Clients', value: '500+', icon: Globe, color: 'text-indigo-600' },
    { label: 'Data Protected', value: '25 PB', icon: Shield, color: 'text-cyan-600' },
  ];

  const testimonials = [
    {
      quote: "Switching our corporate authentication to B2 Auth Security was the best engineering decision we made this year. We achieved SSO with MFA compatibility within days, and the security audit was seamless.",
      author: "Jonathan Sterling",
      title: "VP of Security, CloudSphere Inc.",
      initials: "JS",
      gradient: "from-cyan-400 to-[#004AAD]"
    },
    {
      quote: "BNX Mail's collaborative workspace allowed our support agents to respond to high-priority client mail threads simultaneously. The shared conversations layout has reduced our response time by 40%.",
      author: "Miranda Rodes",
      title: "Operations Director, ApexLogistics",
      initials: "MR",
      gradient: "from-violet-400 to-indigo-600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-transparent relative z-10 pt-24 pb-20">
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient-bg {
          background: linear-gradient(-45deg, #004AAD, #0b66c2, #1e3a8a, #4f46e5);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .hero-blue-banner h1, .hero-blue-banner h2, .hero-blue-banner h3 {
          color: #ffffff !important;
        }
        .hero-blue-banner p {
          color: rgba(241, 245, 249, 0.95) !important;
        }
        .cta-colored-section h2, .cta-colored-section h3, .cta-colored-section h4 {
          color: #ffffff !important;
        }
        .cta-colored-section p {
          color: rgba(241, 245, 249, 0.95) !important;
        }
      `}</style>

      {/* SECTION 1: HERO BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="hero-blue-banner animated-gradient-bg relative overflow-hidden rounded-3xl py-20 px-6 md:px-12 md:py-28 text-center shadow-2xl border border-blue-500/20">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-mesh-pattern bg-mesh opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] pointer-events-none" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-4xl mx-auto space-y-6"
          >
            {/* Tagline Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wide shadow-sm">
              <Terminal className="h-3.5 w-3.5 text-cyan-300 animate-pulse" />
              <span>V1.2.0 RELEASED • SECURE CLOUD SYNC</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
              Unified Software for a
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-200 bg-clip-text text-transparent mt-2">
                Connected Generation
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Beta Softnet builds secure, real-time corporate applications. Consolidation is here: SMTP mail threads, live authentication protocols, and agile sprints under one dashboard.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white text-[#004AAD] hover:bg-slate-50 shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group hover:scale-[1.02]"
              >
                <span>Explore Product Suite</span>
                <ArrowRight className="h-5 w-5 text-[#004AAD] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/support"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
              >
                Get Direct Support
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2: PRODUCT HIGHLIGHTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E9F4FF] border border-[#004AAD]/20 text-[#004AAD] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Product Highlights</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Innovative Tools, Single Ecosystem
          </h2>
          <p className="text-slate-500 text-lg">
            Discover our flagship solutions designed to streamline communications, access, and sprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-200 shadow-md text-left flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon and Name */}
                  <div className="flex items-center space-x-4">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center border ${product.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{product.name}</h3>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise Suite</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {product.features.map((feat) => (
                      <span 
                        key={feat}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-650 text-[10px] font-extrabold uppercase tracking-wide"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer link button */}
                <div className="pt-8 flex justify-start">
                  <Link
                    to={product.link}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#E9F4FF] hover:text-[#004AAD] text-slate-700 border border-slate-200 hover:border-[#004AAD]/30 text-xs font-bold transition duration-300 group"
                  >
                    <span>Launch Application</span>
                    <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-[#004AAD] group-hover:translate-x-0.5 transition" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: KEY FEATURES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E9F4FF] border border-[#004AAD]/20 text-[#004AAD] text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="h-3.5 w-3.5" />
            <span>Key Advantages</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Engineered for High Performance
          </h2>
          <p className="text-slate-500 text-lg">
            A secure foundation optimized for modern companies that require high availability and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-200 text-left flex flex-col items-start"
              >
                <div className={`p-3 rounded-2xl border mb-6 flex-shrink-0 ${feat.bg}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SECTION 4: STATISTICS COUNTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass-card rounded-3xl border border-slate-200 p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="text-center space-y-2 flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-slate-50/50 transition-colors"
                >
                  <div className="inline-flex p-3 bg-blue-50 rounded-2xl mb-2 border border-blue-100">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#004AAD]">{stat.value}</div>
                  <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 5: CUSTOMER TESTIMONIALS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E9F4FF] border border-[#004AAD]/20 text-[#004AAD] text-xs font-semibold uppercase tracking-wider">
            <Users className="h-3.5 w-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Trusted by Innovation Leaders
          </h2>
          <p className="text-slate-500 text-lg">
            Hear from engineering and security leaders running critical corporate systems on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.author}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-3xl border border-slate-200 text-left flex flex-col justify-between space-y-6 shadow-sm"
            >
              {/* Star rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-650 italic text-sm md:text-base leading-relaxed">
                "{test.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div className={`h-11 w-11 rounded-full bg-gradient-to-tr ${test.gradient} flex items-center justify-center font-bold text-white text-sm shadow-sm`}>
                  {test.initials}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{test.author}</h4>
                  <p className="text-xs text-slate-500">{test.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 6: CALL TO ACTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-colored-section animated-gradient-bg relative rounded-3xl p-8 md:p-16 border border-blue-500/20 overflow-hidden text-center shadow-2xl">
          {/* Decorative patterns */}
          <div className="absolute inset-0 bg-mesh-pattern bg-mesh opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Upgrade Your Corporate Software?
            </h2>
            <p className="text-slate-200 max-w-xl mx-auto text-sm md:text-base">
              Unify your group mailbox, auth logs, dashboard notes, and project backlogs under one centralized and secure portal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold bg-white text-[#004AAD] hover:bg-slate-55 transition-all duration-300 hover:scale-[1.02]"
              >
                Browse Product Suites
              </Link>
              <Link
                to="/support"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
