import React from 'react';
import {FcApproval} from 'react-icons/fc'
import './PurchaseCourse.css'
const PurechaseCourse = () => {

    const buttonHanlde = () =>{
        alert("Thanks you to choose the plan")
    }
    return (
        <div className='d-lg-flex   m-md-4  justify-content-center mt-5 card-container'>
           <div className="card   me-4 p-5 ">
            <h3 className='text-left'>FREE</h3>
            <div>
                <ul>
                    <li className='list-style-none'><FcApproval></FcApproval> 5 videos </li>
                    <li className='list-style-none'><FcApproval></FcApproval> 1 Assignment</li>
                    <li className='list-style-none'><FcApproval></FcApproval> 5 Quizes</li>
                    <li className='list-style-none'><FcApproval></FcApproval> Guide line</li>
                    <li className='list-style-none'><FcApproval></FcApproval> Free Blogs</li>
                </ul>
            </div>
            <button onClick={buttonHanlde} className='btn btn-primary'>Start Course</button>
           </div>
           <div className="card  p-5">
            <h3>Premium</h3>
            <div>
                <ul>
                    <li className='list-style-none'><FcApproval></FcApproval> 220 videos </li>
                    <li className='list-style-none'><FcApproval></FcApproval> 50 Quizes</li>
                    <li className='list-style-none'><FcApproval></FcApproval> 12 Assignments</li>
                    <li className='list-style-none'><FcApproval></FcApproval> Live Support </li>
                    <li className='list-style-none'><FcApproval></FcApproval> Scic </li>
                </ul>
            </div>
            <button onClick={buttonHanlde} className='btn btn-primary'>Start Course</button>
           </div>
        </div>
    );
};

export default PurechaseCourse;