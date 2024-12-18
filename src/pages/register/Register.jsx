import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import animationLottieDate from '../../assets/lottieFiles/lottie.json'
import AuthContext from '../../context/authContext/AuthContext';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';


const Register = () => {

    const [error, setError] = useState("");
    const {createUser, signInWithGoogle} = useContext(AuthContext);

const handleRegister = e => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if(!passwordRegex.test(password)){
        return setError("Password is Invalid")
    }

     createUser(email, password)
     .then(result => {
        console.log(result.user)
     })
     .catch(error => {
        console.log(error.message)
     })
    

}

const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
        console.log('google login', result.user)
    })
    .catch(error => {
        console.log(error.message)
    })
}

    return (
        <div className="hero bg-blue-100 my-10 py-10 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96 md:ml-20">
    <Lottie animationData={animationLottieDate}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
      <h1 className="text-4xl font-bold text-blue-500">Registe now!</h1>
      {/* input name field */}
      <div className="form-control">
            
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
          </div>
           {/* input photoUrl field */}
      <div className="form-control">
            
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
          </div>
      {/* input email field */}
        <div className="form-control">
            
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="your email" className="input input-bordered" required />
        </div>
        {/* input password field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="enter password" className="input input-bordered" required />
          {
            error && <p className='text-sm text-red-500'>{error}</p>
          }
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500  text-lg font-semibold text-white">Register</button>
        </div>
        <p className='text-sm text-green-500'>Already have an account? Please <Link to="/signIn" className='text-base text-blue-600'>Sign In</Link></p>
      </form>
      <div className="divider px-7">OR</div>
            <div className='px-7 mb-7'>
            <button
            onClick={handleGoogleLogin}
             className='btn w-full bg-transparent border-2 border-blue-500 text-lg font-semibold text-blue-500'>
                <FaGoogle></FaGoogle> Google</button>
            </div>
    </div>
  </div>
</div>
    );
};

export default Register;