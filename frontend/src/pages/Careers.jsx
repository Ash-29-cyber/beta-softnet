import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Award, Heart, Shield, Sparkles, Upload, CheckCircle2, AlertCircle, X, Quote, Code2, HelpCircle, ChevronDown, Check, Cpu, Zap } from 'lucide-react';
import api from '../api';

const benefits = [
  { title: 'Global Remote', desc: 'Work from anywhere in the world. We offer home office stipends.', icon: Sparkles },
  { title: 'Premium Health', desc: 'Full medical, dental, and vision insurance covered 100% for you.', icon: Heart },
  { title: 'Continuous Growth', desc: '$2,000 yearly education grant for courses, conferences, or books.', icon: Award },
  { title: 'Secure Future', desc: '401(k) matching up to 5% and monthly wellness allowances.', icon: Shield }
];

const culturePillars = [
  {
    title: 'Autonomy & Trust',
    desc: 'We don\'t micromanage. We focus on engineering impact and code delivery, not screen time.',
    icon: Shield
  },
  {
    title: 'Open Source Spirit',
    desc: 'We contribute back to the libraries we rely on. Developers are encouraged to share and publish packages.',
    icon: Sparkles
  },
  {
    title: 'Work-Life Harmony',
    desc: 'Work is a marathon, not a sprint. We maintain clear boundaries to prevent remote work fatigue.',
    icon: Heart
  },
  {
    title: 'Async-First Flow',
    desc: 'Decisions are documented in RFCs. We value deep work windows and structured, asynchronous alignment.',
    icon: Briefcase
  }
];

const dxPrinciples = [
  {
    title: 'Continuous Deployment',
    desc: 'We deploy multiple times a day. We trust automated test suites to catch regressions before they reach staging.',
    icon: Zap
  },
  {
    title: 'RFC-Driven Design',
    desc: 'Architectural changes and major feature layouts are designed in written documents, allowing everyone to contribute async.',
    icon: Code2
  },
  {
    title: 'Green Build Guarantee',
    desc: 'We treat broken builds as high-priority blockages. The main trunk is kept compilable and green at all times.',
    icon: Check
  },
  {
    title: 'Sustainable Velocity',
    desc: 'We value high code quality and healthy capacity planning. We avoid crunch and prioritize code cleanup sprints.',
    icon: Cpu
  }
];

const jobs = [
  { id: 1, title: 'Lead Security Engineer', team: 'Platform Security', location: 'Remote (US/EU)', type: 'Full-Time' },
  { id: 2, title: 'Senior React Developer', team: 'Frontend Core', location: 'Remote (Global)', type: 'Full-Time' },
  { id: 3, title: 'Spring Boot Specialist', team: 'Backend Services', location: 'Remote (APAC/EU)', type: 'Full-Time' },
  { id: 4, title: 'UI/UX Product Designer', team: 'Product Design', location: 'Remote (Global)', type: 'Full-Time' },
  { id: 5, title: 'Technical Writer & Documenter', team: 'Developer Relations', location: 'Remote (Global)', type: 'Full-Time' },
  { id: 6, title: 'Customer Success Engineer', team: 'Global Operations', location: 'Remote (APAC)', type: 'Full-Time' }
];

const faqItems = [
  {
    q: "Can I work from anywhere in the world?",
    a: "Yes! Beta Softnet is a fully remote-first organization. We have team members across APAC, EU, and the US. We only require a 4-hour timezone overlap with your core team members for collaborative meetings."
  },
  {
    q: "What hardware and software setup do you provide?",
    a: "We ship top-of-the-line Apple MacBooks (M-series Pro or Max) or equivalent high-end Linux/Windows workstations based on your preference. We also provide a $1,500 home office setup stipend and cover all developer licensing costs."
  },
  {
    q: "How do you handle developer performance and growth?",
    a: "We conduct bi-annual reviews focused on engineering impact, code quality, and peer collaboration. We also support career progression tracks for both Individual Contributors (ICs) and Engineering Managers."
  },
  {
    q: "Do you sponsor visas or require relocation?",
    a: "Since we are fully remote, we employ team members globally through local entities or professional employer organizations (PEOs). This means you can work from your home country without needing visa sponsorship or relocation."
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleApply = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !resume || !selectedJob) return;

    setStatus('loading');
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position', selectedJob.title);
    formData.append('resume', resume);

    try {
      await api.post('/api/careers/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus('success');
      setMessage(`Application for ${selectedJob.title} submitted successfully!`);
      // Reset
      setFullName('');
      setEmail('');
      setPhone('');
      setResume(null);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage(err.response?.data?.message || 'Failed to submit application. Try again.');
    }
  };

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
            <Briefcase className="h-3.5 w-3.5 text-black" />
            <span>Join Our Core Team</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight select-none"
          >
            Shape the Future of SaaS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-sm md:text-base max-w-xl mx-auto font-medium select-none"
          >
            We are looking for creative developers, designers, and platform architects to build secure corporate applications.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-3 shadow-sm"
              >
                <div className="p-2.5 bg-blue-500/10 rounded-lg w-max border border-blue-500/20 text-[#004AAD]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTO Quote & Engineering Spotlight */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 border border-slate-800 hero-blue-banner">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[40%] h-[100%] rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-semibold text-blue-300">
                <Quote className="h-3.5 w-3.5 text-blue-300" />
                <span>Engineering Focus</span>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-slate-100 italic">
                "We don't build software by sitting in meetings all day. We write clean code, document our architectural decisions in collaborative RFCs, and trust our developers to ship quality work autonomously. It's about protecting deep focus and building software that lasts."
              </blockquote>
              <div className="border-t border-slate-800/80 pt-4 flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-black text-sm text-white shadow-md">
                  MS
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Marcus Sterling</h4>
                  <p className="text-xs text-blue-400 font-medium">Chief Technology Officer & Partner</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex w-72 h-48 rounded-2xl bg-gradient-to-tr from-blue-950/40 to-slate-900 border border-blue-500/20 items-center justify-center relative overflow-hidden group shadow-inner">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />
              <div className="text-center p-6 space-y-2 relative z-10">
                <Code2 className="h-8 w-8 mx-auto text-blue-400 mb-2 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-blue-300 font-bold block">Developer Experience</span>
                <p className="text-[10px] text-slate-400">Green builds guarantee & multi-daily deployments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work at Beta Softnet */}
        <div className="space-y-12 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Why Work at Beta Softnet?</h2>
            <p className="text-slate-500 text-sm">
              We focus on building a healthy environment where developers and creators can flourish without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {culturePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm text-slate-800">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Roles */}
        <div className="space-y-8">
          <div className="text-left space-y-2 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900">Open Positions</h2>
            <p className="text-slate-500 text-sm">Filter our remote positions and submit your profile today.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm"
              >
                <div className="space-y-1.5 text-left">
                  <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                  <div className="text-xs text-slate-500 font-semibold mt-1">
                    {job.team} &bull; {job.location} &bull; {job.type}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setStatus('idle');
                    setMessage('');
                  }}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold bg-[#004AAD] hover:bg-[#003c8a] text-white transition glow-btn-blue shadow-lg shadow-blue-500/10 cursor-pointer"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering DX Principles */}
        <div className="space-y-12 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Engineering DX Principles</h2>
            <p className="text-slate-500 text-sm">
              We design tooling and workflows that keep developer friction close to zero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {dxPrinciples.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm text-slate-800">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{tech.title}</h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Interview Process */}
        <div className="space-y-12">
          <div className="text-left space-y-2 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Interview Process</h2>
            <p className="text-slate-500 text-sm">What to expect when you apply for a role with our distributed engineering team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-3 relative overflow-hidden shadow-sm">
              <span className="absolute top-4 right-4 text-4xl font-black text-blue-500/5 select-none">01</span>
              <h3 className="text-base font-bold text-slate-900">Resume Screen</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Our recruiting team reviews your application, resume details, and project links for initial alignment.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-3 relative overflow-hidden shadow-sm">
              <span className="absolute top-4 right-4 text-4xl font-black text-[#f59e0b]/5 select-none">02</span>
              <h3 className="text-base font-bold text-slate-900">Technical Review</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                A 60-minute session with our engineers discussing coding, systems, and standard design principles.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-3 relative overflow-hidden shadow-sm">
              <span className="absolute top-4 right-4 text-4xl font-black text-emerald-500/5 select-none">03</span>
              <h3 className="text-base font-bold text-slate-900">Systems Design</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Deep dive into building scalable architecture, security frameworks, or complex interface structures.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-left space-y-3 relative overflow-hidden shadow-sm">
              <span className="absolute top-4 right-4 text-4xl font-black text-purple-500/5 select-none">04</span>
              <h3 className="text-base font-bold text-slate-900">Team Alignment</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Meet leadership and product managers to discuss product vision, culture fit, and remote team workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Life at Beta / Culture */}
        <div className="space-y-12">
          <div className="text-left space-y-2 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900">Life at Beta Softnet</h2>
            <p className="text-slate-500 text-sm">How we build together, support each other, and maintain focus in a distributed world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 flex items-start space-x-4 shadow-sm">
              <div className="p-3 bg-blue-500/10 rounded-xl text-[#004AAD] flex-shrink-0">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Annual Hackathons</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                  We host a yearly, week-long internal hackathon. Bring your wildest ideas and team up with engineers and designers to build new standalone products for our ecosystem.
                </p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 flex items-start space-x-4 shadow-sm">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 flex-shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Learning & Development</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                  Continuous improvement is key. Every employee receives a $2,000 annual education grant for tech courses, books, developer conferences, and certifications.
                </p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 flex items-start space-x-4 shadow-sm">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Focus Days & Core Hours</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                  To protect deep focus, we have "No-Meeting Wednesdays" and run a flexible model with 4 core hours of daily async overlap, leaving you control over your work day.
                </p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 flex items-start space-x-4 shadow-sm">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-600 flex-shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Home Office Stipend</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                  We supply top-tier hardware. Newly hired team members receive a $1,500 remote home office setup stipend for noise-cancelling headphones, standing desks, or secondary monitors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Candidates FAQ Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm">Everything you need to know about our recruiting, remote setup, and engineering culture.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-base font-bold text-slate-900">{item.q}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-slate-600 text-xs md:text-sm leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Spontaneous Candidate General Inquiry */}
        <div className="glass-card p-8 rounded-3xl border border-slate-200 max-w-3xl mx-auto relative overflow-hidden shadow-sm text-center space-y-6">
          <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-xl font-extrabold text-slate-900">Don't see a role that fits?</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              We are always on the lookout for brilliant systems engineers, reactive developers, UX researchers, and technical writers. Submit your resume as a general application and we'll reach out when a match opens up.
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedJob({ id: 'general', title: 'General Spontaneous Application', team: 'Talent Pool', location: 'Remote' });
              setStatus('idle');
              setMessage('');
            }}
            className="inline-flex items-center px-6 py-2.5 rounded-lg text-xs font-bold bg-[#004AAD] hover:bg-[#003c8a] text-white transition glow-btn-blue shadow-lg shadow-blue-500/15 cursor-pointer"
          >
            Submit General Inquiry
          </button>
        </div>

      </div>

      {/* Application Form Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg glass-card rounded-3xl p-6 md:p-8 border border-slate-200 shadow-2xl"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute right-4 top-4 p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 space-y-1 text-left">
                <span className="text-xs font-bold text-[#004AAD] uppercase tracking-widest">Apply for position</span>
                <h3 className="text-2xl font-extrabold text-slate-900">{selectedJob.title}</h3>
                <p className="text-slate-500 text-xs">{selectedJob.team} &bull; {selectedJob.location}</p>
              </div>

              {status === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Application Received!</h4>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto">{message}</p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold transition cursor-pointer"
                  >
                    Close Modal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 text-left">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Robert Downey"
                      className="w-full bg-white text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. rob@domain.com"
                        className="w-full bg-white text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm transition"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                      <input
                        type="text"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 555-0199"
                        className="w-full bg-white text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Resume Upload (PDF Only)</label>
                    <div className="relative border border-dashed border-[#004AAD]/20 rounded-lg p-6 bg-[#E9F4FF]/30 hover:bg-[#E9F4FF]/50 hover:border-[#004AAD]/40 transition flex flex-col items-center justify-center cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf"
                        required
                        onChange={(e) => setResume(e.target.files[0])}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload className="h-6 w-6 text-slate-500 mb-2" />
                      <span className="text-xs text-[#004AAD] font-semibold">
                        {resume ? resume.name : 'Click or drag PDF resume here'}
                      </span>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center space-x-2 text-rose-600 text-xs p-3 rounded-lg bg-rose-50 border border-rose-100">
                      <AlertCircle className="h-4.5 w-4.5 flex-shrink-0" />
                      <span>{message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center justify-center space-x-2 disabled:bg-slate-200 disabled:text-slate-500 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Briefcase className="h-4 w-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
