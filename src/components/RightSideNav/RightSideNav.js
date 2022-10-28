import React from 'react';
import { Link } from 'react-router-dom';
import './RightSideNav.css'

const RightSideNav = ({course}) => {
    return (
        <div>
           <ul >
            <li style={{marginBottom: '20px'}}><Link to={`/course/${course.id}`} style={{textDecoration:'none', color:'black', padding:'10px', background: 'orange', borderRadius:'8px', }}>{course.name}</Link></li>
           </ul>
            
        </div>
    );
};

export default RightSideNav;