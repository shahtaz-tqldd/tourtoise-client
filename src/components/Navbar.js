import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/places'>Tour Place</Link></li>
    <li><Link to='/blogs'>Tour Blogs</Link></li>
    <li><Link to='/groups'>Groups</Link></li>
  </>
  return (
    <div className='bg-base-100 shadow-lg'>
      <div className="navbar lg:max-w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Tourtoise</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn btn-sm btn-outline normal-case rounded border-2">Login</Link>
          <Link to='/sign-up' className="btn btn-sm normal-case rounded ml-3 text-white">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar