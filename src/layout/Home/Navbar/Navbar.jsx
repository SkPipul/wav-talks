import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
      navigate('/')
  };

    const navMenu = (
        <React.Fragment>
        <li className="font-bold">
            <Link to={'/'}>Home</Link>
        </li>
        <li className="font-bold">
            <Link to={'/about'}>About</Link>
        </li>
        {user?.uid ? (
        <>
          <li className="font-bold">
            <Link onClick={handleLogOut}>Logout</Link>
          </li>
        </>
      ) : (
        <li className="font-bold">
          <Link to="/login">Login</Link>
        </li>
      )}
        </React.Fragment>
    )

  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 px-14">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navMenu}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl font-bold text-white">Wav Talks</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navMenu}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Get started</a> */}
  </div>
</div>
  );
};

export default Navbar;
