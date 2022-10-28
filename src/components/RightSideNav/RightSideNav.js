import React from 'react';
import { Link } from 'react-router-dom';
import './RightSideNav.css'

const RightSideNav = ({course}) => {
    return (
        <div>
           <ul >
            <li><Link to={course.id}>{course.name}</Link></li>
           </ul>
            
        </div>
    );
};

export default RightSideNav;