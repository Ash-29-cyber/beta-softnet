import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Box, LogOut, LayoutDashboard, LogIn, ChevronDown, ChevronRight, Mail, Shield, User, Briefcase, Search, UserPlus, Lock, CheckCircle2, AlertCircle, HelpCircle, MessageSquare, Download, Phone, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import api from '../api';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownCategoryOpen, setIsDropdownCategoryOpen] = useState(true);
  const [isDropdownPublicOpen, setIsDropdownPublicOpen] = useState(false);
  const [isDropdownBusinessOpen, setIsDropdownBusinessOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(true);
  const [isMobilePublicOpen, setIsMobilePublicOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);
  const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const supportRef = useRef(null);
  const profileRef = useRef(null);
  const productsDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (supportRef.current && !supportRef.current.contains(event.target)) {
        setIsSupportOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      setSearchQuery('');
      if (query.includes('mail') || query.includes('smtp') || query.includes('imap')) {
        navigate('/products#bnx-mail');
      } else if (query.includes('auth') || query.includes('security') || query.includes('sso') || query.includes('mfa')) {
        navigate('/products#b2auth-security');
      } else if (query.includes('personal') || query.includes('note') || query.includes('task') || query.includes('clik')) {
        if (query.includes('business')) {
          navigate('/cliks-business/dashboard');
        } else {
          navigate('/products#cliks');
        }
      } else if (query.includes('business') || query.includes('team') || query.includes('project') || query.includes('chat')) {
        navigate('/cliks-business/dashboard');
      } else if (query.includes('about') || query.includes('vision') || query.includes('mission') || query.includes('story')) {
        navigate('/about');
      } else if (query.includes('career') || query.includes('job') || query.includes('apply') || query.includes('work')) {
        navigate('/careers');
      } else if (query.includes('contact') || query.includes('sales') || query.includes('enquiry') || query.includes('phone') || query.includes('partner') || query.includes('partnership')) {
        navigate('/partners');
      } else if (query.includes('login') || query.includes('admin') || query.includes('dashboard') || query.includes('portal')) {
        navigate('/login');
      } else {
        navigate('/products');
      }
    }
  };

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Partners', path: '/partners' },
    { name: 'Support', path: '#' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e2f0e8] shadow-sm text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center space-x-2 text-slate-800 hover:text-[#004AAD] font-black text-2xl tracking-wider">
              <div className="h-10 w-10 bg-white border border-[#e2f0e8] rounded-xl flex items-center justify-center shadow-lg shadow-emerald-950/5 select-none">
                <svg viewBox="0 0 100 115" className="h-7 w-7 text-[#004bbf]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
              <span className="font-extrabold text-[#004AAD] text-lg tracking-wider">
                BETA
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="flex-shrink-0 hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-0.5 bg-slate-100/90 p-1 rounded-full border border-slate-200/80 shadow-inner nav-pill-container">
            {navLinks.map((link) => {
              if (link.name === 'Products') {
                return (
                  <div
                    key={link.name}
                    ref={productsDropdownRef}
                    className="relative"
                  >
                    <button 
                      onClick={() => {
                        setIsDropdownOpen(!isDropdownOpen);
                        setIsSupportOpen(false);
                      }}
                      className={`flex items-center space-x-1 focus:outline-none cursor-pointer ${isActive('/products') || isDropdownOpen ? 'active-pill' : ''}`}
                    >
                      <span>Products</span>
                      <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute left-[-16px] mt-3 w-[640px] rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 z-50 text-left text-slate-800">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-[10px] uppercase tracking-wider font-extrabold select-none">
                              <th 
                                className="py-2.5 px-4 rounded-l-lg text-slate-500 w-1/5 cursor-pointer hover:bg-slate-100 transition duration-200"
                                onClick={() => setIsDropdownCategoryOpen(!isDropdownCategoryOpen)}
                              >
                                <div className="flex items-center space-x-1">
                                  <span>Category</span>
                                  <ChevronDown className={`h-3 w-3 text-slate-400 transform transition-transform duration-200 ${isDropdownCategoryOpen ? 'rotate-180' : ''}`} />
                                </div>
                              </th>
                              <th 
                                className="py-2.5 px-4 text-slate-500 w-2/5 cursor-pointer hover:bg-slate-100 transition duration-200"
                                onClick={() => setIsDropdownPublicOpen(!isDropdownPublicOpen)}
                              >
                                <div className="flex items-center space-x-1">
                                  <span>Public</span>
                                  <ChevronDown className={`h-3 w-3 text-slate-400 transform transition-transform duration-200 ${isDropdownPublicOpen ? 'rotate-180' : ''}`} />
                                </div>
                              </th>
                              <th 
                                className="py-2.5 px-4 rounded-r-lg text-slate-500 w-2/5 cursor-pointer hover:bg-slate-100 transition duration-200"
                                onClick={() => setIsDropdownBusinessOpen(!isDropdownBusinessOpen)}
                              >
                                <div className="flex items-center space-x-1">
                                  <span>Business</span>
                                  <ChevronDown className={`h-3 w-3 text-slate-400 transform transition-transform duration-200 ${isDropdownBusinessOpen ? 'rotate-180' : ''}`} />
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-750 text-xs">
                            {/* Row 1: Base */}
                            <tr className="hover:bg-slate-50/50 transition-colors">
                              <td className="py-3 px-2 align-top pt-3 w-1/5">
                                {isDropdownCategoryOpen && (
                                  <div
                                    className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase tracking-widest select-none text-left"
                                  >
                                    Base
                                  </div>
                                )}
                              </td>
                              <td className="py-3 px-4 align-top w-2/5 border-r border-slate-100">
                                {/* Public Products */}
                                {isDropdownPublicOpen && (
                                  <div className="flex flex-col gap-3 pt-1 pb-1">
                                    <div
                                      className="flex items-center space-x-2.5 p-1.5 rounded-lg transition group select-none"
                                    >
                                      <div className="h-7 w-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <Mail className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <div className="flex items-center space-x-2">
                                          <p className="font-bold text-slate-800 text-[11px]">BNX MAIL</p>
                                          <span className="px-1.5 py-0.2 rounded bg-blue-50 text-blue-600 border border-blue-100 text-[8px] font-bold uppercase tracking-wider">Public</span>
                                        </div>
                                        <p className="text-[9px] text-slate-400 font-medium">Collaborative group inbox</p>
                                      </div>
                                    </div>

                                    <div
                                      className="flex items-center space-x-2.5 p-1.5 rounded-lg transition group select-none"
                                    >
                                      <div className="h-7 w-7 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                                        <Shield className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <div className="flex items-center space-x-2">
                                          <p className="font-bold text-slate-800 text-[11px]">B2AUTH SECURITY</p>
                                          <span className="px-1.5 py-0.2 rounded bg-blue-50 text-blue-600 border border-blue-100 text-[8px] font-bold uppercase tracking-wider">Public</span>
                                        </div>
                                        <p className="text-[9px] text-slate-400 font-medium">MFA & SSO Gateway</p>
                                      </div>
                                    </div>

                                    <div
                                      className="flex items-center space-x-2.5 p-1.5 rounded-lg transition group select-none"
                                    >
                                      <div className="h-7 w-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <User className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <div className="flex items-center space-x-2">
                                          <p className="font-bold text-slate-800 text-[11px]">CLIKS</p>
                                          <span className="px-1.5 py-0.2 rounded bg-blue-50 text-blue-600 border border-blue-100 text-[8px] font-bold uppercase tracking-wider">Public</span>
                                        </div>
                                        <p className="text-[9px] text-slate-400 font-medium">Notes & calendars</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </td>
                              <td className="py-3 px-4 align-top w-2/5">
                                {/* Business Products */}
                                {isDropdownBusinessOpen && (
                                  <div className="flex flex-col gap-3 pt-1 pb-1">
                                    <Link
                                      to="/cliks-business/dashboard"
                                      onClick={() => setIsDropdownOpen(false)}
                                      className="flex items-center space-x-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition group"
                                    >
                                      <div className="h-7 w-7 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-650 flex-shrink-0">
                                        <Briefcase className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <div className="flex items-center space-x-2">
                                          <p className="font-bold text-slate-800 group-hover:text-[#004AAD] transition-colors text-[11px]">CLIKS BUSINESS</p>
                                          <span className="px-1.5 py-0.2 rounded bg-purple-50 text-purple-650 border border-purple-100 text-[8px] font-extrabold uppercase tracking-wider">Business</span>
                                        </div>
                                        <p className="text-[9px] text-slate-400 font-medium">Team project chats</p>
                                      </div>
                                    </Link>
                                  </div>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="border-t border-slate-100 mt-3 pt-3 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          <span>Beta Ecosystem</span>
                          <Link
                            to="/products"
                            onClick={() => setIsDropdownOpen(false)}
                            className="bg-[#004AAD] hover:bg-[#003c8a] !text-white font-extrabold text-[10px] tracking-wider uppercase px-4 py-2 rounded-full transition flex items-center space-x-1.5 duration-300 shadow-md shadow-blue-950/10 cursor-pointer"
                          >
                            <span className="text-white">All Products Overview</span>
                            <ChevronRight className="h-3.5 w-3.5 text-white" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === 'Support') {
                return (
                  <div
                    key={link.name}
                    ref={supportRef}
                    className="relative"
                  >
                    <button 
                      onClick={() => setIsSupportOpen(!isSupportOpen)}
                      className={`flex items-center space-x-1 focus:outline-none cursor-pointer ${isSupportOpen ? 'active-pill' : ''}`}
                    >
                      <span>Support</span>
                      <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transform transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isSupportOpen && (
                      <div className="absolute right-[-140px] mt-3 w-[540px] rounded-2xl bg-white border border-slate-200 shadow-2xl p-5 z-50 text-left text-slate-800 flex divide-x divide-slate-100">
                        
                        {/* Left Column: General Support Actions */}
                        <div className="w-3/5 pr-4 space-y-3">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Help & Support</div>
                          <div className="grid grid-cols-1 gap-1">
                            {[
                              { name: 'Search Knowledge Base', icon: Search, sub: 'Find answers, guides & articles', path: '/cliks-business/dashboard', state: { activeView: 'support', action: 'search' }, bg: 'bg-blue-50 text-blue-600 border-blue-100' },
                              { name: 'FAQs', icon: HelpCircle, sub: 'Quick answers to top questions', path: '/cliks-business/dashboard', state: { activeView: 'support', action: 'faqs' }, bg: 'bg-purple-50 text-purple-650 border-purple-100' },
                              { name: 'Submit Ticket', icon: Mail, sub: 'Direct specialist ticket queue', path: '/cliks-business/dashboard', state: { activeView: 'support', action: 'submit-ticket' }, bg: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                              { name: 'Live Chat', icon: MessageSquare, sub: 'Chat live with support agents', path: '/cliks-business/dashboard', state: { activeView: 'support', action: 'live-chat' }, bg: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                              { name: 'System Status', icon: Activity, sub: 'Check service operational status', path: '/cliks-business/dashboard', state: { activeView: 'support', action: 'status' }, bg: 'bg-amber-50 text-amber-600 border-amber-100' },
                              { name: 'Downloads', icon: Download, sub: 'Get user manuals & desktop app', path: '/cliks-business/dashboard', state: { activeView: 'support', action: 'downloads' }, bg: 'bg-teal-50 text-teal-600 border-teal-100' },
                              { name: 'Contact Support', icon: Phone, sub: 'Call our 24/7 hotline numbers', path: '/partners', bg: 'bg-rose-50 text-rose-600 border-rose-100' }
                            ].map((item, idx) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  state={item.state}
                                  onClick={() => setIsSupportOpen(false)}
                                  className="flex items-center space-x-2.5 p-1 rounded-lg hover:bg-slate-50 transition group"
                                >
                                  <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 border ${item.bg}`}>
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <p className="font-bold text-xs text-slate-800 group-hover:text-[#004AAD] transition-colors">{item.name}</p>
                                    <p className="text-[9px] text-slate-400 font-medium">{item.sub}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Column: Product Support */}
                        <div className="w-2/5 pl-4 space-y-3">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Product Support</div>
                          <div className="space-y-1.5">
                            {[
                              { name: 'BNX Mail', icon: Mail, sub: 'Email config & inbox setup', path: '/bnx-mail/dashboard', bg: 'bg-blue-50 text-blue-600 border-blue-100' },
                              { name: 'B2Auth Security', icon: Shield, sub: 'SSO gateway & identity MFA', path: '/products#b2auth-security', bg: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
                              { name: 'Cliks', icon: User, sub: 'Notes, calendar & settings', path: '/products#cliks', bg: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                              { name: 'Cliks Business', icon: Briefcase, sub: 'Operations log & invoicing', path: '/cliks-business/dashboard', bg: 'bg-teal-50 text-teal-600 border-teal-100' }
                            ].map((item, idx) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  onClick={() => setIsSupportOpen(false)}
                                  className="flex items-center space-x-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition group"
                                >
                                  <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 border ${item.bg}`}>
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <p className="font-bold text-xs text-slate-800 group-hover:text-[#004AAD] transition-colors">{item.name}</p>
                                    <p className="text-[9px] text-slate-400 font-medium">{item.sub}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={isActive(link.path) ? 'active-pill' : ''}
                >
                  {link.name}
                </Link>
              );
            })}
            </div>
          </div>

          {/* Auth CTA Buttons */}
          <div className="flex-1 hidden md:flex items-center justify-end space-x-4 ml-auto">
            {/* Header Search Bar */}
            <div className="relative w-28 lg:w-36 xl:w-44 mr-2 nav-search-container">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-300/80 nav-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search..."
                className="w-full bg-[#002b5c]/60 border border-blue-800/40 rounded-full py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-white focus:bg-[#002b5c]/90 transition shadow-inner nav-search-input"
              />
            </div>
            {user ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-100/95 border border-slate-200/80 hover:bg-slate-200/60 transition duration-300 cursor-pointer text-slate-700 focus:outline-none"
                >
                  <div className="h-6 w-6 rounded-full bg-[#004AAD] flex items-center justify-center text-white font-semibold text-xs select-none">
                    <User className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide pr-1 text-slate-700">
                    {user.username ? user.username.split('@')[0] : 'User'}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transform transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl p-5 z-50 text-left text-slate-800">
                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Logged In As</p>
                      <p className="text-sm font-extrabold text-slate-900 truncate">{user.username}</p>
                      <p className="text-xs text-slate-500 font-medium">India</p>
                    </div>

                    <div className="border-b border-slate-100 my-4" />

                    <div className="space-y-4">
                      <Link
                        to="/admin"
                        onClick={() => setIsProfileOpen(false)}
                        className="block text-sm font-semibold text-slate-700 hover:text-[#004AAD] transition"
                      >
                        Account Profile
                      </Link>

                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-slate-700">Language</span>
                        <span className="text-slate-400 font-medium">English</span>
                      </div>

                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-slate-700">Currency</span>
                        <span className="text-slate-400 font-medium">INR (₹)</span>
                      </div>

                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-slate-700">Country</span>
                        <span className="text-slate-400 font-medium">India</span>
                      </div>
                    </div>

                    <div className="border-b border-slate-100 my-4" />

                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        handleLogout();
                      }}
                      className="w-full text-left text-sm font-bold text-red-500 hover:text-red-600 transition border-none bg-transparent cursor-pointer p-0"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-slate-700 hover:bg-slate-200/60 transition duration-300 text-xs font-bold cursor-pointer header-signin-btn"
                >
                  <LogIn className="h-3.5 w-3.5 text-slate-500" />
                  <span className="text-slate-700">Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#004AAD] border border-[#004AAD] text-white hover:bg-[#003882] hover:border-[#003882] transition duration-300 text-xs font-bold cursor-pointer shadow-md shadow-blue-950/20 header-signup-btn"
                >
                  <UserPlus className="h-3.5 w-3.5 text-white" />
                  <span className="text-white">Sign Up</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-[#004AAD] hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#e2f0e8] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              if (link.name === 'Products') {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => {
                        setIsMobileProductsOpen(!isMobileProductsOpen);
                        setIsMobileSupportOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#004AAD] focus:outline-none cursor-pointer"
                    >
                      <span>Products</span>
                      <ChevronDown className={`h-4 w-4 text-slate-400 transform transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileProductsOpen && (
                      <div className="pl-4 pr-3 py-2 space-y-2 bg-slate-50 border border-slate-150/80 rounded-lg text-left">
                        {/* Mobile Category Toggle */}
                        <div className="space-y-1">
                          <button
                            onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                            className="w-full flex items-center justify-between px-3 py-1 rounded text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
                          >
                            <span>Category</span>
                            <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transform transition-transform ${isMobileCategoryOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isMobileCategoryOpen && (
                            <div className="pl-6 py-1">
                              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase tracking-widest select-none">
                                Base
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Mobile Public Toggle */}
                        <div className="space-y-1">
                          <button
                            onClick={() => setIsMobilePublicOpen(!isMobilePublicOpen)}
                            className="w-full flex items-center justify-between px-3 py-1 rounded text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
                          >
                            <span>Public</span>
                            <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transform transition-transform ${isMobilePublicOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isMobilePublicOpen && (
                            <div className="pl-6 space-y-2 py-1">
                              <div
                                className="flex items-center space-x-2 text-slate-600 text-xs py-1 select-none"
                              >
                                <Mail className="h-4 w-4 text-blue-500" />
                                <span>BNX Mail</span>
                              </div>
                              <div
                                className="flex items-center space-x-2 text-slate-600 text-xs py-1 select-none"
                              >
                                <Shield className="h-4 w-4 text-cyan-500" />
                                <span>B2Auth Security</span>
                              </div>
                              <div
                                className="flex items-center space-x-2 text-slate-600 text-xs py-1 select-none"
                              >
                                <User className="h-4 w-4 text-emerald-500" />
                                <span>Cliks</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Mobile Business Toggle */}
                        <div className="space-y-1">
                          <button
                            onClick={() => setIsMobileBusinessOpen(!isMobileBusinessOpen)}
                            className="w-full flex items-center justify-between px-3 py-1 rounded text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
                          >
                            <span>Business</span>
                            <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transform transition-transform ${isMobileBusinessOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isMobileBusinessOpen && (
                            <div className="pl-6 space-y-2 py-1">
                              <Link
                                to="/cliks-business/dashboard"
                                onClick={() => {
                                  setIsMobileProductsOpen(false);
                                  setIsOpen(false);
                                }}
                                className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-xs py-1"
                              >
                                <Briefcase className="h-4 w-4 text-teal-500" />
                                <span>Cliks Business</span>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === 'Support') {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => setIsMobileSupportOpen(!isMobileSupportOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#004AAD] focus:outline-none cursor-pointer"
                    >
                      <span>Support</span>
                      <ChevronDown className={`h-4 w-4 text-slate-400 transform transition-transform ${isMobileSupportOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileSupportOpen && (
                      <div className="pl-6 pr-3 py-2.5 space-y-2 bg-slate-50 border border-slate-150/80 rounded-lg text-left">
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Help & Support</div>
                        
                        <Link
                          to="/cliks-business/dashboard"
                          state={{ activeView: 'support', action: 'search' }}
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <Search className="h-4 w-4 text-blue-500" />
                          <span>Search Knowledge Base</span>
                        </Link>

                        <Link
                          to="/cliks-business/dashboard"
                          state={{ activeView: 'support', action: 'faqs' }}
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <HelpCircle className="h-4 w-4 text-purple-500" />
                          <span>FAQs</span>
                        </Link>

                        <Link
                          to="/cliks-business/dashboard"
                          state={{ activeView: 'support', action: 'submit-ticket' }}
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <Mail className="h-4 w-4 text-emerald-500" />
                          <span>Submit Ticket</span>
                        </Link>

                        <Link
                          to="/cliks-business/dashboard"
                          state={{ activeView: 'support', action: 'live-chat' }}
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <MessageSquare className="h-4 w-4 text-indigo-500" />
                          <span>Live Chat</span>
                        </Link>

                        <Link
                          to="/cliks-business/dashboard"
                          state={{ activeView: 'support', action: 'status' }}
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <Activity className="h-4 w-4 text-amber-500" />
                          <span>System Status</span>
                        </Link>

                        <Link
                          to="/cliks-business/dashboard"
                          state={{ activeView: 'support', action: 'downloads' }}
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <Download className="h-4 w-4 text-teal-500" />
                          <span>Downloads</span>
                        </Link>

                        <Link
                          to="/partners"
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <Phone className="h-4 w-4 text-rose-500" />
                          <span>Contact Support</span>
                        </Link>

                        <div className="border-t border-slate-150/80 my-2 pt-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Product Support</div>

                        <Link
                          to="/bnx-mail/dashboard"
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <Mail className="h-4 w-4 text-blue-500" />
                          <span>BNX Mail</span>
                        </Link>

                        <Link
                          to="/products#b2auth-security"
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <Shield className="h-4 w-4 text-cyan-500" />
                          <span>B2Auth Security</span>
                        </Link>

                        <Link
                          to="/products#cliks"
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <User className="h-4 w-4 text-emerald-500" />
                          <span>Cliks</span>
                        </Link>

                        <Link
                          to="/cliks-business/dashboard"
                          onClick={() => {
                            setIsMobileSupportOpen(false);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 text-slate-600 hover:text-[#004AAD] text-sm py-1"
                        >
                          <Briefcase className="h-4 w-4 text-teal-500" />
                          <span>Cliks Business</span>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-[#004AAD] font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#004AAD]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="border-t border-slate-100 my-2 pt-2">
              {user ? (
                <div className="space-y-2 px-3">
                  <div className="flex items-center space-x-3 py-2 border-b border-slate-100 mb-2">
                    <div className="h-8 w-8 rounded-full bg-[#004AAD] flex items-center justify-center text-white font-semibold select-none">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Account</p>
                      <p className="text-sm font-bold text-slate-800 truncate">{user.username}</p>
                    </div>
                  </div>
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#004AAD]"
                  >
                    <LayoutDashboard className="h-5 w-5 text-slate-400" />
                    <span>Admin Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 text-left border-none bg-transparent cursor-pointer"
                  >
                    <LogOut className="h-5 w-5 text-red-500" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2 px-3">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200/60 transition duration-300 cursor-pointer mobile-signin-btn"
                  >
                    <LogIn className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700">Sign In</span>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#004AAD] border border-[#004AAD] text-white hover:bg-[#003882] hover:border-[#003882] transition duration-300 cursor-pointer mobile-signup-btn"
                  >
                    <UserPlus className="h-4 w-4 text-white" />
                    <span className="text-white">Sign Up</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}
