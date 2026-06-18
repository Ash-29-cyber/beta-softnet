import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Handshake, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  Layers, 
  Globe, 
  Building, 
  ArrowRight,
  Code2,
  Cpu,
  Zap,
  FileText,
  ChevronLeft,
  ChevronRight,
  Compass
} from 'lucide-react';
import api from '../api';

// Custom Count Up animation component
function CountUpNumber({ value }) {
  const numericValue = parseFloat(value);
  const suffix = value.replace(/^[0-9.]+/, '');
  const [displayValue, setDisplayValue] = useState(() => isNaN(numericValue) ? value : '0');

  useEffect(() => {
    if (isNaN(numericValue)) {
      const timer = setTimeout(() => setDisplayValue(value), 0);
      return () => clearTimeout(timer);
    }
    let startTimestamp = null;
    const duration = 1800; // 1.8 seconds transition
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = progress * (numericValue - startValue) + startValue;
      
      if (numericValue % 1 !== 0) {
        setDisplayValue(currentVal.toFixed(1) + suffix);
      } else {
        setDisplayValue(Math.floor(currentVal) + suffix);
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, numericValue, suffix]);

  return <span>{displayValue}</span>;
}

const benefits = [
  { id: 1, title: 'Revenue Growth', desc: 'Co-selling, referral fees, revenue splits, and tier-based commission networks.', icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { id: 2, title: 'Technical Support', desc: 'Direct access to core engineering support slack and dedicated partner sandbox portals.', icon: Cpu, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { id: 3, title: 'Joint Marketing', desc: 'Co-branded campaigns, featured ecosystem catalog spots, and shared event sponsorships.', icon: Handshake, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { id: 4, title: 'Product Training', desc: 'In-depth engineering masterclasses, partner certifications, and cloud sandbox credits.', icon: Award, color: 'text-amber-450', bg: 'bg-amber-500/10 border-amber-500/20' },
  { id: 5, title: 'Early Access Programs', desc: 'Beta SDK availability, draft RFC reviews, and early releases of the unified database layer.', icon: Layers, color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  { id: 6, title: 'Dedicated Partner Manager', desc: 'Personal alliance lead to navigate integrations, coordinate updates, and monitor tier health.', icon: Users, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' }
];

const categories = [
  { title: 'Technology Partner', desc: 'Build plugins, widgets, and connected integrations on top of the BNX Mail and Cliks platforms.', icon: Code2, color: 'text-cyan-400', border: 'border-cyan-500/20 hover:border-cyan-500/50' },
  { title: 'Integration Partner', desc: 'Provide migrations, security auditing, and systems deployment syncs for enterprise clients.', icon: Cpu, color: 'text-purple-400', border: 'border-purple-500/20 hover:border-purple-500/50' },
  { title: 'Reseller Partner', desc: 'Distribute licenses, support local regional accounts, and coordinate market sales packages.', icon: Users, color: 'text-emerald-400', border: 'border-emerald-500/20 hover:border-emerald-500/50' },
  { title: 'Consulting Partner', desc: 'Deliver strategic advisory, business process re-engineering, and product adoption modules.', icon: Compass, color: 'text-pink-400', border: 'border-pink-500/20 hover:border-pink-500/50' },
  { title: 'Strategic Alliance Partner', desc: 'Co-engineer core infrastructure services, network protocols, and auth gateways.', icon: Handshake, color: 'text-amber-400', border: 'border-amber-500/20 hover:border-amber-500/50' }
];

const successStories = [
  { id: 1, name: 'Apex Cloud Systems', category: 'Cloud Infrastructure', metric: '+180% Latency Reduction', desc: 'Powers Beta Softnet distributed cloud deployments with ultra-low latency compute clusters globally.', logo: 'APEX', logoColor: 'from-blue-500 to-indigo-500' },
  { id: 2, name: 'Nova Core Cyber', category: 'Security Integration', metric: '99.99% Hardened MFA Gates', desc: 'Co-development partner for B2 Auth Security protocols, auditing and hardening SSO & MFA gateways.', logo: 'NOVA', logoColor: 'from-cyan-500 to-teal-500' },
  { id: 3, name: 'Vertex Solutions', category: 'System Integration', metric: '10K+ Client Migrations', desc: 'Specialized consulting partner orchestrating large-scale enterprise migrations onto the Cliks Business suite.', logo: 'VERTEX', logoColor: 'from-purple-500 to-indigo-500' },
  { id: 4, name: 'Vanguard Networks', category: 'Network Services', metric: '100% Encrypted Transport', desc: 'Collaborator on encrypted transport pipes ensuring secure and private network routing for BNX Mail nodes.', logo: 'VANGUARD', logoColor: 'from-blue-500 to-cyan-500' }
];

const journeyRoadmap = [
  { step: '1', title: 'Apply', desc: 'Submit organization profile details via multi-step portal.' },
  { step: '2', title: 'Review', desc: 'Partnership alignment review by our ecosystem alliance board.' },
  { step: '3', title: 'Onboarding', desc: 'Access sandboxes, partner guides, and sandbox developer credits.' },
  { step: '4', title: 'Training', desc: 'Receive hands-on training workshops with domain engineers.' },
  { step: '5', title: 'Certification', desc: 'Achieve formal alliance integration verification certificates.' },
  { step: '6', title: 'Launch', desc: 'Featured release in our global ecosystem platform directory.' },
  { step: '7', title: 'Growth', desc: 'Engage in quarterly joint pipeline reviews and co-selling drives.' }
];

const resources = [
  { title: 'Documentation', desc: 'Full API guides, protocol specs, and developer toolkits.', icon: FileText },
  { title: 'APIs', desc: 'Instant WebSocket syncs, Auth payloads, and BNX Mail sync points.', icon: Code2 },
  { title: 'Training Materials', desc: 'Video masterclasses, integration walk-throughs, and code repos.', icon: Award },
  { title: 'Integration Guides', desc: 'Step-by-step migration maps and container setups.', icon: Cpu },
  { title: 'Partner Toolkit', desc: 'Branding kits, joint marketing templates, and pricing boards.', icon: Handshake }
];

export default function Partners() {
  // Multi-step Application Wizard State
  const [currentStep, setCurrentStep] = useState(1);
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [companySize, setCompanySize] = useState('1-10');
  const [partnerType, setPartnerType] = useState('Technology Partner');
  const [proposal, setProposal] = useState('');
  const [marketFocus, setMarketFocus] = useState('Global');
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [statusMsg, setStatusMsg] = useState('');

  // Horizontal Success Story Carousel State
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      handleNextStep();
      return;
    }
    
    setStatus('loading');
    const constructedMessage = `
      [Futuristic Partner Request]
      Partner Type: ${partnerType}
      Website: ${website}
      Company Size: ${companySize}
      Market Focus: ${marketFocus}
      Proposal Summary: ${proposal}
      Phone: ${phone}
    `;

    try {
      await api.post('/api/contact', { 
        name: fullName, 
        email: workEmail, 
        company: companyName, 
        message: constructedMessage 
      });
      setStatus('success');
      setStatusMsg('Thank you! Your strategic partner request has been recorded. Our alliance engineers will connect shortly.');
      // Reset state
      setCompanyName('');
      setWebsite('');
      setProposal('');
      setFullName('');
      setWorkEmail('');
      setPhone('');
      setCurrentStep(1);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMsg(err.response?.data?.message || 'Submission failed. Please try again.');
    }
  };

  return (
    <div className="partners-futuristic-theme min-h-screen relative overflow-hidden pb-20 pt-24">
      <style>{`
        .partners-futuristic-theme {
          background-color: #050816 !important;
          color: #FFFFFF !important;
          position: relative;
          z-index: 10;
        }
        .partners-futuristic-theme h1, 
        .partners-futuristic-theme h2, 
        .partners-futuristic-theme h3, 
        .partners-futuristic-theme h4, 
        .partners-futuristic-theme h5, 
        .partners-futuristic-theme h6 {
          color: #FFFFFF !important;
        }
        .partners-futuristic-theme p {
          color: #CBD5E1 !important; /* Secondary Text */
        }
        .partners-futuristic-theme span {
          color: inherit;
        }
        .partners-futuristic-theme a {
          color: inherit;
        }
        .partners-futuristic-theme label {
          color: #CBD5E1 !important;
        }

        /* Animated blobs */
        @keyframes floatCyan {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, -60px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes floatPurple {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-30px, 50px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .blob-cyan-pulse {
          animation: floatCyan 14s ease-in-out infinite;
        }
        .blob-purple-pulse {
          animation: floatPurple 18s ease-in-out infinite;
        }

        /* Orbit rotation */
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbit-connection-path {
          stroke-dasharray: 8;
          animation: orbitRotate 45s linear infinite;
        }

        /* Pulsing line stroke */
        @keyframes flowPulse {
          to { stroke-dashoffset: -20; }
        }
        .flow-vector-line {
          stroke-dasharray: 6;
          animation: flowPulse 2s linear infinite;
        }

        /* Neon glassmorphic hover shadows */
        .glass-card-neon {
          background: rgba(15, 23, 42, 0.6) !important;
          backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(0, 229, 255, 0.15) !important;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4) !important;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        }
        .glass-card-neon:hover {
          background: rgba(15, 23, 42, 0.95) !important;
          border-color: rgba(0, 255, 178, 0.4) !important; /* Teal border */
          box-shadow: 0 0 25px rgba(0, 229, 255, 0.35) !important; /* Cyan glow */
          transform: translateY(-5px);
        }

        /* Custom scrollbar hidden */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Benefits float cycles */
        @keyframes floatPerkEven {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes floatPerkOdd {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-16px) scale(0.98); }
          100% { transform: translateY(0) scale(1); }
        }
        .float-perk-even {
          animation: floatPerkEven 6s ease-in-out infinite;
        }
        .float-perk-odd {
          animation: floatPerkOdd 7s ease-in-out infinite;
        }

        /* Connected nodes timeline indicators */
        .roadmap-line-glowing {
          position: relative;
        }
        .roadmap-line-glowing::after {
          content: '';
          position: absolute;
          background: linear-gradient(90deg, #00E5FF, #7C3AED);
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
        }
      `}</style>

      {/* SECTION 1: Futurisic Hero with Floating Network */}
      <div className="relative overflow-hidden min-h-[95vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-purple-950/20">
        {/* Shifting blobs */}
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none blob-cyan-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none blob-purple-pulse" />
        
        {/* Animated Connected Network background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-20">
          <svg className="absolute w-full h-full" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="150" x2="300" y2="250" stroke="#00E5FF" strokeWidth="1" className="flow-vector-line" />
            <line x1="300" y1="250" x2="500" y2="150" stroke="#7C3AED" strokeWidth="1" />
            <line x1="500" y1="150" x2="700" y2="300" stroke="#00FFB2" strokeWidth="1" className="flow-vector-line" style={{ animationDuration: '4s' }} />
            <line x1="300" y1="250" x2="600" y2="450" stroke="#00E5FF" strokeWidth="1" />
            <line x1="600" y1="450" x2="800" y2="250" stroke="#7C3AED" strokeWidth="1" className="flow-vector-line" />
            <line x1="800" y1="250" x2="900" y2="500" stroke="#00FFB2" strokeWidth="1" />
            
            <circle cx="100" cy="150" r="4" fill="#00E5FF" className="animate-ping" />
            <circle cx="300" cy="250" r="5" fill="#7C3AED" />
            <circle cx="500" cy="150" r="4" fill="#00FFB2" />
            <circle cx="700" cy="300" r="6" fill="#00E5FF" />
            <circle cx="600" cy="450" r="5" fill="#7C3AED" className="animate-pulse" />
            <circle cx="800" cy="250" r="4" fill="#00FFB2" />
            <circle cx="900" cy="500" r="5" fill="#00E5FF" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00E5FF] text-xs font-bold uppercase tracking-widest select-none"
          >
            <Handshake className="h-3.5 w-3.5 text-[#00E5FF] animate-pulse" />
            <span>Beta Softnet Partner Network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-none"
          >
            Grow Together Through Strategic Partnerships
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#CBD5E1] text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Join our global ecosystem of technology, integration, reseller, and solution partners. Integrate features, coordinate sales pipelines, and scale enterprise solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#apply-wizard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-black text-slate-950 bg-[#00E5FF] hover:bg-[#00c5db] transition-all duration-300 shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 group hover:scale-[1.02] border border-[#00E5FF]"
            >
              <span>Become a Partner</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#partner-categories"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-black text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02]"
            >
              <span>Explore Opportunities</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-36">

        {/* SECTION 2: PARTNER ECOSYSTEM VISUALIZATION */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
              <Layers className="h-3.5 w-3.5" />
              <span>Interactive Hub</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Partner Ecosystem Visualization</h2>
            <p className="text-[#CBD5E1] text-sm">Visualizing structural connections between our core suite and our global alliance layers.</p>
          </div>

          {/* Central Interactive Orbit Node Map */}
          <div className="relative max-w-2xl mx-auto h-[450px] flex items-center justify-center rounded-3xl bg-[#0F172A]/40 border border-purple-500/10 shadow-2xl p-6 overflow-hidden">
            {/* Background grids */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 450">
              {/* Connected Orbit paths */}
              <circle cx="300" cy="225" r="160" fill="none" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="1.5" className="orbit-connection-path" />
              <circle cx="300" cy="225" r="100" fill="none" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" />

              {/* Pulsing connections to central hub */}
              <line x1="300" y1="225" x2="300" y2="65" stroke="#00E5FF" strokeWidth="1.5" className="flow-vector-line" />
              <line x1="300" y1="225" x2="455" y2="155" stroke="#7C3AED" strokeWidth="1.5" className="flow-vector-line" style={{ animationDelay: '0.4s' }} />
              <line x1="300" y1="225" x2="395" y2="335" stroke="#00FFB2" strokeWidth="1.5" className="flow-vector-line" style={{ animationDelay: '0.8s' }} />
              <line x1="300" y1="225" x2="205" y2="335" stroke="#00E5FF" strokeWidth="1.5" className="flow-vector-line" style={{ animationDelay: '1.2s' }} />
              <line x1="300" y1="225" x2="145" y2="155" stroke="#7C3AED" strokeWidth="1.5" className="flow-vector-line" style={{ animationDelay: '1.6s' }} />
            </svg>

            {/* Central Hub Node */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute z-10 h-28 w-28 rounded-full bg-slate-900 border-4 border-[#7C3AED] flex flex-col items-center justify-center text-center shadow-lg shadow-purple-500/20 cursor-pointer select-none"
            >
              <Building className="h-7 w-7 text-[#00E5FF] mb-1 animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-wider">BETA HUB</span>
            </motion.div>

            {/* Outer Nodes */}
            {/* Node 1: Cloud (Top Center) */}
            <motion.div 
              whileHover={{ scale: 1.08 }}
              className="absolute top-[35px] left-1/2 -translate-x-1/2 z-10 h-16 w-16 rounded-full bg-slate-900 border border-[#00E5FF] flex items-center justify-center shadow-md cursor-pointer group"
            >
              <div className="absolute -top-6 px-2 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[8px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Cloud
              </div>
              <Globe className="h-5 w-5 text-white group-hover:text-[#00E5FF] transition-colors" />
            </motion.div>

            {/* Node 2: Technology (Top Right) */}
            <motion.div 
              whileHover={{ scale: 1.08 }}
              className="absolute top-[125px] right-[115px] z-10 h-16 w-16 rounded-full bg-slate-900 border border-[#7C3AED] flex items-center justify-center shadow-md cursor-pointer group"
            >
              <div className="absolute -top-6 px-2 py-0.5 rounded bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-[8px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Technology
              </div>
              <Code2 className="h-5 w-5 text-white group-hover:text-[#7C3AED] transition-colors" />
            </motion.div>

            {/* Node 3: Integration (Bottom Right) */}
            <motion.div 
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-[85px] right-[170px] z-10 h-16 w-16 rounded-full bg-slate-900 border border-[#00FFB2] flex items-center justify-center shadow-md cursor-pointer group"
            >
              <div className="absolute -bottom-6 px-2 py-0.5 rounded bg-[#00FFB2]/10 border border-[#00FFB2]/20 text-[#00FFB2] text-[8px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Integration
              </div>
              <Cpu className="h-5 w-5 text-white group-hover:text-[#00FFB2] transition-colors" />
            </motion.div>

            {/* Node 4: Reseller (Bottom Left) */}
            <motion.div 
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-[85px] left-[170px] z-10 h-16 w-16 rounded-full bg-slate-900 border border-[#00E5FF] flex items-center justify-center shadow-md cursor-pointer group"
            >
              <div className="absolute -bottom-6 px-2 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[8px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Reseller
              </div>
              <Users className="h-5 w-5 text-white group-hover:text-[#00E5FF] transition-colors" />
            </motion.div>

            {/* Node 5: Strategic (Top Left) */}
            <motion.div 
              whileHover={{ scale: 1.08 }}
              className="absolute top-[125px] left-[115px] z-10 h-16 w-16 rounded-full bg-slate-900 border border-[#7C3AED] flex items-center justify-center shadow-md cursor-pointer group"
            >
              <div className="absolute -top-6 px-2 py-0.5 rounded bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-[8px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Strategic
              </div>
              <Layers className="h-5 w-5 text-white group-hover:text-[#7C3AED] transition-colors" />
            </motion.div>
          </div>
        </div>

        {/* SECTION 3: PARTNER BENEFITS SECTION */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
              <Award className="h-3.5 w-3.5" />
              <span>Program Benefits</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Partner Program Benefits</h2>
            <p className="text-[#CBD5E1] text-sm">We provide technical support, joint marketing, and early access code resources.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((ben, idx) => {
              const Icon = ben.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={ben.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`glass-card-neon p-8 rounded-3xl border text-left space-y-4 shadow-sm ${
                    isEven ? 'float-perk-even' : 'float-perk-odd'
                  }`}
                >
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center border ${ben.bg}`}>
                    <Icon className={`h-5.5 w-5.5 ${ben.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{ben.title}</h3>
                  <p className="text-[#CBD5E1] text-xs leading-relaxed font-medium">{ben.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: PARTNER CATEGORIES */}
        <div id="partner-categories" className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
              <Users className="h-3.5 w-3.5" />
              <span>Alliance Tiers</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Partner Categories</h2>
            <p className="text-[#CBD5E1] text-sm">Discover where your business fits inside the Beta Softnet Strategic network.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className={`glass-card-neon p-8 rounded-3xl border ${cat.border} text-left flex flex-col justify-between space-y-6 group`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 bg-white/5 rounded-xl border border-white/10 ${cat.color} group-hover:scale-105 transition duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-500 group-hover:translate-x-1 group-hover:text-[#00E5FF] transition-all" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">{cat.title}</h3>
                      <p className="text-xs text-[#CBD5E1] leading-relaxed font-medium">{cat.desc}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] font-extrabold text-[#00FFB2] uppercase tracking-wider">Explore Program specs</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 5: SUCCESS METRICS SECTION */}
        <div className="py-12 border-t border-b border-purple-950/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] tracking-tight">
                <CountUpNumber value="100+" />
              </div>
              <p className="text-[10px] text-[#CBD5E1] font-bold uppercase tracking-widest mt-1">Ecosystem Partners</p>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00FFB2] to-[#00E5FF] tracking-tight">
                <CountUpNumber value="50+" />
              </div>
              <p className="text-[10px] text-[#CBD5E1] font-bold uppercase tracking-widest mt-1">Integrations Built</p>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#00FFB2] tracking-tight">
                <CountUpNumber value="20+" />
              </div>
              <p className="text-[10px] text-[#CBD5E1] font-bold uppercase tracking-widest mt-1">Countries Served</p>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] tracking-tight">
                <CountUpNumber value="99.9%" />
              </div>
              <p className="text-[10px] text-[#CBD5E1] font-bold uppercase tracking-widest mt-1">Platform SLA</p>
            </div>
          </div>
        </div>

        {/* SECTION 6: PARTNER SUCCESS STORIES */}
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="text-left space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
                <Layers className="h-3.5 w-3.5" />
                <span>Case Studies</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">Partner Success Stories</h2>
              <p className="text-[#CBD5E1] text-sm">Real-world metrics and growth profiles from organizations operating inside our ecosystem.</p>
            </div>

            {/* Slider buttons */}
            <div className="flex space-x-3 self-end sm:self-center">
              <button 
                onClick={() => scrollCarousel('left')}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-800 transition cursor-pointer"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-800 transition cursor-pointer"
                aria-label="Next story"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Story Grid */}
          <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory text-left"
          >
            {successStories.map((story) => (
              <div 
                key={story.id}
                className="flex-shrink-0 w-full sm:w-[400px] snap-center glass-card-neon p-6 rounded-3xl border border-purple-500/15 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-[9px] font-bold uppercase tracking-wider">
                      {story.category}
                    </span>
                    <span className="text-xs font-black text-[#00FFB2]">
                      {story.metric}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#CBD5E1] leading-relaxed">
                    "{story.desc}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 border-t border-purple-500/10 pt-4">
                  <div className={`h-9 w-9 rounded bg-gradient-to-tr ${story.logoColor} flex items-center justify-center text-[10px] font-black text-white`}>
                    {story.logo}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{story.name}</h5>
                    <p className="text-[9px] text-slate-500 font-semibold">Strategic Alliance</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7: PARTNERSHIP JOURNEY ROADMAP */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" />
              <span>Progression Roadmap</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Partnership Journey</h2>
            <p className="text-[#CBD5E1] text-sm">Visualizing the integration milestones from application submission to launching growth programs.</p>
          </div>

          <div className="glass-card-neon p-8 rounded-3xl border border-purple-500/20 shadow-xl text-left relative overflow-hidden">
            {/* Horizontal Timeline flow */}
            <div className="relative flex flex-col md:flex-row items-start md:items-stretch justify-between gap-8 md:gap-4 overflow-x-auto pb-4 scrollbar-none">
              {journeyRoadmap.map((node, idx) => (
                <div key={node.step} className="flex-1 min-w-[140px] space-y-4 relative group">
                  {/* glowing step number node circle */}
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-slate-900 border border-[#00E5FF] flex items-center justify-center font-black text-xs text-[#00E5FF] shadow-md shadow-cyan-500/10 group-hover:bg-[#00E5FF] group-hover:text-slate-950 transition duration-300">
                      {node.step}
                    </div>
                    {/* Connecting line */}
                    {idx < journeyRoadmap.length - 1 && (
                      <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-[#00E5FF]/40 to-[#7C3AED]/40" />
                    )}
                  </div>

                  <div className="space-y-1 pr-4">
                    <h4 className="text-sm font-black text-white group-hover:text-[#00E5FF] transition-colors">{node.title}</h4>
                    <p className="text-[10px] text-[#CBD5E1] leading-relaxed font-medium">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 8: RESOURCES SECTION */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
              <FileText className="h-3.5 w-3.5" />
              <span>Developer Resources</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Partner Resources</h2>
            <p className="text-[#CBD5E1] text-sm">Access core developer documentation, APIs, and partner marketing kits.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {resources.map((res, idx) => {
              const Icon = res.icon;
              return (
                <motion.div
                  key={res.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="glass-card-neon p-6 rounded-2xl border border-purple-500/10 text-center flex flex-col justify-between space-y-4 hover:border-[#7C3AED]/40 hover:shadow-lg hover:shadow-purple-500/10 group cursor-pointer"
                >
                  <div className="h-10 w-10 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-white group-hover:text-[#00FFB2] transition-colors">{res.title}</h4>
                    <p className="text-[9px] text-[#CBD5E1] leading-relaxed line-clamp-3 font-medium">{res.desc}</p>
                  </div>
                  <div className="flex items-center justify-center text-[8px] font-extrabold text-slate-500 group-hover:text-[#00E5FF] uppercase tracking-wider mt-2 border-t border-white/5 pt-3">
                    <span>Download</span>
                    <ArrowRight className="h-3 w-3 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 9: MULTI-STEP PARTNER APPLICATION SECTION */}
        <div id="apply-wizard" className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Partner Application Portal</h2>
            <p className="text-[#CBD5E1] text-sm">Submit strategic details. Step through our forms to register your organization.</p>
          </div>

          {/* Step Progress indicators */}
          <div className="flex items-center justify-between max-w-md mx-auto select-none">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center flex-1 last:flex-none">
                <div 
                  className={`h-8 w-8 rounded-full border flex items-center justify-center text-xs font-black transition-all duration-300 ${
                    currentStep === stepNum 
                      ? 'bg-[#00E5FF] border-[#00E5FF] text-slate-950 shadow-md shadow-cyan-500/20 scale-105' 
                      : currentStep > stepNum 
                        ? 'bg-[#7C3AED] border-[#7C3AED] text-white' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  {stepNum}
                </div>
                {stepNum < 4 && (
                  <div className={`h-[2px] flex-grow mx-2 ${currentStep > stepNum ? 'bg-[#7C3AED]' : 'bg-slate-850'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form container */}
          <div className="glass-card-neon p-8 rounded-3xl border border-purple-500/20 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-white border-b border-purple-500/10 pb-2 mb-4">Step 1: Company Profile</h3>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-400 uppercase">Company Name</label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Acme Corporation"
                        className="w-full bg-[#050816] text-white placeholder-slate-600 border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-extrabold text-slate-400 uppercase">Website URL</label>
                        <input
                          type="url"
                          required
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="e.g. https://acme.com"
                          className="w-full bg-[#050816] text-white placeholder-slate-600 border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-extrabold text-slate-400 uppercase">Company Size</label>
                        <select
                          value={companySize}
                          onChange={(e) => setCompanySize(e.target.value)}
                          className="w-full bg-[#050816] text-white border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition"
                        >
                          <option value="1-10">1-10 Employees</option>
                          <option value="11-50">11-50 Employees</option>
                          <option value="51-200">51-200 Employees</option>
                          <option value="201-500">201-500 Employees</option>
                          <option value="500+">500+ Employees</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-white border-b border-purple-500/10 pb-2 mb-4">Step 2: Partnership Details</h3>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-400 uppercase">Partnership Type</label>
                      <select
                        value={partnerType}
                        onChange={(e) => setPartnerType(e.target.value)}
                        className="w-full bg-[#050816] text-white border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition"
                      >
                        <option value="Technology Partner">Technology Partner</option>
                        <option value="Integration Partner">Integration Partner</option>
                        <option value="Reseller Partner">Reseller Partner</option>
                        <option value="Consulting Partner">Consulting Partner</option>
                        <option value="Strategic Alliance Partner">Strategic Alliance Partner</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-400 uppercase">Regional Market Focus</label>
                      <select
                        value={marketFocus}
                        onChange={(e) => setMarketFocus(e.target.value)}
                        className="w-full bg-[#050816] text-white border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition"
                      >
                        <option value="Global">Global / Multi-region</option>
                        <option value="North America">North America (US/CA)</option>
                        <option value="Europe">Europe (EMEA)</option>
                        <option value="Asia Pacific">Asia Pacific (APAC)</option>
                        <option value="Latin America">Latin America (LATAM)</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-white border-b border-purple-500/10 pb-2 mb-4">Step 3: Partnership Proposal</h3>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-400 uppercase">Proposal Summary</label>
                      <textarea
                        required
                        rows="4"
                        value={proposal}
                        onChange={(e) => setProposal(e.target.value)}
                        placeholder="Briefly describe how we can co-sell, build integrated APIs, or distribute software solutions together..."
                        className="w-full bg-[#050816] text-white placeholder-slate-650 border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-white border-b border-purple-500/10 pb-2 mb-4">Step 4: Contact Point</h3>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-400 uppercase">Contact Full Name</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Bruce Wayne"
                        className="w-full bg-[#050816] text-white placeholder-slate-600 border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-extrabold text-slate-400 uppercase">Corporate Email</label>
                        <input
                          type="email"
                          required
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          placeholder="e.g. bruce@waynecorp.com"
                          className="w-full bg-[#050816] text-white placeholder-slate-600 border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-extrabold text-slate-400 uppercase">Phone Number</label>
                        <input
                          type="text"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +1 555-0199"
                          className="w-full bg-[#050816] text-white placeholder-slate-600 border border-purple-500/20 rounded-xl py-2.5 px-4 focus:outline-none focus:border-[#00E5FF] text-sm transition"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className={`px-5 py-2 rounded-xl text-xs font-bold bg-[#161B33] text-[#CBD5E1] border border-purple-500/10 hover:border-purple-500/35 transition cursor-pointer select-none ${
                    currentStep === 1 ? 'opacity-30 pointer-events-none' : ''
                  }`}
                >
                  Previous Step
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-[#00E5FF] hover:bg-[#00c5db] transition shadow-md cursor-pointer select-none"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-[#00FFB2] hover:bg-[#00e09d] transition shadow-md cursor-pointer select-none disabled:bg-slate-800 disabled:text-slate-500"
                  >
                    {status === 'loading' ? 'Submitting Details...' : 'Submit Application'}
                  </button>
                )}
              </div>
            </form>

            {/* Success and Error Alerts */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-450 flex items-center space-x-2 text-left"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-450" />
                  <span>{statusMsg}</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-455 flex items-center space-x-2 text-left"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-rose-455" />
                  <span>{statusMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SECTION 10: FINAL CTA SECTION */}
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 border border-purple-500/30 text-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #7C3AED, #00E5FF)' }}>
          {/* Floating blur circles */}
          <div className="absolute top-[-40px] left-[-40px] w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-[-40px] right-[-40px] w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Let's Build the Future Together
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
              Consolidate API capabilities, co-sell integrations, and scaling software solutions on top of the Beta Softnet platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a
                href="#apply-wizard"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-black bg-purple-950/20 hover:bg-purple-950/45 text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
              >
                Become a Partner
              </a>
              <a
                href="/support"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-black bg-purple-950/20 hover:bg-purple-950/45 text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
