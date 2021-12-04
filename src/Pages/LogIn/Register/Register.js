import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hook/useAuth';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {googleInUsingSignIn,registerUser,user} =useAuth()

    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
      const handleNameChange = e => {
        setName(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        registerUser(email,password)
        // registerUser(email,password)
        // if (password.length < 6) {
        //   setError('Password Must be at least 6 characters long.')
        //   return;
        // }
        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //   setError('Password Must contain 2 upper case');
        //   return;
        // } 
      }
    return (
     <div>

         <div className='mt-5 text-center'>
             <h3>REGISTERED</h3>
             </div>
             {user?.email && <p className='text-center'><i class="fas fa-check-circle"></i>Registration successfully!</p>}
            <div className='w-50 pt-4 m-auto'>
                <form onSubmit={handleRegistration}>
                <div class="form-floating mb-3 ">
  <input type="name" onBlur={handleNameChange}  class="form-control" id="floatingInput" placeholder="Enter Your Full Name"/>
  <label for="floatingInput">Full Name</label>
</div>
                <div class="form-floating mb-3 ">
  <input type="email" onBlur={handleEmailChange} class="form-control" id="floatingInput" placeholder="Enter Your Email"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" onBlur={handlePasswordChange}  class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div class="d-grid gap-2 mt-3">
  <button type="submit" class="btn btn-primary">Sign In</button>
  <Link to='/login' className='text-center text-decoration-none'>ALREADY REGISTERED?PLEASE LOGIN</Link>
 
</div>
                </form>
        </div>
        <div className='text-center mt-5'>
            <button onClick={googleInUsingSignIn} class="btn btn-primary p-3" ><i class="fab fa-google mx-2"></i>Google</button>
        </div>
     </div>
    );
};

export default Register;