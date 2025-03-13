
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { enrolledCourses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check, BookOpen, Clock, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Dashboard Header */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, Student</h1>
                <p className="text-muted-foreground">Track your progress and continue learning</p>
              </div>
              <Button asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </motion.div>
          </section>
          
          {/* Statistics */}
          <motion.section 
            className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { title: 'Enrolled Courses', value: enrolledCourses.length, icon: BookOpen, color: 'bg-blue-100 text-blue-700' },
              { title: 'In Progress', value: enrolledCourses.filter(c => c.progress > 0 && c.progress < 100).length, icon: Clock, color: 'bg-amber-100 text-amber-700' },
              { title: 'Completed', value: enrolledCourses.filter(c => c.progress === 100).length, icon: Check, color: 'bg-green-100 text-green-700' },
              { title: 'Certificates', value: enrolledCourses.filter(c => c.progress === 100).length, icon: GraduationCap, color: 'bg-purple-100 text-purple-700' },
            ].map((stat, index) => (
              <Card key={stat.title}>
                <CardContent className="p-6 flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color} mr-4`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.section>
          
          {/* Your Learning */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
              
              <div className="space-y-6">
                {enrolledCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="w-full md:w-48 flex-shrink-0">
                            <img 
                              src={course.image} 
                              alt={course.title}
                              className="w-full h-32 object-cover rounded-md"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between mb-2">
                              <h3 className="text-xl font-semibold mb-2 md:mb-0">{course.title}</h3>
                              <Badge
                                variant="outline"
                                className="w-fit h-fit mb-2 md:mb-0"
                              >
                                {course.level}
                              </Badge>
                            </div>
                            
                            <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                            
                            <div className="mb-4">
                              <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">{course.progress}% complete</span>
                                <span className="text-sm text-muted-foreground">
                                  {course.chapters.filter(ch => ch.isCompleted).length}/{course.chapters.length} chapters
                                </span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3">
                              <Button asChild>
                                <Link to={`/courses/${course.id}`}>Continue Learning</Link>
                              </Button>
                              <Button variant="outline" asChild>
                                <Link to={`/courses/${course.id}`}>View Course</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Dashboard;
