import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsGoogle} from 'react-icons/bs'
import { AuthContext } from '../../components/Context/AuthProvider';
const Login = () => {


  const {signIn} = useContext(AuthContext)
  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
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
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p>Login with </p>
     
    </Form>
    <div>
        <span><button onClick={handleGoogleSignIN}><BsGoogle></BsGoogle></button></span>
      </div>
        </div>
    );
};

export default Login;