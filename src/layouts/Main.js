import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <>
      <Navbar />
      <div className='pt-14'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Main