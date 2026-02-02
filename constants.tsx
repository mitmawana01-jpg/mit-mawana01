
import React from 'react';
import { 
  Code, Cpu, Shield, Layout, BookOpen, 
  Monitor, PenTool, Database, Globe 
} from 'lucide-react';
import { Course, BlogPost } from './types';

/**
 * LOGO CONFIGURATION
 */
export const LOGO_URL = 'https://i.postimg.cc/BncGsD29/MIT_MAWANA.jpg'; 

/**
 * PAYMENT & CONTACT CONFIG
 */
const upiUri = `upi://pay?pa=8881888927@ybl&pn=NEERAJ%20KUMAR&cu=INR`;
export const CONTACT_INFO = {
  PHONE_1: '+91 8881888927',
  PHONE_2: '+91 9634232981',
  UPI_ID: '8881888927@ybl',
  ACCOUNT_NAME: 'NEERAJ KUMAR',
  UPI_QR_URL: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUri)}`,
  EMAIL: 'info@mitmawana01.com',
  ADDRESS: 'Near choudhary petrol pump, Mawana, Meerut, Uttar Pradesh 250401',
  GOOGLE_MAPS_URL: 'https://maps.app.goo.gl/HtbCeJVGxgEat18f7'
};

/**
 * HOME PAGE IMAGES
 */
export const HOME_IMAGES = {
  HERO: 'https://i.postimg.cc/Dfgj2gMP/20230812_163314.jpg', 
  ABOUT: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  AI_LAB_DECOR: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
  COURSES_PREVIEW: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80',
  DIGITAL_STUDY: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80'
};

export const COURSES: Course[] = [
  {
    id: 'ai-cyber',
    name: 'AI & Cyber Security',
    category: 'Advanced',
    description: 'Learn the future of technology and build a secure career.',
    duration: '6 Months',
    icon: 'Shield'
  },
  {
    id: 'web-design',
    name: 'Web Designing',
    category: 'Programming',
    description: 'Master HTML, CSS, React, and build modern responsive websites.',
    duration: '4 Months',
    icon: 'Globe'
  },
  {
    id: 'tally-gst',
    name: 'Tally Prime with GST',
    category: 'Professional',
    description: 'Become a professional in the world of accounting.',
    duration: '3 Months',
    icon: 'Database'
  },
  {
    id: 'java-cpp',
    name: 'C, C++ & Java',
    category: 'Programming',
    description: 'Strong foundation in core programming languages.',
    duration: '6 Months',
    icon: 'Code'
  },
  {
    id: 'graphic-design',
    name: 'Design & Graphics',
    category: 'Design',
    description: 'Learn Photoshop and CorelDraw for professional editing.',
    duration: '3 Months',
    icon: 'PenTool'
  },
  {
    id: 'hardware-net',
    name: 'Hardware & Networking',
    category: 'Hardware',
    description: 'Learn installation, maintenance and networking protocols.',
    duration: '6 Months',
    icon: 'Monitor'
  }
];

export const MOCK_STUDENTS = [
  { rollNo: 'MIT2024001', name: 'Anjali Sharma', course: 'Web Designing', issueDate: 'Jan 2024', valid: true },
  { rollNo: 'MIT2024002', name: 'Priya Verma', course: 'AI & Cyber Security', issueDate: 'Feb 2024', valid: true },
];

export const GALLERY_IMAGES = [
  { src: 'https://i.postimg.cc/Dfgj2gMP/20230812-163314.jpg', title: 'Modern Computer Lab' }, 
  { src: 'https://i.postimg.cc/MTYDp6dd/20240626_115907.jpg', title: 'Coding Session' },
  { src: 'https://i.postimg.cc/LXmtwd2M/20251125_133029.avif', title: 'Interactive Classroom' },
  { src: 'https://i.postimg.cc/6QrVM6sg/20250806_083124.avif', title: 'Student Projects' },
  { src: 'https://i.postimg.cc/sX3YqFsj/Time_Photo_20250909_105640.jpg', title: 'Hardware Lab' },
  { src: 'https://i.postimg.cc/7PVsxVWM/20230812_164206.jpg', title: 'Cyber Security Workshop' },
  { src: 'https://i.postimg.cc/BZMpWvjV/20240220_120707.avif', title: 'Reception Area' },
  { src: 'https://i.postimg.cc/mD4j4zNb/20231018_160713.avif', title: 'Staff Meeting' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-trends-2024',
    title: 'Top 5 AI Trends Revolutionizing the Workplace in 2024',
    excerpt: 'Artificial Intelligence is no longer just a buzzword. From automated coding to personalized learning, see what is changing.',
    content: 'AI is rapidly changing how we work. In this post, we explore how Generative AI, machine learning, and automation are creating new job roles while transforming existing ones. For students in Mawana, staying updated with these trends is crucial for global competitiveness...',
    category: 'Latest Tech Trends',
    author: 'Ananya Singh',
    date: 'May 15, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'it-career-guide',
    title: 'How to Build a Successful Career in IT from a Small Town',
    excerpt: 'You dont need to be in a metro city to land a high-paying tech job. Here is our step-by-step career roadmap.',
    content: 'Many students believe that high-paying IT jobs are only for those in Delhi or Bangalore. However, with remote work and online platforms, skill is the only barrier. At MIT Mawana, we focus on industry-ready skills like MERN stack and Cyber Security...',
    category: 'Career Guidance',
    author: 'Riya Sharma',
    date: 'June 02, 2024',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'success-sneha',
    title: 'Student Spotlight: Sneha’s Journey from Beginner to Web Developer',
    excerpt: 'Read how Sneha mastered Web Designing at MIT and landed her first freelance project within 4 months.',
    content: 'Sneha joined our Web Designing course with zero knowledge of coding. Through our practical-first approach and 1:1 lab sessions, she built 3 professional websites before finishing the course. Today, she manages multiple local clients...',
    category: 'Student Success Stories',
    author: 'Pooja Vats',
    date: 'April 20, 2024',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'workshop-update',
    title: 'MIT Mawana to Host Cyber Security Workshop this Sunday',
    excerpt: 'Join us for a hands-on workshop on ethical hacking and digital safety. Open for all students.',
    content: 'We are excited to announce our upcoming workshop. This 4-hour session will cover basic network security, password hygiene, and career paths in Ethical Hacking. Registration is free for existing students...',
    category: 'Institute News',
    author: 'Suman Lata',
    date: 'June 10, 2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  }
];
