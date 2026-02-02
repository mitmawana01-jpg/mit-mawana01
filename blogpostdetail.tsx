
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/blog" className="text-blue-600 mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between border-y border-gray-100 py-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-500 text-sm">
                <User size={18} className="mr-2 text-blue-500" />
                By {post.author}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar size={18} className="mr-2 text-blue-500" />
                {post.date}
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-xl text-gray-600 italic font-medium border-l-4 border-blue-500 pl-6 mb-10">
            {post.excerpt}
          </p>
          <p>{post.content}</p>
          <p>
            Staying updated is key in the technical field. Whether you are learning Web Design, AI, or Tally, 
            the fundamentals of research and continuous reading will always serve you well. Our library at MIT Mawana 
            is also stocked with latest journals and books to supplement these online insights.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 pt-6">Takeaway Points:</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Keep practicing what you read.</li>
            <li>Connect with industry mentors at our weekend sessions.</li>
            <li>Share your learnings with your peers in the MIT Discord group.</li>
          </ul>
        </div>

        {/* Footer of Post */}
        <footer className="mt-16 pt-10 border-t border-gray-100">
          <div className="bg-blue-50 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold mb-2">Did you find this helpful?</h4>
              <p className="text-gray-600">Join our newsletter for more weekly updates directly in your inbox.</p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Subscribe Now
            </button>
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/contact" className="inline-flex items-center space-x-2 bg-green-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all">
              <MessageCircle size={20} />
              <span>Discuss this on WhatsApp</span>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogPostDetail;
