
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight, PenTool } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Latest Tech Trends', 'Career Guidance', 'Student Success Stories', 'Institute News'];

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">MIT Insights & News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest in technology, career tips, and success stories from our institute.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-gray-400 text-xs mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center text-blue-600 font-bold hover:translate-x-1 transition-transform"
                  >
                    Read More <ChevronRight size={18} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Content Strategy Plan (Info Section) */}
        <div className="mt-24 bg-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <PenTool size={48} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Content Philosophy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe in regular knowledge sharing. Our team publishes new articles every Tuesday and Thursday to help students stay ahead of the curve. Want to contribute your own success story? Contact the front desk!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Latest Tech: Weekly Updates</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Student Stories: Monthly Features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
