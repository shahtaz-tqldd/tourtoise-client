import React from 'react'
import google from '../../assets/icons/google.png'
const GoogleLogin = () => {
  return (
      <button className='btn btn-outline btn-primary w-full normal-case rounded-md mt-3 mb-4'>
          <img src={ google} alt="google logo" className='h-6' /> &nbsp; Continue with Google</button>
  )
}

export default GoogleLogin