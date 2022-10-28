import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { json } from 'react-router-dom';
import Course from '../../components/Course/Course';
import RightSideNav from '../../components/RightSideNav/RightSideNav';
import './Courses.css'

const Courses = () => {
    const  [courses, setCourses] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data =>setCourses(data))
    }, [])
    return (
        <div>
           <h2 className='text-center text-primary p-5'> Available courses {courses.length}</h2>
        
        <div className='d-flex'>
        <div className='course-card-container'>
       {
            
            courses.map(course => <Course  course={course} key={course.id}></Course>)
        }
       </div>
            <div className='right-side-nav-container'>
            {
            courses.map(course => <RightSideNav course={course} key={course.id}></RightSideNav>)
        }
            </div>
        </div>
        </div>
    );
};

export default Courses;