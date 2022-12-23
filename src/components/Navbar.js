import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/icons/logo.png'
import { AuthContext } from '../context/AuthProvider'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const menuItems = <>
    <li><Link to='/places'>Tour Place</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    <li><Link to='/tour-groups'>Tour Groups</Link></li>
    <li><Link to='/hotels'>Book Hotels</Link></li>
    <li><Link to='/moments'>Moments</Link></li>
  </>
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.error("You are logged out!")
        navigate('/login')
      })
  }
  return (
    <div className='bg-base-100 shadow fixed top-0 left-0 right-0 z-10'>
      <div className="navbar lg:max-w-[1250px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="flex items-center font-bold  text-success transition duration-300 text-xl">
            <img src={logo} alt="tourtoise" className='h-12' />
            Tourtoise
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        {
          !user ?
            <div className="navbar-end">
              <Link to='/login' className="btn btn-sm btn-outline normal-case rounded border-2">Login</Link>
              <Link to='/sign-up' className="btn btn-sm normal-case rounded ml-3 text-white">Sign Up</Link>
            </div>
            :
            <div className="navbar-end">
              <button onClick={handleLogout} className="btn btn-sm btn-error normal-case text-white hover:bg-[#E97777] rounded border-2">Logout</button>
            </div>
            
        }
      </div>
    </div>
  )
}

export default Navbar