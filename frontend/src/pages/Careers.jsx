import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Award, Heart, Shield, Sparkles, Upload, CheckCircle2, AlertCircle, X } from 'lucide-react';
import api from '../api';

const benefits = [
  { title: 'Global Remote', desc: 'Work from anywhere in the world. We offer home office stipends.', icon: Sparkles },
  { title: 'Premium Health', desc: 'Full medical, dental, and vision insurance covered 100% for you.', icon: Heart },
  { title: 'Continuous Growth', desc: '$2,000 yearly education grant for courses, conferences, or books.', icon: Award },
  { title: 'Secure Future', desc: '401(k) matching up to 5% and monthly wellness allowances.', icon: Shield }
];

const jobs = [
  { id: 1, title: 'Lead Security Engineer', team: 'Platform Security', location: 'Remote (US/EU)', type: 'Full-Time' },
  { id: 2, title: 'Senior React Developer', team: 'Frontend Core', location: 'Remote (Global)', type: 'Full-Time' },
  { id: 3, title: 'Spring Boot Specialist', team: 'Backend Services', location: 'Remote (APAC/EU)', type: 'Full-Time' },
  { id: 4, title: 'UI/UX UI Product Designer', team: 'Product Design', location: 'Remote (Global)', type: 'Full-Time' }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

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
      <div className="relative overflow-hidden bg-gradient-to-tr from-[#004AAD] to-[#0066f2] py-20 text-white text-center">
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
                className="glass-card p-6 rounded-2xl border border-slate-800 text-left space-y-3"
              >
                <div className="p-2.5 bg-blue-600/15 rounded-lg w-max border border-blue-500/10">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Open Roles */}
        <div className="space-y-8">
          <div className="text-left space-y-2 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white">Open Positions</h2>
            <p className="text-slate-400 text-sm">Filter our remote positions and submit your profile today.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl border borderr-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 text-left">
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
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
                  className="px-5 py-2.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition glow-btn-blue shadow-lg shadow-blue-500/10"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
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
                className="absolute right-4 top-4 p-1.5 rounded-lg hover:bg-slate-200 text-slate-450 hover:text-slate-800 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 space-y-1 text-left">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Apply for position</span>
                <h3 className="text-2xl font-extrabold text-white">{selectedJob.title}</h3>
                <p className="text-slate-500 text-xs">{selectedJob.team} &bull; {selectedJob.location}</p>
              </div>

              {status === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Application Received!</h4>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto">{message}</p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold transition"
                  >
                    Close Modal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 text-left">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Robert Downey"
                      className="w-full bg-slate-900 text-white placeholder-slate-600 border border-slate-800 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. rob@domain.com"
                        className="w-full bg-slate-900 text-white placeholder-slate-600 border border-slate-800 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm transition"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Phone Number</label>
                      <input
                        type="text"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 555-0199"
                        className="w-full bg-slate-900 text-white placeholder-slate-600 border border-slate-800 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase">Resume Upload (PDF Only)</label>
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
                    <div className="flex items-center space-x-2 text-rose-400 text-xs p-3 rounded-lg bg-rose-950/20 border border-rose-900/30">
                      <AlertCircle className="h-4.5 w-4.5 flex-shrink-0" />
                      <span>{message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center justify-center space-x-2 disabled:bg-slate-800"
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
