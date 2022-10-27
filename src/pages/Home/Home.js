import React from 'react';
import { Link } from 'react-router-dom';
import sideImage from '../../assests/image/sideImage.jpg'

const Home = () => {
    return (
        <div>
            <div className=' ps-5 pe-5 d-lg-flex w-100 justify-content-between  align-items-center bg-secondary' style={{height: '93vh '}}>
            <div >
                <h3 className=' text-white' style={{fontSize: '55px'}}>Learn New Skills <br /> Online With Tops <br /><span style={{color: '#00FF84'}}>Educators </span></h3>
                <button className='btn btn-primary text-white
                '><Link to="/courses" className='text-white text-decoration-none fs-3'>Find Courses</Link></button>
            </div>
            <div className='my-auto'>
                <img src={sideImage} alt="" />
            </div>
        </div>
       
        </div>
    );
};

export default Home;