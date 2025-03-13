
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Book, BookOpen, GraduationCap, Users } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <Hero />

        <FeaturedCourses />
        
        {/* Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Explore Categories
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover the perfect course across our diverse range of categories
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Design', icon: BookOpen, color: 'bg-purple-100 text-purple-700' },
                { title: 'Development', icon: Book, color: 'bg-blue-100 text-blue-700' },
                { title: 'Business', icon: Users, color: 'bg-green-100 text-green-700' },
                { title: 'Data Science', icon: GraduationCap, color: 'bg-amber-100 text-amber-700' },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to="/courses" className="block h-full">
                    <div className="h-full flex flex-col items-center justify-center p-8 rounded-xl bg-white shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${category.color} mb-4`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground text-center mb-4">Courses for all levels</p>
                      <span className="text-primary font-medium">Explore &rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Start Your Learning Journey?
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of students and start learning today. Unlock your potential with LearnHub's premium courses.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" asChild>
                  <Link to="/courses">Get Started for Free</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;
