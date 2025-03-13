
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { courses } from '@/lib/data';
import { Clock, Users, Book, Check, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  // Find the course by ID
  const course = courses.find(c => c.id === courseId);
  
  // Handle case when course is not found
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-6">The course you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24">
        {/* Course Header */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-4">{course.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="mr-1 text-amber-500">★</div>
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground ml-1">({course.reviews} reviews)</span>
                  </div>
                  
                  <Separator orientation="vertical" className="h-5" />
                  
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  
                  <Separator orientation="vertical" className="h-5" />
                  
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm mb-1">Instructor</p>
                  <p className="text-lg font-medium">{course.instructor}</p>
                </div>
                
                <Button size="lg" className="w-full sm:w-auto">Enroll Now</Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl overflow-hidden"
              >
                <div className="aspect-video">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      className="bg-white/90 hover:bg-white"
                      size="lg"
                    >
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Watch Preview
                    </Button>
                  </div>
                </div>
                
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold">${course.price}</h3>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span>Full lifetime access</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span>Access on mobile and desktop</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span>30-day money-back guarantee</span>
                      </li>
                    </ul>
                    
                    <Button size="lg" className="w-full">Enroll Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Course Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-8">Course Content</h2>
              
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {course.chapters.length} chapters • {course.duration} total
                </p>
              </div>
              
              <div className="space-y-4 mb-12">
                {course.chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <Book className="h-5 w-5 mr-3 text-primary" />
                          <div>
                            <p className="font-medium">{chapter.title}</p>
                            <p className="text-sm text-muted-foreground">{chapter.duration}</p>
                          </div>
                        </div>
                        <div>
                          <Badge variant="outline">Preview</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default CourseDetail;
