
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/courses/CourseCard';

const FeaturedCourses: React.FC = () => {
  // Get only the featured courses
  const featuredCourses = courses.filter(course => course.isFeatured);
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Courses
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our most popular courses chosen by thousands of students worldwide
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/courses">Browse All Courses</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
