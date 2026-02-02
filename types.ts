
export interface Course {
  id: string;
  name: string;
  category: 'Programming' | 'Advanced' | 'Professional' | 'Design' | 'Hardware';
  description: string;
  duration: string;
  icon: string;
}

export interface Student {
  rollNo: string;
  name: string;
  course: string;
  issueDate: string;
  valid: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Latest Tech Trends' | 'Career Guidance' | 'Student Success Stories' | 'Institute News';
  author: string;
  date: string;
  image: string;
}
