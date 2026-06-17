import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Box, LogOut, LayoutDashboard, LogIn, ChevronDown, ChevronRight, Mail, Shield, User, Briefcase, Search, UserPlus, Lock, CheckCircle2, AlertCircle, HelpCircle, MessageSquare, Download, Phone, Activity, MapPin, Check, Copy, Clock, Send, RefreshCw } from 'lucide-react';
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
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeMobileFaq, setActiveMobileFaq] = useState(null);

  const [copiedText, setCopiedText] = useState('');
  const [showChatAssistant, setShowChatAssistant] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: "Hi! I'm your Beta Support Assistant. How can I help you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const supportContactInfo = {
    phone: '+1 (800) 555-0199',
    email: 'support@betasoftnet.com',
    hours: 'Mon - Fri, 9:00 AM - 6:00 PM IST'
  };

  const supportFaqs = [
    { q: 'How do I access my products?', a: 'Navigate to the Products overview page to launch your active integrations.' },
    { q: 'Is my data secure with Beta?', a: 'Yes, all data in transit and at rest is secured using bank-grade 256-bit SSL encryption.' },
    { q: 'How do I submit feedback?', a: 'We would love to hear from you. Send us an email at support@betasoftnet.com.' }
  ];

  const chatPrompts = [
    { label: 'Check Server Status', value: 'status' },
    { label: 'Reset Password', value: 'password' },
    { label: 'Product Integrations', value: 'integrations' },
    { label: 'Average Response Time', value: 'response' }
  ];

  const handleCopyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText('');
    }, 2000);
  };

  const handleChatPromptClick = (prompt) => {
    if (isTyping) return;
    
    // Add user message
    const updatedMessages = [...chatMessages, { sender: 'user', text: prompt.label }];
    setChatMessages(updatedMessages);
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      if (prompt.value === 'status') {
        reply = 'All Beta Softnet core services (BNX Mail, B2Auth Security, Cliks) are fully operational. Average latency: 42ms. Status: 100% Up.';
      } else if (prompt.value === 'password') {
        reply = 'To reset your password, click your profile menu in the navbar and go to Account Profile, or contact support@betasoftnet.com.';
      } else if (prompt.value === 'integrations') {
        reply = 'Beta provides seamless SDKs for Node.js, Python, and Java. Refer to the Products Overview dashboard to get your API keys.';
      } else if (prompt.value === 'response') {
        reply = 'Our average email and phone support response time is 12.5 minutes, backed by our 24/7 dedicated tier-1 engineering helpdesk.';
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 850);
  };

  const resetChat = () => {
    setChatMessages([
      { sender: 'bot', text: "Hi! I'm your Beta Support Assistant. How can I help you today?" }
    ]);
    setShowChatAssistant(false);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isMobileLocationOpen, setIsMobileLocationOpen] = useState(false);
  const locationRef = useRef(null);
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune'];
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
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

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
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-2 sm:-ml-4 space-x-4">
            <Link to="/" className="flex items-center select-none">
              <img src="/logo.png" alt="Beta Logo" className="h-12 w-auto object-contain rounded-lg shadow-sm" />
            </Link>

            {/* Location Dropdown */}
            <div className="relative animate-fadeIn" ref={locationRef}>
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 hover:bg-slate-200/60 transition duration-300 text-xs font-bold text-slate-700 cursor-pointer focus:outline-none"
              >
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-slate-700">{selectedCity}</span>
                <ChevronDown className={`h-3 w-3 text-slate-400 transform transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLocationOpen && (
                <div className="absolute left-0 mt-2 w-44 rounded-2xl bg-white border border-slate-200 shadow-2xl p-2 z-50 text-left text-slate-800">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider px-3 py-1.5 border-b border-slate-100">
                    Select Location
                  </div>
                  <div className="py-1 max-h-60 overflow-y-auto">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setIsLocationOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center justify-between ${
                          selectedCity === city
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'hover:bg-slate-50 text-slate-700 hover:text-[#004AAD]'
                        }`}
                      >
                        <span>{city}</span>
                        {selectedCity === city && <Check className="h-3.5 w-3.5 text-emerald-600" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav Links, Search, and Auth CTA */}
          <div className="hidden md:flex items-center space-x-6 ml-auto z-20">
            {/* Desktop Nav Links */}
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
                      type="button"
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
                                    <div
                                      className="flex items-center space-x-2.5 p-1.5 rounded-lg transition group select-none"
                                    >
                                      <div className="h-7 w-7 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-650 flex-shrink-0">
                                        <Briefcase className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <div className="flex items-center space-x-2">
                                          <p className="font-bold text-slate-800 text-[11px]">CLIKS BUSINESS</p>
                                          <span className="px-1.5 py-0.2 rounded bg-purple-50 text-purple-650 border border-purple-100 text-[8px] font-extrabold uppercase tracking-wider">Business</span>
                                        </div>
                                        <p className="text-[9px] text-slate-400 font-medium">Team project chats</p>
                                      </div>
                                    </div>
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
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSupportOpen(!isSupportOpen);
                        setIsDropdownOpen(false);
                      }}
                      className={`flex items-center space-x-1 focus:outline-none cursor-pointer ${isSupportOpen ? 'active-pill' : ''}`}
                    >
                      <span>Support</span>
                      <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transform transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isSupportOpen && (
                      <div className="absolute right-[-140px] mt-3 w-[520px] rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 border-t-4 border-t-emerald-600 shadow-2xl p-5 z-50 text-left text-slate-800 animate-fadeIn">
                        {showChatAssistant ? (
                          /* Chat Assistant View */
                          <div className="space-y-4">
                            {/* Chat Header */}
                            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                              <div className="flex items-center space-x-2">
                                <div className="h-7 w-7 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                                  <MessageSquare className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="flex items-center space-x-1.5">
                                    <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">Beta Support AI</h4>
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-555"></span>
                                    </span>
                                  </div>
                                  <p className="text-[9px] text-slate-400 font-medium">Virtual Helpdesk Assistant</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => setShowChatAssistant(false)}
                                className="text-[10px] font-extrabold text-[#004AAD] hover:text-[#003c8a] transition uppercase tracking-wider px-2.5 py-1 rounded-lg hover:bg-slate-100 cursor-pointer"
                              >
                                Back to Info
                              </button>
                            </div>

                            {/* Chat Messages */}
                            <div className="h-[210px] overflow-y-auto space-y-3 p-3 bg-slate-50/60 rounded-xl border border-slate-150/50 text-xs">
                              {chatMessages.map((msg, index) => (
                                <div
                                  key={index}
                                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                  <div
                                    className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed shadow-sm ${
                                      msg.sender === 'user'
                                        ? 'bg-emerald-600 text-white font-semibold rounded-tr-none'
                                        : 'bg-white border border-slate-200 text-slate-750 font-medium rounded-tl-none'
                                    }`}
                                  >
                                    {msg.text}
                                  </div>
                                </div>
                              ))}
                              {isTyping && (
                                <div className="flex justify-start">
                                  <div className="bg-white border border-slate-200 text-slate-400 font-medium rounded-2xl rounded-tl-none px-3 py-2 flex items-center space-x-1">
                                    <span className="w-1.5 h-1.5 bg-slate-450 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-1.5 h-1.5 bg-slate-450 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-1.5 h-1.5 bg-slate-450 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Suggested Prompts */}
                            <div className="space-y-1.5">
                              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Select a question to ask:</p>
                              <div className="grid grid-cols-2 gap-2">
                                {chatPrompts.map((p, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleChatPromptClick(p)}
                                    className="px-3 py-2 text-left rounded-xl border border-slate-200 bg-white hover:border-[#004AAD]/40 hover:bg-[#004AAD]/5 text-[10px] font-bold text-slate-750 transition cursor-pointer select-none truncate"
                                  >
                                    {p.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Footer / Reset */}
                            <div className="border-t border-slate-100 pt-2 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-wider animate-fadeIn">
                              <span>Instant AI Help</span>
                              <button
                                type="button"
                                onClick={resetChat}
                                className="flex items-center space-x-1 text-red-500 hover:text-red-650 transition cursor-pointer"
                              >
                                <RefreshCw className="h-3 w-3" />
                                <span>Reset Chat</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* Static Info View */
                          <div className="space-y-4">
                            {/* Header */}
                            <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                              <div>
                                <h4 className="font-extrabold text-sm text-[#004AAD] uppercase tracking-wider">Help & Support Center</h4>
                                <p className="text-[10px] text-slate-400 font-medium mt-0.5">Instant self-service tools and operational metrics.</p>
                              </div>
                              <div className="flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1 select-none">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-555"></span>
                                </span>
                                <span className="text-emerald-700 font-extrabold text-[9px] uppercase tracking-wider">All Systems Operational</span>
                              </div>
                            </div>

                            {/* Two-Column Grid */}
                            <div className="grid grid-cols-12 gap-4">
                              {/* Left Column: Contact & Chat Trigger */}
                              <div className="col-span-6 space-y-3">
                                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Helpdesk Channels</p>
                                
                                {/* Phone card */}
                                <div className="p-3 bg-slate-50 border border-slate-150 rounded-2xl relative group transition hover:border-[#004AAD]/20">
                                  <div className="flex items-center space-x-2 mb-1.5">
                                    <Phone className="h-3.5 w-3.5 text-slate-500" />
                                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Phone Hotline</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-800 select-all">{supportContactInfo.phone}</span>
                                    <button
                                      type="button"
                                      onClick={() => handleCopyText(supportContactInfo.phone, 'phone')}
                                      className="text-slate-400 hover:text-[#004AAD] transition cursor-pointer"
                                      title="Copy number"
                                    >
                                      {copiedText === 'phone' ? (
                                        <Check className="h-3.5 w-3.5 text-emerald-600 animate-fadeIn" />
                                      ) : (
                                        <Copy className="h-3.5 w-3.5" />
                                      )}
                                    </button>
                                  </div>
                                  {copiedText === 'phone' && (
                                    <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[8px] font-bold uppercase animate-fadeIn">Copied!</span>
                                  )}
                                </div>

                                {/* Email card */}
                                <div className="p-3 bg-slate-50 border border-slate-150 rounded-2xl relative group transition hover:border-[#004AAD]/20">
                                  <div className="flex items-center space-x-2 mb-1.5">
                                    <Mail className="h-3.5 w-3.5 text-slate-500" />
                                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Email Support</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <a href={`mailto:${supportContactInfo.email}`} className="text-xs font-bold text-[#004AAD] hover:underline truncate mr-1">{supportContactInfo.email}</a>
                                    <button
                                      type="button"
                                      onClick={() => handleCopyText(supportContactInfo.email, 'email')}
                                      className="text-slate-400 hover:text-[#004AAD] transition cursor-pointer"
                                      title="Copy email"
                                    >
                                      {copiedText === 'email' ? (
                                        <Check className="h-3.5 w-3.5 text-emerald-600 animate-fadeIn" />
                                      ) : (
                                        <Copy className="h-3.5 w-3.5" />
                                      )}
                                    </button>
                                  </div>
                                  {copiedText === 'email' && (
                                    <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[8px] font-bold uppercase animate-fadeIn">Copied!</span>
                                  )}
                                </div>

                                {/* Hours card */}
                                <div className="p-2.5 bg-slate-50/50 border border-slate-100 rounded-xl flex items-center space-x-2 select-none">
                                  <Clock className="h-3.5 w-3.5 text-slate-450 flex-shrink-0" />
                                  <div className="min-w-0">
                                    <p className="text-[8px] text-slate-450 font-bold uppercase tracking-wider">Support Hours</p>
                                    <p className="text-[9.5px] font-semibold text-slate-600 truncate">{supportContactInfo.hours}</p>
                                  </div>
                                </div>

                                {/* Start Chat Button */}
                                <button
                                  type="button"
                                  onClick={() => setShowChatAssistant(true)}
                                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold transition duration-300 shadow-md shadow-emerald-955/10 cursor-pointer"
                                >
                                  <MessageSquare className="h-4 w-4 text-white" />
                                  <span className="text-white">Start Support Chat</span>
                                </button>
                              </div>

                              {/* Right Column: FAQs */}
                              <div className="col-span-6 space-y-3">
                                <div className="flex items-center justify-between">
                                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Quick FAQs</p>
                                  <div className="flex items-center space-x-1 text-emerald-700 font-bold text-[9px] uppercase tracking-wider bg-emerald-50 rounded-full px-2 py-0.5 select-none">
                                    <Activity className="h-3 w-3" />
                                    <span>Resp: &lt; 15m</span>
                                  </div>
                                </div>

                                <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                                  {supportFaqs.map((faq, idx) => (
                                    <div key={idx} className="border border-slate-150 rounded-xl overflow-hidden bg-white shadow-sm transition hover:border-slate-200">
                                      <button
                                        type="button"
                                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-2.5 text-left text-[11.5px] font-bold text-slate-800 hover:bg-slate-50 transition focus:outline-none cursor-pointer"
                                      >
                                        <span className="pr-2">{faq.q}</span>
                                        <ChevronDown className={`h-3 w-3 text-slate-400 shrink-0 transform transition-transform duration-200 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                                      </button>
                                      {activeFaq === idx && (
                                        <div className="px-2.5 pb-2.5 pt-0.5 text-[10.5px] text-slate-500 font-medium leading-relaxed border-t border-slate-50 bg-slate-50/20 animate-fadeIn">
                                          {faq.a}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
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

            {/* Header Search Bar */}
            <div ref={searchContainerRef} className="mr-2 flex items-center justify-center">
              {isSearchExpanded ? (
                <div className="relative w-36 lg:w-44 xl:w-52 nav-search-container animate-fadeIn">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-305 nav-search-icon" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Search..."
                    className="w-full bg-[#002b5c]/60 border border-blue-800/40 rounded-full py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-white focus:bg-[#002b5c]/90 transition shadow-inner nav-search-input"
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchExpanded(true)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition duration-300 focus:outline-none cursor-pointer flex items-center justify-center"
                  title="Search"
                >
                  <Search className="h-5 w-5 text-slate-650 hover:text-[#004AAD]" />
                </button>
              )}
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
              <div className="flex items-center space-x-2 flex-shrink-0">
                <Link
                  to="/login"
                  className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-slate-700 hover:bg-slate-200/60 transition duration-300 text-xs font-bold cursor-pointer header-signin-btn whitespace-nowrap flex-shrink-0"
                >
                  <LogIn className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
                  <span className="text-slate-700 whitespace-nowrap">Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#004AAD] border border-[#004AAD] text-white hover:bg-[#003882] hover:border-[#003882] transition duration-300 text-xs font-bold cursor-pointer shadow-md shadow-blue-950/20 header-signup-btn whitespace-nowrap flex-shrink-0"
                >
                  <UserPlus className="h-3.5 w-3.5 text-white flex-shrink-0" />
                  <span className="text-white whitespace-nowrap">Sign Up</span>
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
            {/* Mobile Location Selector */}
            <div className="px-3 py-1.5 border-b border-slate-100 mb-2">
              <div className="relative">
                <button
                  onClick={() => setIsMobileLocationOpen(!isMobileLocationOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-slate-50 border border-slate-150 text-sm font-medium text-slate-700 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    <span className="font-bold">{selectedCity}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transform transition-transform ${isMobileLocationOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileLocationOpen && (
                  <div className="mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto z-50 p-1 text-left">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setIsMobileLocationOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition cursor-pointer ${
                          selectedCity === city
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span>{city}</span>
                        {selectedCity === city && <Check className="h-3.5 w-3.5 text-emerald-600" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
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
                              <div
                                className="flex items-center space-x-2 text-slate-650 text-xs py-1 select-none"
                              >
                                <Briefcase className="h-4 w-4 text-teal-555" />
                                <span>Cliks Business</span>
                              </div>
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
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileSupportOpen(!isMobileSupportOpen);
                        setIsMobileProductsOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#004AAD] focus:outline-none cursor-pointer"
                    >
                      <span>Support</span>
                      <ChevronDown className={`h-4 w-4 text-slate-400 transform transition-transform ${isMobileSupportOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileSupportOpen && (
                      <div className="pl-4 pr-3 py-3 space-y-3 bg-slate-50 border border-slate-150/80 rounded-lg text-left animate-fadeIn">
                        {showChatAssistant ? (
                          /* Mobile Chat Assistant View */
                          <div className="space-y-3">
                            <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                              <div className="flex items-center space-x-1.5">
                                <MessageSquare className="h-4 w-4 text-emerald-650" />
                                <span className="text-xs font-bold text-slate-800">Support Chat</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => setShowChatAssistant(false)}
                                className="text-[10px] font-extrabold text-[#004AAD] uppercase tracking-wider px-2 py-0.5 rounded hover:bg-slate-200/50 cursor-pointer"
                              >
                                Exit Chat
                              </button>
                            </div>

                            {/* Chat Messages */}
                            <div className="max-h-[180px] overflow-y-auto space-y-2.5 p-2 bg-white rounded-lg border border-slate-205 text-[11px]">
                              {chatMessages.map((msg, index) => (
                                <div
                                  key={index}
                                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                  <div
                                    className={`max-w-[90%] rounded-xl px-2.5 py-1.5 leading-relaxed shadow-sm ${
                                      msg.sender === 'user'
                                        ? 'bg-emerald-600 text-white font-semibold rounded-tr-none'
                                        : 'bg-slate-105 border border-slate-150 text-slate-750 font-medium rounded-tl-none'
                                    }`}
                                  >
                                    {msg.text}
                                  </div>
                                </div>
                              ))}
                              {isTyping && (
                                <div className="flex justify-start">
                                  <div className="bg-slate-105 border border-slate-150 text-slate-400 font-medium rounded-xl rounded-tl-none px-2.5 py-1.5 flex items-center space-x-1">
                                    <span className="w-1 h-1 bg-slate-450 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-1 h-1 bg-slate-450 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-1 h-1 bg-slate-450 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Prompts list */}
                            <div className="space-y-1">
                              <p className="text-[8px] text-slate-450 font-bold uppercase tracking-wider">Tap to ask:</p>
                              <div className="grid grid-cols-2 gap-1.5">
                                {chatPrompts.map((p, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleChatPromptClick(p)}
                                    className="px-2 py-1.5 text-left rounded-lg border border-slate-200 bg-white text-[9px] font-bold text-slate-700 transition cursor-pointer select-none truncate"
                                  >
                                    {p.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Mobile Info View */
                          <>
                            {/* Status Indicators */}
                            <div className="flex justify-between items-center bg-white border border-slate-200/80 rounded-lg px-2.5 py-1.5 text-[10px] select-none">
                              <div className="flex items-center space-x-1">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-555"></span>
                                </span>
                                <span className="font-extrabold text-emerald-700">All Systems Operational</span>
                              </div>
                              <span className="text-slate-450 font-semibold">Resp: &lt;15m</span>
                            </div>

                            {/* Contact Channels */}
                            <div className="space-y-2">
                              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Helpdesk Channels</p>
                              <div className="space-y-2 text-xs">
                                <div className="flex items-center justify-between border-b border-slate-200/60 pb-1.5 relative">
                                  <div className="flex items-center space-x-1.5">
                                    <Phone className="h-3.5 w-3.5 text-slate-400" />
                                    <span className="text-slate-500 font-medium">Hotline:</span>
                                    <span className="font-bold text-slate-800 select-all">{supportContactInfo.phone}</span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => handleCopyText(supportContactInfo.phone, 'phone-mob')}
                                    className="text-slate-400 hover:text-[#004AAD] transition cursor-pointer"
                                  >
                                    {copiedText === 'phone-mob' ? (
                                      <Check className="h-3.5 w-3.5 text-emerald-600 animate-fadeIn" />
                                    ) : (
                                      <Copy className="h-3.5 w-3.5" />
                                    )}
                                  </button>
                                  {copiedText === 'phone-mob' && (
                                    <span className="absolute -top-3 right-0 px-1 py-0.2 rounded bg-emerald-600 text-white text-[7px] font-bold uppercase animate-fadeIn">Copied!</span>
                                  )}
                                </div>
                                
                                <div className="flex items-center justify-between border-b border-slate-200/60 pb-1.5 relative">
                                  <div className="flex items-center space-x-1.5 min-w-0">
                                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                                    <span className="text-slate-500 font-medium">Email:</span>
                                    <a href={`mailto:${supportContactInfo.email}`} className="font-bold text-[#004AAD] hover:underline truncate">{supportContactInfo.email}</a>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => handleCopyText(supportContactInfo.email, 'email-mob')}
                                    className="text-slate-400 hover:text-[#004AAD] transition cursor-pointer"
                                  >
                                    {copiedText === 'email-mob' ? (
                                      <Check className="h-3.5 w-3.5 text-emerald-600 animate-fadeIn" />
                                    ) : (
                                      <Copy className="h-3.5 w-3.5" />
                                    )}
                                  </button>
                                  {copiedText === 'email-mob' && (
                                    <span className="absolute -top-3 right-0 px-1 py-0.2 rounded bg-emerald-600 text-white text-[7px] font-bold uppercase animate-fadeIn">Copied!</span>
                                  )}
                                </div>

                                <div className="flex items-center space-x-1.5">
                                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                                  <span className="text-slate-500 font-medium">Hours:</span>
                                  <span className="font-semibold text-slate-600 text-[10px]">{supportContactInfo.hours}</span>
                                </div>
                              </div>
                            </div>

                            {/* Start Support Chat Button */}
                            <button
                              type="button"
                              onClick={() => setShowChatAssistant(true)}
                              className="w-full flex items-center justify-center space-x-1.5 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition cursor-pointer"
                            >
                              <MessageSquare className="h-3.5 w-3.5 text-white" />
                              <span className="text-white">Start Support Chat</span>
                            </button>

                            {/* FAQs */}
                            <div className="space-y-2 border-t border-slate-200/80 pt-2.5">
                              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Quick FAQs</p>
                              <div className="space-y-1.5">
                                {supportFaqs.map((faq, idx) => (
                                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                                    <button
                                      type="button"
                                      onClick={() => setActiveMobileFaq(activeMobileFaq === idx ? null : idx)}
                                      className="w-full flex items-center justify-between p-2 text-left text-[11px] font-bold text-slate-800 hover:bg-slate-50 transition focus:outline-none cursor-pointer"
                                    >
                                      <span className="pr-2">{faq.q}</span>
                                      <ChevronDown className={`h-3 w-3 text-slate-400 shrink-0 transform transition-transform ${activeMobileFaq === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeMobileFaq === idx && (
                                      <div className="px-2 pb-2 pt-0.5 text-[10px] text-slate-500 font-medium leading-relaxed border-t border-slate-100 bg-slate-50/20 animate-fadeIn">
                                        {faq.a}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
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
