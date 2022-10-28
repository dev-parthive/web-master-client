import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    console.log(course)
    
    return (
        <div className='ms-3 mb-4'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course.img} />
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>
          {course.details.slice(1,40)} <a style={{color:'blue',cursor: 'pointer'}}>  see more...</a>
        </Card.Text>
        <Button variant="primary" ><Link to={`/course/${course.id}`} style={{color:'white', textDecoration: 'none'}}>Course Details</Link></Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Course;