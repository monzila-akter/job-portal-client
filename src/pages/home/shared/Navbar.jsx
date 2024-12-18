import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../../context/authContext/AuthContext';
import logo from "../../../assets/logo/logo.png"


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

const links = <>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/myApplication">My Application</NavLink></li>
<li><NavLink to="/addJob">Add Job</NavLink></li>
<li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>
</>

    return (
        <div className="navbar bg-base-100 py-7">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex items-center space-x-2'>
        <img className='w-10 object-cover' src={logo} alt="" />
    <a className=" text-3xl font-bold text-blue-600">JobPortal</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-4">
    {
        user ? <><button onClick={logOut} className="btn bg-blue-500 text-lg font-semibold text-white">Sign Out</button></> : <>
        <Link to="/register" className=' text-blue-500 text-lg font-semibold'>Register</Link>
        <Link to="/signIn"><button className="btn bg-blue-500 text-lg font-semibold text-white">Sign In</button></Link>
        </>
    }
  </div>
</div>
    );
};

export default Navbar;