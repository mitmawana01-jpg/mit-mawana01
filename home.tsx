
import React, { useState } from 'react';
import { ShieldCheck, BookOpen, Award, Users, Search, CheckCircle, Bot, Zap, Brain, Sparkles, Send, Loader2, CreditCard, Laptop, MapPin, ExternalLink, Phone, Mail, Clock } from 'lucide-react';
import { COURSES, MOCK_STUDENTS, HOME_IMAGES, CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';
import { getGeminiResponse } from '../services/geminiService';

const Home: React.FC = () => {
  const [rollNo, setRollNo] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  
  // AI Lab State
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const student = MOCK_STUDENTS.find(s => s.rollNo === rollNo);
    if (student) {
      setVerificationResult(student);
    } else {
      setVerificationResult({ error: 'Certificate not found. Please contact administration.' });
    }
  };

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim() || isAiLoading) return;

    setIsAiLoading(true);
    setAiResponse('');
    const response = await getGeminiResponse(`As an MIT Mawana expert, answer this technical question: ${aiQuery}`);
    setAiResponse(response);
    setIsAiLoading(false);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/800x600?text=Photo+Updating...";
  };

  return (
    <div className="space-y-20 pb-0 bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HOME_IMAGES.HERO} 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Hero Background"
            onError={handleImageError}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Empowering Future through <span className="text-blue-500">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              Mawana's No. 1 Computer Institute for AI, Web Design, and Professional IT training.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
                Explore Courses
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MIT AI Tech Lab Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 rounded-[3.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img src={HOME_IMAGES.AI_LAB_DECOR} className="w-full h-full object-cover" alt="AI Decor" onError={handleImageError} />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
                <Sparkles size={16} />
                <span>Powered by Gemini AI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                MIT <span className="text-blue-400">AI Tech Lab</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                टेक्नोलॉजी के बारे में कुछ भी पूछें! चाहे कोडिंग हो, AI हो या करियर गाइडेंस, हमारा स्मार्ट AI असिस्टेंट आपकी मदद के लिए तैयार है।
              </p>
              
              <form onSubmit={handleAiAsk} className="relative">
                <input 
                  type="text" 
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder="जैसे: 'What is AI?' या 'Best computer course?'"
                  className="w-full bg-white/10 border border-white/20 backdrop-blur-md px-6 py-5 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all text-lg"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isAiLoading}
                  className="absolute right-3 top-3 bottom-3 bg-blue-600 hover:bg-blue-500 text-white px-6 rounded-xl font-bold transition-all flex items-center disabled:opacity-50"
                >
                  {isAiLoading ? <Loader2 className="animate-spin" size={24} /> : <><Send className="mr-2" size={20} /> Ask</>}
                </button>
              </form>
            </div>

            <div className={`transition-all duration-500 min-h-[300px] flex flex-col justify-center`}>
              {aiResponse ? (
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-inner animate-in fade-in zoom-in duration-300">
                  <div className="flex items-center space-x-3 mb-4 text-blue-400">
                    <Bot size={28} />
                    <span className="font-bold uppercase text-sm tracking-widest">MIT AI Response</span>
                  </div>
                  <div className="text-gray-200 leading-relaxed text-lg">
                    {aiResponse}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Zap size={40} className="text-blue-400" />
                  </div>
                  <p className="text-lg font-medium">आपका जवाब यहाँ दिखाई देगा...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Campus Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-blue-50 rounded-[3rem] p-10 md:p-16 border border-blue-100 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">MIT Digital Campus</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              अब घर बैठे भी करें पढ़ाई! हमारे डिजिटल पोर्टल के जरिए छात्र ऑनलाइन नोट्स ले सकते हैं और अपनी फीस भी सीधे जमा कर सकते हैं।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><Laptop size={24} /></div>
                <div>
                  <p className="font-bold text-sm">Study Materials</p>
                  <p className="text-xs text-gray-400">Free PDF Notes & Labs</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><CreditCard size={24} /></div>
                <div>
                  <p className="font-bold text-sm">Online Fees</p>
                  <p className="text-xs text-gray-400">Safe UPI Payments</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="mt-10 inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all">
              Go to Payment Section
            </Link>
          </div>
          <div className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <img src={HOME_IMAGES.DIGITAL_STUDY} alt="Digital Learning" className="w-full h-full object-cover" onError={handleImageError} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Welcome to MIT Mawana</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Mawana Institute of Technology is dedicated to providing high-quality computer education. 
              Our mission is to bridge the digital divide by equipping our students with the latest skills needed in the modern workplace.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="text-blue-600" />
                <span>Expert Faculty with 10+ years experience</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="text-blue-600" />
                <span>Advanced Computer Labs</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="text-blue-600" />
                <span>100% Placement Assistance</span>
              </li>
            </ul>
            <Link to="/about" className="text-blue-600 font-bold hover:underline">Learn More &rarr;</Link>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50">
            <img src={HOME_IMAGES.ABOUT} alt="MIT Classroom" className="w-full h-full object-cover" onError={handleImageError} />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MIT?</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Approved</h3>
              <p className="text-gray-500 text-sm">Recognized certification valid across industries.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all">
              <div className="bg-sky-100 text-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern</h3>
              <p className="text-gray-500 text-sm">Courses updated as per current trends.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Experts</h3>
              <p className="text-gray-500 text-sm">Learn from industry professionals.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all">
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Placements</h3>
              <p className="text-gray-500 text-sm">Dedicated career counseling and job aid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Top Courses</h2>
            <p className="text-gray-600 mt-2">Pick your career path.</p>
          </div>
          <Link to="/courses" className="text-blue-600 font-bold hover:underline">View All &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.slice(0, 3).map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-50 group">
              <div className="h-48 overflow-hidden relative">
                <img src={HOME_IMAGES.COURSES_PREVIEW} alt={course.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" onError={handleImageError} />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{course.name}</h3>
                <p className="text-gray-600 mb-6 text-sm line-clamp-2">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{course.duration}</span>
                  <Link to="/contact" className="text-blue-600 font-bold text-sm">Enquire Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Verification System */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Verification System</h2>
              <p className="text-gray-400 text-lg mb-8">Instantly verify your certificates online.</p>
              <form onSubmit={handleVerify} className="flex gap-4 mb-8">
                <input 
                  type="text" 
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="Roll No (e.g. MIT2024001)"
                  className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none"
                  required
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl font-bold transition-all flex items-center">
                  <Search size={20} className="mr-2" /> Check
                </button>
              </form>
              
              {verificationResult && (
                <div className={`p-6 rounded-xl border-2 ${verificationResult.error ? 'border-red-500 bg-red-500/10' : 'border-blue-500 bg-blue-500/10'}`}>
                  {verificationResult.error ? (
                    <p className="font-bold text-red-400">{verificationResult.error}</p>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 text-white">
                      <div><p className="text-gray-400 text-xs uppercase">Student</p><p className="font-bold">{verificationResult.name}</p></div>
                      <div><p className="text-gray-400 text-xs uppercase">Course</p><p className="font-bold">{verificationResult.course}</p></div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="hidden md:flex justify-center">
              <Award size={200} className="text-blue-500 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl text-blue-100 mb-10">Join MIT Mawana today.</p>
          <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all inline-block">
            Apply Now
          </Link>
        </div>
      </section>

      {/* UPDATED: Final Contact & Interactive Google Map Section (Smaller version) */}
      <section className="w-full bg-slate-50 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Contact & Location</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Contact Info Card */}
            <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100 space-y-6 h-fit">
              <h3 className="text-xl font-bold text-blue-600">Get Directions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-xl flex-shrink-0"><MapPin size={18} /></div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">MIT Mawana Address</p>
                    <p className="text-[13px] text-gray-600 leading-snug">{CONTACT_INFO.ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-xl flex-shrink-0"><Phone size={18} /></div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Phone & WhatsApp</p>
                    <p className="text-[13px] text-gray-600">{CONTACT_INFO.PHONE_1}</p>
                    <p className="text-[13px] text-gray-600">{CONTACT_INFO.PHONE_2}</p>
                  </div>
                </div>
              </div>
              <a 
                href={CONTACT_INFO.GOOGLE_MAPS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-md text-sm"
              >
                <ExternalLink size={16} />
                <span>Open in Maps</span>
              </a>
            </div>

            {/* Compact Interactive Google Map Embed */}
            <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-xl p-2 border border-gray-100 overflow-hidden min-h-[300px]">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.6620586906236!2d77.9216!3d29.1026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c67530e38676d%3A0xc3f8e50942d72105!2sMawana%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '300px' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MIT Mawana Map Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
