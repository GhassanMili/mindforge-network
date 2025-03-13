
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Course } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Book, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title} 
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-4 right-4">
            {course.level}
          </Badge>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs font-normal">
              {course.category}
            </Badge>
            <div className="flex items-center">
              <div className="mr-1 text-amber-500">★</div>
              <span className="text-sm font-medium">{course.rating}</span>
              <span className="text-xs text-muted-foreground ml-1">({course.reviews})</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-xl mb-2 line-clamp-2">{course.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
        </CardContent>
        
        <CardFooter className="px-6 py-4 border-t flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-primary">${course.price}</p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
