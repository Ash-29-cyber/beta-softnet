import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await api.post('/api/newsletter/subscribe', { email });
      setStatus('success');
      setEmail('');
      setMessage('Successfully subscribed! Welcome to Beta Softnet.');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage(err.response?.data?.message || 'Subscription failed. Try again.');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center select-none">
              <img src="/logo.png" alt="Beta Logo" className="h-10 w-auto object-contain rounded-lg shadow-sm" />
            </Link>
            <p className="text-sm text-slate-500">
              Unified Software for a Connected Generation. Building next-generation collaboration, auth, and productivity suites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-blue-400 transition">BNX Mail</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition">B2 Auth Security</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition">Cliks Personal</Link></li>
              <li><Link to="/products#cliks-business" className="hover:text-blue-400 transition">Cliks Business</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-blue-400 transition">Partners</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-slate-500">
              Subscribe to get the latest product release notes and corporate insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-slate-900 text-white placeholder-slate-600 border border-slate-800 rounded-lg py-2 px-3 pr-10 focus:outline-none focus:border-blue-500 text-sm transition"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-1 top-1 bottom-1 px-2.5 bg-blue-600 hover:bg-blue-500 rounded-md text-white transition flex items-center justify-center disabled:bg-slate-800"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {status === 'success' && (
              <div className="flex items-center space-x-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                <span>{message}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center space-x-1.5 text-xs text-rose-400">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{message}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Beta Softnet Private Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition">Security Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
