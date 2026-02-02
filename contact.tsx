
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CreditCard, Copy, Check, Laptop, QrCode, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Web Designing',
    message: ''
  });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! Our team will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', course: 'Web Designing', message: '' });
  };

  const copyUpi = () => {
    navigator.clipboard.writeText(CONTACT_INFO.UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Join MIT Mawana today and secure your future.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Payment */}
          <div className="space-y-8">
            {/* Main Contact Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <a 
                  href={CONTACT_INFO.GOOGLE_MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all"><MapPin /></div>
                  <div>
                    <p className="font-bold group-hover:text-blue-600 transition-colors">Our Location</p>
                    <p className="text-gray-600 underline decoration-dotted underline-offset-4">{CONTACT_INFO.ADDRESS}</p>
                  </div>
                </a>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl"><Phone /></div>
                  <div>
                    <p className="font-bold">Call Us</p>
                    <p className="text-gray-600">{CONTACT_INFO.PHONE_1}</p>
                    <p className="text-gray-600">{CONTACT_INFO.PHONE_2}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl"><Mail /></div>
                  <div>
                    <p className="font-bold">Email Us</p>
                    <p className="text-gray-600">{CONTACT_INFO.EMAIL}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PhonePe Branded Payment Poster Style */}
            <div className="bg-neutral-950 rounded-[2.5rem] p-8 text-white shadow-2xl overflow-hidden relative border border-white/10">
              {/* PhonePe Branding Header */}
              <div className="flex flex-col items-center mb-10">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-[#5f259f] p-2 rounded-full">
                    <img 
                      src="https://www.phonepe.com/app/uploads/2023/11/PhonePe_Logo_Icon.png" 
                      alt="PhonePe" 
                      className="w-8 h-8 object-contain brightness-0 invert" 
                    />
                  </div>
                  <span className="text-3xl font-bold tracking-tight">PhonePe</span>
                </div>
                <div className="bg-[#5f259f]/10 px-6 py-1.5 rounded-full border border-[#5f259f]/30">
                  <span className="text-[#a855f7] font-black text-xs uppercase tracking-[0.2em]">Accepted Here</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <p className="text-gray-400 text-sm mb-6 font-medium">Scan & Pay Using PhonePe App</p>
                
                {/* QR Code Frame */}
                <div className="bg-white p-5 rounded-[2rem] shadow-[0_0_50px_rgba(255,255,255,0.1)] mb-8 transition-transform hover:scale-105 duration-300">
                  <img 
                    src={CONTACT_INFO.UPI_QR_URL} 
                    alt="Payment QR Code" 
                    className="w-48 h-48 md:w-56 md:h-56 object-contain"
                  />
                </div>

                {/* Account Name */}
                <div className="mb-10">
                  <h3 className="text-2xl font-black tracking-widest uppercase text-white mb-2">{CONTACT_INFO.ACCOUNT_NAME}</h3>
                  <div className="h-0.5 w-12 bg-[#5f259f] mx-auto rounded-full"></div>
                </div>

                {/* UPI Details Row */}
                <div className="w-full bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center justify-between mb-6">
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">UPI ID</p>
                    <span className="text-lg font-bold tracking-tight">{CONTACT_INFO.UPI_ID}</span>
                  </div>
                  <button 
                    onClick={copyUpi}
                    className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center space-x-2 text-sm font-bold shadow-lg shadow-black/20"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <p className="text-[10px] text-gray-600 flex items-center space-x-2 border-t border-white/5 pt-6 w-full justify-center">
                  <span>© {new Date().getFullYear()} Neeraj Kumar | MIT Mawana Digital Payments</span>
                </p>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden relative border-4 border-blue-50 shadow-2xl group">
              <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-all duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" 
                className="w-full h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                alt="Map Preview"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-white p-4 rounded-full shadow-2xl mb-4 animate-bounce">
                  <MapPin size={32} className="text-blue-600" />
                </div>
                <h4 className="text-white text-2xl font-black mb-4 drop-shadow-lg">Visit Us in Mawana</h4>
                <a 
                  href={CONTACT_INFO.GOOGLE_MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-blue-700 transition-all flex items-center space-x-2"
                >
                  <ExternalLink size={18} />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Study Material Notice */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                <Laptop size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 leading-tight">Digital Study Portal</h4>
                <p className="text-sm text-slate-500 leading-relaxed mt-1">
                  Connect with us to get access to digital study materials and professional tech notes.
                </p>
              </div>
            </div>
          </div>

          {/* Admission Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 h-fit">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Admission Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Course Interested In</label>
                <select 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                >
                  <option>AI & Cyber Security</option>
                  <option>Web Designing</option>
                  <option>Tally Prime with GST</option>
                  <option>C, C++ & Java</option>
                  <option>Basic Computer</option>
                  <option>Hardware & Networking</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message (Optional)</label>
                <textarea 
                  rows={4} 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  placeholder="Any specific questions?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Submit Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
