import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'

const Footer = () => {
  const menuItems = <>
    <Link to='/' className="link link-hover">Home</Link>
    <Link to='/places' className="link link-hover">Tour Place</Link>
    <Link to='/blogs' className="link link-hover">Tour Blogs</Link>
    <Link to='/groups' className="link link-hover">Groups</Link>
  </>
  return (
    <div className='bg-base-200 mt-32'>
      <footer className="footer py-10 text-base-content lg:max-w-[80%] mx-auto">
        <div>
          <img src={logo} alt="logo" className="h-20 w-20"/>
          <h2 className='text-2xl font-bold'>Tourtoise</h2>
          <p>Your Virtual Tour Guide</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          {menuItems}
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to='/' className="link link-hover">About us</Link>
          <Link to='/' className="link link-hover">Contact</Link>
          <Link to='/' className="link link-hover">Jobs</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to='/' className="link link-hover">Terms of use</Link>
          <Link to='/' className="link link-hover">Privacy policy</Link>
          <Link to='/' className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <p className='text-center py-12'>Copyright © 2022 - All right reserved by Tourtoise</p>
    </div>
  )
}

export default Footer