import React, { use } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {

    const {signIn}=use(AuthContext)

    const location = useLocation()

    const navigate =useNavigate()
    console.log(location)

    const handleLogin=e=>{
        e.preventDefault()

         const form = e.target;
   
    const email = form.email.value;
    const password = form.password.value;

    console.log({email,password})
    signIn(email,password)
    .then(result=>{

        const user = result.user;
        console.log(user)
        navigate(`${location.state?location.state : "/"}`)


    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage)
    // ..
  });
    
  };

    
    return (
        <div>
            <Navbar></Navbar>
       
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card bg-base-100 py-5 w-full max-w-sm shadow-2xl">
                <h2 className="font-bold text-2xl text-center">Login to your account</h2>

                <div className="card-body">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input input-bordered w-full" placeholder="Email" />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input input-bordered w-full" placeholder="Password" />
                        </div>

                        <div className="text-right">
                            <a className="link link-hover text-sm">Forgot password?</a>
                        </div>

                        <button className="btn btn-neutral w-full">Login</button>
                    </form>
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className="text-center mt-4">
                        Don't have an account?{' '}
                        <Link className="text-red-500 font-medium" to="/auth/register">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
        <Footer></Footer>
         </div>
    );
};

export default Login;
