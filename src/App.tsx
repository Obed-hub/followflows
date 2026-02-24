import React, { useState, useEffect } from 'react';
import { 
  Twitter, 
  Youtube, 
  Instagram, 
  Video, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Menu,
  X,
  Quote,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              FollowFlow
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">How it Works</a>
              <a href="#coming-soon" className="text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Updates</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#coming-soon" className="bg-white text-zinc-950 hover:bg-zinc-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Join Waitlist
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#how-it-works" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How it Works</a>
              <a href="#coming-soon" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Updates</a>
              <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-2">
                <a href="#coming-soon" className="w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded-md text-base font-medium transition-colors">Join Waitlist</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> 
              Accelerate your monetization journey
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Grow your audience. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Join the Circle.
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              The premier community for content creators on X, YouTube, and Instagram. Connect with real creators, engage authentically, and hit your monetization goals faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#coming-soon" className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-xl font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                Join the Waitlist <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#coming-soon" className="w-full sm:w-auto px-8 py-4 bg-zinc-800/50 text-white border border-white/10 rounded-xl font-semibold hover:bg-zinc-800 transition-colors">
                Get Updates
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Representation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Mock Stats Card 1 */}
            <div className="bg-zinc-900/50 backdrop-blur border border-white/5 rounded-2xl p-6 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Subscribers</div>
                  <div className="text-2xl font-bold text-white">1,240</div>
                </div>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[85%]" />
              </div>
              <div className="mt-2 text-xs text-zinc-500 text-right">Target: 1,000</div>
            </div>

            {/* Mock Stats Card 2 */}
            <div className="bg-zinc-900/50 backdrop-blur border border-white/5 rounded-2xl p-6 transform translate-y-[-10px] z-20 shadow-2xl shadow-indigo-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center text-blue-400">
                  <Twitter className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Followers</div>
                  <div className="text-2xl font-bold text-white">892</div>
                </div>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 w-[65%]" />
              </div>
              <div className="mt-2 text-xs text-zinc-500 text-right">Target: 500</div>
            </div>

            {/* Mock Stats Card 3 */}
            <div className="bg-zinc-900/50 backdrop-blur border border-white/5 rounded-2xl p-6 transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Followers</div>
                  <div className="text-2xl font-bold text-white">2,105</div>
                </div>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 w-[92%]" />
              </div>
              <div className="mt-2 text-xs text-zinc-500 text-right">Target: 1,000</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PlatformGrid = () => {
  const platforms = [
    { name: 'X / Twitter', icon: Twitter, color: 'text-blue-400', bg: 'bg-blue-400/10', desc: 'Connect with thought leaders and grow your network.' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-500', bg: 'bg-red-500/10', desc: 'Boost subscribers and watch hours for monetization.' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500', bg: 'bg-pink-500/10', desc: 'Increase engagement and build a visual brand.' },
    { name: 'TikTok', icon: Video, color: 'text-cyan-400', bg: 'bg-cyan-400/10', desc: 'Go viral and expand your reach rapidly.' },
  ];

  return (
    <section id="features" className="py-20 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Supported Platforms</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We support the major platforms where creators are building their empires. Join specific circles based on your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${platform.bg} ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <platform.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{platform.desc}</p>
              <div className="flex items-center text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">
                Join Circle <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const steps = [
    { title: 'Connect', icon: Users, desc: 'Link your social accounts securely. We never ask for your password.' },
    { title: 'Engage', icon: TrendingUp, desc: 'Follow other creators in your niche. Earn credits for every genuine interaction.' },
    { title: 'Grow', icon: ShieldCheck, desc: 'Redeem credits for followers. Watch your community grow with real people.' },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How it Works</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A simple, transparent process designed for organic growth. No bots, no fake accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-zinc-800 via-indigo-500/50 to-zinc-800" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-950 flex items-center justify-center relative z-10 mb-6 shadow-xl">
                <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center group hover:bg-indigo-500/10 transition-colors">
                  <step.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-zinc-800 border-4 border-zinc-950 flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComingSoon = () => {
  return (
    <section id="coming-soon" className="py-20 bg-zinc-900/30 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
          <Zap className="w-4 h-4" /> 
          Coming Soon
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          We are launching soon!
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          FollowFlow is currently in development. Join our community to get the latest updates, early access, and connect with other creators.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://x.com/GuyOne128492" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#1DA1F2] text-white rounded-xl font-bold hover:bg-[#1a8cd8] transition-colors flex items-center justify-center gap-2"
          >
            <Twitter className="w-5 h-5" /> Follow on X
          </a>
          <a 
            href="https://chat.whatsapp.com/FtnczYWUhqF7RgcDnWwnoA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
          >
            <Users className="w-5 h-5" /> Join WhatsApp Group
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "YouTuber (Gaming)",
      image: "https://picsum.photos/seed/sarah/200",
      quote: "I was stuck at 400 subscribers for months. Within 3 weeks of joining FollowFlow, I hit my first 1,000. The community is incredibly supportive!"
    },
    {
      name: "Marcus Chen",
      role: "Tech Twitter",
      image: "https://picsum.photos/seed/marcus/200",
      quote: "Unlike other platforms filled with bots, these are real people engaging with my threads. My impressions have tripled."
    },
    {
      name: "Elara Vane",
      role: "Instagram Artist",
      image: "https://picsum.photos/seed/elara/200",
      quote: "The best way to find other artists and grow together. It feels like a team effort rather than a competition."
    }
  ];

  return (
    <section className="py-20 bg-zinc-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Creator Success Stories</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Join thousands of creators who are already growing their audience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 border border-white/5 p-8 rounded-2xl relative"
            >
              <Quote className="w-8 h-8 text-indigo-500/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Is FollowFlow safe to use?",
      answer: "Absolutely. We never ask for your social media passwords. We simply provide a platform for creators to discover each other. All interactions happen directly on the respective social platforms."
    },
    {
      question: "How does the credit system work?",
      answer: "It's simple: You earn credits by following other creators in your niche. You can then use these credits to get followers for your own profile. It's a fair, 1-to-1 exchange system."
    },
    {
      question: "Will I lose followers if I stop using the app?",
      answer: "We have a strict anti-unfollow policy. Users who unfollow others after earning credits are penalized and banned. We aim for long-term, organic growth."
    },
    {
      question: "Can I monetize my account with these followers?",
      answer: "Yes! Since our users are real people, they count towards monetization requirements (like YouTube's 1,000 subscriber goal). However, engagement depends on the quality of your content."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-400">Everything you need to know about FollowFlow.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
            <span className="text-lg font-bold text-white">FollowFlow</span>
          </div>
          
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} FollowFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <PlatformGrid />
        <TrustSection />
        <ComingSoon />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
