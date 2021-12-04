import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hook/useAuth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const { loginUser,googleInUsingSignIn,user} =useAuth()

    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        loginUser(email,password)
        // loginUser(email,password)
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
             <h3>Login</h3>
             </div>
            <div className='w-50 pt-4 m-auto'>
            {user?.email && <p className='text-center'><i class="fas fa-check-circle"></i>Login successfully!</p>
            }
                <form onSubmit={handleRegistration}>
                <div class="form-floating mb-3 ">
  <input type="email" onBlur={handleEmailChange} class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" onBlur={handlePasswordChange}  class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div class="d-grid gap-2 mt-3">
  <button type="submit" class="btn btn-primary">Sign In</button>
  <Link to='/reg' className='text-center text-decoration-none'>ALREADY LOGIN? PLEASE REGISTERED</Link>
 
</div>
                </form>
        </div>
        <div className='text-center mt-5'>
            <button onClick={googleInUsingSignIn} class="btn btn-primary p-3" ><i class="fab fa-google mx-2"></i>Google</button>
        </div>
     </div>
    );
};

export default Login;