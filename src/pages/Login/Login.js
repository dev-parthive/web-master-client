import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsGoogle} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/Context/AuthProvider';



const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const {signIn} = useContext(AuthContext)
  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()

  const handleSubmti = (event) =>{
     event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password  = form.password.value;
    signIn(email, password)

    .then(result =>{
      const user = result.user;
      console.log(user)
      form.reset()
      setError('')
      navigate('/courses')

    })
    .catch(error => {
      setSuccess('')
      console.log(error)
      setError(error.message)
    
    
    })

  }
  const handleGoogleSignIN = () =>{
    providerLogin(googleProvider)
    .then(restult =>{
      const user = restult.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      

    })
  }
  
    return (
        <div className='w-50 ' style={{margin:'0px auto', marginTop:'20px', border: '2px solid black', padding:'30px'}}>
             <Form onSubmit={handleSubmti}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <p className='text-center text-danger'>{error}</p>
      <p className='text-center'>-------------Login with----------- </p>
     
    </Form>
    <div >
        <span className='mx-auto w-100'><button  onClick={handleGoogleSignIN}><BsGoogle></BsGoogle></button></span>
      </div>
        </div>
    );
};

export default Login;