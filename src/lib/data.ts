
export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  duration: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  image: string;
  isFeatured: boolean;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Sarah Johnson',
    description: 'Learn the foundational principles of UI/UX design and create stunning user interfaces that convert. This comprehensive course covers everything from user research to prototyping and usability testing.',
    level: 'Beginner',
    category: 'Design',
    duration: '8 hours',
    rating: 4.8,
    reviews: 342,
    students: 1543,
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
    isFeatured: true,
    chapters: [
      { id: '1-1', title: 'Introduction to UI/UX Design', duration: '45 min' },
      { id: '1-2', title: 'User Research Methods', duration: '1 hr 15 min' },
      { id: '1-3', title: 'Wireframing and Prototyping', duration: '2 hr' },
      { id: '1-4', title: 'Visual Design Principles', duration: '1 hr 30 min' },
      { id: '1-5', title: 'Usability Testing', duration: '1 hr' },
      { id: '1-6', title: 'Final Project', duration: '1 hr 30 min' },
    ]
  },
  {
    id: '2',
    title: 'Complete JavaScript Development',
    instructor: 'Michael Chen',
    description: 'Master JavaScript from the ground up. This course covers everything from basic syntax to advanced concepts like async/await, ES6 features, and modern framework integration.',
    level: 'Intermediate',
    category: 'Programming',
    duration: '12 hours',
    rating: 4.9,
    reviews: 567,
    students: 2845,
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
    isFeatured: true,
    chapters: [
      { id: '2-1', title: 'JavaScript Fundamentals', duration: '2 hr' },
      { id: '2-2', title: 'DOM Manipulation', duration: '1 hr 45 min' },
      { id: '2-3', title: 'Asynchronous JavaScript', duration: '2 hr 30 min' },
      { id: '2-4', title: 'ES6+ Features', duration: '1 hr 45 min' },
      { id: '2-5', title: 'Working with APIs', duration: '2 hr' },
      { id: '2-6', title: 'Testing and Debugging', duration: '2 hr' },
    ]
  },
  {
    id: '3',
    title: 'Data Science and Machine Learning',
    instructor: 'Emily Rodriguez',
    description: 'Dive into the world of data science and machine learning. Learn to analyze complex datasets, build predictive models, and extract valuable insights from data.',
    level: 'Advanced',
    category: 'Data Science',
    duration: '15 hours',
    rating: 4.7,
    reviews: 423,
    students: 1876,
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
    isFeatured: true,
    chapters: [
      { id: '3-1', title: 'Introduction to Data Science', duration: '1 hr 30 min' },
      { id: '3-2', title: 'Data Cleaning and Preprocessing', duration: '2 hr' },
      { id: '3-3', title: 'Exploratory Data Analysis', duration: '2 hr 15 min' },
      { id: '3-4', title: 'Machine Learning Basics', duration: '3 hr' },
      { id: '3-5', title: 'Supervised Learning Algorithms', duration: '3 hr 15 min' },
      { id: '3-6', title: 'Deep Learning Introduction', duration: '3 hr' },
    ]
  },
  {
    id: '4',
    title: 'Digital Marketing Masterclass',
    instructor: 'David Wilson',
    description: 'Learn proven digital marketing strategies to grow your business. This comprehensive course covers SEO, content marketing, social media, email campaigns, and analytics.',
    level: 'Beginner',
    category: 'Marketing',
    duration: '10 hours',
    rating: 4.6,
    reviews: 289,
    students: 1432,
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
    isFeatured: false,
    chapters: [
      { id: '4-1', title: 'Digital Marketing Overview', duration: '1 hr' },
      { id: '4-2', title: 'Search Engine Optimization', duration: '2 hr' },
      { id: '4-3', title: 'Content Marketing Strategies', duration: '1 hr 45 min' },
      { id: '4-4', title: 'Social Media Marketing', duration: '2 hr' },
      { id: '4-5', title: 'Email Marketing Campaigns', duration: '1 hr 30 min' },
      { id: '4-6', title: 'Analytics and Reporting', duration: '1 hr 45 min' },
    ]
  },
  {
    id: '5',
    title: 'Creative Photography',
    instructor: 'Jessica Lee',
    description: 'Develop your eye for exceptional photography. Master composition, lighting, editing, and post-processing to create stunning images that tell compelling stories.',
    level: 'Intermediate',
    category: 'Photography',
    duration: '9 hours',
    rating: 4.8,
    reviews: 321,
    students: 1243,
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
    isFeatured: false,
    chapters: [
      { id: '5-1', title: 'Camera Basics', duration: '1 hr 15 min' },
      { id: '5-2', title: 'Composition Techniques', duration: '1 hr 30 min' },
      { id: '5-3', title: 'Lighting Fundamentals', duration: '2 hr' },
      { id: '5-4', title: 'Portrait Photography', duration: '1 hr 45 min' },
      { id: '5-5', title: 'Landscape Photography', duration: '1 hr 30 min' },
      { id: '5-6', title: 'Post-Processing in Lightroom', duration: '1 hr' },
    ]
  },
  {
    id: '6',
    title: 'Business Strategy & Leadership',
    instructor: 'Robert Thompson',
    description: 'Develop the strategic thinking and leadership skills needed to drive organizational success. Learn to create effective business strategies and lead high-performing teams.',
    level: 'Advanced',
    category: 'Business',
    duration: '11 hours',
    rating: 4.7,
    reviews: 256,
    students: 1123,
    price: 84.99,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
    isFeatured: false,
    chapters: [
      { id: '6-1', title: 'Strategic Thinking Fundamentals', duration: '1 hr 30 min' },
      { id: '6-2', title: 'Business Model Innovation', duration: '2 hr' },
      { id: '6-3', title: 'Competitive Analysis', duration: '1 hr 45 min' },
      { id: '6-4', title: 'Leadership Principles', duration: '2 hr' },
      { id: '6-5', title: 'Team Management', duration: '1 hr 45 min' },
      { id: '6-6', title: 'Change Management', duration: '2 hr' },
    ]
  }
];

// Sample enrolled courses for the dashboard
export const enrolledCourses = [
  {
    ...courses[0],
    progress: 75,
    chapters: courses[0].chapters.map((chapter, index) => ({
      ...chapter,
      isCompleted: index <= 3
    }))
  },
  {
    ...courses[1],
    progress: 30,
    chapters: courses[1].chapters.map((chapter, index) => ({
      ...chapter,
      isCompleted: index <= 1
    }))
  },
  {
    ...courses[3],
    progress: 10,
    chapters: courses[3].chapters.map((chapter, index) => ({
      ...chapter,
      isCompleted: index === 0
    }))
  }
];

// Categories for filtering
export const categories = [
  'All Categories',
  'Design',
  'Programming',
  'Data Science',
  'Marketing',
  'Photography',
  'Business',
];

// Levels for filtering
export const levels = [
  'All Levels',
  'Beginner',
  'Intermediate',
  'Advanced',
];
