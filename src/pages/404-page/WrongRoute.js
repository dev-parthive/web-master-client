import React from 'react';
import wrong from '../../assests/image/wrongRoute2.webp';
const wrongRoute = () => {
    return (
        <div style={{width: '90vw', height: '100vh'}}>
            <h1 className='text-primary text-center'>Tumi tow chandu vul route a chole asco </h1>
            <img className='img-fluid ' src={wrong} alt="" />
        </div>
    );
};

export default wrongRoute;