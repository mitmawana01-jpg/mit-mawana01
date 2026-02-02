
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Mail, MapPin, 
  Facebook, Instagram, Twitter, MessageCircle, 
  Search, Settings
} from 'lucide-react';

import Home from './pages/Home.tsx';
import Courses from './pages/Courses.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import Blog from './pages/Blog.tsx';
import BlogPostDetail from './pages/BlogPostDetail.tsx';
import AdminGuide from './pages/AdminGuide.tsx';
import Chatbot from './components/Chatbot.tsx';
import { LOGO_URL, CONTACT_INFO } from './constants.tsx';

const Logo = ({ size = "normal" }: { size?: "normal" | "large" }) => {
  const [imageError, setImageError] = useState(false);
  const containerClass = size === "large" ? "space-x-4" : "space-x-2";
  const textClass = size === "large" ? "text-2xl" : "text-xl";

  if (LOGO_URL && !imageError) {
    return (
      <div className={`flex items-center ${containerClass}`}>
        <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
          <img 
            src={LOGO_URL} 
            alt="MIT Mawana Logo" 
            className={`${size === "large" ? "h-14" : "h-10"} w-auto object-contain rounded-lg`} 
            onError={() => setImageError(true)}
          />
        </div>
        {size === "large" && (
          <span className="font-extrabold tracking-tight text-2xl text-white">MIT Mawana</span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center ${containerClass}`}>
      <div className="bg-blue-600 text-white rounded-lg font-bold shadow-lg p-2 text-xl">
        MIT
      </div>
      <span className={`font-extrabold tracking-tight ${textClass} ${size === "large" ? "text-white" : "text-gray-800"}`}>
        Mawana
      </span>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`${location.pathname === link.path ? 'text-blue-600 font-semibold underline decoration-2 underline-offset-8' : 'text-gray-600'} hover:text-blue-500 transition-colors text-sm font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all font-bold shadow-md hover:shadow-lg active:scale-95">
              Join Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-colors ${
                  location.pathname === link.path 
                  ? 'bg-blue-50 text-blue-600 font-bold' 
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-xl font-bold"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="inline-block mb-6">
          <Logo size="large" />
        </div>
        <p className="mb-6 max-w-sm text-gray-400 leading-relaxed">
          Mawana Institute of Technology (MIT) is a premier computer education center.
        </p>
        <div className="flex space-x-5">
          <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Facebook size={20} /></a>
          <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Instagram size={20} /></a>
          <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Twitter size={20} /></a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg border-b border-blue-600/30 pb-2 inline-block">Quick Links</h4>
        <ul className="space-y-3">
          <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Our Courses</Link></li>
          <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Insights Blog</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Photo Gallery</Link></li>
          <li><Link to="/admin-guide" className="text-gray-700 hover:text-blue-400 transition-colors flex items-center text-xs opacity-50"><Settings size={12} className="mr-1"/> Admin Guide</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg border-b border-blue-600/30 pb-2 inline-block">Contact Us</h4>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3 text-sm text-gray-400">
            <MapPin className="mt-1 flex-shrink-0 text-blue-500" size={18} />
            <a href={CONTACT_INFO.GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {CONTACT_INFO.ADDRESS}
            </a>
          </li>
          <li className="flex items-center space-x-3 text-sm text-gray-400">
            <Phone className="flex-shrink-0 text-blue-500" size={18} />
            <span className="font-semibold text-white">{CONTACT_INFO.PHONE_1}</span>
          </li>
          <li className="flex items-center space-x-3 text-sm text-gray-400">
            <Mail className="flex-shrink-0 text-blue-500" size={18} />
            <span>{CONTACT_INFO.EMAIL}</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
      <p>&copy; {new Date().getFullYear()} MIT Mawana. All rights reserved.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-guide" element={<AdminGuide />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <a 
          href={`https://wa.me/${CONTACT_INFO.PHONE_1.replace(/[^0-9]/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-110 active:scale-95 transition-all z-40 animate-bounce"
        >
          <MessageCircle size={30} />
        </a>
      </div>
    </Router>
  );
};

export default App;
