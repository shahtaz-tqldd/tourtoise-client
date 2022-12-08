import React from 'react'
import { MdLock, MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import GoogleLogin from './GoogleLogin'

const Login = () => {
  return (
    <section className='lg:max-w-[80%] mx-auto px-5 flex justify-center'>
      <div className='bg-white rounded-lg mt-20 p-6 border-t-4 border-success'>
        <h2 className='text-2xl font-bold mb-5 w-[320px]'>Login</h2>

        <form>
          <span className='flex items-center mb-2'><MdEmail className='text-2xl mr-2' />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          <span className='flex items-center mb-3'><MdLock className='text-2xl mr-2' />
            <input type="password" placeholder="Password" className="input input-bordered w-full rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          <Link to='/forgot-password' className='text-sm'>Forgot Password?</Link>
          <input type="submit" value="Login" className="btn btn-success w-full rounded-md mt-4 mb-3" />
        </form>
        
        <div className="divider">OR</div>
        <GoogleLogin />
        <p className='font-bold'>Don't have any Account? <Link to='/sign-up' className='text-primary'>Sign Up</Link></p>
      </div>
    </section>
  )
}

export default Login