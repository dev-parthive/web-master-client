import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const   CourseDetails = () => {
    const [course] = useLoaderData()
    
//    const [course, setCourse] = useState({})
//    useEffect( ()=>{
//     fetch('https://web-master-server-mu.vercel.app/course')
//     .then(res => res.json)
//     .then(data => console.log(data))
//    } , [])
    return (
        <div>
           <Card style={{ width: '60%', margin: '0px auto' }}>
      <Card.Img variant="top" src={course.img}/>
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <p>Author: {course.author}</p>
        <Card.Text>
          {course.details}
        </Card.Text>
        <Button variant="primary" ><NavLink to="/purchase" className="text-white text-decoration-none">Enroll Now</NavLink></Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseDetails;