import React from 'react'
import { MdLock, MdEmail, MdPhotoCamera } from 'react-icons/md'
import { HiUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import GoogleLogin from './GoogleLogin'

const Register = () => {
  return (
    <section className='lg:max-w-[80%] mx-auto px-5 flex justify-center'>
      <div className='bg-white rounded-lg my-10 p-6 border-t-4 border-secondary'>
        <h2 className='text-2xl font-bold mb-5'>Open a New Account</h2>
        <form>
          <span className='flex items-center mb-2'><HiUser className='text-2xl mr-2' />
            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          <span className='flex items-center mb-2'><MdEmail className='text-2xl mr-2' />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          <span className='flex items-center mb-2'><MdPhotoCamera className='text-2xl mr-2' />
            <input type="file" className="my-3" />
          </span>
          <span className='flex items-center mb-2'><MdLock className='text-2xl mr-2' />
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          <span className='flex items-center mb-2'><MdLock className='text-2xl mr-2' />
            <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          <input type="submit" value="Sign Up" className="btn btn-success w-full rounded-md mt-4 mb-3" />
        </form>
        <div className="divider">OR</div>
        <GoogleLogin />
        <p className='font-bold'>Already have an Account? <Link to='/login' className='text-primary'>Login Here</Link></p>
      </div>
    </section>
  )
}

export default Register