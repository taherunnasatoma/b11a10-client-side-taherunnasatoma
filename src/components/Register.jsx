import React, { use, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser,setUser}=use(AuthContext);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'
      );
      return;
    }

    
    console.log({ name, photoURL, email, password });
    createUser(email,password)
    .then(result=>{
        const user= result.user;
       setUser(user);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    
  };

  return (
    <div>
        <Navbar></Navbar>
    
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
        
      <div className="card bg-base-100 py-5 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Register your account</h2>

        <div className="card-body">
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input name="name" type="text" className="input input-bordered w-full" placeholder="Name" required />
            </div>

            <div>
              <label className="label">Photo URL</label>
              <input name="photoURL" type="text" className="input input-bordered w-full" placeholder="Photo URL" />
            </div>

            <div>
              <label className="label">Email</label>
              <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="btn btn-neutral w-full">Register</button>

            <p className="text-center mt-4">
              Already have an account?{' '}
              <Link className="text-red-500 font-medium" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Register;
