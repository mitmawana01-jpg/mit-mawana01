
import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About MIT Mawana</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Established in 2015, Mawana Institute of Technology has been the pioneer of technical education in the region, 
          shaping the careers of over 5000+ students.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide affordable, high-quality computer education to students from all walks of life, 
              ensuring they are ready to meet the challenges of the digital workforce.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the most trusted name in IT education in Uttar Pradesh, fostering innovation 
              and technical excellence in every student we train.
            </p>
          </div>
        </div>
      </div>

      {/* Director Message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-blue-600 rounded-[3rem] p-10 md:p-20 text-white flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 flex-shrink-0 rounded-full overflow-hidden border-8 border-white/20">
            <img src="https://picsum.photos/400/400?portrait" className="w-full h-full object-cover" alt="Director" />
          </div>
          <div>
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">Director's Message</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">"Technology is the key to unlocking a bright future for our youth."</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              At MIT Mawana, we don't just teach software; we build careers. Our focus is on practical learning 
              and real-world application. I welcome you all to join our community and start your journey towards excellence.
            </p>
            <div>
              <p className="text-2xl font-bold">Shri. Neeraj Kumar</p>
              <p className="text-blue-200">Founder & Director, Neeraj Kumar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">10+</p>
          <p className="text-gray-500 font-medium">Years Experience</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">5000+</p>
          <p className="text-gray-500 font-medium">Certified Students</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">50+</p>
          <p className="text-gray-500 font-medium">Industry Courses</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">100%</p>
          <p className="text-gray-500 font-medium">Supportive Labs</p>
        </div>
      </div>
    </div>
  );
};

export default About;
