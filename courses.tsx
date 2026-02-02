
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { BookOpen, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Advanced', 'Programming', 'Professional', 'Design', 'Hardware'];

  const filteredCourses = filter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  // Helper function to get technology relevant images
  const getTechImage = (id: string) => {
    const images: Record<string, string> = {
      'ai-cyber': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', // Security/Tech
      'web-design': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', // Coding/Web
      'tally-gst': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', // Data/Business
      'java-cpp': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', // Laptop/Code
      'graphic-design': 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80', // Design/Interface
      'hardware-net': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'  // Server/Hardware
    };
    return images[id] || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80';
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Professional Courses</h1>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a wide variety of job-oriented courses designed to build your future in the digital age.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                filter === cat 
                ? 'bg-blue-600 text-white shadow-xl scale-105' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all flex flex-col group">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={getTechImage(course.id)} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={course.name} 
                />
                <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {course.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{course.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center text-gray-500 mb-6 font-medium">
                  <Clock size={18} className="mr-2 text-blue-500" />
                  <span>Duration: {course.duration}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <CheckCircle className="text-blue-500 mr-3" size={18} /> 
                    <span>Hands-on Practical Training</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <CheckCircle className="text-blue-500 mr-3" size={18} /> 
                    <span>Industry Recognized Certificate</span>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <Link 
                    to="/contact" 
                    className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 rounded-2xl font-black transition-all flex items-center justify-center group-hover:shadow-lg shadow-blue-100"
                  >
                    Enrol Now <ChevronRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 font-bold text-xl">No courses found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
