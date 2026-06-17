import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Award, CheckCircle2, AlertCircle, Send, Users, Layers, Globe, Building, ArrowRight } from 'lucide-react';
import api from '../api';

export default function Partners() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [partnerType, setPartnerType] = useState('Technology Partner');
  const [proposal, setProposal] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [statusMsg, setStatusMsg] = useState('');

  const partners = [
    {
      name: 'Apex Cloud Systems',
      category: 'Cloud Infrastructure',
      desc: 'Powers Beta Softnet distributed cloud deployments with ultra-low latency compute clusters globally.',
      icon: Globe,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Nova Core Cyber',
      category: 'Security Integration',
      desc: 'Co-development partner for B2 Auth Security protocols, auditing and hardening SSO & MFA gateways.',
      icon: Award,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      name: 'Vertex Solutions',
      category: 'System Integration',
      desc: 'Specialized consulting partner orchestrating large-scale enterprise migrations onto the Cliks Business suite.',
      icon: Building,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Vanguard Networks',
      category: 'Network Services',
      desc: 'Collaborator on encrypted transport pipes ensuring secure and private network routing for BNX Mail nodes.',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Stratum Enterprise',
      category: 'Reseller & Distribution',
      desc: 'Master distributor bringing Beta Softnet unified productivity applications to Asian and European markets.',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Helix Systems',
      category: 'Platform Developer',
      desc: 'Develops third-party integration modules and API plugins to extend the capabilities of Cliks Personal.',
      icon: Handshake,
      color: 'from-teal-500 to-emerald-500',
    },
  ];

  const benefits = [
    {
      title: 'Co-Marketing & Co-Selling',
      desc: 'Joint campaigns, featured listings in our catalog, and collaborative sales pursuits to drive revenue.',
    },
    {
      title: 'Early API & Platform Access',
      desc: 'Get exclusive access to pre-release SDKs, developer sandboxes, and dedicated technical integration paths.',
    },
    {
      title: 'Dedicated Partner Support',
      desc: 'Priority onboarding, technical support, and account management to guarantee mutual growth success.',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const message = `[Partner Type: ${partnerType}] Proposal: ${proposal}`;
    try {
      await api.post('/api/contact', { name, email, company, message });
      setStatus('success');
      setStatusMsg('Thank you! Your partnership request has been submitted. Our alliance team will review and connect shortly.');
      setName('');
      setEmail('');
      setCompany('');
      setProposal('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMsg(err.response?.data?.message || 'Submission failed. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-2"
          >
            <Handshake className="h-3.5 w-3.5" />
            <span>Beta Softnet Partner Network</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Build the Future of Collaboration Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Join our ecosystem to deliver next-generation productivity, authentication, and security solutions to enterprises worldwide.
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="space-y-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-2xl font-bold text-white tracking-tight">Our Strategic Alliance Partners</h2>
            <p className="text-sm text-slate-500 mt-1">
              Collaborating with industry-leading cloud, security, and developer entities to extend the reach of our unified suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => {
              const IconComp = partner.icon;
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-blue-500/5 text-left"
                >
                  <div className="space-y-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${partner.color} p-2.5 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <IconComp className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">{partner.category}</p>
                      <h3 className="text-lg font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">{partner.name}</h3>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">{partner.desc}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-900 flex items-center text-xs font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                    <span>Explore Alliance</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Benefits & Registration section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-8">
          {/* Left panel: Benefits */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Ecosystem Benefits</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We provide the APIs, integrations, engineering alignment, and sales backing needed to deploy high-performance solutions for our mutual customers.
              </p>

              <div className="space-y-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">{b.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Live status panel */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 text-left space-y-3">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Alliance Onboarding</span>
              </div>
              <p className="text-xs text-slate-500">
                Partner portal registrations are currently open. Technology integration evaluations are audited weekly by our engineering steering committee.
              </p>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-left">Become a Partner</h3>
              <p className="text-slate-500 text-xs mb-6 text-left">Submit details about your product or service integrations to begin our onboarding process.</p>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact Person</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jane Smith"
                      className="w-full bg-white text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-xs transition shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Business Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alliances@company.com"
                      className="w-full bg-white text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-xs transition shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company Name</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Apex Cloud Systems"
                      className="w-full bg-white text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-xs transition shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Partner Track</label>
                    <select
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className="w-full bg-white text-slate-900 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-xs transition shadow-sm"
                    >
                      <option>Technology Partner</option>
                      <option>Reseller / Distributor</option>
                      <option>System Integrator</option>
                      <option>Referral Partner</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Integration / Partnership Proposal</label>
                  <textarea
                    required
                    rows={4}
                    value={proposal}
                    onChange={(e) => setProposal(e.target.value)}
                    placeholder="Briefly describe your company's alignment with Beta Softnet, your core products, and how we can add mutual value..."
                    className="w-full bg-white text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-xs transition shadow-sm"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-emerald-600 text-xs p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                    <CheckCircle2 className="h-4.5 w-4.5 flex-shrink-0 text-emerald-500" />
                    <span>{statusMsg}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-rose-600 text-xs p-3 rounded-lg bg-rose-50 border border-rose-200">
                    <AlertCircle className="h-4.5 w-4.5 flex-shrink-0 text-rose-500" />
                    <span>{statusMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center justify-center space-x-2 disabled:bg-slate-300"
                >
                  {status === 'loading' ? (
                    <span>Submitting Proposal...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Partnership Request</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
