import Lottie from 'lottie-react';
import lottieLoginJson from '../../assets/lottieFiles/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/authContext/AuthContext';
import { FaGoogle } from 'react-icons/fa6';

const SignIn = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || "/";

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        // console.log(email, password);
        
        signInUser(email, password)
        .then(result => {
            console.log('sign in', result.user)
            navigate(from);
        })
        .catch(error => {
            console.log(error.message)
        })
        form.reset()
    
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            console.log('google login', result.user)
            navigate(from);
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="hero bg-blue-100 my-10 py-10 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-80 md:ml-20">
          <Lottie animationData={lottieLoginJson}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-4xl font-bold text-blue-500">Sign In now!</h1>
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
                <label className="label">
            <a href="#" className="label-text-alt link link-hover text-blue-500">Forgot password?</a>
          </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-blue-500  text-lg font-semibold text-white">Sign In</button>
              </div>
              <p className='text-sm text-green-500'>Don't have an account? Please <Link to="/register" className='text-base text-blue-600'>Register</Link></p>
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

export default SignIn;