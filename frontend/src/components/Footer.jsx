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
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-lg">
              <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-md select-none">
                <svg viewBox="0 0 100 115" className="h-5 w-5 text-[#004bbf]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  {/* Big B Logo */}
                  <path fillRule="evenodd" clipRule="evenodd" d="M30 80C22 80 14 79 8 77.5C7 77.2 6.5 76.5 7.5 75.5C8.5 74.5 14 74 24 72.5V23C24 17 25.5 15 30 15H52C66 15 75 22 75 33C75 40 70 46.5 61 49C71 51.5 78 58.5 78 70C78 81.5 67 87.5 49 87.5L30 80ZM38 26.5V44.5H48C55.5 44.5 60.5 41.5 60.5 35.5C60.5 29.5 55.5 26.5 48 26.5H38ZM38 53.5V74.5H49C57 74.5 62.5 71 62.5 64C62.5 57 57 53.5 49 53.5H38Z" />
                  {/* Stencil BETA text */}
                  {/* B */}
                  <path d="M12 92H16V99H12V92ZM12 103H16V110H12V103ZM16 92H22C24.5 92 26 93.5 26 96C26 98.5 24.5 99 22 99H16V92ZM19 94.5V96.5H22C22.5 96.5 23 96 23 95.5C23 95 22.5 94.5 22 94.5H19ZM16 99H22C24.5 99 26 100.5 26 103C26 105.5 24.5 110 22 110H16V99ZM19 101.5V107.5H22C22.5 107.5 23 107 23 104.5C23 102 22.5 101.5 22 101.5H19Z" />
                  {/* E */}
                  <path d="M31 92H35V99H31V92ZM31 103H35V110H31V103ZM35 92H46V95.5H35V92ZM35 99H43V102.5H35V99ZM35 106H46V110H35V106Z" />
                  {/* T */}
                  <path d="M50 92H64V95.5H50V92ZM55 95.5H59V110H55V95.5Z" />
                  {/* A */}
                  <path d="M77 92L70 110H74.5L77.5 101.5H76.5L77 92ZM79 92L86 110H81.5L78.5 101.5H79.5L79 92ZM75.5 104H80.5V107.5H75.5V104Z" />
                </svg>
              </div>
              <span className="tracking-wide">BETA SOFTNET</span>
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
              <li><Link to="/cliks-business/dashboard" className="hover:text-blue-400 transition">Cliks Business</Link></li>
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
